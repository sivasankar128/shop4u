import React,{useState} from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function Helpus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(formData)
      .then(() => {
        alert('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send email. Please try again later.');
      });
  };

  const sendEmail = (formData) => {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'sivasankaravula128@gmail.com'
    };

    return emailjs.send(
      'service_5m27ysj', 
      'template_r2dh9xa', 
      templateParams,
      'pY09GekqxP240BL4J' 
    )
  };
  return (
    <>
    <div className='helpbox'>
      <div>
        <h1 style={{"margin":"auto","textAlign":'center',"padding":'3rem'}}>Any Queriess...</h1>
        <h3 style={{"margin":"auto","textAlign":'center',"padding":'1rem'}}>Contact info:</h3>
        <div className='form'>
        <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input className='helpipt' type="text" name="name" value={formData.name} onChange={handleInputChange} required/>
        </div>
        <div>
          <label>Email:</label>
          <input className='helpipt' type="email" name="email" value={formData.email} onChange={handleInputChange} required/>
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleInputChange} required></textarea>
        </div>
        <button className='button' type="submit">Submit</button>
      </form>
        </div>
      </div>
      </div>




      <footer>
      <div ><h2 className='contactus'>Contact Us :</h2>
      <div className='contactrow'>
          <FaEnvelope /><p>sivasankaravula128@gmail.com</p>
      </div>
        <div className='contactrow'>
          <FaPhone /><p>(+91) 7093****93</p>
        </div>
        <div className='contactrow'>
          <FaMapMarkerAlt /><p>Vishnu Institute of Technology , Bhimavaram</p>
        </div>
      </div>
        <p className='copyright'>2024  © CopyRight || SHOP4U </p>
      </footer>
      </>
  )
}
export default Helpus;