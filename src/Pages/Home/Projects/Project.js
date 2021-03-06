import Button from "@restart/ui/esm/Button";
import React from "react";
import { div, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import "../../../Styles/Project.css";
const Project = ({ info }) => {
  const { image, name, link, id } = info;

  return (
    <Fade bottom>
      <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
        <Card
          style={{ background: 'rgb(0 10 18)'}}
          className="h-100 overflow-hidden"
        >
          <div className="img-div overflow-hidden">
            <Card.Img variant="top" src={image} className="img-hover" />
          </div>
          <Card.Body>
            <Card.Title className="text-capitalize">{name}</Card.Title>
            <Card.Text>
              This site is build with react js.It's fully responsive,user
              friendly and neat and clean.
            </Card.Text>
            <a
              className="my-btn"
              style={{
                padding: "5px 15px",
              }}
              href={link}
              target="_blank"
            >
              Live Site
            </a>
            <Link
              className="my-btn2 ms-3"
              style={{ padding: "5px 12px" }}
              as={Link}
              to={`/details/${id}`}
            >
              Details
            </Link>
            {/* <br />
            <br />
            <div className="badges">
              <div>react</div>
              <div>mongoDB</div>
              <div>Node JS</div>
              <div>Express JS</div>
            </div> */}
          </Card.Body>
        </Card>
      </div>
    </Fade>
  );
};

export default Project;
