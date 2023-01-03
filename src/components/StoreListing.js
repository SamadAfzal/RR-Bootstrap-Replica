
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import AldiLogo from '../images/aldilogo.png'
import KrogerLogo from '../images/krogerlogo.png'
import SproutsLogo from '../images/sprouts-logo.png'

function StoreListing() {
    return(
     <div>
      <h2>Browse stores in Houston</h2>
      <Container style={{ marginTop: "40px", textAlign: "center" }}>
          <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
              <Row>
                  <Col xs=".5" >
                      <Image src={AldiLogo} roundedCircle className="roundedCircle"/>
                  </Col>
                  <Col>
                      <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                      <p>Delivery * Pickup</p>
                  </Col>
              </Row>
              <Col sm="1"></Col>
              <Row >
                  <Col xs=".5">
                      <Image src={KrogerLogo} roundedCircle className="roundedCircle"/>
                  </Col>
                  <Col>
                      <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                      <p>Delivery * Pickup</p>
                  </Col>
              </Row>
              <Col sm="1"></Col>
              <Row >
                  <Col xs=".5" >
                      <Image src={SproutsLogo} roundedCircle className="roundedCircle"/>
                  </Col>
                  <Col>
                      <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                      <p>Delivery</p>
                  </Col>
              </Row>
          </Row>
      </Container>
      </div>
    )
   }
   

