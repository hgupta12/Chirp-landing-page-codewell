import classes from './Footer.module.scss';
import Logo from './Logo';
import {ReactComponent as TwitterIcon} from '../assets/Twitter (Black).svg';
const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <Logo/>
                <ul className={classes.links}>
                    <li><a href="/">
                        <TwitterIcon/>
                        </a></li>
                    <li><a href="/">Privacy Policy</a></li>
                    <li><a href="/">Terms of Use</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
