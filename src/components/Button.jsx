import React from 'react'
import styled from 'styled-components'
const Button = (props) => {
    return (
        <Btn {...props}>{props.text}</Btn>
    )
}
const Btn = styled.button`
    display:${(props) => props.display || "static"} ;
    position:${(props) => props.position || "relative"} ;     
    font-family:${(props) => props.font_family || "initial"} ;
    font-style:${(props) => props.font_style || "normal"} ;
    flex-direction:${(props) => props.flex_direction || "row"} ;
    justify-content:${(props) => props.justify_content || "initial"} ;
    align-items:${(props) => props.align_items || "initial"} ;
    padding:${(props) => props.padding || "initial"} ;
    border:${(props) => props.border || "initial"} ;
    border-radius:${(props) => props.border_radius || "initial"} ;
    gap:${(props) => props.gap || "initial"} ;
    font-weight:${(props) => props.font_weight || "initial"} ;
    font-size:${(props) => props.font_size || "initial"} ;
    line-height:${(props) => props.line_height || "initial"} ;
    letter-spacing:${(props) => props.letter_spacing || "initial"} ;
    color:${(props) => props.color || "initial"} ;
    z-index:${(props) => props.z_index || "initial"} ;
    background:${(props) => props.background || "initial"} ;
    top:${(props) => props.top || "initial"} ;
    right:${(props) => props.right || "initial"} ;
    cursor: pointer;
    margin-top: ${(props) => props.margin_top || "initial"} ;
`
export default Button