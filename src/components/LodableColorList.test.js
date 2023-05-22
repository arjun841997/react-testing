import {screen, render} from "@testing-library/react"
import LoadableColorList from "./LodableColorList"

test('using findby all for fake api call data check',async() => {
    render(<LoadableColorList />)
    const el = await screen.findAllByRole('listitem')
    expect(el).toHaveLength(3)
})
