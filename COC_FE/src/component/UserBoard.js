import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';
import UserBook from './UserBook';

const UserBoard = () => {
    const [boardList, setBoardList] = useState([]);
    const [userName, setUserName] = useState('');
    // jwt
    const token = localStorage.getItem('token');
    const {nick} = useOutletContext();
    
    const selectBoard = async () => {
        if(nick == "") return;
        try { // 해당 계정에서 쓴 게시물 조회
        const response = await axios.get('/board', {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                userName: nick,
                pageNum:0
            }
        });
        setBoardList(prevData => [...prevData, ...response.data]);
        
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }

    useEffect(() => {
        if (nick) {
            selectBoard();
        }
    }, [nick]);

    return (
        <div>
            {boardList.map((item) => (
                <UserBook key={item.seq} data={item}/>
            ))}
        </div>
    );
};

export default UserBoard;