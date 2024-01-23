import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../lib/styles/paletts';
import Button from '../common/Button';
import { useState } from 'react';

/** 로그인 */

const AuthFormBlock = styled.div`
    h3 {
        margin: 0;
        color: ${palette.gray[8]};
        margin-bottom: 1rem;
        font-size: 30px;
    }
`;

const StyledInput = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid ${palette.gray[5]};
    padding-bottom: 0.4rem;
    outline: none;
    width:100%;
    &:focus {
        color: $oc-teal-7;
        border-bottom: 1px solid ${palette.gray[7]};
    }

`;

const StyleA = styled.a`
    font-size: 15px;
    color: ${palette.gray[5]};
`;

const Footer = styled.div`
    padding-top: 2rem;
    text-align: right;
    a {
        color: ${palette.gray[6]};
        text-decoration: underline;
        &:hover {
            color: ${palette.gray[9]};
        }
    }
`;

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
        <AuthFormBlock>
            <h3 className="logo-area">{text}</h3>
            <form method='post'>
                <div>
                    <ul>
                        <li><span>이메일 *</span></li>
                        <li><StyledInput autoComplete='userEmail' name ="userEmail" placeholder='예) ex@gmail.com' /></li>
                    </ul>
                    <ul>
                        <li><span>비밀번호 *</span></li>
                        <li><StyledInput autoComplete='userPassword' name="userPassword" placeholder='영문, 숫자, 특수문자 8~16자' type='password' /></li>
                    </ul>
                    {type === 'register' && (
                        <ul>
                            <li><span>비밀번호 확인 *</span></li>
                            <li><StyledInput
                            autoComplete='userPassword'
                            name='pwdConfirm'
                            placeholder=''
                            type='password' /></li>
                        </ul>
                    )}
                    {type === 'register' && (
                        <ul>
                            <li><span>닉네임 *</span></li>
                            <li><StyledInput
                            autoComplete='nickname' name='nickname' placeholder=''/></li>
                        </ul>
                    )}

                    {type === 'register' && (
                        <div>
                            <ul>
                                <li>
                                    <input type='checkbox' name='agree_check_all' checked={allAgreed} onChange={handlAllAgreeCheck} />
                                    <label>아래 약관에 모두 동의합니다.</label>
                                </li>
                                <li>
                                    <input type='checkbox' name='termsAgreed' required checked={agreements.termsAgreed}
                                    onChange={handlAgreeChange} />
                                    <label>이용약관 필수 동의 <span><StyleA href='/'>자세히 보기</StyleA></span></label>
                                </li>
                                <li>
                                    <input type='checkbox' name='presnalInfoAgreed' required checked={agreements.presnalInfoAgreed}
                                    onChange={handlAgreeChange}/>
                                    <label>개인정보 처리방침 필수 동의 <span><StyleA href='/'>자세히 보기</StyleA></span></label>
                                </li>
                                <li>
                                    <input type='checkbox' name='marketingAgreed' checked={agreements.marketingAgreed}
                                    onChange={handlAgreeChange} />
                                    <label>마케팅 정보 수신 선택 동의 <span><StyleA href='/'>자세히 보기</StyleA></span></label>
                                </li>
                                <li>
                                    <input type='checkbox' name='ageAgreed' required checked={agreements.ageAgreed}
                                    onChange={handlAgreeChange} />
                                    <label>만 14세 이상임에 필수 동의</label>
                                </li>
                            </ul>
                        </div>
                    )}

                    <Button $cyan $fullWidth style={{ marginTop: '1rem' }}>{text}</Button>
                </div>
            </form>
            <Footer>
                {type === 'login' ? (
                    <Link to="/register">회원가입</Link>
                ) : (
                    <Link to="/login">로그인</Link>
                )}
            </Footer>
        </AuthFormBlock>
    );
};



export default AuthForm;