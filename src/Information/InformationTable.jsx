// import React, { } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Information() {

  const handleChangeNotFound = (source) => {
    // toast("Not found account Linkedin");

    if (source === 'linkedin') {
      toast("Not found account Linkedin");
    } else if (source === 'twitter') {
      toast("Not found account Twitter");
    } else if (source === 'github') {
      toast("Not found account Github");
    }
  }

  return (
    <section className="resume-section" id="about-me">
      <div className="resume-section-content">
        <h1 className="mb-0">
          <span className="text-primary">Duong Long</span>
        </h1>
        <div className="subheading mb-5">
          Address: Vinh Thinh - Dai Ang - Thanh Tri - Ha Noi
        </div>
        <div className="subheading mb-5">
          Email: "
          <a href="mailto:name@email.com">nduonglong02@gmail.com</a>
          ".
        </div>
        <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
        <div className="social-icons">
          <a className="social-icon" href="#!"
            onClick={() => handleChangeNotFound('linkedin')}
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a className="social-icon" href="#!"
            onClick={() => handleChangeNotFound('github')} >
            <i className="fab fa-github" />
          </a>
          <a className="social-icon" href="#!"
            onClick={() => handleChangeNotFound('twitter')}
          >
            <i className="fab fa-twitter" />
          </a>
          <a className="social-icon" href="https://www.facebook.com/duonglong26">
            <i className="fab fa-facebook-f" />
          </a>
        </div>
        <ToastContainer />
        {/* {shouldOpenMyDiv &&
          <Popup
            onSelect={onSelect}
          />
        } */}
      </div>
    </section>
  );
}

export default Information;