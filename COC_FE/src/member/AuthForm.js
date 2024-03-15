import { Link, useNavigate } from 'react-router-dom';
import { Button } from "reactstrap";
import { useState } from 'react';
import axios from 'axios';

const textMap = {
    login: '로그인',
    register: '회원가입',
};

const AuthForm = ({ type }) => {

    const text = textMap[type];
    const [emailValue, setEmailValue] = useState(''); // email
    const [pwValue, setPwValue] = useState('');
    const [pwCheck, setPwCheck] = useState('');
    const [nickName, setNickName] = useState('');
    const [allAgreed, setAllagreed] = useState(false);
    
    const [agreements, setAgreements] = useState({
        termsAgreed: false,
        presnalInfoAgreed: false,
        marketingAgreed: false,
        ageAgreed: false,
    });

    // 페이지이동
    const navigate = useNavigate();

    // email 입력 시 
    const handleEmailChange = (e) => {
        setEmailValue(e.target.value);
    };

    // password 입력 시 
    const handlePWChange = (e) => {
        setPwValue(e.target.value);
    };

    // 비밀번호확인 입력 시 
    const handlePWCheckChange = (e) => {
        setPwCheck(e.target.value);
    };

    // nickname 입력 시 
    const handleNickNameChange = (e) => {
        setNickName(e.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          // Enter 키를 눌렀을 때 특정 버튼 클릭 동작 수행
          btnClick();
        }
    };

    const handlAgreeChange = (event) => {
        const { name, checked } = event.target;
        
        setAgreements((prevAgreements) => ({...prevAgreements, [name]: checked}));

        const allChecked = Object.values({...agreements, [name]: checked}).every((value) => value === true);
        setAllagreed(allChecked);
    };

    const handlAllAgreeCheck = (event) => {
        const { checked } = event.target;
    
        setAgreements((prevAgreements) => 
            Object.keys(prevAgreements).reduce(
                (newAgreements, agreementKey) => ({
                    ...newAgreements,
                    [agreementKey]: checked,
                }),
                {}
            )
        );
        setAllagreed(checked);
    };

    // 로그인 및 회원가입
    const btnClick = () => {
        if(type === 'register') // 회원가입
        {
            if(!emailCheck(emailValue)) {
                alert("올바른 이메일을 입력하세요.");
                return;
            }
            if(pwValue != pwCheck) {
                alert("비밀번호를 확인하세요");
                return;
            }
            if(!allAgreed) {
                alert("모든 약관에 동의하셔야 합니다");
                return;
            }

            if(!window.confirm("가입하시겠습니까?")) return;
            
            axios.post('member/join', {
                email: emailValue,
                password: pwValue,
                nickName: nickName,
                delYn: 'N',
                profileCont: "안녕하세요.",
                role:'user'
            })
            .then(response => {
                // 요청이 성공한 경우의 처리
                alert("성공적으로 회원가입하였습니다!");
                navigate('/');
            })
            .catch(error => {
                // 요청이 실패한 경우의 처리
                alert('에러 발생:', error);
            });
        } else { // 로그인
            axios.post('member/login', {
                email: emailValue,
                password: pwValue
            })
            .then(response => {
                // 요청이 성공한 경우의 처리
                alert("성공적으로 로그인하였습니다!");
                // jwt 및 user정보 저장
                const { token } = response.data;
                const { email } = response.data;
                const { role } = response.data;
                const { seq } = response.data;

                localStorage.setItem('token', token);
                localStorage.setItem('email', email);
                localStorage.setItem('role', role);
                localStorage.setItem('seq', seq);

                // 메인 페이지로 이동
                navigate('/home');
            })
            .catch(error => {
                // 요청이 실패한 경우의 처리
                alert('에러 발생:', error);
            });
        }
    }

    // 이메일 유효성 검사
    function emailCheck(email_address){     
        const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        if(!email_regex.test(email_address)){ 
            return false; 
        }else{
            return true;
        }
    }

    return (
        <div className='authDiv'>
            <h3 className="logo-area">{text}</h3>
            <form method='post'>
                <div>
                    <ul>
                        <li><span>이메일 *</span></li>
                        <li><input autoComplete='userEmail' name ="userEmail" placeholder='예) ex@gmail.com' value={emailValue} onChange={handleEmailChange} onKeyDown={handleKeyPress}/></li>
                    </ul>
                    <ul>
                        <li><span>비밀번호 *</span></li>
                        <li><input autoComplete='userPassword' name="userPassword" placeholder='영문, 숫자, 특수문자 8~16자' type='password' value={pwValue} onChange={handlePWChange} onKeyDown={handleKeyPress}/></li>
                    </ul>
                    {type === 'register' && (
                        <ul>
                            <li><span>비밀번호 확인 *</span></li>
                            <li><input
                            autoComplete='userPassword'
                            name='pwdConfirm'
                            placeholder=''
                            type='password' 
                            value={pwCheck} 
                            onChange={handlePWCheckChange}/></li>
                        </ul>
                    )}
                    {type === 'register' && (
                        <ul>
                            <li><span>닉네임 *</span></li>
                            <li><input
                            autoComplete='nickname' name='nickname' placeholder=''
                            value={nickName} 
                            onChange={handleNickNameChange}/></li>
                        </ul>
                    )}

                    {type === 'register' && (
                        <div className='agreeDiv'>
                            <ul>
                                <li>
                                    <input type='checkbox' className='agreeCheck' name='agree_check_all' checked={allAgreed} onChange={handlAllAgreeCheck} />
                                    <label>아래 약관에 모두 동의합니다.</label>
                                </li>
                                <li>
                                    <input type='checkbox' className='agreeCheck' name='termsAgreed' required checked={agreements.termsAgreed}
                                    onChange={handlAgreeChange} />
                                    <label>이용약관 필수 동의 <span><a href='/'>자세히 보기</a></span></label>
                                </li>
                                <li>
                                    <input type='checkbox' className='agreeCheck' name='presnalInfoAgreed' required checked={agreements.presnalInfoAgreed}
                                    onChange={handlAgreeChange}/>
                                    <label>개인정보 처리방침 필수 동의 <span><a href='/'>자세히 보기</a></span></label>
                                </li>
                                <li>
                                    <input type='checkbox' className='agreeCheck' name='marketingAgreed' checked={agreements.marketingAgreed}
                                    onChange={handlAgreeChange} />
                                    <label>마케팅 정보 수신 선택 동의 <span><a href='/'>자세히 보기</a></span></label>
                                </li>
                                <li>
                                    <input type='checkbox' className='agreeCheck' name='ageAgreed' required checked={agreements.ageAgreed}
                                    onChange={handlAgreeChange} />
                                    <label>만 14세 이상임에 필수 동의</label>
                                </li>
                            </ul>
                        </div>
                    )}
                    
                    <ul>
                        <li  style={{ float: 'left' }}>
                            <Button $cyan $fullWidth onClick={btnClick}>{text}</Button>
                        </li>
                        <li style={{ float: 'right' }}>
                            {type === 'login' ? (
                                <Link to="/register">회원가입</Link>
                            ) : (
                                <Link to="/">로그인</Link>
                            )}
                        </li>
                    </ul>
                </div>
            </form>
            <div className='footer'>
                
            </div>
        </div>
    );
};



export default AuthForm;