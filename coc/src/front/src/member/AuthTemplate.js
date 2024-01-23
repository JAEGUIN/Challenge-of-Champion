import styled from "styled-components";
import palette from "../lib/styles/paletts";

/** 페이지 레이아웃 */

/* 화면 전체 채움 */
const TemplateBlock = styled.div`
    position: absolute;
    left: 0;
    //top: 0;
    //bottom: 0;
    right: 0;
    background: ${palette.gray[2]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    height: 100vh;
`;

const WhiteBox = styled.div`
    .logo-area {
        display: block;
        padding-bottom: 2rem;
        text-align: center;
        font-weight: bold;
        letter-spacing; 2px;
    }

    box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
    padding: 2rem;
    /*width: 360px;*/
    width: 80%;
    max-width: 650px;
    min-width: 280px;
    background: white;
    border-radius: 2px;
    height: 99vh;
`;

const AuthTemplate = ({ children }) => {
    return (
        <TemplateBlock>
            <WhiteBox>
                {children}
            </WhiteBox>
        </TemplateBlock>
    );
};

export default AuthTemplate;