import CTAButton from "./CTAButton"
import classes from './MobileMenu.module.scss'

const MobileMenu = () => {
    return (
        <>
        <div className={classes.overlay}>
        </div>
        <div className={classes["mobile-menu"]}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Pricing</a></li>
                <li><a href="/">FAQ</a></li>
            </ul>
            <div className={classes.line}></div>
            <CTAButton text="Sign in with Twitter" full/>
        </div>
        </>
    )
}

export default MobileMenu
