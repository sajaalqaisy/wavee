import React, { useRef, useState } from "react";
import "../css/contact.css";
import image2 from '../media/image2.png';
export default function Contact() {
  const fullnameRef = useRef();
  const emailRef = useRef();
  const massageRef = useRef();
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const fullname = fullnameRef.current.value;
    const email = emailRef.current.value;
    const massage = massageRef.current.value;

    const newErrors = {};
    if (fullname.length < 9) {
      newErrors.fullname = "Full name must be at least 9 characters long";
    }
    if (massage.length < 8) {
      newErrors.massage = "Message must be at least 8 characters long";
    }
    if (!email.includes("@")) {
      newErrors.email = "Email must contain @";
    }

    setErrors(newErrors);

    if (newErrors.fullname) fullnameRef.current.focus();
     if (newErrors.email) emailRef.current.focus();
     if (newErrors.massage) massageRef.current.focus();
  };

  return (
    <div
              style={{
                backgroundImage: `url(${image2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                   

               
              }}
            >
    <div className="contact">
      <div className="info">
        <h2>Let's Talk</h2>
        <p>
          Have questions, feedback, Fill out the form and we’ll get back to you shortly.
        </p>
        <br></br>
        <p>
            📍 Address:  Irbid , Jordan  
        </p>
        <p>
          📞 Phone:0799714064
        </p>
        <p>
            📧 Email: support@wave.com
        </p>
      </div>

      <div className="form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <label>Full Name</label>
          <input type="text" ref={fullnameRef} />
          {errors.fullname && <p className="error">{errors.fullname}</p>}

          <label>Email</label>
          <input type="email" ref={emailRef} />
          {errors.email && <p className="error">{errors.email}</p>}

          <label>Message</label>
          <input  ref={massageRef}></input>
          {errors.massage && <p className="error">{errors.massage}</p>}

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
    </div>
  );
}
