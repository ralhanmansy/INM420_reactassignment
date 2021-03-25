import '../App.css';
import contact from '../images/Contact.svg';
export default function Contact() {
  return (
    <div className="Contact">
      <img src={contact} className="Contact-img" alt="contact" />
      <h1>CONTACT ME</h1>
      <a href="mailto:mralhan1@myseneca.ca">mralhan1@myseneca.ca</a>
      <p>Mobile: +1-437-996-6997</p>
     </div>
  );
}

