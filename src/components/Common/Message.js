import React from "react";

const Message = ({ text }) => (
  <h2
    style={{
      backgroundColor: "#24aa87",
      borderRadius: 15,
      padding: 10,
      marginTop: 20,
      marginBottom: 30,
      marginLeft: 40,
      color: "whitesmoke",
      textAlign: "center",
      width: "20%",
    }}
  >
    {text}
  </h2>
);

export default Message;
