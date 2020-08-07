import React from "react";
import image4 from "./image4.svg";
import image5 from "./image5.svg";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="footer">
      <h1 className="head">Contact Us</h1>;
      <div className="foot">
        <div className="between">
          Email: Xyz123@gmail.com <br /> <br />
          Contact Number : 1236547896 <br /> <br />
          Follow us on:
          <img className="img" src={image4} alt="sample" />
          <img className="img" src={image5} alt="sample" />
        </div>
        <form className="two">
          Name: <input type="text" id="str1" name="string" /> <br />
          Message: <input type="text" id="str2" name="string" /> <br />
          <input type="submit" value="Submit" onclick="" />
        </form>
      </div>
    </div>
  );
};
export default Contact;
