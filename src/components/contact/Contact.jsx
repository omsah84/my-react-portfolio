import React from 'react'
import './contact.scss'

export default function Contact() {
  return (
    <div className='contact' id='contact'>
      <div id="contact">
        <div class="container">
            <div class="row">
                <div class="contact-left">
                    <h1 class="sub-title">Contact Me</h1>
                    <p><i class="fas fa-paper-plane"></i>huncyoms@gmail.com</p>
                    <p><i class="fas fa-phone-square-alt"></i>8986983491</p>
                    <div class="social-icons">
                        <a href="https://www.facebook.com/wzzg.gzzw" target="_blank"><i class="fa-brands fa-facebook"></i> </a>
                        <a href="https://twitter.com/OMSAH_84?s=08" target="_blank"><i class="fab fa-twitter-square"></i></a>
                        <a href="https://instagram.com/omsah_84?igshid=ZDdkNTZiNTM=" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/omsah84" target="_blank"><i class="fab fa-linkedin"></i></a>
                        <a href="https://github.com/omsah84" target="_blank"><i class="fa-brands fa-github"></i></a>
                    </div>
                    <a href="image/OMSAH.pdf" download class="btn btn2"> Download CV</a>
                </div>
                <div class="contact-right">
                    <form name="submit-to-google-sheet">
                        <input type="text" name="Name" placeholder="Your name" required/>
                        <input type="email" name="Email" placeholder="Your email" required/>
                        <textarea name="Message" rows="6" placeholder="Your message" required> </textarea>
                        <button type="submit" class="btn btn2"> Submit</button>
                    </form>
                    <span id="msg"></span>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}
