import "./Footer.css"
import plogo from "./img/plogo1.png"
import React, { useRef,useState } from "react"
import "./Contact.css"
import emailjs from "@emailjs/browser";

const Result =() => {
    return(
      <p>Sent Successfully</p>
    )
  }

const Footer = () => {
    const [result, showResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7utvrsp",
        "template_k6bervc",
        form.current,
        "cbPnUhSJjbUdeHOtQ"
      )
      
      .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
    showResult(true);
}
  return (
    <>
    <footer>
        <div className='container grid'>
            <div className='box'>
            <img src={plogo} alt='' />
            <p>Experienced Freelancer with expertise in UI design, SEO, Digital Marketing, and Lead Generation. With over 4 years of experience, I create visually appealing websites, implement SEO strategies, and maximize brand visibility using social media. I aim to provide high-quality solutions for clients.</p>
               <br />
                <div>
                <a href='https://www.facebook.com/supriyasudir5' target='_blank'>
                  <button className='btnnn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button></a> 
                  &nbsp;
                  <a href='https://www.instagram.com/aashi__16__/' target='_blank'>
                  <button className='btnnn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button> </a>

                  
                  <a href='https://www.linkedin.com/in/supriya-sudir-a494b3115/' target='_blank'>
                  <button className='btnnn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button> </a>
                  <a href='https://www.youtube.com/@AashiSupriyaSudir' target='_blank'>
                  <button className='btnnn_shadow'>
                    <i class='fab fa-youtube'></i>
                  </button> </a>
                  <a href='https://twitter.com/SupriyaSudir101' target='_blank'>
                  <button className='btnnn_shadow'> 
                    <i class='fab fa-twitter'></i>
                    
                  </button></a>
                  &nbsp;

                  
                </div>
            </div>

            <div className='box'>
                <h2>Quick Links</h2>
                <ul>
                <a href='https://supriya101.github.io/portfolio/#home'><li>Home</li></a>
                    <a href='https://supriya101.github.io/portfolio/#about'><li>About</li></a>
                    <a href='https://supriya101.github.io/portfolio/#resume'><li>Work Experience</li></a>
                    <a href='https://supriya101.github.io/portfolio/#projects'><li>Projects</li></a>
                    <a href='https://supriya101.github.io/portfolio/#certifications'><li>Certifications</li></a>
                    <a href='https://supriya101.github.io/portfolio/#blogs'><li>Blogs</li></a>
                    <a href='https://supriya101.github.io/portfolio/#contact'><li>Contact</li></a>

                </ul>
            </div>

            
                <div className='box'>
                    <h2>Contact Me</h2>
                    <form ref={form} onSubmit={sendEmail}>
                <div className='f_flex'>
                  <div className='input'>
                    <span>YOUR NAME</span>
                    <input type='text' name='user_name'/>
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='user_email'  />
                </div>
                <div className='input'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='user_phone'/>
                  </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message'></textarea>
                </div>
                <button className='btnnn_shadow '>
                SEND MESSAGE
                </button>

                <div className='ros'>
                      {result ? <Result /> : null}
                </div>
              </form>
                </div>

                    <div className='box'>
                        <h2>Get in Touch</h2>
                        <p>If you are seeking a Website Designer, SEO Specialist, Digital Marketing Executive, or Freelancer, I am confident in my ability to meet and exceed your expectations. </p>

                    
                    <div className='icon'>
                        <i className='fas fa-location-arrow'></i>
                        <label htmlFor=''>Location: Dubai, UAE</label>
                    </div>
                    <div className='icon'>
                        <i className='fa fa-phone'></i>
                        <a href="tel:+971552099764" style={{color:'#ffffff'}}>Phone: +971 552099764</a>
                        </div>

                    <div className='icon'>
                        <i className='fa fa-envelope'></i>
                        <a href="mailto:supriyasudir@gmail.com" style={{color:'#ffffff'}}>Email: supriyasudir@gmail.com</a>
                        </div>

                    </div>
                    </div>

                    <div className='legal container'>
                        <p>Copyright @2026. All rights reserved.</p>
                        <label htmlFor=''>
                            Design & Developed by <span>Supriya Sudhir</span>
                        </label>
                    </div>
    </footer>
    
    </>
  )
}

export default Footer