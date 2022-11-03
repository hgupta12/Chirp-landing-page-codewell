import classes from './Feature.module.scss';
const Feature = (props) => {
    return (
        <div className={classes.feature}>
            <span>{props.icon}</span>
            <h4 className={classes.title}>{props.title}</h4>
            <p>{props.desc}</p>
        </div>
    )
}

export default Feature
