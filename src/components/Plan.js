import classes from './Plan.module.scss';
import CTAButton from './CTAButton';
import {ReactComponent as Tick} from '../assets/Checkmark.svg';
const Plan = () => {
    return (
      <section className={classes.plans}>
        <h2>One simple price plan.</h2>
        <p>
          Start growing your Twitter account by analyzing your follower's
          patterns.
        </p>
        <div className={classes.plan}>
          <div className={classes.heading}>Monthly</div>
          <div className={classes["plan-price"]}>
            <span>$9</span>/mo
          </div>
          <div className={classes.line}></div>
          <ul>
            <li>
              <Tick />
              Unlimited* scheduled tweets and threads
            </li>
            <li>
              <Tick />
              Schedule up to 3 weeks in advance
            </li>
            <li>
              <Tick />
              Real-time audience analytics tracking up to 5k followers
            </li>
          </ul>
          <div className={classes.line}></div>
          <CTAButton text="Start Trial with Twitter" full/>
        </div>
      </section>
    );
}

export default Plan
