import { ReactNode } from 'react';
import * as Styled from './styled';
import Header from '../Header';

type Props = {
  children: ReactNode;
}

const Theme = ({children}: Props) => {
  return(
    <Styled.Container>
      <Styled.Area>
        <Header />

        <Styled.Steps>
          <Styled.Sidebar>

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