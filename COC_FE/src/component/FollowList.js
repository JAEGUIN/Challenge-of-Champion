import React, { useState, useEffect } from 'react';
import UserSimple from './UserSimple';

const FollowList = ({ showModal, setShowModal, modalData}) => {
    const [contentData, setContentData] = useState([]);
    // 모달이 열려 있는지 여부를 관리하는 state
    const [isOpen, setIsOpen] = useState(showModal);

    // 모달을 닫는 함수
    const closeModal = () => {
        setIsOpen(false);
        setShowModal(false); // 부모 컴포넌트에도 모달이 닫혔음을 알리기 위해 props로 전달된 setShowModal 함수 호출
    };

    useEffect(() => {        
        setContentData(modalData);
    }, [modalData]);
    return (
        showModal &&
        <div className="modal-overlay">
          <div className="modal_s">
            <button className="close-btn" onClick={closeModal}>X</button>
            {contentData.map((item) => (
                <UserSimple key={item.id} data={item}/>
            ))}
          </div>
        </div>
    );
};

export default FollowList;