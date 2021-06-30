import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import closeImg from '../../assets/fechar.png'
import incomeImg from '../../assets/entrada.png'
import outcomeImg from '../../assets/saida.png'
import { FormEvent, useState } from 'react'
import { api } from '../../services/api'

//props que ele vai receber de App.tsx
interface NewTransactionModalProps { 
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) { //pegar as props atraves de desestruturação
  
  const[title, setTitle] = useState('')
  const[value, setValue] = useState(0)
  const[category, setCategory] = useState('')
  
  const [type, setType] = useState('')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
   
    const data ={
      title, 
      value,
      type,
      category,
    }

    api.post('/transaction', data)

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
          value={value}
          onChange={event => setValue(Number(event.target.value))}
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