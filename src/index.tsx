import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs'

createServer({
  //criando banco de dados dentro do mirage
  models: {
    transaction: Model, //nome da tabela imaginária do Mirage
  },

  seeds(server) { //fazendo seed na tabela
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de WebSite',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Compras do Mês no Mercado',
          type: 'withdraw',
          category: 'Mercado',
          amount: 1100,
          createdAt: new Date('2021-02-13 11:00:00')
        },
      ]
    })
  },

  routes() { //rotas da api
    this.namespace = 'api'; //localhost:3000/api/

    this.get('/transaction', () => {
      return this.schema.all('transaction')
    })

    this.post('/transaction', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })

  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

