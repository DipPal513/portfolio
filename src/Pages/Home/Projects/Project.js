import Button from "@restart/ui/esm/Button";
import React from "react";
import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
const Project = ({ info }) => {
  const { image, name, link, id } = info;

  return (
   <Fade bottom>
      <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
      <Card style={{ background: "#333" }} className="h-100">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="text-capitalize">{name}</Card.Title>
          <Card.Text>
            This site is build with react js.It's fully responsive,user friendly
            and neat and clean.
          </Card.Text>
          <a
            className="my-btn"
            style={{ background: "rgb(183, 51, 97) !important",padding:"5px 15px" }}
            href={link}
            target="_blank"
          >
            Live Site
          </a>
          <Link
            className="my-btn2 ms-3"
            style={{padding:"5px 12px"}}
            as={Link}
            to={`/details/${id}`}
          >
            Details
          </Link>
          <br />
          <br />
          <Badge bg="info">react</Badge>
          <Badge bg="success" className="mx-3">
            mongoDB
          </Badge>
          <Badge bg="dark">Node JS</Badge>
        </Card.Body>
      </Card>
    </div>
   </Fade>
  );
};

export default Project;
