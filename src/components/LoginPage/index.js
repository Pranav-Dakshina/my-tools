import React, {useState, useEffect} from 'react'
import classNames from "classnames"
import {Form, FormGroup, FormFeedback, Input, Label, Button, Col} from "reactstrap"
import axios from "axios"
import bcrypt from "bcryptjs"

import './index.scss';

const LoginPage = props => {
  const [isUserFocused, toggleUserFocus] = useState(false)
  const [isPassFocused, togglePassFocus] = useState(false)
  const [userValue, setUserValue] = useState("")
  const [passValue, setPassValue] = useState("")
  const [isValid, setValid] = useState(true)

  const postLogin = data => {
    axios
    .post('http://localhost:44152/auth/login', data)
    .then(response => {
      setValid(response.data === "success")
      if(response.data === "success") {
        props.history.push("/main")
      }
    })
  }

  const handleOnSubmit = event => {
    event.preventDefault()
      bcrypt
      .hash(passValue, 10)
      .then(hash => {
        const data = {
          user: userValue,
          pass: hash
        }
        postLogin(data)
      })
  }

  useEffect(() => {
    if(!isValid && (userValue.length === 0 || passValue.length === 0)) {
      setValid(true)
    }
  })

    const userFormClass = classNames({
      "focused": isUserFocused || userValue.length !== 0,
    })
    const passFormClass = classNames({
      "focused": isPassFocused || passValue.length !== 0,
    })
    const disabled = !(userValue.length !== 0 && passValue.length !== 0)
    const feedbackClass = classNames({
      "mt-0": true,
      "d-block": !isValid
    })

    return (
      <div className="bg">
      <div className="login">
        <div className="welcome d-flex justify-content-center">
          Welcome
        </div>
        <Form onSubmit={handleOnSubmit}>
          <Col style={{ height: "20px", marginBottom: "15px" }}>
          <FormFeedback className={feedbackClass} style={{padding: "0 10px"}}>Incorrect Username and Password</FormFeedback>
          </Col>
        <FormGroup className={userFormClass} onFocus={() => toggleUserFocus(true)} onBlur={() => toggleUserFocus(false)}>
        <Col>
        <Input id="username" type="text" value={userValue} onChange={event => setUserValue(event.target.value)}/>
        <Label className="m-0" for="username">Username</Label>
        </Col>
        </FormGroup>
        <FormGroup className={passFormClass} onFocus={() => togglePassFocus(true)} onBlur={() => togglePassFocus(false)}>
        <Col>
        <Input id="password" type="password" value={passValue} onChange={event => setPassValue(event.target.value)}/>
        <Label className="m-0" for="password">Password</Label>
        </Col>
        </FormGroup>
        <FormGroup>
          <Col className="d-flex">
            <Button className="mx-auto" disabled={disabled} style={{boxShadow: "none"}}>Submit</Button>
          </Col>
        </FormGroup>
        </Form>
      </div>
      </div>
    )
}

export default LoginPage
