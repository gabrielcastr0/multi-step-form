import * as Styled from './styled';
import Theme from '../../components/Theme';
import { useNavigate } from 'react-router-dom';
import { useForm, FormActions} from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FormStep3 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(()=> {
    if(state.name === ''){
      navigate("/");
    }

    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3,
    })
  }, [])

  const handleNextStep = () => {
    if(state.email !== '' && state.github !== ''){
      return console.log(state);
    }

    alert("Preencha os dados!");
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: event.target.value,
    });
  }

  const handleGithubChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: event.target.value,
    });
  }

  return(
    <Theme>
      <Styled.Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha as informações abaixo para conseguirmos entrar em contato.</p>

        <hr/>

        <Styled.FieldsArea>
          <Styled.Label htmlFor="">
            Qual seu e-mail?
            <Styled.Input 
              type="email"
              value={state.email}
              onChange={handleEmailChange}
            />
          </Styled.Label>

          <Styled.Label  htmlFor="">
            Qual seu github?
            <Styled.Input 
              type="url"
              value={state.github}
              onChange={handleGithubChange}
            />
          </Styled.Label>
        </Styled.FieldsArea>

        <Link to="/step2" className="backButton">Voltar</Link>
        <button onClick={handleNextStep}>Revisar dados</button>
      </Styled.Container>
    </Theme>
  )
}

export default FormStep3;