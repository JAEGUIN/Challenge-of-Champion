import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const UserSimple = (props) => {
    const [nickName,setNickName] = useState('');

    const navigate = useNavigate();

    // 상세 프로필로 이동한다
    const goProfil = () => {
        debugger;
        navigate('/userDetail', {state:{userSeq : props.data.seq} });
    };

    useEffect(() => {
       setNickName(props.data.nickName);
    },[]);

    return (
        <div className="d-flex userSimple">
            <img src="/img/sample.jpg" className="profileImg" onClick={goProfil}/>
            <div className="profileDesc">
            <div className="profileName">{nickName}</div>
            </div>
        </div>
    );
};

export default UserSimple;