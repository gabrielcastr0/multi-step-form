import * as Styled from './styled';
import Theme from '../../components/Theme';
import { useNavigate } from 'react-router-dom';
import { useForm, FormActions} from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';

const FormStep1 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(()=> {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    })
  }, [])

  const handleNextStep = () => {
    if(state.name !== ''){
      return navigate('/step2');
    }

    alert("Preencha seus dados!");
  }

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: event.target.value,
    });
  }

  return(
    <Theme>
      <Styled.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo</p>

        <hr/>

        <label htmlFor="">
          Seu nome completo
          <input 
            type="text" 
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </Styled.Container>
    </Theme>
  )
}

export default FormStep1;