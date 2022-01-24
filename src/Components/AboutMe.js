import React, { Fragment } from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from "react-router-dom";

const AboutMe = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text: "Get to know about me more here.",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Kavya Yadav" },
    { id: 2, title: "Email:", text: "kavyay082@gmail.com" },
  ]);
  return (
    <Fragment>
    <div className="about">
      <div className="container">
        <div className="common-class">
          <h1 className="main_header">{header.subHeader}</h1>
          <p className="main_content">{header.text}</p>
          <div className="common-border"></div>
        </div>
        <div className="row ">
          <div className="col-6 col-md-5">
            <div className="about_img">
              <img src="kav1.jpg" alt="me"></img>
              <div className="icons">
              <a href="https://www.linkedin.com/in/kavya-yadav-525410214/"><LinkedInIcon/></a>
              <a href="https://www.linkedin.com/in/kavya-yadav-525410214/"><TwitterIcon/></a>
              <a href="https://www.linkedin.com/in/kavya-yadav-525410214/"><InstagramIcon/></a>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-5">
            <div className="about_info">
              <h1>Hi There</h1>
              <div className="about_info-p1">
              I am going to be a software Engineer, currently doing Computer Science Engineering
              from Sona College Of Technology. I Love building things.
              I Have been obsessed with the idea of using software to solve pratical problems. Facing
              challenging problems and learning new Technology always excites me.
               
              </div>
              <div className="about_info-p2">
                I can take on collaborative team leadership responsibilities.
                I have worked in team in some projects as leader. I am looking for 
                Software Development Engineer(SDE 1) role.
              </div>
              <div className="info_contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                  <Link to="/contact"> <button  className="button">Get in touch</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
};

export default AboutMe;
