import CTAButton from "./CTAButton"
import Logo from "./Logo"
import classes from './Header.module.scss'
import {ReactComponent as Hamburger} from '../assets/Hamburger Menu.svg'
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = (props) => {
   
    return (
      <>
        <header className={classes.header}>
          <div className={classes.container}>
            <Logo />
            <nav className={classes.navbar}>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Pricing</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
              </ul>
              <CTAButton text="Sign in with Twitter" />
            </nav>
            <button className={classes.mobileBtn} onClick={props.toggleMenu}>
              <Hamburger />
            </button>
          </div>
        </header>
       {props.showMenu && <MobileMenu />}
      </>
    );
}

export default Header
