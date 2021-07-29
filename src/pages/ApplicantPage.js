import React, { useState } from 'react';
import { Row, Col, Container, Form, Modal, Button } from 'react-bootstrap';
import axios from 'axios';

import DaumPostcode from 'react-daum-postcode';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const ApplicantPage = () => {
  const [picFlag, setPicFlag] = useState(false);
  const [videoFlag, setVideoFlag] = useState(false);

  const [userInfo, setUserInfo] = useState({
    name: '',
    teamName: '',
    cellphone: '',
    address: {
      zonecode: '',
      roadAddress: '',
      buildingName: '',
      details: '',
    }
  });
  const [popupShow, setPopupShow] = useState(false);

  const [selectPic, setPic] = useState({});
  const [selectVideo, setVideo] = useState({});

  const [isLoading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const onCompletePostCode = ({ zonecode, roadAddress, buildingName }) => {
    setPopupShow(false);
    setUserInfo({
      ...userInfo,
      address: {
        ...userInfo.address,
        zonecode: zonecode,
        roadAddress: roadAddress,
        buildingName: buildingName
      }
    })
  };
  const validation = () => {
    console.log('validation');
    console.log("###### userInfo ######", userInfo);
    let name = userInfo.name;
    let teamName = userInfo.teamName;
    let cellphone = userInfo.cellphone;
    let zonecode = userInfo.address.zonecode;
    let roadAddress = userInfo.address.roadAddress;
    let buildingName = userInfo.address.buildingName;
    let details = userInfo.address.details;

    let fileFlag = false;
    if (picFlag) {
      console.log('사진 응모');
      if (selectPic.pic1 == undefined && selectPic.pic2 == undefined && selectPic.pic3 == undefined) {
        console.log('사진이 모두 비어있음');
        fileFlag = true;
      }
    } else {
      console.log('동영상 응모');
      if (selectVideo == undefined) {
        console.log('동영상이 모두 비어있음');
        fileFlag = true;
      }
    }
    console.log('name : ', name == '');
    console.log('teamName : ', teamName == '');
    console.log('cellphone : ', cellphone == '');
    console.log('zonecode : ', zonecode == '');
    console.log('roadAddress : ', roadAddress == '');
    console.log('buildingName : ', buildingName == '');
    console.log('details : ', details == '');

    if (name == '' || teamName == '' || cellphone == '' ||
      zonecode == '' || roadAddress == '' || buildingName == '' || details == '' || fileFlag) {
      alert('입력 정보는 비어있을 수 없습니다');
      return true;
    } else {
      return false;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // 필드가 비어있으면 실행하지 않음
    if (validation()) {
      console.log('필드가 비어있음');
      return;
    }

    const formData = new FormData();

    if (picFlag) {
      if (setPic['pic1']) {
        formData.append(
          "file",
          selectPic.pic1
        );
      }
      if (setPic['pic2']) {
        formData.append(
          "file",
          selectPic.pic2
        );
      }
      if (setPic['pic3']) {
        formData.append(
          "file",
          selectPic.pic3
        );
      }
    }
    if (videoFlag) {
      formData.append(
        "file",
        selectVideo
      )
    }

    const config = {
      headers: {
        "content-type": "multipart/form-data"
      },
      onUploadProgress: progressEvent => {
        let cureentProgress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        console.log(cureentProgress);
        setProgress(cureentProgress);
      }
    };
    setLoading(true);
    axios.post(`http://175.119.215.48:8080/api/smt/v1/uploadCamp`, formData, config).then((response) => {
      console.log(response);
      setLoading(true);
      if (response.status == 200) {
        alert('응모하셨습니다!');
        setLoading(false);
      } else {
        alert('실패');
        setLoading(false);
      }
    }).catch(e => {
      console.log(e);
      setLoading(false);
    });
  }
  return (
    <Container>
      <h3 className="text-center mt-3 mb-3">참가 신청하기</h3>
      <Container style={{
        border: "2px solid green",
        borderRadius: "5px",
        padding: "0px 15px"
      }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <h5 className="mb-3 mt-3">종목 신청하기</h5>
            <Form.Check
              inline
              label="사진"
              type="radio"
              name="subject"
              id="pic"
              onChange={() => {
                setPicFlag(true);
                setVideoFlag(false);
              }}
            />
            <Form.Check
              inline
              label="동영상"
              type="radio"
              name="subject"
              id="video"
              onChange={() => {
                setPicFlag(false);
                setVideoFlag(true);
              }}
            />
          </Form.Group>
          {(picFlag || videoFlag) &&
            <div>
              <Row className="mb-3">
                <h5>인적사항</h5>
                <Form.Group as={Col} className="mb-3">
                  <Form.Label>이름</Form.Label>
                  <Form.Control type="text" placeholder="홍길동"
                    onChange={(e) => {
                      let name = e.target.value;
                      setUserInfo({ ...userInfo, name: name });
                    }} />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>전화번호</Form.Label>
                  <Form.Control type="text" placeholder="-를 제외한 11자리 숫자" value={userInfo.cellphone}
                    onChange={(e) => {
                      let cellphone = e.target.value;
                      if (cellphone != '') {
                        if (cellphone != 0) {
                          if (!Number(cellphone) || cellphone.length == 12) {
                            return;
                          }
                        }
                      }
                      console.log(cellphone);
                      setUserInfo({ ...userInfo, cellphone: cellphone });
                    }} />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>팀명</Form.Label>
                  <Form.Control type="text" placeholder="홍길동"
                    onChange={(e) => {
                      let teamName = e.target.value;
                      setUserInfo({ ...userInfo, teamName: teamName });
                    }} />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>주소</Form.Label>
                <Row>
                  <Col>
                    <Form.Control
                      type="text"
                      placeHolder="우편번호"
                      value={userInfo.address.zonecode}
                      onClick={() => setPopupShow(!popupShow)}
                      onChange={() => console.log('')}
                    />
                  </Col>
                  <Col>
                    <Button
                      className="border bg-custom-red mb-4"
                      onClick={() => setPopupShow(!popupShow)}
                    >
                      우편번호 찾기
                    </Button>
                  </Col>
                </Row>

                <Form.Control
                  type="text"
                  placeHolder="주소"
                  onClick={() => setPopupShow(!popupShow)}
                  value={
                    userInfo.address.roadAddress &&
                    `${userInfo.address.roadAddress}(${userInfo.address.buildingName})`
                  }
                  className="mb-3"
                />
                <input
                  type="text"
                  className="form-in-class"
                  placeHolder="상세주소"
                  onChange={(e) => {
                    let details = e.target.value;
                    setUserInfo({ ...userInfo, address: { ...userInfo.address, details: details } });
                  }}
                />

              </Form.Group>
              {/* <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>파일을 선택해주세요</Form.Label>
                <Form.Control type="file" onChange={(e) => {
                  setFile(e.target.files[0]);
                }} />
              </Form.Group> */}
            </div>
          }
          {picFlag && <div>
            <Form.Group className="mb-3">
              <Form.Label>이미지를 선택해주세요 (최대 3장)</Form.Label>
              <Form.Control type="file" onChange={(e) => {
                setPic({ ...selectPic, pic1: e.target.files[0] });
              }} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="file" onChange={(e) => {
                setPic({ ...selectPic, pic2: e.target.files[0] });
              }} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="file" onChange={(e) => {
                setPic({ ...selectPic, pic3: e.target.files[0] });
              }} />
            </Form.Group>
          </div>}
          {videoFlag && <div>
            <Form.Group className="mb-3">
              <Form.Label>동영상을 선택해주세요</Form.Label>
              <Form.Control type="file" onChange={(e) => {
                setVideo(e.target.files[0]);
              }} />
            </Form.Group>
          </div>}
          {
            (picFlag || videoFlag) && <input type="submit" value="응모하기" className="mb-3"></input>
          }
          <Modal
            show={popupShow}
            onHide={() => setPopupShow(false)}
            size="lg"
            centered
          >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <DaumPostcode onComplete={onCompletePostCode} />
            </Modal.Body>
          </Modal>
          <Modal
            show={isLoading}
            onHide={() => setLoading(false)}
            size="lg"
            centered
          >
            <Modal.Header>로딩중입니다. 잠시기다려주세요.</Modal.Header>
            <Modal.Body>
              <CircularProgressbar
                text={progress + "%"}
                value={progress}
                backgroundColor="#ccc"
              />
            </Modal.Body>

          </Modal>
        </Form>
      </Container>
    </Container>
  )
}
export default ApplicantPage;