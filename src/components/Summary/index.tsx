import { useContext } from 'react';

import { Container } from "./styles";
import { TransactionsContext } from '../../TransactionsContext'

import incomeImg from '../../assets/entrada.png'
import outcomeImg from '../../assets/saida.png'
import totalImg from '../../assets/total.png'


export function Summary() {

  const { transactions } = useContext(TransactionsContext)
  // console.log(transactions)
  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }
    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} width="30" alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} width="25" alt="Saídas" />
        </header>
        <strong>-
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="hightlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} width="35" alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)}
        </strong>
      </div>

    </Container>
  )
}