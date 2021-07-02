import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

//Interface p/ informar ao nosso state qual é o formato da Transaction
interface Transaction {
  id: string,
  title: string,
  type: string,
  amount: number,
  category: string,
  createdAt: string
}

//interface para informar que TransactionProvider receberá dentro dele componentes filhos de qualquer tipo
interface TransactionsProviderProps {
  children: ReactNode; //tipando a prop com o ReactNode que aceita qualquer coisa que pode estar dentro do JSX
}

//interface para informar quais conteudos tem dentro do contexto
interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

//tipando/selecionando da interface Transaction /campos do input que serão enviados via POST/ e omitindo 'id e createdAt'
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;


//criando context
export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData  //indicando que um objeto será retornado/enviado
);

//Provider 
export function TransactionsProvider({ children }: TransactionsProviderProps) {

  //estado para armazenar vetor de transactions
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  //get dados da tabela transactions
  useEffect(() => {
    api.get('transaction')
      .then((response) => {
        setTransactions(response.data.transactions);
      })
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transaction', {
      ...transactionInput,
      createdAt: new Date()
    })
    const { transaction } = response.data;

    /*utilizando conceito de imutabilidade 
      preenchendo todo o vetor com os dados já existenste e adicionando a nova transação no final 
    */
    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}