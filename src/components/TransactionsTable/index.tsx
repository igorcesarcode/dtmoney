import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransactionsTable() {
  
  interface Transaction{
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string, 
    createAt: string,
  }

  const [transitions, setTransitions] = useState<Transaction[]>([]);


  useEffect(() => {
    api.get('/transition')
      .then(response => setTransitions(response.data.transitions))
  }, [])


  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transitions.map(transition =>  (
              <tr key={transition.id}>
              <td>{transition.title}</td>
              <td className={transition.type}>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(transition.amount)}
              </td>
              <td>{transition.category}</td>
              <td>
              {new Intl.DateTimeFormat('pt-BR').format(
                
                new Date (transition.createAt))
              }
              </td>
            </tr>
            )
          )
          }
        </tbody>


      </table>
    </Container>
  )
}