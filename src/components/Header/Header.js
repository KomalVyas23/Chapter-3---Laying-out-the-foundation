import React from 'react';
import ReactDOM from 'react-dom/client';
import './Header.css';
import { FaUser } from "react-icons/fa";

//Header component - Logo(Left) - Search(Middle) - User Icon (Right)

const Header = () => {
    return(
        <>
        <header>
            <div className="col-3">
                <img className="logo"  src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj" alt='Sample Logo' />
            </div>
            <div className="col-3 search-col">
                <input className="searchInput" type="text" placeholder="Search"></input>
            </div>
            <div className="col-3 user-col">
               <FaUser />
            </div>
        </header>
        </>
    );
}

export default Header;