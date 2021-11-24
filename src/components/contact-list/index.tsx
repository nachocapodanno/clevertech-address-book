import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";

const ContactList = ({ contacts }: any) => {
  return (
    <Container fluid className="mt-3">
      <Row className="justify-content-md-center">
        <Col xs lg="4">
          {contacts.length > 0 ? (
            <ListGroup variant="flush">
              {contacts.map((item: any, index: any) => {
                return (
                  <ListGroup.Item
                    key-={index}
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">
                        {" "}
                        {item.first_name} {item.last_name}{" "}
                      </div>
                      {item.phone}
                    </div>
                    <Image src={item.avatar} rounded />
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          ) : (
            <div className="alert alert-danger text-center">
              Sorry, we cannot find a contact with that name
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ContactList;
