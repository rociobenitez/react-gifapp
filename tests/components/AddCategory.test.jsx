import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('Tests in <AddCategory />', () => {

    test('should change the value of the textbox', () => {
        render( <AddCategory onNewCategory={ () => {} } />)

        const input = screen.getByRole('textbox')

        fireEvent.input( input, { target: { value: 'cheese' }})
        expect( input.value ).toBe('cheese')
    })

    test('should call onNewCategory if input has a value', () => {
        const inputValue    = 'cheese'
        const onNewCategory = jest.fn()

        render( <AddCategory onNewCategory = { onNewCategory } />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input( input, { target: { value: inputValue }})
        fireEvent.submit( form )

        expect( input.value ).toBe('')
        expect( onNewCategory ).toHaveBeenCalled()
        expect( onNewCategory ).toHaveBeenCalledTimes(1)
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue )
    })

    test('should not call onNewCategory if input is empty', () => {
        const inputValue    = ''
        const onNewCategory = jest.fn()

        render( <AddCategory onNewCategory = { onNewCategory } />)

        const form = screen.getByRole('form')
        fireEvent.submit( form )

        expect( onNewCategory ).not.toHaveBeenCalled()
        expect( onNewCategory ).toHaveBeenCalledTimes(0)
    })
})