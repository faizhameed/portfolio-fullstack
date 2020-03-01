import React,{useState,useEffect} from "react";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Element } from "react-scroll";

import "./Contact.css";

export default function ContactForm() {
  const [mailSuccess, setMailSuccess] = useState(true)
  const [triggerMail, setTriggerMail] = useState(false)
  useEffect(()=>{
    if(triggerMail){
    if(!mailSuccess ){
      alert("Error Sending message")
    } else if(mailSuccess){
      alert("Message Sent!")
      document.getElementById("contact-form").reset();
    }}
  },[triggerMail])
  const handleSubmit = e => {
    
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
   
    /*  let headers = new Headers();
    headers.append(
      "Access-Control-Allow-Origin",
      "http://localhost:3002/email"
    );
    headers.append("Access-Control-Allow-Credentials", "true"); */
    /*  axios({
      method: "POST",
      url: "URLOFBACKEND/email",
      data: {
        name: name,
        email: email,
        message: message
      } 
    }).then(response => {
      console.log("response:", response);
      if (response.data.message === "success") {
        alert("Message Sent.");
        resetForm();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });*/
    var endpoint =
      "https://h25w2ue6y0.execute-api.ap-south-1.amazonaws.com/default/ContactFormLambda";

    var body = {
      email: email,
      subject: `name:${name}  subject:${subject}`,
      message: message
    };
    var lambdaRequest = new Request(endpoint, {
      method: "POST",
      // Quick note: 'no-cors' mode is for development on localhost only!
      mode: "no-cors",
      body: JSON.stringify(body)
    });
    fetch(lambdaRequest)
      // This is where you can handle errors. This is just an example, so we won't cover that.
      .then(response => console.log(response))
      .catch(err => {
        console.log(err)
      setMailSuccess('false')
       setTriggerMail(true)
    });
  };
  return (
    <React.Fragment>
      <Typography
        variant="h2"
        display="block"
        align="center"
        id="contact-us"
        style={{
          margin: "1rem",
          fontSize: "1.6rem",
          textTransform: "uppercase",
          fontFamily: '"Bungee", cursive'
        }}
      >
        <Element name="contact-me">Contact Me</Element>
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px"
        }}
      >
        <form
          onSubmit={e => handleSubmit(e)}
          className="contact-form"
          id="contact-form"
          style={{
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            padding: "25px",
            borderRadius: "10px"
          }}
        >
          <TextField
            label="Name"
            type="text"
            margin="normal"
            variant="outlined"
            id="name"
            placeholder="Enter your name"
          />
          <TextField
            label="Email"
            type="email"
            id="email"
            margin="normal"
            variant="outlined"
            placeholder="Enter your email"
          />
          <TextField
            label="Subject"
            type="text"
            id="subject"
            margin="normal"
            variant="outlined"
            placeholder="Enter the subject"
          />

          <TextField
            label="Message"
            id="message"
            multiline
            margin="normal"
            variant="outlined"
            placeholder="Enter your message"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              size="large"
              type="submit"
              style={{ width: "50%", marginTop: "15px" }}
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
