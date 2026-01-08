'use client'
import classes from "./Register.module.scss"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../Container/Container";

export default function Register(){

  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const backgrounds = [
    "https://images.wallpapersden.com/image/download/minimalism-birds-mountains-trees-forest_am5taWeUmZqaraWkpJRnamtlrWZpaWU.jpg",
  ];

  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setName("");
    setEmail("");
    setPassword("");
  }, [isLogin]);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please fill all fields!");
      return;
    }

    const user = { name, email, password };
    localStorage.setItem("waveflix_user", JSON.stringify(user));
    router.push("/");
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const savedUser = localStorage.getItem("waveflix_user");

    if (!savedUser) {
      alert("No account found! Please sign up first.");
      return;
    }

    const user = JSON.parse(savedUser);
    if (user.email === email && user.password === password) {
      router.push("/");
    } else {
      alert("Incorrect email or password!");
    }
  };

  const formVariants = {
    initial: (isLogin: boolean) => ({
      x: isLogin ? 300 : -300,
      opacity: 0,
    }),
    animate: { x: 0, opacity: 1 },
    exit: (isLogin: boolean) => ({
      x: isLogin ? -300 : 300,
      opacity: 0,
    }),
  };


  return (
    <>
      <div className={classes.wrapper}>
        <div
          className={classes.leftPartBackground}
          style={{
            backgroundImage: `url(${backgrounds[currentBackground]})`,
            transition: "background-image 1s ease-in-out",
          }}
        ></div>

        <Container>
          <div className={classes.insideWrapper}>
            <div className={classes.leftPart}>
              <div className={classes.leftPartInsCont}>
                <div className={classes.LogInTitle}>
                  <p className={classes.LogInTitleP}>
                    Fast mail service for your needs
                  </p>
                </div>
                <div className={classes.bottomPart}>
                  <div className={classes.switcher}>
                    <button
                      onClick={() => setIsLogin(false)}
                      className={classes.SignUpSwitcher}
                      style={{ border: !isLogin ? "1px solid white" : "none" }}
                    >
                      Sign Up
                    </button>
                    <button
                      onClick={() => setIsLogin(true)}
                      className={classes.LoginSwitcher}
                      style={{ border: isLogin ? "1px solid white" : "none" }}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.rightPart}>
              <div className={classes.formContainer}>
                <div className={classes.titleContainer}>
                  <p className={classes.title}>Registration</p>
                </div>

                <AnimatePresence mode="wait" initial={false} custom={isLogin}>
                  {isLogin ? (
                    <motion.form
                      key="login"
                      onSubmit={handleLogin}
                      className={classes.form}
                      variants={formVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.5 }}
                      custom={isLogin}
                    >
                      <div className={classes.inputs}>
                        <input
                          type="text"
                          placeholder="Email"
                          className={classes.email}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                          type="password"
                          placeholder="Password"
                          className={classes.password}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div className={classes.anotherLogIn}>
                        <div className={classes.orDivider}>
                          <div className={classes.line} />
                          <p className={classes.orP}>or</p>
                          <div className={classes.line} />
                        </div>
                      </div>

                      <button className={classes.logInButton}>Login</button>

                      <div className={classes.switchToAnotherRegister}>
                        <p className={classes.p}>
                          Don’t have an account?{" "}
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setIsLogin(false);
                            }}
                          >
                            Sign Up
                          </a>
                        </p>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.form
                      key="signup"
                      onSubmit={handleSignUp}
                      className={classes.form}
                      variants={formVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.5 }}
                      custom={isLogin}
                    >
                      <div className={classes.inputs}>
                        <input
                          type="text"
                          placeholder="Name"
                          className={classes.email}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <input
                          type="text"
                          placeholder="Email"
                          className={classes.email}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                          type="password"
                          placeholder="Password"
                          className={classes.password}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div className={classes.anotherLogIn}>
                        <div className={classes.orDivider}>
                          <div className={classes.line} />
                          <p className={classes.orP}>or</p>
                          <div className={classes.line} />
                        </div>
                      </div>

                      <button className={classes.logInButton}>Sign Up</button>

                      <div className={classes.switchToAnotherRegister}>
                        <p className={classes.p}>
                          Already have an account?{" "}
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setIsLogin(true);
                            }}
                          >
                            Log In
                          </a>
                        </p>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>

                <div className={classes.icons}>
                  <a
                    href="https://www.instagram.com"
                    className={classes.iconCont}
                  >
                    <div className={classes.iconInstagram}></div>
                  </a>
                  <a
                    href="https://www.facebook.com"
                    className={classes.iconCont}
                  >
                    <div className={classes.iconFacebook}></div>
                  </a>
                  <a href="https://www.youtube.com" className={classes.iconCont}>
                    <div className={classes.iconYoutube}></div>
                  </a>
                  <a href="https://x.com" className={classes.iconCont}>
                    <div className={classes.iconTwitter}></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}