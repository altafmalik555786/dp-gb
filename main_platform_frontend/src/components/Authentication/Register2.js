import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Col, Container, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap'
import axios from "axios"
import { FormInputText } from "components/Common/FormInputText"
import { useForm } from "react-hook-form"
import { baseUrl } from "api/const"
import { LoadingButton } from "@mui/lab"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined"
import { withTranslation } from "react-i18next"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import style from "./style.module.scss"
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
} from "@mui/material"
import CarouselPage from "./CarouselPage"


const defaultValues = {
  companyName: "",
  phone: "92",
  email: "",
  password: "",
}

const initialServerError = {
  companyName: [],
  phone: [],
  email: [],
  password: [],
}

const Register2 = (props) => {
  const { control } = useForm()
  const navigate = useNavigate()
  const [account, setAccount] = React.useState("")
  const [formValues, setFormValues] = useState(defaultValues)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState(initialServerError)
  const [passwordType, setPasswordType] = useState("password")
  const [showPassword, setShowPassword] = useState(true)
  const [selectError, setSelectError] = useState("")
  const [phoneNumber, setPhoneNumber] = useState('')
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    document.title = "signup"
  }, [])

  const onAccountChange = (event) => {
    setSelectError("")
    setAccount(event.target.value)
    setErrors(initialServerError)
  }

  const onHandleSubmit = async (event) => {
    event.preventDefault()

    if (
      (formValues.email &&
        formValues.email != "" &&
        formValues.password &&
        formValues.password != "" &&
        formValues.companyName &&
        formValues.phone &&
        formValues.companyName != "",
        account != "")
    ) {


      let payloadCommonUser = {
        // companyName: formValues?.companyName,
        firstname: formValues?.companyName,
        lastname: "",

        // phone: formValues?.phone,
        username: formValues?.email,
        email: formValues?.email.toLowerCase(),
        password: formValues?.password,
        type: "COMMON"
      }

      let payloadBusinessOwner = {
        // companyName: formValues?.companyName,
        firstname: formValues?.companyName,
        lastname: "",
        // phone: formValues?.phone,
        username: formValues?.email,
        email: formValues?.email.toLowerCase(),
        password: formValues?.password,
        type: "OWNER"
      }

      const payload = account == "user" && payloadCommonUser || payloadBusinessOwner


      // if (account == "user") {
      setLoading(true)
      try {
        await axios.post(`${baseUrl}signup/`, payload).then((res) => {
          if (res.data) {
            navigate("/login")
          }
        })
      } catch (error) {
        const { status } = error.response
        const { data } = error.response
        if (status == 403 || status == 400) {
          const serverError = {
            email: data?.email,
            companyName: data?.username,
            phone: [],
            password: [],
          }
          setErrors({ ...errors, ...serverError })
        }
      }
      setLoading(false)
      setPhoneNumber('+92')
    }
    // else {
    //   setLoading(true)
    //   try {
    //     await axios.post(`${baseUrl}businessOwner`, payload).then((res) => {
    //       if (res.data.success) {
    //         props.history.push("/login")
    //       }
    //     })
    //   } catch (error) {
    //     const { status } = error.response
    //     const { data } = error.response
    //     if (status == 403 || status == 400) {
    //       const serverError = data.errors
    //       setErrors({ ...errors, ...serverError })
    //     }
    //   }
    //   setLoading(false)
    // }
    // }
    else {
      const isEmail = !formValues.email
      const isPassword = !formValues.password
      const isCompanyName = !formValues.companyName
      const isPhone = !formValues.phone
      const errorList = {
        email: isEmail ? ["email field is required"] : [],
        password: isPassword ? ["password field is required"] : [],
        phone: isPhone ? ["phone field is required"] : [],
        companyName: isCompanyName
          ? ["company name field is required"]
          : [],
      }
      setErrors({ ...errors, ...errorList })
      if (account === "") {
        setSelectError("please select account type")
      }
    }
  }

  const AccountSelector = () => {
    return (
      <FormControl className={style.acountType}>
        <FormLabel>{"select account type"}</FormLabel>
        <RadioGroup row value={account} onClick={onAccountChange}>
          <FormControlLabel
            className={style.buyer}
            value="user"
            control={<Radio />}
            label={"User"}
          />
          <FormControlLabel
            className={style.suplier}
            value="businessOwner"
            control={<Radio />}
            label={"Business Owner"}
          />
        </RadioGroup>
      </FormControl>
    )
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

  const onChangePhoneNumber = (value) => {
    setPhoneNumber(value)
    setFormValues({
      ...formValues,
      ['phone']: Number(value),
    })
  }
  return (
    <React.Fragment>
      <div>
        <Container fluid className="p-0">
          <Row className="g-0 m-0" style={{ height: '100vh' }}>
            <CarouselPage className={style.registerHeadingStyle} />
            <Col className="px-3 py-0 px-sm-5 py-sm-0" xl={6}>
              <div className="auth-full-page-content p-3 p-sm-5 d-flex align-items-center h-100">
                <div className="w-100">
                  <div className="d-flex flex-column">
                    <div>
                      <div className={style.topTitleRegister}>
                        <div className="mb-3 text-center">
                          <p className={` ${style.titleStyle} text-center mb-3`}>
                            {props.t("create-your")}
                          </p>
                          <p className={style.titleStyle}>
                            <span className={style.splyedHeading}>
                              {props.t("DPGB")}{" "}
                            </span>
                            {props.t("account")}
                          </p>
                        </div>
                        <div className={style.language}>
                        </div>
                      </div>
                      <div className="mt-2">
                        <form
                          className={style.LoginForm}
                          onSubmit={onHandleSubmit}
                        >
                          {AccountSelector()}
                          <div className={style.selectError}>{selectError}</div>
                          <div className={`mb-3 ${style.companyName}`}>
                            <FormInputText
                              className={style.FormStyle}
                              onValueChange={(e) => {
                                handleInputChange(e)
                                setErrors({
                                  ...errors,
                                  ...{ companyName: [] },
                                })
                              }}
                              errorMsg={errors.companyName.join("")}
                              name="companyName"
                              label={props.t("company-name")}
                              control={control}
                              showError={
                                errors?.companyName?.length > 0 ? true : false
                              }
                            />
                          </div>
                          <div className={`mb-3 ${style.FormStyle}`}>
                            <Label style={{ textAlign: "left", width: "100%" }} className={style.FormStyle}>{props.t("phone")}</Label>
                          </div>
                          <div className={`mb-3 ${style.phone} register-input`}>
                            <PhoneInput
                              onlyCountries={['pk']}
                              inputClass={style.input}
                              country={'pk'}
                              placeholder={''}
                              value={phoneNumber}
                              inputStyle={{ direction: 'ltr' }}
                              onChange={onChangePhoneNumber}
                              buttonClass={style.buttonClass}
                            />
                          </div>
                          <div className="mb-3">
                            <FormInputText
                              className={style.FormStyle}
                              onValueChange={(e) => {
                                handleInputChange(e)
                                setErrors({ ...errors, ...{ email: [] } })
                              }}
                              name="email"
                              label={props.t("email")}
                              control={control}
                              showError={
                                errors?.email?.length > 0 ? true : false
                              }
                              errorMsg={props.t(errors.email.join(""))}
                            />
                          </div>
                          <Row>
                            <Col
                              lg="12"
                              className={`mb-4 ${style.password}`}
                              style={{ display: "flex" }}
                            >
                              <FormInputText
                                className={style.FormStyle}
                                style={{ position: "relative" }}
                                onValueChange={(e) => {
                                  handleInputChange(e)
                                  setErrors({ ...errors, ...{ password: [] } })
                                }}
                                type={passwordType}
                                name="password"
                                label={props.t("password")}
                                control={control}
                                showError={
                                  errors?.password?.length > 0 ? true : false
                                }
                                errorMsg={errors.password.join("")}
                              />
                              <div
                                className={style.eyeIcon}
                                style={{
                                  position: "absolute",
                                  float: "right",
                                  right: "15px",
                                  top: "38px",
                                }}
                              >
                                {showPassword ? (
                                  <IconButton onClick={() => ShowPassword()}>
                                    <VisibilityOffOutlinedIcon
                                      style={{ height: "18px" }}
                                    />
                                  </IconButton>
                                ) : (
                                  <IconButton onClick={() => HidePassword()}>
                                    <VisibilityOutlinedIcon
                                      style={{ height: "18px" }}
                                    />
                                  </IconButton>
                                )}
                              </div>
                            </Col>
                          </Row>
                          <div className={style.termConditionsContainer}>
                            <h2>
                              {props.t("by-clicking")} <span>{props.t("register")}</span> {props.t("you-agree-to-all")}{" "}
                              <span className={style.termConditions} onClick={() => setOpenModal(true)}>
                                {props.t("terms-&-conditions")}
                              </span>
                            </h2>
                          </div>

                          <LoadingButton
                            style={{
                              background: "#42c2b9",
                              color: "white",
                              width: "100%",
                              height: "60px",
                              fontWeight: "bold",
                              padding: "10px",
                              marginTop: "15px",
                              boxShadow: "none",
                              textTransform: "none",
                            }}
                            type="submit"
                            loading={loading}
                            variant="contained"
                          >
                            {!loading && props.t("register")}
                          </LoadingButton>
                        </form>
                        <div className="mt-5">
                          <p className={style.accountStyle}>
                            {props.t("already-have-an-account")}{" "}
                            <Link to="/login" className={style.spliedHeading}>
                              {" "}
                              {props.t("login")}
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
          {/* <TermsAndConditions openModal={openModal} setOpenModal={setOpenModal} /> */}
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withTranslation()(Register2)

