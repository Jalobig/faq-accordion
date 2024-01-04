import React from "react";
import BGPatternDesktop from "../../assets/images/background-pattern-desktop.svg";
import BGPatternMobile from "../../assets/images/background-pattern-mobile.svg";
import classes from "./Header.module.scss";
import useMediaQuery from "../../hooks/useMediaQuery";
const Header = () => {
  const media = useMediaQuery("only screen and (max-width: 425px)");
  return (
    <header className={classes.header}>
      <img
        src={media ? BGPatternMobile : BGPatternDesktop}
        alt="Background Pattern"
        className={classes.header__bg}
      />
    </header>
  );
};

export default Header;
