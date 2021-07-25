import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import tmpImage from '../image/tmpImage.png';
const ContentsPage = () => {
  const [imageFlag, setFlag] = useState(true);
  useEffect(()=>{
    let width = window.innerWidth;
    if(width<=765){
      setFlag(false);
    }
  })
  return(
    <Container>
      <div className="row" style={{
        height:"50vh",
        alignItems: "center",
      }}>
        {imageFlag&&<div className="col-md-6">
          <img src={tmpImage} width="100%"/>
        </div>}
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <h4>참가방법</h4>
          <p>응모 부분 : 2개 부문</p>
          <p>사진부문 : 가족당 3장이내 JPG파일 (비율 16:9)</p>
          <p>동영상부문 : 가족당 2분이내 1영상 AVI파일 (비율 16:9)</p>
          <p>응모기간 : 2021.08.02 ~ 2021.08.31</p>
          <p>응모자격 : 대전광역시 거주자로써 2명이상으로 구성된 가족</p>

        </div>
      </div>
      <div className="row" style={{
        height:"50vh",
        alignItems: "center",
      }}>
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <h4>시상내역</h4>
          <p>21가족 (전체대상1, 부문별 금1, 은2, 동3, 입선 4</p>
          <p>상장, 캠핑장/수장레져 시설 무료이원권, 캠핑용품 등 시상품</p>
          <p>입상작은 대덕구청, 대덕문화체육관 등 공공시설 활용하여 전시 또는 방영 예정</p>
          <p>응모기간 : 2021.08.02 ~ 2021.08.31</p>
          <p>응모자격 : 대전광역시 거주자로써 2명이상으로 구성된 가족</p>
        </div>
        {imageFlag&&<div className="col-md-6">
          <img src={tmpImage} width="100%"/>
        </div>}
      </div>
    </Container>
  )
}
export default ContentsPage;