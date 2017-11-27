import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { Navbar, Nav, NavItem } from "react-bootstrap";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        var styles_1 = {
          loginBase: {
            color: "#454441",

            ":hover": {
              color: "red"
            }
          }
        };
        return (
          <li>
            <a href="/auth/google" className="" style={styles_1.loginBase}>
              Login With Google
            </a>
          </li>
        );
      default:
        var styles_2 = {
          loginBase: {
            color: "#666",
            fontSize: "16px",

            ":hover": {
              color: "#212121",
              background: "#fff",
              fontSize: "16px"
            }
          }
        };
        return [
          <li key="1">
            <a href="/api/logout" className="" style={styles_2.loginBase}>
              Logout
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

    var styles_2 = {
      loginBase: {
        color: "#454441",
        fontSize: "16px",

        ":hover": {
          color: "#47BE94",
          background: "#fff",
          fontSize: "16px"
        }
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
          <Nav pullRight>
            <NavItem>{this.renderContent()}</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem href="/#/builder" style={styles_2.loginBase}>
              Create New Project
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
