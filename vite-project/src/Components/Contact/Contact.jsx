import React from 'react'
import './Contact.css'
import theme from '../../assets/theme.png'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
  return (
    <div className='contact'>
    <div className="contact-title">
        <h1>Neem contact op</h1>
        <img src={theme} alt="" />
    </div>
    <div className="contact-section">
    <div className="contact-left">
        <h1>Lets Talk</h1>
        <p>Ik ben bezig met mijn opleiding en werk graag aan leuke projecten. Heb je iets waar ik aan mee kan doen? Laat het me weten!</p>
        <div className="contact-details">
        <div className="contact-detail">
           <img src={mail_icon} alt="" /> <p>bah68997@gmail.com</p>
        </div>
         <div className="contact-detail">
            <img src={call_icon} alt="" /> <p>+31 6 84305323</p>
        </div>
         <div className="contact-detail">
            <img src={location_icon} alt="" /> <p>Schiedam, Netherlands</p>
        </div>
        </div>
    </div>
    <form className="contact-right">
     <label htmlFor="">Naam</label>
     <input type="text" placeholder='Voer uw naam in' name='name' />
     <label htmlFor="">Email</label>
     <input type="email" placeholder='Voer uw e-mailadres in' name='email' />
     <label htmlFor="">Bericht</label>
     <textarea name="message" rows="8" placeholder='Voer uw bericht in'></textarea>
     <button type='submit' className="contact-submit">Verzenden</button>
    </form>
    </div>
    </div>
  )
}
export default Contact