import React from 'react'
import {SEO} from '../components';
import {Button, Purchase} from '../styles/components';
import {Link} from 'gatsby';

export default function cancelacion() {
    return (
        <div>
            <SEO/>
            <Purchase>
                <h2>Compra Cancelada!</h2>
                <p></p>
                <p>¡Te esperamos de nuevo, no pares de aprender!</p>
                <span role="img" aria-label="emoji"> ❤️ </span>
                <Link to='/'>
                    <Button>Volver al Catálogo</Button>
                </Link>
            </Purchase>
        </div>
    )
}
