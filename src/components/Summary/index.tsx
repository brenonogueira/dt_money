import incomeImg from '../../assets/entrada.png'
import outcomeImg from '../../assets/saida.png'
import totalImg from '../../assets/total.png'

import { Container } from "./styles";

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} width="30" alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} width="25" alt="Saídas" />
                </header>
                <strong> - R$500,00</strong>
            </div>
            <div className="hightlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} width="35" alt="Total" />
                </header>
                <strong>R$500,00</strong>
            </div>
           
        </Container>
    )
}