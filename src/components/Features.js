import Feature from './Feature';
import classes from './Features.module.scss';

const features = [
    {
        id:1,
        icon: '📈',
        title:'Analytics',
        desc:'We constantly monitor your audience as it grows - so that you can Tweet when your followers are most likely to be online and ready to engage with your content.'
    },
    {
        id:2,
        icon:'🤓',
        title:'Smart Analyzer',
        desc:'Chirp automatically recognizes your followers most active times and automatically sends you notifications if you are missing out on an opportunity.'
    },
    {
        id:3,
        icon:'📰',
        title:'Scheduled Your Tweets',
        desc:'Quality tweets drive tons of engagement. With Chirp, you can write tweets in an advance and schedule them when your audience is most likely to read.'
    },
    {
        id:4,
        icon:'🌑',
        title:'Dark Mode',
        desc:'Friendly on the eyes, no matter what time you write your Tweets. All colors are chosen to make sure your eyes are at ease all the times.'
    }
]

const Features = () => {
    return (
       <section className={classes.features}>
           <div className={classes.container}>
           <h2>Features that help you tweet smarter.</h2>
           <div className={classes['features-grid']}>
           {features.map(feature=>(
               <Feature key={feature.id} {...feature}/>
           ))}
           </div>
           </div>
       </section>
    )
}

export default Features
