import { Play } from "phosphor-react";
import { HomeContainer, CountdownContainer, FormContainer, Separator } from "./styles";


export function Home() {
    return (
        <HomeContainer>
            <form>
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <input type="text" id="task" />

                    <label htmlFor="minutesAmount">durante</label>
                    <input type="number" id="minutesAmount" />

                    <span>minutes.</span>
                </FormContainer>
                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <button type="submit">
                    <Play />
                    Começar
                </button>
            </form>
        </HomeContainer>
    )
}