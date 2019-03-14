import React from "react"
import {Navbar, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col} from "reactstrap"

import Icon from "../Icon"

const MainPage = () => {
  return (
    <React.Fragment>
    <Navbar color="dark" dark style={{ padding: ".5rem 2rem" }}>
      <NavbarBrand href="/main">My Tools</NavbarBrand>
      <Nav className="ml-auto" navbar>
      <NavItem>
      <NavLink>Profile</NavLink>
      </NavItem>
      </Nav>
    </Navbar>
    <Container>
      <Row>
        <Col className="my-3">
        <Icon type="jenkins" width={100} />
        </Col>
      </Row>
    </Container>
    </React.Fragment>
  )
}

export default MainPage
