import React, { useRef } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import axios from "axios";

const ContactPage = () => {
  const captcha = useRef();
  const nameBox = useRef();
  const emailBox = useRef();
  const messageBox = useRef();
  const submit = useRef();
  const reset = useRef();

  const submitClick = (e) => {
    const captchaValue = captcha.current.value();

    if (captchaValue) {
      alert("Captcha was not correctly identified");
      return;
    }

    const name = nameBox.current.value.trim();
    const email = emailBox.current.value.trim();
    const message = messageBox.current.value.trim();
    const gRecaptchaResponse = captcha.current.value;

    // enable spinner
    //window.chicagoVeg.spinner.spin($('#sending-message-spinner')[0]);
    submit.current.disabled = true;

    axios
      .post('../php/form.php', {
        data: {
          name,
          email,
          message,
          "g-recaptcha-response": gRecaptchaResponse,
        },
      })
      .then((response) => {
        nameBox.value = "";
        emailBox.value = "";
        messageBox.value = "";

        alert("Message Sent - Thank You!");
        console.log(response);
      })
      .catch((error) => {
        alert("message was not sent");
        console.error(error);
      })
      .then(() => {
        // window.chicagoVeg.spinner.stop(); // stop spinner
        submit.current.disabled = false;
      });
  };

  return (
    <Layout>
      <SEO title="Contact" />
      <section>
        <article className="page">
          <h2>Contact Us</h2>
          <div className="contact-form">
            <form id="contactForm">
              <div className="form-input">
                <div>
                  <label htmlFor="nameBox">Name</label>
                  <input
                    name="name"
                    required=""
                    id="nameBox"
                    className=""
                    placeholder="name"
                    ref={nameBox}
                  />
                </div>
                <div>
                  <label htmlFor="emailBox">E-Mail</label>
                  <input
                    name="email"
                    type="email"
                    required=""
                    id="emailBox"
                    className=" "
                    placeholder="email"
                    ref={emailBox}
                  />
                </div>
                <div>
                  <label htmlFor="messageBox">Message</label>
                  <textarea
                    id="messageBox"
                    name="message"
                    required=""
                    className=" "
                    cols="20"
                    rows="5"
                    placeholder="message"
                    ref={messageBox}
                  ></textarea>
                </div>
                <div>
                  <div
                    className="g-recaptcha"
                    data-sitekey="6LdW6RQTAAAAALjqcbQg9AG7S8-nmJGJXe_g3ft4"
                    data-theme="light"
                    ref={captcha}
                  ></div>
                </div>
              </div>
              <div className="form-control">
                <input
                  id="submit"
                  name="submit"
                  type="submit"
                  value="Submit"
                  ref={submit}
                  onClick={(e) => submitClick(e)}
                />
                <input
                  id="reset"
                  type="reset"
                  name="reset"
                  value="Reset"
                  ref={reset}
                />
              </div>
            </form>
          </div>
          <div>
            <div id="messageSent" style={{ display: "none" }}>
              <span className="">Message was sent</span>
            </div>
            <div id="messageNotSent" style={{ display: "none" }}>
              <span className="">
                Message was not sent. Ensure you are connected to the internet{" "}
              </span>
            </div>
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default ContactPage;
