import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps { //componente header recebe de App.tsx via props a função de abrir a modal no botão 
    onOpenNewTransactionModal: () => void;
}

export function Header(props: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} width="140" alt="dt money" />
                <button type="button" onClick={props.onOpenNewTransactionModal}>
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}