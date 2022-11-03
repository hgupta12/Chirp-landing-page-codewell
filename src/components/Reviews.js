import Review from './Review';
import classes from './Reviews.module.scss';
import { ReactComponent as User2} from "../assets/userAvatar02.svg";
import { ReactComponent as User1 } from "../assets/userAvatar01.svg";
import { ReactComponent as User3 } from "../assets/userAvatar03.svg";
const tweets = [
    {
        id:1,
        userIcon: <User1/>,
        userName:'Sara May',
        userTag:'@sara_may',
        text:"I just tried out @chirp and it's amazing, love all the analytics I can see.",
        likes:2,
        date:'March 2,2021'
    },
    {
        id:2,
        userIcon: <User2/>,
        userName:'Jack Scott',
        userTag:'@jackscott_',
        text:"I initially started using Chirp to support the co-founder as I personally knew him, but after having tried it out for a few weeks, I can genuinely say this changed my Twitter game.",
        likes:32,
        date:'March 5,2021'
    },
    {
        id:3,
        userIcon: <User3/>,
        userName: 'Jessica May',
        userTag: '@jmay98',
        text:'Absolutely love everything about Chirp, from design to how everything works smoothly.',
        likes:221,
        date:'Jan 1,2022'
    }
]
const Reviews = () => {
    return (
        <section className={classes.reviews}>
            <div className={classes.container}>
            <h2>What our customers say</h2>
            <div className={classes['grid']}>
            {tweets.map(tweet=>(
                <Review id={tweet.id} {...tweet}/>
            ))}
            </div>
            </div>
        </section>
    )
}

export default Reviews
