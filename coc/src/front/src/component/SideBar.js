import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "reactstrap";

const SideBar = () => {

    const showMobilemenu = () => {
        document.getElementById("sidebarArea").classList.toggle("showSidebar");
    };
    let location = useLocation();

    return (
        <div className="p-3">
            <div className="d-flex align-items-center">
            <Button
                close
                size="sm"
                className="ms-auto d-lg-none"
                onClick={() => showMobilemenu()}
            ></Button>
            <br></br>
            <h1> 아잉 부잉~</h1>
            <h2>Side Menu</h2>
            <p>Sliding from the left!</p>
            {/* 여기에 사이드 메뉴 아이템을 추가하세요 */}
            {/* 여러분의 앱에 맞게 수정하세요 */}
            </div>
        </div>
    )
}

export default SideBar;