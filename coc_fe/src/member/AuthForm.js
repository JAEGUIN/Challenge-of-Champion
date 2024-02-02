import { Link } from 'react-router-dom';
import { Button } from "reactstrap";
import { useState } from 'react';


const textMap = {
    login: '로그인',
    register: '회원가입',
};

const AuthForm = ({ type }) => {

    const text = textMap[type];

    const [allAgreed, setAllagreed] = useState(false);

    const [agreements, setAgreements] = useState({
        termsAgreed: false,
        presnalInfoAgreed: false,
        provisionAgreed: false,
        marketingAgreed: false,
        ageAgreed: false,
    });

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


    return (
        <div className='authDiv'>
            <h3 className="logo-area">{text}</h3>
            <form method='post'>
                <div>
                    <ul>
                        <li><span>이메일 *</span></li>
                        <li><input autoComplete='userEmail' name ="userEmail" placeholder='예) ex@gmail.com' /></li>
                    </ul>
                    <ul>
                        <li><span>비밀번호 *</span></li>
                        <li><input autoComplete='userPassword' name="userPassword" placeholder='영문, 숫자, 특수문자 8~16자' type='password' /></li>
                    </ul>
                    {type === 'register' && (
                        <ul>
                            <li><span>비밀번호 확인 *</span></li>
                            <li><input
                            autoComplete='userPassword'
                            name='pwdConfirm'
                            placeholder=''
                            type='password' /></li>
                        </ul>
                    )}
                    {type === 'register' && (
                        <ul>
                            <li><span>닉네임 *</span></li>
                            <li><input
                            autoComplete='nickname' name='nickname' placeholder=''/></li>
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
                            <Button>{text}</Button>
                        </li>
                        <li style={{ float: 'right' }}>
                            {type === 'login' ? (
                                <Link to="/register">회원가입</Link>
                            ) : (
                                <Link to="/login">로그인</Link>
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