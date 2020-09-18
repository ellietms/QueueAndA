import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Footer = () => {
  return (
    <footer className="font-small pt-4 footer">
      <div className="container">
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <span  className="btn-floating btn-fb mx-1">
              <i className="fab fa-facebook-f"> </i>
            </span>
          </li>
          <li className="list-inline-item">
            <span className="btn-floating btn-tw mx-1">
              <i className="fab fa-twitter"> </i>
            </span>
          </li>
          <li className="list-inline-item">
            <span className="btn-floating btn-gplus mx-1">
              <i className="fab fa-google-plus-g"> </i>
            </span>
          </li>
          <li className="list-inline-item">
            <span className="btn-floating btn-li mx-1">
              <i className="fab fa-linkedin-in"> </i>
            </span>
          </li>
          <li className="list-inline-item">
            <span className="btn-floating btn-dribbble mx-1">
              <i className="fab fa-dribbble"> </i>
            </span>
          </li>
        </ul>
      </div>
      <div className="copyright py-3">© 2020 Copyright:
    <a  className="copyRight2" href="https://cyf-queueanda.netlify.app/"> QueueAndA.com</a>
  </div>
    </footer>
  );
};

export default Footer;
