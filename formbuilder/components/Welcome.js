import React from "react";
import {
  Carousel,
  Jumbotron,
  Grid,
  Row,
  Col,
  PageHeader
} from "react-bootstrap";

export default function Welcome(props) {
  const createNewForm = () => {
    props.resetForm(() => {
      props.history.pushState(null, "/builder");
    });
  };

  return (
    <div>
      <div className="background-container">
        <Carousel>
          <Carousel.Item>
            <div className="carousel-image" />
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-image-1" />
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-image-2" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="jumbotron-container">
        <Jumbotron>
          <div className="container">
            <Grid>
              <Row>
                <Col xs={12} md={8}>
                  <PageHeader className="jumbotron-pageheader">
                    Management software<br />for the new world of CRE.
                  </PageHeader>
                  <p>
                    Eliminate slippage and boost productivity - all the due
                    diligence tools you need and use, seamlessly integrated in
                    one package.
                  </p>
                  <p>
                    <button
                      type="button"
                      onClick={createNewForm}
                      className="btn btn-primary btn-lg"
                    >
                      Start a new form
                    </button>
                  </p>
                </Col>
              </Row>
            </Grid>
          </div>
        </Jumbotron>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>
              <i className="glyphicon glyphicon-eye-close" /> Privacy matters
            </h3>
            <p>
              With <a href="http://www.kinto-storage.org">Kinto</a>, you are not
              giving Google or any other giants your data.
            </p>
            <p>
              Our goal is not to host all the forms of the world, so we try to
              make it easy for you to{" "}
              <a href="https://kinto.readthedocs.io/en/stable/tutorials/install.html">
                host your own servers
              </a>.
            </p>
          </div>
          <div className="col-md-4">
            <h3>
              <i className="glyphicon glyphicon-heart-empty" /> Open source
            </h3>
            <p>
              All the code we write is{" "}
              <a href="https://github.com/kinto/formbuilder">
                written in the open
              </a>{" "}
              and we try to be the most inclusive as we can to welcome your
              ideas.
            </p>
            <p>
              Kinto and the formbuilder are released under Apache 2.0 licenses
            </p>
          </div>
          <div className="col-md-4">
            <h3>
              <i className="glyphicon glyphicon-saved" /> Account-less
            </h3>
            <p>
              You don't need an account to create a new form: just create and
              give it to your friends, it's a matter of minutes!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
