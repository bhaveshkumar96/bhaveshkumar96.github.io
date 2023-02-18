import react from "react";

export const Stats = () => {
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
        "url('https://images.pexels.com/photos/2440021/pexels-photo-2440021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
      }}
     
    >
      <h1 style={{ textAlign: "center", marginBottom: "10px",color:"whitesmoke" }}>
        My Statistics
      </h1>
      <p style={{ display: "flex", justifyContent: "center" }}>
        &nbsp;
        <img
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=bhaveshkumar96&show_icons=true&locale=en"
          alt="Bhavesh Kumar"
        />
      </p>

      <p
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "50px",
        }}
      >
        <img
          align="center"
          src="https://github-readme-streak-stats.herokuapp.com/?user=bhaveshkumar96&"
          alt="Bhavesh Kumar"
        />
      </p>
    </div>
  );
};
