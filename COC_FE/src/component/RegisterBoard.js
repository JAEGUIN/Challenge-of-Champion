import React,{useState} from "react";
import { Button } from "reactstrap";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterBoard = ({ history, location, match }) => {

    const [textValue, setTextValue] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    // 페이지이동
    const navigate = useNavigate();

    const handleTextChange = (e) => {
        setTextValue(e.target.value);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const registBoard = () => {

        if(!window.confirm("해당 게시판을 등록하시겠습니까?")) {
            return;
        }

        axios.post('board/regi', {
            content: textValue,
            category: "b1",
            "userSeq" : 1
        })
        .then(response => {
            // 요청이 성공한 경우의 처리
            alert("성공적으로 저장하였습니다!");
            goHome();
        })
        .catch(error => {
            // 요청이 실패한 경우의 처리
            alert('에러 발생:', error);
        });
    };

    // 홈으로 돌아가기
    const goHome = () => {
        navigate('/');
    };

    const handleSubmit = () => {
        // 여기에서 입력된 텍스트(textValue)와 선택된 파일(selectedFile)을 활용하여 작업 수행
        console.log('Text Value:', textValue);
        console.log('Selected File:', selectedFile);
    };

    return (
        <div className="registerBoard">
            <div className="d-flex">
                <img src="/img/sample.jpg" className="contentProfileImg"/>
                <div className="profileDesc d-flex">
                    <div className="profileName">대한민국</div>
                    <div className="contentDate right-align-container"> 2024/01/01 </div>
                </div>
            </div>

            <div className="registerContent">
                <div className="registerTextWrapper">
                    <input type="text" className="registerText" placeholder="내용" value={textValue} onChange={handleTextChange} />
                </div>
                <input type="file" className="registerFile" onChange={handleFileChange} />
            </div>

            <div className="d-flex registBtn">
                <Button className="registCancel" onClick={goHome}>취소</Button>
                <Button className="registerBtn" onClick={registBoard}>등록/수정</Button>
            </div>
        </div>
    );
};

export default RegisterBoard;