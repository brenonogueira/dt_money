
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header';
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard';
import { useState } from 'react';

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h1>Cadastrar Transação</h1>
      </Modal>

      <GlobalStyle />
    </>

  );
}
