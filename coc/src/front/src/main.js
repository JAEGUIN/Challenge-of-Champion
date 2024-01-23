import Template from "./common/Template";
import { Link } from "react-router-dom";

const mainPage = () => {
    return (
        <Template>
            <Link to="/login">
            Challenge
            of
            Champion
         </Link>
        </Template>
    );
};

export default mainPage;