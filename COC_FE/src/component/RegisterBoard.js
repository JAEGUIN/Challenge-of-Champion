import React,{useState} from "react";
import { Button } from "reactstrap";

const RegisterBoard = () => {

    const [titleValue, setTitleValue] = useState('');
    const [textValue, setTextValue] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const handleTitleChange = (e) => {
        setTitleValue(e.target.value);
    };

    const handleTextChange = (e) => {
        setTextValue(e.target.value);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
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
                    <input type="text" className="registerTitle" placeholder="제목" value={titleValue} onChange={handleTitleChange} />
                    <input type="text" className="registerText" placeholder="내용" value={textValue} onChange={handleTextChange} />
                </div>
                <input type="file" className="registerFile" onChange={handleFileChange} />
            </div>

            <div className="d-flex registBtn">
                <Button className="registCancel">취소</Button>
                <Button className="registerBtn">등록/수정</Button>
            </div>
        </div>
    );
};

export default RegisterBoard;