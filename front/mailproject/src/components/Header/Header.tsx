"use client"
import { useState } from "react";
import classes from "./Header.module.scss";

export default function Header() {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.insideWrapper}>
                    <div className={classes.leftPart}>
                        <div
                            className={`${classes.burgerContainer} ${isBurgerOpen ? classes.active : ""}`}
                            onClick={() => setIsBurgerOpen(!isBurgerOpen)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <div className={classes.LogoContainer}>
                            <div className={classes.Logo}></div>
                            <p className={classes.LogoP}>SS MAIL</p>
                        </div>
                    </div>

                    <div className={classes.rightPart}>
                        <div className={classes.about}>
                            <div className={classes.svg}></div>
                        </div>

                        <div
                            className={classes.setting}
                            onClick={() => setIsSettingsOpen(true)}
                        >
                            <div className={classes.svg}></div>
                        </div>

                        <div className={classes.userAvatar}></div>
                    </div>
                </div>
            </div>

            {/* overlay */}
            {isSettingsOpen && (
                <div
                    className={classes.overlay}
                    onClick={() => setIsSettingsOpen(false)}
                />
            )}

            {/* settings panel */}
            <div className={`${classes.settingsPanel} ${isSettingsOpen ? classes.open : ""}`}>
                <div
                    className={classes.close}
                    onClick={() => setIsSettingsOpen(false)}
                >
                    ✕
                </div>

                <h3>Settings</h3>
                {/* тут дальше твой контент */}
            </div>
        </>
    );
}
