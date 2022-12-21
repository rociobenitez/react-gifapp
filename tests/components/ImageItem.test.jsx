import { render, screen } from "@testing-library/react"
import { ImageItem } from "../../src/components"

describe('Tests in <ImageItem />', () => { 
    
    const id    = 1
    const title = 'cheese bar'
    const url   = 'https://gifapp.com/cheese-bar'

    test('match with the snapshot', () => {
        const { container } = render(<ImageItem id = { id } title = { title } url = { url } />)
        expect( container ).toMatchSnapshot()
    })

    test('should show the image with the url', () => {
        render(<ImageItem id = { id } title = { title } url = { url } />)
        const { src, alt } = screen.getByRole('img')
        expect( src ).toBe( url + '?w=164&h=164&fit=crop&auto=format' )
        expect( alt ).toBe( title )
    })
})