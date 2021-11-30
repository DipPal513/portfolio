import React from "react";
import { useParams } from "react-router";
import gym1 from '../../../images/GYM/gym-1.png'
import gym2 from '../../../images/GYM/gym-2.png'
import gym3 from '../../../images/GYM/gym-3.png'
import gym4 from '../../../images/GYM/gym-4.png'
// furniture
import furniture1 from '../../../images/FURNITURE/furniture-1.png'
import furniture2 from '../../../images/FURNITURE/furniture-2.png'
import furniture3 from '../../../images/FURNITURE/furniture-3.png'
import furniture4 from '../../../images/FURNITURE/furniture-4.png'
// jewelry
import jewelry1 from '../../../images/JEWELRY/jewelry-1.png'
import jewelry2 from '../../../images/JEWELRY/jewelry-2.png'
import jewelry3 from '../../../images/JEWELRY/jewelry-3.png'
import jewelry4 from '../../../images/JEWELRY/jewelry-4.png'
const Details = () => {
  const data = [
    {
      id: 1,
      name: "gym website",
      description:
        "This is a health care related website and its name is getShape.Its a MERN Stack project  Users can explore and purchase any products.But before purchasing,he/she must register and login with email and password.Logged in users can purchase any products.If the users wants,he/she can see his/her orders as well as delete his/her products. This has admin panel.Admin can add any new product and delete any prodcut.Admin can see orders from all users.And admin can update and delete any product if he/she wants HTML5,CSS3,JavaScript,React.Js,Bootstrap5,React-Bootstrap,React Hook Form,React Router Dom,Firebase,Heroku,Node.Js,Express.Js,MongoDb were used in this website",
      imgOne: gym1,
      imgTwo: gym2,
      imgThree: gym3,
      imgFour: gym4,
      sourceFront:"https://github.com/DipPal513/gym-website",
      sourceBack:"N/A",
      LiveLink:"https://simple-gym-website.firebaseapp.com/"
    },
    {
        id: 3,
        name: "jewelry website",
        description:
          "This is a jewelery selling website and its name is Innovative.Its a MERN Stack project  Users can explore and purchase any products.But before purchasing,he/she must register and login with email and password.Logged in users can purchase any products.If the users wants,he/she can see his/her orders as well as delete his/her products. This has admin panel.Admin can add any new product and delete any prodcut.Admin can see orders from all users.And admin can update and delete any product if he/she wants HTML5,CSS3,JavaScript,React.Js,Bootstrap5,React-Bootstrap,React Hook Form,React Router Dom,Firebase,Heroku,Node.Js,Express.Js,MongoDb were used in this website",
        imgOne: jewelry1,
        imgTwo: jewelry2,
        imgThree: jewelry3,
        imgFour: jewelry4,
        sourceFront:"https://github.com/DipPal513/jewelry-website",
        sourceBack:"N/A",
        LiveLink:"https://simple-jewelry-website.firebaseapp.com/"
      },
      {
        id: 2,
        name: "furniture website",
        description:
          "This is a furniture selling website and its name is Amado.Its a react  project  Users can explore and purchase any products. HTML5,CSS3,JavaScript,React.Js,Bootstrap5,React-Bootstrap,React Hook Form,React Router Dom were used in this website",
        imgOne: furniture1,
        imgTwo: furniture2,
        imgThree: furniture3,
        imgFour: furniture4,
        sourceFront:"https://github.com/DipPal513/Amad-website",
        sourceBack:"N/A",
        LiveLink:"https://amado-template.netlify.app/"
      },
  ];
  const { id } = useParams();

  return data.map((info) =>
    info.id == id ? (
      <div className="details">
        <div className="conatainer">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8">
              <h1 className='text-uppercase text-center mt-5'>{info.name}</h1>
              <p className='mt-4 text-info'>{info.description}</p>
               <a className='text-capitalize text-white fw-bold'href={info.sourceFront} target="_blank">Source Code</a><br />
               <a className='text-capitalize text-white fw-bold'href={info.LiveLink} target="_blank">Live Link</a>
              <div className="row mt-5">
                  <div className="col-lg-6">
                      <img src={info.imgOne} className='img-fluid' alt="" />
                  </div>
                  <div className="col-lg-6">
                      <img src={info.imgTwo} className='img-fluid' alt="" />
                  </div>
                  <div className="col-lg-6 mt-4">
                      <img src={info.imgThree} className='img-fluid' alt="" />
                  </div>
                  <div className="col-lg-6 mt-4">
                      <img src={info.imgFour} className='img-fluid' alt="" />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      ""
    )
  );
};

export default Details;
