import React from "react";

const Blog = () => {
  return (
    <div className="col">
      <Card style={{ background: "#333" }} className="h-100">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="text-capitalize">{name}</Card.Title>
          <Card.Text>
            This site is build with react js.It's fully responsive,user friendly
            and neat and clean.
          </Card.Text>
          <a
            className="btn btn-sm btn-danger text-white"
            style={{ background: "rgb(183, 51, 97) !important," }}
            href={link}
            target="_blank"
          >
            Live Site
          </a>
          <a
            className="btn btn-sm btn-info text-white ms-3"
            style={{ background: "rgb(183, 51, 97) !important," }}
            href="#"
            as={Link}
          >
            Details
          </a>
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
  );
};

export default Blog;
