import React, { Fragment } from "react";

const Project = () => {
  const [header] = React.useState({
    subHeader: "My Projects",
    text: "Here are some of my Projects.",
  });
  return (
    <Fragment>
    <div className="project">
      <div className="container">
        <div className="common-class">
          <h1 className="main_header1">{header.subHeader}</h1>
          <p className="main_content1">{header.text}</p>
          <div className="common-border"></div>
        </div>

        
        <div className="sap_tabs">
          <div id="horizontalTab" style={{display: "block", width: "100%", margin: "0px"}}>
            <ul
              className="resp-tabs-list wow fadeInUp animated" data-wow-delay=".7s">
              <li className="resp-tab-item">
                <span>Sona_Space</span>
              </li>
              <li className="resp-tab-item">
                <span>Portfolio</span>
              </li>
              <li className="resp-tab-item">
                <span>E-Commerce Website</span>
              </li>
              <li className="resp-tab-item">
                <span>iText</span>
              </li>
            </ul>
            <div className="clearfix"> </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card" style={{width: "15rem"}}>
                    <img src="SonaSpace.PNG" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Sona_Space</h5>
                        <p className="card-text" style={{fontSize: "12px"}}>SonaSpace is a Website developed using react and firebase, where Students of CSE Dept can intract with seniors and juniors, get info regarding placement, view and share interview experience. This web is private to college</p>
                        
                    </div>
                </div> 
                </div>

                <div className="col">
                <div className="card" style={{width: "15rem"}}>
                    <img src="ECommerce.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">E-Commerce</h5>
                        <p className="card-text" style={{fontSize: "12px"}}>This is e-commerce Web-site devloped using MERN Stack, This was developed while learning react js,redux,mongo,node js and express js.This site has full e-commerce functionalites like flipkart,amazon.</p>
                        
                    </div>
                </div> 
                </div>

               <div className="col">
                <div className="card" style={{width: "15rem"}}>
                    <img src="portfolio.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Portfolio</h5>
                        <p className="card-text" style={{fontSize: "12px"}}>A Portfolio Web site developed using HTML,CSS,JS. This is Static Web-Site developed while i was learning basic of hml/css in my 2nd year.</p>
                        
                    </div>
                </div> 
                </div>   


              <div className="col">
              <div className="card" style={{width: "15rem"}}>
                    <img src="Text_utils.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">iText</h5>
                        <p className="card-text" style={{fontSize: "12px"}}>iText is an web-app developed using react-framework. This app has functionalites like converting text, removing extra spaces, length, deleting, no.of words, copy,etc..</p>
                        
                    </div>
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

export default Project;
