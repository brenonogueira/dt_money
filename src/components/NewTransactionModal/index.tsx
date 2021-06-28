import Modal from 'react-modal'
import { Container } from './styles'
import closeImg from '../../assets/fechar.png'

interface NewTransactionModalProps { //props que ele vai receber de App.tsx
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) { //pegar as props atraves de desestruturação
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

            <Container>
                <h2>Cadastrar Transação</h2>

                <input
                    placeholder="Título"
                />

                <input
                    type="number"
                    placeholder="Valor"
                />

                <input
                    placeholder="Categoria"
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>

    )
}