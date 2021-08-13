import React from "react";
import Navbar from "../components/Navbar/Navbar";

const Home = (props) => {
  const styles = {
    header: {
      textAlign: "center",
    },
  };
  return (
    <div>
      <Navbar />
      <div style={styles.header}>
        <em>
          <h2>Love's Auto</h2>
        </em>
      </div>
    </div>
  );
};

export default Home;
