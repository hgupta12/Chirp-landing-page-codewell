import classes from './Users.module.scss';
import { ReactComponent as User1 } from "../assets/userAvatar01.svg";
import { ReactComponent as User2 } from "../assets/userAvatar02.svg";
import { ReactComponent as User3 } from "../assets/userAvatar03.svg";
import { ReactComponent as User4 } from "../assets/userAvatar04.svg";
import { ReactComponent as User5 } from "../assets/userAvatar05.svg";
import { ReactComponent as User6 } from "../assets/userAvatar06.svg";
import { ReactComponent as User7 } from "../assets/userAvatar07.svg";
import { ReactComponent as User8 } from "../assets/userAvatar08.svg";
import { ReactComponent as User9 } from "../assets/userAvatar09.svg";

const Users = () => {
    return (
        <div className={classes.users}>
            <User1/>
            <User2/>
            <User3/>
            <User4/>
            <User5/>
            <User6/>
            <User7/>
            <User8/>
            <User9/>
        </div>
    )
}

export default Users
