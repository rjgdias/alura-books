import OpcoesHeader from '../../componentes/OpcoesHeader';
import IconesHeader from '../../componentes/IconesHeader';
import Logo from '../../componentes/Logo/logo';
import './estilo.css';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OpcoesHeader />
      <IconesHeader />
    </HeaderContainer>
  )
}
export default Header