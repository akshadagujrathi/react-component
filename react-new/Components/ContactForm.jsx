import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import 'semantic-ui-css/semantic.min.css';
// import {  Link } from "react-router-dom";
const SERVICE_ID = "Thismyservice";
const TEMPLATE_ID = "template1";
const PUBLIC_KEY = "DLXelGDUsgg_bP7Or";
const ContactForm = (props) => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
      };
    return (
        <div className='contact-section'>
            <div className="container">
                <div className='row align-items-center justify-content-center'>
                    <div className='col-12 col-lg-6 contact-img'>
                        
                        <img className="d-block m-auto img-fluid" src={props.img} alt=""/>
                        {/* <Link className='text-center d-block mx-auto my-3' to='javascript:void(0)' 
      onClick={() => window.location = 'mailto:yourmail@domain.com'}>
  hello@gmail.com
</Link> */}
                    </div>
                    <div className='col-12 col-lg-6'>
                      <div className='form-section'>
                    <h2 className='title'>{props.title}</h2>
                    <Form onSubmit={handleOnSubmit}>
                        <p>
                        Please feel free to get in touch anytime, whether for work inquiries or to just say hello.
I am currently accepting new freelance projects, and always excited to hear interesting proposals.
                        </p>
            <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='user_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='user_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message…'
          required
        />
        <Button type='submit' className='overlay-btn text-white'>Submit</Button>
      </Form>
      </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default ContactForm;
