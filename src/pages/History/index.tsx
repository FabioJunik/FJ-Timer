import { HistoryContainer, HistoryList } from "./styles"



export function History() {
    return (
        <HistoryContainer>
            <h1>Meu histórico</h1>
            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Início</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tarefa Body</td>
                            <td>28 minutos</td>
                            <td>a 2 dias</td>
                            <td>Em andamento</td>
                        </tr>
                        <tr>
                            <td>Tarefa Body</td>
                            <td>28 minutos</td>
                            <td>a 2 dias</td>
                            <td>Em andamento</td>
                        </tr>
                        <tr>
                            <td>Tarefa Body</td>
                            <td>28 minutos</td>
                            <td>a 2 dias</td>
                            <td>Em andamento</td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
}