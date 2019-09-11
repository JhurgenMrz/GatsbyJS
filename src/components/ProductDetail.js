import React, {useState,useContext} from 'react'
import priceFormat from '../utils/priceFormat'
import {CartContext} from '../context'
import {
    Tag,
    SizeButton,
    QtyButton,
    QtySelect,
    SizeSelect,
    Button,
    StyledProductDetail
} from '../styles/components'
import {SEO,Stars} from './'

export default function ProductDetail({price, id, product:{name, metadata}}) {
    
    const formatePrice = priceFormat(price)
    const [size, setSize] = useState(2)
    const [qty, setQty] = useState(1)
    const {addToCart} = useContext(CartContext)

    const handleSubmit = ()=>{
        addToCart({price, sku: id, name, metadata, quantity: qty})
    }

    return (
        <StyledProductDetail>
            <SEO title={name}/>
            <img src={metadata.img} alt={name} />
            <div>
                <Tag>Popular</Tag>
                <h2>{name}</h2>
                <b>USD {formatePrice}</b>
                {metadata.wear && (
                    <SizeSelect selected={size}>
                        <SizeButton onClick={()=> setSize(1)}>XS</SizeButton>
                        <SizeButton onClick={()=> setSize(2)}>S</SizeButton>
                        <SizeButton onClick={()=> setSize(3)}>M</SizeButton>
                        <SizeButton onClick={()=> setSize(4)}>L</SizeButton>
                    </SizeSelect>
                )}
                <Stars/>
                {metadata.wear && <h3>Color: Azul</h3> }
                <small>{metadata.description}</small>
                <p>Cantidad:</p>
                <QtySelect>
                    <QtyButton onClick={()=> (qty > 1 ? setQty(qty-1) : null)}> - </QtyButton>
                    <input type='text' disabled value={qty} />
                    <QtyButton onClick={()=> setQty(qty+1)}> + </QtyButton>
                </QtySelect>

                <Button onClick={handleSubmit}>Agregar al Carrito</Button>
            </div>
        </StyledProductDetail>
    )
}
