import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function TaskbarContainer(){
    return(
        <div>
        <Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Navbar.Brand href="#">Navbar</Navbar.Brand>
  </Navbar>
</Container>

        </div>
    );
}

export default TaskbarContainer;