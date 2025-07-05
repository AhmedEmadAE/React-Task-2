import React from "react";

export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background-color: #1abc9c;
          color: white;
          padding: 40px 0 20px 0;
        }

        .footer h5 {
          color: white;
          margin-bottom: 20px;
        }

        .footer a {
          color: #e0f7f1;
          text-decoration: none;
          transition: color 0.3s ease;
          display: block;
          margin-bottom: 8px;
        }

        .footer a:hover {
          color: #ffffff;
        }

        .footer .social-icons i {
          font-size: 20px;
          margin-right: 15px;
          transition: transform 0.3s ease, color 0.3s ease;
          cursor: pointer;
        }

        .footer .social-icons i:hover {
          transform: scale(1.2);
          color: #ffffff;
        }

        .footer-bottom {
          border-top: 1px solid #ffffff44;
          margin-top: 30px;
          padding-top: 15px;
          text-align: center;
          font-size: 14px;
        }
      `}</style>

      <footer className="footer">
        <div className="container px-4">
          <div className="row">
            <div className="col-md-4">
              <h5>About Us</h5>
              <p>We provide high quality products with great service. Your satisfaction is our priority.</p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <a href="#">Home</a>
              <a href="#">Products</a>
              <a href="#">Categories</a>
              <a href="#">Contact</a>
            </div>
            <div className="col-md-4">
              <h5>Follow Us</h5>
              <div className="social-icons">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-tiktok"></i>
                <i className="fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>

          <div className="footer-bottom mt-4">
            &copy; 2025 Ahmed Emad. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
