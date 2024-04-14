import ContactInfo from "../ContactInfo/ContactInfo";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import ContactForm from "../ContactForm/ContactForm";
import { MdPhoneInTalk } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import TitleSection from "../TitleSection/TitleSection";
const Contact = () => {
  return (
    <section id="content" className="content-container">
      <TitleSection title="Contact Me" />

      <div className="contact-content">
        <div className="contact-left" style={{ flex: 1 }}>
          <p>
            I'm currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>
          <div className="">
            <ContactInfo iconUrl={<MdPhoneInTalk />} text="+9638 1614 073" />
            <ContactInfo
              iconUrl={<MdOutlineEmail />}
              text="ranemalre@gmail.com"
            />
            <ContactInfo iconUrl={<IoLocationSharp />} text="Syria-Damascuse" />
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
