import classes from './Review.module.scss';

import { ReactComponent as TwitterIcon } from '../assets/Twitter (Blue).svg';
const Review = (props) => {
    return (
        <div className={classes.review}>
            <div className={classes['review-user']}>
                {props.userIcon}
                <div className={classes['review-user__details']}>
                    <p>{props.userName}</p>
                    <span>{props.userTag}</span>
                </div>
                <TwitterIcon/>
            </div>
            <p className={classes['review-content']}>
                {props.text}
            </p>
            <div className={classes['review-details']}>
                <div className={classes['review-details__likes']}>
                    <span>❤</span> <span>{props.likes}</span>
                </div>
                <div className={classes['review-details__date']}>
                    {props.date}
                </div>
            </div>
        </div>
    )
}

export default Review
