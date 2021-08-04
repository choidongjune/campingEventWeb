import React from 'react';
import mainImage from '../image/mainPage.jpg';
import campingImage from '../image/camping.jpg'
const MainPage = () => {
  return(
    <div style={{
      height: "100vh",
      backgroundImage: `url(${campingImage})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition:"center center",
      backgroundSize: "cover",
      position:"relative",
    }}>
      <div style={{
        color: "#fff",
        border: "5px solid #fff",
        borderRadius:"15px",
        padding: "10px 5px",
        textAlign: "center",
        margin:"0 auto",
        top:"50%",
        left:"50%",
        transform: "translate(-50%,-50%)",
        position: "absolute",
        backgroundColor: "#0f52ba",
        }}
        className="col-lg-3 col-10"><p className="h1">가족캠프, 위드 코로나19</p><p>A Family capming with COVID-19</p></div>
    </div>
  );
}
export default MainPage;