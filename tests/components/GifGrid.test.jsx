import { render } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"

describe('Tests in <GifGrid/>', () => { 

    const category = 'cheese'

    test('match with the snapshot', () => {
        const { container } = render( <GifGrid category={ category } /> )
        expect( container ).toMatchSnapshot()
    })
})