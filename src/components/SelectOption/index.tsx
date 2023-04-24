import * as Styled from './styled';

type Props = {
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

const SelectOption = ({title, description, selected, onClick}: Props) => {
  return(
    <Styled.Container selected={selected} onClick={onClick}>
      <Styled.Info>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
      </Styled.Info>
    </Styled.Container>
  )
}

export default SelectOption;