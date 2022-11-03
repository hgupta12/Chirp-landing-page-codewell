import CTAButton from './CTAButton';
import classes from './Hero.module.scss';
import HeroImg from '../assets/Hero Image (Desktop View).png';
import HeroImgTablet from '../assets/Hero Image (Tablet View).png';
import Users from './Users';
const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.container}>
            <img src={HeroImg} alt="Analytics" className={classes.mobileImg} />
            <img src={HeroImgTablet} alt="Analytics" className={classes.tabletImg} />
            <div className={classes["hero-info"]}>
                <h1>
                    Twitter analytics taken to a whole new level.
                </h1>
                <p>Chirp is a suite Twitter analytics that will help you better understand your audience, which tweets they like, and most importantly, when they are the most active on Twitter.</p>
                <div className={classes.links}>
                <CTAButton text="Sign in with Twitter" fullSmall/>
                <a href="/" className={classes['hero-link']}>Learn More ➡ </a>
                </div>
                <Users/>
                <p className={classes['bottom-para']}>Join <span>195</span> others who have analyzed their followers and scheduled <span>1342</span> tweets!</p>
            </div>
            </div>
        </section>
    )
}

export default Hero
