import styled from "styled-components"
import img1 from './assets/Vector 1.png'
import pizza from './assets/Rectangle 400.png'
import foodTruck from './assets/Screenshot_669 1.png'
import AboutImage from './assets/pharmasict-serving-customer-drug-store 1.png'
import Button from "./components/Button"
import { Card } from "./components/Card"
import CardData from "./utils/CardData"
import { useRef, useState } from "react"
function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClick = (event) => {
    switch (event) {
      case "inc":
        if (currentIndex < CardData.length - 1) {
          setCurrentIndex(prev => prev + 1)
        } else {
          setCurrentIndex(prev => prev)
        }
        break;
      case "dec":
        if (currentIndex > 0) {
          setCurrentIndex(prev => prev - 1)
        } else {
          setCurrentIndex(prev => prev)
        }
        break;
      default:
        break;
    }
  }
  return (
    <Wrapper>
      <Main>
        <div className="info">
          <img className="logo" src={foodTruck} />
          <h1>
            Discover the <span>Best</span> Food and Drinks
          </h1>
          <p className="sub_heading">Naturally made Healthcare Products for the better care & support of your body.</p>
          <Button text="Explore Now!"
            display="flex"
            flex_direction="row"
            align_items="flex-start"
            padding="14px 34px"
            gap="7px"
            width="190px"
            height="63px"
            background="#E23744"
            border_radius="34px"
            font_family="'Open Sans'"
            font_style="normal"
            font_weight="700"
            font_size="18px"
            line_height="36px"
            color="#FFFFFF"
            margin_top="41px"
            border="none"
          />
        </div>
        <div className="image">
          <img className="img-red" src={img1} />
          <img className="pizza" src={pizza} />
          <Button text="Get in Touch"
            position="absolute"
            font_family="'Source Sans Pro', sans-serif"
            font_style="normal"
            display="flex"
            flex_direction="row"
            justify_content="center"
            align_items="center"
            padding="3px 26px"
            border="1px solid #FFFFFF"
            border_radius=" 21px"
            gap="10px"
            font_weight="600"
            font_size="16px"
            line_height="36px"
            letter_spacing="0.03em"
            color="#FFFFFF"
            z_index="2 "
            background="transparent "
            top="35px "
            right="52.5px "
            media_top="20px"
            media_right="20px"
            media_font_size="11px"
            media_padding="3px 18px"
          />
        </div>
      </Main>
      <AboutSection>
        <section className="image">
          <img src={AboutImage} alt="" />
        </section>
        <section className="about">
          <h2>About Us</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
          <Button text="Read More"
            display="flex"
            flex_direction="row"
            justify_content="center"
            align_items="flex-start"
            padding="3px 26px"
            gap="10px"
            width="132px"
            height="42px"
            background="#E23744"
            border_radius="21px"
            font_family="'Source Sans Pro'"
            font_style="normal"
            font_weight="600"
            font_size="16px"
            line_height="36px"
            color="#FFFFFF"
            margin_top="24px"
            letter_spacing="0.03em"
            border="none"
          />
        </section>
      </AboutSection>
      <ArticlesSection>
        <h2>Latest Articles</h2>
        <div className="cards">
          {
            CardData[currentIndex].map((data, id) => {
              return <Card key={id} image={data.image} title={data.title} info={data.info} />
            })
          }
        </div>
        <div className="slider_btns">
          <button onClick={() => handleClick("dec")} className="btn_left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={10}
              height={16}
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.442 15.852c.553-.313.733-1.11.366-1.618-.102-.142-1.682-1.603-3.512-3.246L2.97 7.999 6.297 5.01c1.83-1.644 3.41-3.105 3.512-3.247.12-.166.186-.406.186-.677 0-.372-.04-.455-.365-.752C9.296.029 9.22 0 8.759 0h-.505L4.127 3.764 0 7.528v.431c0 .255.063.518.154.644.224.308 7.369 6.849 7.805 7.145.429.29 1.074.336 1.483.104Z"
                fill="#424961"
              />
            </svg>
          </button>
          <div>
            {currentIndex + 1}/{CardData.length}
          </div>
          <button onClick={() => handleClick("inc")} className="btn_right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={10}
              height={16}
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M.558.148C.005.46-.175 1.258.192 1.766c.102.142 1.682 1.603 3.512 3.246L7.03 8.001 3.703 10.99C1.873 12.634.293 14.095.19 14.237c-.12.166-.186.406-.186.677 0 .372.04.455.365.752.334.305.41.334.871.334h.505l4.127-3.764L10 8.472v-.431c0-.255-.063-.518-.154-.644C9.622 7.09 2.477.548 2.04.252 1.612-.038.967-.084.558.148Z"
                fill="#424961"
              />
            </svg>
          </button>
        </div>
      </ArticlesSection>
      <Footer>
        <img className="fotter_logo" src={foodTruck} />
        <div className="contact_us">
          <h3>Contact Us</h3>
          <p>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
          <p className="mail">example2020@gmail.com</p>
          <p className="number">(904) 443-0343</p>
        </div>
        <div className="more">
          <h3>More</h3>
          <p>About Us</p>
          <p>Products</p>
          <p>Career</p>
          <p>Contact Us</p>
        </div>
        <div className="socials">
          <h3>Social Links</h3>
          <div className="social_icons">
            <span>  <svg
              xmlns="http://www.w3.org/2000/svg"
              width={21}
              height={21}
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5 1.884a32.131 32.131 0 0 1 4.191.117 5.4 5.4 0 0 1 1.98.35 4.09 4.09 0 0 1 1.978 1.979A5.4 5.4 0 0 1 19 6.309c0 1.047.117 1.397.117 4.19a32.13 32.13 0 0 1-.117 4.192 5.4 5.4 0 0 1-.35 1.98 4.09 4.09 0 0 1-1.979 1.978 5.4 5.4 0 0 1-1.979.35c-1.048 0-1.397.116-4.191.116A32.132 32.132 0 0 1 6.309 19a5.4 5.4 0 0 1-1.98-.35 4.09 4.09 0 0 1-1.978-1.979A5.4 5.4 0 0 1 2 14.691c0-1.048-.117-1.398-.117-4.191a32.129 32.129 0 0 1 .117-4.191 5.4 5.4 0 0 1 .35-1.98 4.18 4.18 0 0 1 .814-1.164 1.965 1.965 0 0 1 1.165-.814A5.4 5.4 0 0 1 6.309 2a32.13 32.13 0 0 1 4.191-.117Zm0-1.862a34.4 34.4 0 0 0-4.308.116 7.188 7.188 0 0 0-2.56.465c-.707.23-1.346.63-1.863 1.165A4.558 4.558 0 0 0 .603 3.63a5.304 5.304 0 0 0-.465 2.561A34.398 34.398 0 0 0 .022 10.5a34.4 34.4 0 0 0 .116 4.308 7.188 7.188 0 0 0 .467 2.561c.23.707.63 1.346 1.164 1.863a4.558 4.558 0 0 0 1.863 1.164 7.19 7.19 0 0 0 2.561.467 34.41 34.41 0 0 0 4.307.115c1.437.051 2.876.012 4.308-.117a7.19 7.19 0 0 0 2.562-.466 4.884 4.884 0 0 0 3.027-3.027c.31-.818.468-1.686.466-2.562-.001-1.163.115-1.512.115-4.306a34.392 34.392 0 0 0-.116-4.308 7.189 7.189 0 0 0-.467-2.562 4.558 4.558 0 0 0-1.164-1.862A4.558 4.558 0 0 0 17.368.603a7.188 7.188 0 0 0-2.56-.465A34.4 34.4 0 0 0 10.5.022Zm0 5.122A5.27 5.27 0 0 0 5.144 10.5 5.355 5.355 0 1 0 10.5 5.144Zm0 8.849A3.43 3.43 0 0 1 7.007 10.5 3.43 3.43 0 0 1 10.5 7.007a3.43 3.43 0 0 1 3.493 3.493 3.43 3.43 0 0 1-3.493 3.493ZM16.089 3.63a1.281 1.281 0 1 0 1.28 1.281 1.291 1.291 0 0 0-1.28-1.28Z"
                fill="#0E2368"
              />
            </svg></span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={18}
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.3 17.886a12.3 12.3 0 0 0 4.747-.907 12.254 12.254 0 0 0 4.025-2.663 12.185 12.185 0 0 0 2.676-4.006c.616-1.499.926-3.105.91-4.724v-.585a9.541 9.541 0 0 0 2.12-2.226c-.79.342-1.621.578-2.473.703a4.56 4.56 0 0 0 1.883-2.343c-.85.471-1.76.826-2.706 1.054A4.204 4.204 0 0 0 15.303.784a4.434 4.434 0 0 0-3.06 1.289 4.39 4.39 0 0 0-1.296 3.045c-.027.317.014.637.118.937a12.216 12.216 0 0 1-4.97-1.322A12.157 12.157 0 0 1 2.12 1.487a4.463 4.463 0 0 0-.588 2.225 4.636 4.636 0 0 0 1.883 3.632 3.987 3.987 0 0 1-2-.585 4.269 4.269 0 0 0 .997 2.746 4.307 4.307 0 0 0 2.534 1.47 3.648 3.648 0 0 1-1.177.118c-.28.019-.56-.021-.824-.117a4.438 4.438 0 0 0 1.575 2.171c.738.545 1.626.85 2.544.874a8.914 8.914 0 0 1-5.414 1.874c-.357.019-.715-.02-1.06-.117a11.146 11.146 0 0 0 6.71 2.108Z"
                  fill="#0E2368"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={21}
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.366 21v-9.562h3.267l.467-3.731H7.366V5.374c0-1.05.35-1.865 1.866-1.865h1.984V.127C10.75.127 9.583.01 8.299.01a4.505 4.505 0 0 0-4.783 4.897v2.8H.25v3.73h3.266V21h3.85Z"
                  fill="#0E2368"
                />
              </svg>
            </span>
          </div>
          <p className="copy">&copy; 2022 Food Truck Example</p>
        </div>
      </Footer>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background-color:#FFFFFF ;
`
const Main = styled.main`
  display:flex;
  min-height:804px ;
  position:relative ;
  .info{
    padding:33px 0 0 100px ;
  }
  .logo{
    width: 107px;
    height: 83px;
    top: 33px;
  }
  h1{
    margin-top: 111px;
    width: 345px;
    height: 207px;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 700;
    font-size: 62px;
    line-height: 69px;
    color: #0E2368;
    span{
      color:#E23744 ;
    }
  }
  .sub_heading{
    width: 345px;
    height: 55px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16.4447px;
    line-height: 27px;
    color: #444957;
  }
  .image{
    position: absolute;
    right:0 ;
  }
  .img-red{
    position:absolute ;
    z-index:1 ;
    right: 0;
  }
  @media (max-width: 1220px){
    .image{
      img{
        width:40em ;
      }
    }
  }
  @media (max-width: 1110px){
    .sub_heading{
      font-size:14px ;
      line-height:23px ;
      height: 35px;
    }
    h1{
      margin-top: 111px;
      width: 345px;
      height: 157px;
      font-size:50px ;
      line-height:56px ;
    }
    .image{
      img{
        width:35em ;
      }
    }
  }
  @media (max-width: 1000px){
    .sub_heading{
      font-size:14px ;
      line-height:23px ;
      width: 300px;
      height: 35px;
    }
    h1{
      margin-top: 111px;
      width: 300px;
      height: 150px;
      font-size:50px ;
      line-height:56px ;
    }
    .image{
      img{
        width:33rem ;
      }
    }
  }
  @media (max-width: 920px){
    .info{
      padding:33px 0 0 40px;
    }
    .image{
      img{
        width:32rem ;
      }
    }
  }
  @media (max-width: 850px){
    flex-direction:column-reverse ;
    .info{
      padding-left:0 ;
    }
    h1{
      left:6% ;
    }
    .sub_heading{
      display:flex ;
      justify-content:center ;
      align-items:center ;
    }
    .image{
      position: relative;
      img{
        width:100% ;
      }
      .img-red{
        left:0;
      }
    }
    .info{
      display:flex ;
      flex-direction:column ;
      justify-content:center ;
      align-items:center ;
      padding-bottom:68px ;
    }
    .logo{
      display:none ;
    }
  }
  @media (max-width:  400px){
    h1{
      font-style: normal;
      font-weight: 700;
      font-size: 38px;
    }
  }
`
const AboutSection = styled.div`
  display:flex ;
  padding:185px 205px 0 205px;
  align-items:center ;
  justify-content:space-evenly ;
  height:470px ;
  background-color:#F0F1F7 ;
  .about{
    margin-left: 12em;
    h2{
    height: 26px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 27px;
    color: #0E2368;
    }
    p{
      width: 447px;
      height: 138px;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 27px;
      color: #444957;
    }
  }
  @media  (max-width: 1045px){
      .about{
          margin-left:8rem ;
      }
  } 
  @media  (max-width: 990px){
      .about{
          margin-left:5rem ;
      }
  } 
  @media (max-width: 930px){
      padding:0 ;
      display:flex ;
      justify-content:center ;
      align-items:center ;
      .image{
        display:none ;
      }
      .about{
        position:relative ;
        display:flex ;
        flex-direction:column ;
        justify-content:center ;
        align-items:center ;
        margin-left:0 ;
        max-width:30rem ;
        h2{
          display:flex ;
          justify-content:center ;
          align-items:center ;
          font-size:26px ;
          line-height:35px ;
        }
        p{
          display:flex ;
          align-items:center ;
          justify-content:center ;
          text-align:center ;
          font-weight:400 ;
          font-size:11px ;
          line-height: 21px;
          width:inherit ;
          padding:0.4rem ;
        }
      }
  } 
`
const ArticlesSection = styled.div`
  padding:158px 0 0 108px ;
  h2{
    width: 461px;
    height: 84px;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 56px;
    line-height: 42px;
    letter-spacing: 0.04em;
    color: #0E2368;
  }
  .cards{
    display:grid ;
    grid-template-columns:repeat(auto-fit,minmax(381px,1fr)) ;
    row-gap:1rem;
    justify-items:center ;
  }
  .slider_btns{
    margin-top:64px ;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    button{
      display:flex ;
      align-items:center ;
      justify-content:center ;
      width: 28px;
      height: 29px;
      border: 1px solid #424961;
      border-radius: 5px;
      outline:none ;
      cursor:pointer ;
    }
    div{
      margin:0 14px ;
      width: 30px;
      height: 28px;
      font-family: 'Source Sans Pro';
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 27px;
      color: #424961;
    }
  }
  @media (max-width:1280px){
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    padding-left:0 ;
    h2{
      display:flex ;
      align-items:center ;
      justify-content:center ;
    }
  }
  @media (max-width:482px){
    h2{
      width: 216px;
      font-size: 28px;
      line-height: 54px;
    }
  }
  @media (max-width:400px){
    .cards{
      grid-template-columns:1fr ;
    }
  }
`
const Footer = styled.footer`
  margin-top:65px ;
  padding-top:84px ;
  padding-bottom:92px ;
  background-color:#F8F8F8 ;
  grid-template-columns:repeat(auto-fit,minmax(100px,1fr)) ;
  display:grid ;
  justify-content:center ;
  justify-items:center ;
  position:relative ;
  left:0 ;
  .fotter_logo{
    width: 161px;
    height: 125px;
    position:relative ;
    top:20% ;
  }
  .contact_us{
    max-width: 232px;
    display:flex ;
    flex-direction:column ;
    margin-right:5px ;
  }
  h3{
    display:flex ;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 18.8433px;
    line-height: 27px;
    letter-spacing: 0.03em;
    color: #0E2368;
  }
  p{
    display:flex ;
    font-family: 'Source Sans Pro';
    font-style: normal;
    word-wrap:break-word;
    font-weight: 400;
    font-size: 14.6559px;
    line-height: 23px;
    color: #646874;
    padding-right:5px ;
  }
  .socials{
    display:flex ;
    flex-direction:column ;
    span{
      margin-right: 36px;
    }
    .copy{
      margin-top:100px ;
    }
  }

  @media only screen and (max-width: 800px){
    display:flex ;
    flex-direction:column ;
    .fotter_logo{
      align-self:center
    }
    .contact_us{
      padding-left:42px ;
      max-width:100% ;
    }
    p{
      margin:0;
      margin-bottom:10px ;
    }
    .more{
      padding-left:42px ;
      margin-top:29px ;
    }
    .socials{
      h3{
        display:none ;
      }
      flex-direction:column-reverse ;
      align-items:center ;
      .social_icons{
        display:flex ;
        justify-content:space-between ;
        width:30% ;
        align-items:center ;
        span{
          margin: 0;
        }
      }
    }
  }
`
export default App
