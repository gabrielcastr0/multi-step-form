import { ReactNode } from 'react';
import * as Styled from './styled';
import Header from '../Header';
import SidebarItem from '../SidebarItem';
import { useForm } from '../../contexts/FormContext';

type Props = {
  children: ReactNode;
}

const Theme = ({children}: Props) => {
  const { state } = useForm();

  return(
    <Styled.Container>
      <Styled.Area>
        <Header />

        <Styled.Steps>
          <Styled.Sidebar>
            <SidebarItem 
              title="Pessoal"
              description="Se identifique"
              icon="profile"
              path="/"
              active={state.currentStep === 1}
            />

            <SidebarItem 
              title="Profissional"
              description="Seu nível"
              icon="book"
              path="/step2"
              active={state.currentStep === 2}
            />

            <SidebarItem 
              title="Contatos"
              description="Como te achar"
              icon="mail"
              path="/step3"
              active={state.currentStep === 3}
            />


            <SidebarItem 
              title="Revisar"
              description="Revise seus dados"
              icon="review"
              path="/step4"
              active={state.currentStep === 4}
            />
          </Styled.Sidebar>

          <Styled.Page>
            {children}
          </Styled.Page>
        </Styled.Steps>
      </Styled.Area>
    </Styled.Container>
  )
}
export default Theme;