import * as Styled from './styled';
import Theme from '../../components/Theme';
import { useNavigate } from 'react-router-dom';
import { useForm, FormActions, State} from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FormStep4 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(()=> {
    console.log(state);

    if(state.name === '' || state.level === null || state.email === '' || state.github === ''){
      navigate("/");
    }

    dispatch({
      type: FormActions.setCurrentStep,
      payload: 4,
    })
  }, [])

  const handleNextStep = () => {
    if(state.email !== '' && state.github !== ''){
      return alert("Cadastro finalizado com sucesso!");
    }

    alert("Preencha os dados!");
  }

  const getLevelText = (state: State) => {
    return state.level == 0 ? 'Iniciante' : 'Programador com mais de 2 anos';
  };

  return(
    <Theme>
      <Styled.Container>
        <p>Passo 4/4</p>
        <h1>Revise seus dados</h1>
        <p>Seus dados estão corretos? Caso não estiver, basta voltar nos passos anteriores e alterar.</p>

        <hr/>

        <Styled.FieldsArea>
          <Styled.Label htmlFor="">
            Nome: {state.name}
          </Styled.Label>

          <Styled.Label htmlFor="">
            Nível: {getLevelText(state)}
          </Styled.Label>

          <Styled.Label htmlFor="">
            E-mail: {state.email}
          </Styled.Label>

          <Styled.Label htmlFor="">
            Github: {state.github}
          </Styled.Label>
        </Styled.FieldsArea>

        <Styled.WrapperButtons>
          <Link to="/step2" className="backButton">Voltar</Link>
          <button onClick={handleNextStep}>Finalizar cadastro</button>
        </Styled.WrapperButtons>
      </Styled.Container>
    </Theme>
  )
}

export default FormStep4;