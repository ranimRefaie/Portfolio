import "./ContactInfo.css";

const ContactInfo = ({ iconUrl, text }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">{iconUrl}</div>
      <p>{text}</p>
    </div>
  );
};

export default ContactInfo;
