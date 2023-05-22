import { render, screen } from '@testing-library/react';
import ColorList from './ColorList';

test('getBy, queryBy, findBy finding 0 elements', async() => {
    render(<ColorList />)

    expect(() => screen.getByRole('textbox')).toThrow()
    expect(screen.queryByRole('textbox')).toEqual(null);

    let errorThrown = false;
    try{
        await screen.findByRole('textbox')
    }catch(err){
        errorThrown = true
    }

    expect(errorThrown).toEqual(true)
})

test('getBy, queryBy, findBy when they find 1 element', async () => {
    render(<ColorList />)
    expect(screen.getByRole('list')).toBeInTheDocument()
    // expect(screen.getByAltText('list')).toBeInTheDocument()
    expect(await screen.findByRole('list')).toBeInTheDocument()
})

test('getAllBy, queryAllBy, findAllBy', async()=> {
    render(<ColorList />)

    expect(screen.getAllByRole('listitem')).toHaveLength(3)
    expect(screen.queryAllByRole('listitem')).toHaveLength(3)
    expect(await screen.findAllByRole('listitem')).toHaveLength(3)
})

test('list item is in the document', () => {
    render(<ColorList />)
    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
})