import { FormEvent, useState, useContext } from 'react'

import Modal from 'react-modal'

import { Container, TransactionTypeContainer, RadioBox } from './styles'
import { TransactionsContext } from '../../TransactionsContext'
import { api } from '../../services/api'

import closeImg from '../../assets/fechar.png'
import incomeImg from '../../assets/entrada.png'
import outcomeImg from '../../assets/saida.png'

//props que ele vai receber de App.tsx
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) { //pegar as props atraves de desestruturação

  const { createTransaction } = useContext(TransactionsContext)

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('')

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

   await createTransaction({
      title, 
      amount, 
      category, 
      type
    })

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay" //estilização overlay
      className="react-modal-content" //estilização do conteudo da modal
    >

      <button
        type="button"
        className="react-modal-close"
        onClick={onRequestClose}
      >
        <img src={closeImg} width="20" alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => { setType('deposit') }}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImg} width="30" alt="Entrada" />
            <span>Entrada</span>
            {console.log(type)}
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { setType('withdraw') }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} width="30" alt="Saída" />
            <span>Saída</span>
            {console.log(type)}
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>

  )
}