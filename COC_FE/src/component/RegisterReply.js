import React, { useState } from "react";
import { Button } from "reactstrap";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const RegisterReply = (props) => {
    const [textValue, setTextValue] = useState('');

    //jwt
    const token = localStorage.getItem('token');

    // 페이지이동
    const navigate = useNavigate();

    // 답글 내용 변경 시 
    const handleTextChange = (e) => {
        setTextValue(e.target.value);
    };

    const registReply = () => {
        if(!window.confirm("해당 답글을 등록하시겠습니까?")) {
            return;
        }

        axios.post('reply/regi', {
            content: textValue,
            boardSeq : props.boardSeq,
            userSeq : localStorage.getItem('seq')
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            // 요청이 성공한 경우의 처리
            alert("성공적으로 저장하였습니다!");
            window.location.reload();
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

    return (
        <div className="d-flex registerReply">
            <input type="text" value={textValue} onChange={handleTextChange}/>
            <Button className="insertReply" onClick={registReply}>입력</Button>
        </div>
    );
};

export default RegisterReply;