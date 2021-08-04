import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import familyImage from '../image/family.png';
import ranking from '../image/ranking.png';
const listStyle = {
  listStylePosition : "inside",
  textIndent: "-20px",
  paddingLeft: "20px"
}

const ContentsPage = () => {
  const [heightStyle, setHeightStyle] = useState({
  height: "50vh",
  alignItems: "center",
})
  useEffect(()=>{
    let width = window.innerWidth;
    if(width<=765){
      setHeightStyle({
        height:"",
        alignItems: "center",
        marginBottom: "50px"
      })
    }
  },[])
  return(
    <Container>
      <div className="row" style={heightStyle}>
        <div className="col-md-6">
          <img src={familyImage} width="100%"/>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <h4>참가방법</h4>
          <li className="mb-1" style={listStyle}>응모 부분 : 2개 부문</li>
          <li className="mb-1" style={listStyle}>사진부문 : 가족당 3장이내 원본 파일</li>
          <li className="mb-1" style={listStyle}>동영상부문 : 가족당 2분이내 1영상 원본파일</li>
          <li className="mb-1" style={listStyle}>응모기간 : 2021.08.09 ~ 2021.08.31</li>
          <li className="mb-1" style={listStyle}>응모자격 : 대전광역시 거주자로써 2명이상으로 구성된 가족</li>
          <li className="mb-1" style={listStyle}>접수된 작품은 일체 반환치 않으며, 초상권 및 저작권은 주최측에 귀속됨</li>

        </div>
      </div>
      <div className="row" style={heightStyle}>
        <div className="col-md-6">
          <img src={ranking} width="70%" style={{marginLeft: "15%"}}/>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <h4>시상내역</h4>
          <li className="mb-1" style={listStyle}>15가족 (전체대상1, 부문별 금1, 은1, 동1, 입선4)</li>
          <li className="mb-1" style={{color: "#0f52ba", fontWeight: 700,listStylePosition : "inside", textIndent: "-25px", paddingLeft: "25px"}}>관광상품권 / 대덕 e로움 마일리지 / 캠핑장 무료 이용권 등 시상품</li>
          <li className="mb-1" style={listStyle}>입상작은 대덕구청, 대덕문화체육관 등 공공시설 활용하여 전시 또는 방영 예정</li>
        </div>
        
      </div>
    </Container>
  )
}
export default ContentsPage;