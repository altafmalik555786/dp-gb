import React from "react"
import { Col } from "reactstrap"
// @ts-ignore
import loginSignUpBg from "../../Assets/images/bg"
import LogoLoginSignup from '../../Assets/images/dpgb.png'
import { Link } from "react-router-dom"
import style from "./style.module.scss"
import { withTranslation } from "react-i18next"


const CarouselPage = (props) => {
  return (
    <React.Fragment>
      <Col className={style.CarouselContainer} xl={6}
        style={{
          backgroundImage: `url("${loginSignUpBg}")`,
          backgroundPosition: '50%',
          backgroundRepeat: "no-repeat",
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}>
        <div className={style.container}>
          <div className={style.logoStyle}>
            <Link to="/home">
              <img
                src={LogoLoginSignup}
                alt=""
                width="180px"
              />
            </Link>
          </div>
          <div className={props.className ? props.className : style.headingStyle}>
            <h1>Search now</h1>
            <h2>Find when</h2>
            <h2>Pay desired</h2>
          </div>
          <div className={style.paraStyle}>
            <p>digital b2b payments <br /> for the best trade credit experience</p>
          </div>
        </div>
      </Col>
    </React.Fragment>
  )
}
export default withTranslation()(CarouselPage)
