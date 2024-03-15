import React, { useState } from 'react';
import { Button } from "reactstrap";

const PopularArena = () => {

    return (
        <div className="popualrArena">

            <div className="titlePopularArena">인기결투장</div>
            <img src="/img/sampleArena.jpg" className="imgPopularArena"/>
            <div className="d-flex div-horizon-center">
                <Button className="popluarArenaBtn"/>
                <Button className="popluarArenaBtn"/>
                <Button className="popluarArenaBtn"/>
                <Button className="popluarArenaBtn"/>
                <Button className="popluarArenaBtn"/>
                <Button className="popluarArenaBtn"/>
                <Button className="popluarArenaBtn"/>
                <Button className="popluarArenaBtn"/>
                <Button className="popluarArenaBtn"/>
                <Button className="popluarArenaBtn"/>
            </div>
        </div>
    );
}

export default PopularArena;