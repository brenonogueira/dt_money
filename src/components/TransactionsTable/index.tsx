import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {

    useEffect(() => {
        api.get('transaction')
            .then(response => console.log(response.data))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de WebSite</td>
                        <td className="deposit">R$1000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Passeio com a Maria</td>
                        <td className="withdraw">-R$500</td>
                        <td>Pessoal</td>
                        <td>20/06/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}