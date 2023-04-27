import * as Styled from './styled';
import Theme from '../../components/Theme';
import { useNavigate, Link } from 'react-router-dom';
import { useForm, FormActions} from '../../contexts/FormContext';
import {  useEffect } from 'react';
import SelectOption from '../../components/SelectOption';

const FormStep2 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(()=> {
    if(state.name === ''){
      navigate("/");
    }

    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2,
    })
  }, [])

  const handleNextStep = () => {
    if(state.name !== ''){
      return navigate('/step3');
    }

    alert("Preencha seus dados!");
  }

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    })
  }

  return(
    <Theme>
      <Styled.Container>
        <p>Passo 2/3</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>

        <hr/>
        
        <SelectOption 
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOption 
          title="Sou programador"
          description="Já programo há 2 anos ou mais"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <Link to="/" className="backButton">Voltar</Link>
        <button onClick={handleNextStep}>Próximo</button>
      </Styled.Container>
    </Theme>
  )
}

export default FormStep2;