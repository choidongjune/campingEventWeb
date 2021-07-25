import React from 'react';
import mainImage from '../image/mainPage.jpg';
const MainPage = () => {
  return(
    <div style={{
      height: "100vh",
      backgroundImage: `url(${mainImage})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition:"center center",
      backgroundSize: "cover",
      position:"relative"
    }}>
      <div style={{
        color: "white",
        border: "5px solid white",
        padding: "10px 0px",
        textAlign: "center",
        margin:"0 auto",
        top:"50%",
        left:"50%",
        transform: "translate(-50%,-50%)",
        position: "absolute",
        }}
        className="col-lg-3 col-10"><p className="h1">대덕구 어울림 가족캠프</p></div>
    </div>
  );
}
export default MainPage;