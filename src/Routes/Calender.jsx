import React from "react";
export const Calender = () => {
  return (
    <div
      className="box"
      style={{
        border: "1px solid  #f0f0f0",
        width: "85%",
        margin: "auto",
        marginBottom: "50px",
        paddingTop: "25px",
        backgroundColor: "rgba(245, 218, 178, 0.158)",
        transition: " all 0.3s ease",
        backgroundImage: 
        "url('https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
      }}
    >
      <div>
        <h1 style={{ textAlign: "center", marginBottom: "20px",color:"white" }}>
          My Github Calender
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        <img
          src="https://ghchart.rshah.org/bhaveshkumar96"
          alt="Bhavesh kumar"
        />
      </div>
      <div
        style={{
          marginTop: "60px",
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        <img
          alt="jay"
          src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=bhaveshkumar96"
          align="center"
        />
      </div>
    </div>
  );
};
