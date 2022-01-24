import React, { Fragment } from "react";
import SchoolIcon from '@material-ui/icons/School';

const Education = () => {
  const [header] = React.useState({
    subHeader: "My Education",
    text: "Know My Qualifiacation.",
  });
  return (
    <Fragment>
    <div className="education">
    <div className="row">
       <div className="common-class">
          <h1 className="main_header1">{header.subHeader}</h1>
          <p className="main_content1">{header.text}</p>
          <div className="common-border"></div>
        </div>
      <div className ="education tab-content">
        <div className ="row">
          <div className ="timeline">
            <div className="row">
              <div className ="timeline-item">
                <div className="timeline-item-inner outer-shadow">
                   <div className="icon"><SchoolIcon/>  </div>
                  <span>2019 - 2023</span>
                  <h3>Bachelor in Computer Science</h3>
                  <h4>ANNA UNIVERSITY, India</h4>
                  <p>Anna University is a technical university in Tamil Nadu, India. 
                    The main university campus is located in Guindy, Chennai. It was named after C N Annadurai, 
                    former Chief Minister of Tamil Nadu on 4 September 1978</p>
                </div>
              </div>

              <div className ="timeline-item">
                <div className="timeline-item-inner outer-shadow">
                <div className="icon"> <SchoolIcon/>  </div>
                  <span>2015 - 2017</span>
                  <h3>High School (11 and 12)</h3>
                  <h4>CAPITAL COLLEGE AND RESEARCH CENTER, Nepal</h4>
                  <p>Capital College And Research Center(CCRC) is college  in Kathmandu, Nepal. 
                     It is in Bagmati reason down to Koteswor.
                  </p>
                </div>
              </div>

              <div className ="timeline-item">
                <div className="timeline-item-inner outer-shadow">
                <div className="icon"> <SchoolIcon/> </div> 
                  <span>2016</span>
                  <h3>SLC</h3>
                  <h4>EINSTEIN PUBLIC SCHOOL, Nepal</h4>
                  <p>Einstein Public School (EPS) is a School in Janakpur, Nepal. 
                     It was named after Scientist Albert Einstein
                  </p>
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

export default Education;
