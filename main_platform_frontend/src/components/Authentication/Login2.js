import React, { useEffect, useState } from "react"
import { baseUrl } from "api/const"
import { useForm } from "react-hook-form"
import { FormInputText } from "components/Common/FormInputText"
import { observer } from "mobx-react"
import { useStore } from "stores/root-store"
import { IconButton } from "@mui/material"
import { withTranslation } from "react-i18next"
import { Link, withRouter, useNavigate } from "react-router-dom"
import { Col, Container, Form, Row, Input, Label, FormFeedback, Spinner, Alert } from "reactstrap"
import LoadingButton from '@mui/lab/LoadingButton'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import style from './style.module.scss'
import CarouselPage from "./CarouselPage"
import axios from "axios"

const defaultValues = {
  email: "",
  password: "",
}

const initialServerError = {
  email: [],
  password: [],
  serverError: ""
}

const Login2 = observer(props => {
  const navigate = useNavigate()
  document.title = "Login"
  const { control } = useForm()
  const [loginError, setLoginError] = useState("")
  const [formValues, setFormValues] = useState(defaultValues)
  const [errors, setErrors] = useState(initialServerError)
  const [InviteLoading, setInviteLoading] = useState(false)
  const [passwordType, setPasswordType] = useState("password")
  const [showPassword, setShowPassword] = useState(true)

  const { userStore: { loadUserInfo, isLoading } } = useStore(null)

  const onHandleSubmit = async (event) => {
    event.preventDefault()
    setInviteLoading(true)
    if (formValues.email && formValues.email != '' && formValues.password && formValues.password != '') {

      try {
        const API_URL = `${baseUrl}login/`
  

        const payload = {
          email: formValues?.email.toLowerCase(),
          username: formValues?.email.toLowerCase(),
          password: formValues?.password,

        }

        await axios.post(API_URL, payload).then(async (resp) => {
          if (resp) {
            const data = resp.data
            localStorage.setItem("token", data?.access)
            localStorage.setItem("refreshToken", data?.refresh)
            localStorage.setItem("accessTokenExpiresAt", data?.accessTokenExpiresAt)
            localStorage.setItem("refreshTokenExpiresAt", data?.refreshTokenExpiresAt)
            navigate("/")
          } else {
            setInviteLoading(true)
            const error = resp?.data
            if (error) {
              setLoginError(error?.detail)
              setInviteLoading(false)
            }
          }
        })


      } catch (error) {

        const { status } = error.response
        const { data } = error.response
        if (status == 400 || status == 401) {
          const serverError = data?.detail
          setErrors({ ...errors, ...{ serverError: serverError } })
        }
        return Promise.reject(error)
      } finally {
        setInviteLoading(false)
      }
    } else {
      const isEmail = !formValues?.email
      const isPassword = !formValues?.password
      const errorList = { email: isEmail ? [props.t("email-field-is-required")] : [], password: isPassword ? [props.t("password-field-is-required")] : [], serverError: '' }
      setErrors({ ...errors, ...errorList })
      setInviteLoading(false)
    }

  }


  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const ShowPassword = () => {
    setPasswordType("text")
    setShowPassword(false)
  }

  const HidePassword = () => {
    setPasswordType("password")
    setShowPassword(true)
  }
  return (
    <React.Fragment>
      <div>
        <Container fluid className="p-0">
          <Row className="g-0 m-0" style={{ height: '100vh' }}>
            <CarouselPage />
            <Col xl={6}>
              <div className="auth-full-page-content p-3 p-sm-5 pt-0 flex-column d-flex align-items-center justify-content-center h-100">
                <div className="w-100 p-3 p-sm-5">
                  <div className="d-flex flex-column h-100">
                    <div className="my-auto">
                      <div style={{ marginBottom: '50px' }}>
                        <p className={` ${style.titleStyle} mb-3`}>{props.t("Welcome Back")}</p>
                        <p className={style.titleStyle}>
                          {props.t("to")} <span className={style.splyedHeading}>{props.t("DPGB")}.</span>
                        </p>
                      </div>
                      <div className="mt-4">
                        {loginError ? <Alert color="danger" toggle={() => setLoginError("")} >{props.t(loginError)}</Alert> : null}

                        <form onSubmit={onHandleSubmit} className={style.LoginForm} >
                          <div className="mb-4">
                            <FormInputText
                              className={style.FormStyle}
                              onValueChange={(e) => {
                                handleInputChange(e)
                                setErrors({ ...errors, ...{ email: [] } })
                              }}
                              value={formValues.email}
                              name="email" label={props.t("email")} control={control} showError={errors?.email?.length > 0 ? true : false} errorMsg={errors.email.join("")} />
                          </div>
                          <Row>
                            <Col lg="12" className={style.password}>
                              <FormInputText
                                className={style.FormStyle}
                                style={{ position: 'relative' }}
                                onValueChange={(e) => {
                                  handleInputChange(e)
                                  setErrors({ ...errors, ...{ password: [] } })
                                }}
                                type={passwordType} name="password" label={props.t("password")} control={control} showError={errors?.password?.length > 0 ? true : false} errorMsg={errors.password.join("")}
                              />
                              <div className={style.forgetPassword} >
                                <h2 onClick={() => navigate(`/reset-password`)}>{props.t("forget-password")}</h2>
                              </div>
                              <br /><br />
                              <p style={{ color: '#FF1943', marginBottom: 0, marginTop: 0, height: '50px' }} >
                                {errors.serverError ? errors?.serverError : ""}
                              </p>
                              <div className={style.eyeIcon} style={{ position: 'absolute', float: 'right', right: '15px', top: '35px' }}>
                                {showPassword ?
                                  <IconButton onClick={() => ShowPassword()}>
                                    <VisibilityOffOutlinedIcon style={{ height: '19px' }} />
                                  </IconButton>

                                  :
                                  <IconButton onClick={() => HidePassword()}>
                                    <VisibilityOutlinedIcon style={{ height: '19px' }} />
                                  </IconButton>
                                }
                              </div>
                            </Col>
                          </Row>

                          <LoadingButton style={{
                            background: '#42c2b9',
                            color: 'white',
                            width: '100%',
                            height: '60px',
                            fontWeight: 'bold',
                            padding: '10px',
                            boxShadow: 'none',
                            borderRadius: '6px 6px 6px 6px',
                            textTransform: 'none'
                          }}
                            type="submit"
                            loading={InviteLoading} variant="contained">
                            {!InviteLoading && props.t('login')}

                          </LoadingButton>
                        </form>

                        <div className="mt-5 ">
                          <p className={style.accountStyle}>
                            {props.t("dont-have-an-account")}
                            <Link
                              to="/signup"
                              className={style.spliedHeading}
                            >
                              {" "}
                              {props.t("register-now")}{" "}
                            </Link>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
})

export default withTranslation()(Login2)

