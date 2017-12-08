import React from "react";
import {
  Carousel,
  Jumbotron,
  Grid,
  Row,
  Col,
  PageHeader,
  Button,
  Image
} from "react-bootstrap";

export default function Welcome(props) {
  const createNewForm = () => {
    props.resetForm(() => {
      props.history.pushState(null, "/builder");
    });
  };

  return (
    <div>
      <Grid>
        <Row>
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
                    <Col xs={12} md={6} mdOffset={2}>
                      <PageHeader className="jumbotron-pageheader">
                        Management software<br />for the new world of CRE.
                      </PageHeader>
                      <p>
                        Eliminate slippage and boost productivity - all the due
                        diligence tools you need and use, seamlessly integrated
                        in one package.
                      </p>
                      <p className="jumbotron-button">
                        <Button
                          bsSize="large"
                          bsStyle="primary"
                          onClick={createNewForm}
                        >
                          Get Started Now
                        </Button>
                      </p>
                    </Col>
                  </Row>
                </Grid>
              </div>
            </Jumbotron>
          </div>
        </Row>
        <Row>
          <div className="container">
            <Col xs={12} md={10} mdOffset={1}>
              <div className="section">
                <h2>
                  People power projects.<br />
                  We power people.
                </h2>
                <p>Welcome to the people platform</p>
              </div>
            </Col>
          </div>
          <div className="container-1">
            <div className="section-1">
              <div className="section-img">
                <Col xs={12} md={10} mdOffset={1}>
                  <div className="img-2">
                    <Image src="https://s3.amazonaws.com/mazicre/Home_Section-platform-2x.png" />
                  </div>
                </Col>
                <Col xs={12} md={5} mdOffset={7} className="section-text">
                  <div className="section-h3">
                    <h3>
                      Flexible and comprehensive.
                      <br />
                      We are thinking you need both.
                    </h3>

                    <p>
                      The world of commercial real estate is complex.<br />That
                      is why we built a flexible platform for the entire<br />CRE
                      ecosystem -- to let you use the tools you need.
                    </p>
                  </div>
                </Col>
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div className="container-2">
            <div className="section-img-1">
              <Col xs={12} md={7} className="section-text-1">
                <div className="section-h4">
                  <h3>
                    One place for due diligence.
                    <br />
                    All your tools and tasks.
                    <br />
                    The new workflow for CRE.
                  </h3>

                  <p>
                    We give each person on our platform a platform of their own
                    — a place to sync their unique identity with all the tools
                    they need, and all the tasks they need to complete,
                    seamlessly. It is intuitive, automated, and comprehensive,
                    so nothing stands in the way of your workflow, whatever that
                    means for you.
                  </p>
                  <p className="jumbotron-button-1">
                    <Button
                      bsSize="large"
                      bsStyle="primary"
                      onClick={createNewForm}
                    >
                      Sign Onward
                    </Button>
                  </p>
                </div>
              </Col>
            </div>
            <div className="section-3">
              <Image
                src="https://s3.amazonaws.com/mazicre/Mazi-section_3.png"
                responsive
              />
            </div>
            <div className="section-img2-div">
              <Image
                className="section-img2"
                src="https://s3.amazonaws.com/mazicre/Mazi-section_3.2.png"
                responsive
              />
            </div>
          </div>
        </Row>
        <Row>
          <Col xs={12} className="container-4">
            <Col xs={6} xsOffset={1} className="footer">
              <img
                src={
                  "https://s3-us-west-2.amazonaws.com/austin-matthiessen/Mazi_logo_1.jpg"
                }
                className="responsive-img footer-img"
                width={"50%"}
                alt={"Mazi"}
              />
            </Col>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
