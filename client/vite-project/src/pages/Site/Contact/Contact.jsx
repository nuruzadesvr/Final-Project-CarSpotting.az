import React, { useEffect, useState } from "react";
import "./Contact.scss";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Loading from "../../../components/Loading/Loading";
function Contact() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="contact__container">

          <div className="contact__main__box">
            <div className="contact__text">
              <h2>CONTACT US</h2>
              <div className="line"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Molestias, ducimus fugit maiores animi eaque, corrupti
                recusandae cum eum at, perferendis deleniti adipisci tempore.
                Totam, dolor id facilis beatae possimus optio.
              </p>
            </div>

            <div className="map__icon">

              <div className="contact__main__main">
                <div className="contact__main">
                  <div className="contact__box" id="addressbox">
                    <div className="icon__div">
                      <PlaceIcon className="contact__icon" />
                    </div>
                    <h5>Address</h5>
                    <p>Üzeyir Hacıbəyli, 6, Bakı, Səbail, AZ1000</p>
                  </div>

                  <div className="contact__box">
                    <div className="icon__div">
                      <EmailIcon className="contact__icon" />
                    </div>
                    <h5>Email:</h5>
                    <p>
                      <a href="mailto:carspotting.az1@gmail.com">
                        carspotting.az@gmail.com
                      </a>
                    </p>
                  </div>

                  <div className="contact__box">
                    <div className="icon__div">
                      <PhoneIcon className="contact__icon" />
                    </div>
                    <h5>Call us:</h5>
                    <p>
                      {" "}
                      <a href="tel:+994 70-244-25-55">+994 70-244-25-55</a>
                    </p>
                  </div>
                </div>
              </div>

              
              <div className="contact__map">
                
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.585159400442!2d49.84691167590484!3d40.373721871446556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307daeae63448d%3A0x14aa170350f846eb!2sPostal%20Office!5e0!3m2!1sen!2saz!4v1686864762542!5m2!1sen!2saz"
                    className="map__area"
                  ></iframe>
               
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Contact;
