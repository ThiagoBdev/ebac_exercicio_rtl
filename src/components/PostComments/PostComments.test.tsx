import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {

    test("Deve renderizar o Botão corretamente", () => {
        render (<PostComment />)
        expect(screen.getByTestId("btn-comentar")).toBeInTheDocument()
    })

    test("teste para inserção de dois comentarios", () => {
        render (<PostComment />)
        fireEvent.change(screen.getByTestId("campo-comentario"), {
            target: {
                value: "Incrivel"
            }
        })

        fireEvent.click(screen.getByTestId("btn-comentar"),)

        fireEvent.change(screen.getByTestId("campo-comentario"), {
            target: {
                value: "Gostaria de comprar"
            }
        })

        fireEvent.click(screen.getByTestId("btn-comentar"),)

        expect(screen.getByText("Incrivel")).toBeInTheDocument()
        expect(screen.getByText("Gostaria de comprar")).toBeInTheDocument()
    })
});