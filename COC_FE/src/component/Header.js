import React from "react";
import {
    Navbar,
    Collapse,
    Nav,
    NavItem,
    NavbarBrand,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Dropdown,
    Button,
  } from "reactstrap";

const Header = ({MenuOpen, setMenuOpen}) => {

    const [isOpen, setIsOpen] = React.useState(false);

    const showMobilemenu = () => {
        document.getElementById("sidebarArea").classList.toggle("showSidebar");
    };

    return (
        <Navbar  color="dark" dark expand="md">
            <div className="d-flex align-items-center">
                <Button color="dark" className="d-lg-none btn btn-dark" onClick={() => showMobilemenu()}>
                    <i className="bi bi-list"></i>
                </Button>

                <div className="hstack gap-2">
                    <Button
                    color="dark"
                    size="sm"
                    className="d-sm-block d-md-none"
                    >
                        <i className="bi bi-three-dots-vertical"></i>
                    </Button>
                </div>

                <Collapse navbar isOpen={isOpen}>
                    <Nav className="me-auto" navbar>
                        <NavItem style={{color:'white;'}} className="sidenav-bg">
                            게시물
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    );
};

export default Header;