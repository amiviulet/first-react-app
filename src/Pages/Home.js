import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';


export default function Home() {
    return (
        <Jumbotron>
        <h1>Welcome to my first app!</h1>
        <p>
          This is my first react app using bootstrap.
        </p>
      </Jumbotron>
    )
}