import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Button
} from "react-bootstrap";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <a href="/api/logout" className="login-link">
              <span>Logout</span>
            </a>
          </li>
        ];
    }
  }

  render() {
    console.log(this.props);

    var styles_3 = {
      logo_link: {
        height: "60px",
        width: "auto"
      },
      logo: {
        height: "60px",
        width: "auto"
      }
    };

    return (
      <Navbar fixedTop collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand pullLeft>
            <a href="/">
              <img
                src={
                  "https://s3-us-west-2.amazonaws.com/austin-matthiessen/Mazi_logo_1.jpg"
                }
                className="responsive-img"
                style={styles_3.logo}
                width={"85%"}
                alt={"Mazi"}
              />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={3} title="Overview" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Item 1</MenuItem>
              <MenuItem eventKey={3.2}>Item 2</MenuItem>
              <MenuItem eventKey={3.3}>Item 3</MenuItem>
              <MenuItem eventKey={3.4}>Item 4</MenuItem>
              <MenuItem eventKey={3.5}>Item 5</MenuItem>
              <MenuItem eventKey={3.6}>Item 6</MenuItem>
            </NavDropdown>
            <NavItem>Customers</NavItem>
            <NavItem>Pricing</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem>{this.renderContent()}</NavItem>
            <NavItem href="/#/builder">
              <div className="demo">
                <Button bsStyle="primary" bsSize="small">
                  Try Demo
                </Button>
              </div>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
