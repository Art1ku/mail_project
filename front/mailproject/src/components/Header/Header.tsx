import classes from "./Header.module.scss";



export default function Header() {


    return(
        <>
            <div className={classes.wrapper}>
                <div className={classes.insideWrapper}>
                    <div className={classes.leftPart}>
                        <div className={classes.burger}></div>
                        <div className={classes.Logo}></div>
                    </div>
                    <div className={classes.rightPart}>

                    </div>
                </div>
            </div>
        </>
    )
}