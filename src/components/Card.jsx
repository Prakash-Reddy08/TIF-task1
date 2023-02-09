import styled from "styled-components"
import Button from "./Button"

export const Card = ({ image, title, info }) => {
    return (
        <Wrapper>
            <img src={image} />
            <h3>{title}</h3>
            <p>{info}</p>
            <Button
                text="Read More"
                display=" flex"
                flex_direction=" row"
                justify_content=" center"
                align_items=" center"
                padding="3px 26px"
                gap=" 10px"
                border="1px solid #424961"
                border_radius="21px"
                width="79px"
                height="36px"
                font_family="'Source Sans Pro'"
                font_style="normal"
                font_weight="600"
                font_size="16.4447px"
                line_height="36px"
                letter_spacing="0.03em"
                color="#424961"
                margin_top="33px"
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    box-sizing: border-box;
    height: 554px;
    background: #FFFFFF;
    border: 1.37039px solid rgba(147, 162, 211, 0.38);
    border-radius: 20.937px;
    padding:27px ;
    img{
        width: 326px;
        height: 257px;
    }
    h3{
        width: 285px;
        height: 27px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 21px;
        line-height: 27px;
        color: #0E2368;
        margin-top:25px
    }
    p{
        width: 295px;
        height: 81px;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 27px;
        letter-spacing: -0.02em;
        color: #444957;
    }
`