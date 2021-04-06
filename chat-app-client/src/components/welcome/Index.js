import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import { WelcomeWrapper, Heading } from "./styles";
const Index = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, room);
    if (name && room) {
      history.push({
        pathname: "/chat",
        search: `?name=${name}&room=${room}`,
      });
    }
  };
  return (
    <WelcomeWrapper>
      <Container>
        <Row>
          <Col xs="12" sm={{ size: 4, offset: 4 }}>
            <Heading className="mb-3">Join Here</Heading>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  bsSize="lg"
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="room"
                  placeholder="Room"
                  bsSize="lg"
                  onChange={(e) => setRoom(e.target.value)}
                />
              </FormGroup>
              <Button block color="primary" size="lg">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </WelcomeWrapper>
  );
};

export default Index;
