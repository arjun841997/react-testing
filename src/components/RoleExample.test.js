import { render, screen } from '@testing-library/react';
import RoleExample from './RoleExample';

test('different roles have different ARIA labels', () => {
    render(<RoleExample />)

    const roles = [
        'link',
        'button',
        'contentinfo',
        'heading',
        'banner',
        'img',
        'checkbox',
        'spinbutton',
        'radio',
        'textbox',
        'listitem',
        'list'
    ]

    for(let role of roles){
        expect(screen.getByRole(role)).toBeInTheDocument()
    }
})
