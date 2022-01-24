import React, { Fragment } from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useAlert } from 'react-alert'

const Contact = () => {
	const alert = useAlert()

    const [header] = React.useState({
        subHeader: "Contact",
        text: "Get in touch with me"
    });

	const formRef = useRef();
	const handleSubmit = (e)=>{
		e.preventDefault();
		emailjs.sendForm('service_a6oij5f', 'template_i01ljcp', formRef.current, 'user_d32wpT3HqapRvKFSBzsYH')
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
		 alert.show('Your Response is successfully submitted, will contact you soon..')
		e.target.reset()
	}

    return (
		<Fragment>
        <div className="contact" id="contact">
            <div className="container">
            <div className="common-class">
              <h1 className="main_header">{header.subHeader}</h1>
              <p className="main_content">{header.text}</p>
              <div className="common-border"></div>
            </div>

            <div className=" row contact-row">
				<div className="col-md-6 contact-left">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1381.4131029077048!2d78.123748690511!3d11.678368698644391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf065115b5f7d%3A0x1d08f4d05518b24d!2sSona+College+of+Technology+-+Engineering+Colleges!5e0!3m2!1sen!2sin!4v1485269481357"  height="454" frameBorder="0" style={{border:"0"}} allowFullScreen></iframe>
                </div>
				<div className="col-md-6 contact-right">
					<div className="address-left">
						<p>Sona College Of Technology<br/> Salem,Tamil Nadu </p>
					</div>
					<div className="address-right">
						<p>Call me :  +91 7397528966</p>
						<p>E-mail : <a href="mailto:info@example.com">kavyay082@gmail.com</a></p>
					</div>
					<div className="clearfix"></div>
					<div className="contact-form">
						<form ref={formRef} onSubmit={handleSubmit}>
							<input type="text" name="name" placeholder="Name" required/>
							<input className="email" name="Email" type="text" placeholder="Email" required/>
							<input className="phone" name="Subject" type="text" placeholder="Subject" required/>
							<textarea name="Message" placeholder="Message" required></textarea>
							<input type="submit" value="SUBMIT"/>
						</form>
					</div>
				</div>
               
				{/* <div className="clearfix"></div> */}
			
           
            </div>

            </div>
            
        </div>
		</Fragment>
    )
}

export default Contact
