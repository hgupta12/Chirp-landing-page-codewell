import classes from './CTAButton.module.scss';
import {ReactComponent as Logo} from '../assets/Twitter.svg';
const CTAButton = (props) => {
    const btnClasses = `${classes.btn} ${props.full && classes.full} ${
      props.fullSmall && classes['full-small']
    }`;
    return (
        <button className={btnClasses}>
            <Logo/>
            <span>{props.text}</span>
        </button>
    )
}

export default CTAButton
