import React, { Fragment } from 'react'

const Skill = () => {
    const [header] = React.useState({
        subHeader: "Skills",
        text: "Know My Skills"
    });
    return (
		<Fragment>
        <div className="skills">
        <div className="container">
            <div className="common-class">
              <h1 className="main_header">{header.subHeader}</h1>
              <p className="main_content">{header.text}</p>
              <div className="common-border"></div>
            </div>

            <div className="row skill-info">
            <div className="col-6 col-md-5 bar-grids">
                <div className="skill-item">
					<h6>DATA STRUCTURES & ALGORITHMS<span> 80% </span></h6>
					<div className="progress">
						<div className="progress-bar progress-bar-striped active progress-bar-animated" style={{width: "80%"}}>
						</div>
					</div>
                </div>
                <div className="skill-item">
					<h6>GIT & GITHUB<span> 85% </span></h6>
					<div className="progress">
						<div className="progress-bar progress-bar-striped active progress-bar-animated" style={{width: "85%"}}>
						</div>
					</div>
                </div>
                <div className="skill-item">
					<h6> NODEJS & EXPRESSJS <span> 50% </span></h6>
					<div className="progress">
						<div className="progress-bar progress-bar-striped active progress-bar-animated" style={{width: "50%"}}>
						</div>
					</div>
                </div>
                <div className="skill-item">
					<h6>HTML/CSS<span>75% </span></h6>
					<div className="progress">
						<div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "75%"}}>
						</div>
					</div>
					
				</div>
                </div>

                <div className="col-6 col-md-5 bar-grids">
					<h6>ANDROID APP<span> 70% </span></h6>
					<div className="progress">
						<div className="progress-bar progress-bar-striped active progress-bar-animated" style={{width: "70%"}}>
						</div>
					</div>
					<h6>MONGODB<span> 50% </span></h6>
					<div className="progress">
						<div className="progress-bar progress-bar-striped active progress-bar-animated"style={{width: "50%"}}>
						</div>
					</div>
					<h6>JAVA<span> 85% </span></h6>
					<div className="progress">
						<div className="progress-bar progress-bar-striped active progress-bar-animated" style={{width: "85%"}}>
						</div>
					</div>
					<h6>REACT JS<span> 70% </span></h6>
					<div className="progress">
						<div className="progress-bar progress-bar-striped active progress-bar-animated" style={{width: "70%"}}>
						</div>
					</div>
		
					</div>
                    <div className="clearfix"> </div>
				</div>
        </div>
        </div>
		</Fragment>
    )
}

export default Skill
