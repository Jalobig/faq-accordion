import React, { useEffect, useState } from "react";
import classes from "./Card.module.scss";
import IconStar from "../../assets/images/icon-star.svg";
import IconMinus from "../../assets/images/icon-minus.svg";
import IconPlus from "../../assets/images/icon-plus.svg";

const FAQ = [
  {
    id: "1",
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    id: "2",
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    id: "3",
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    id: "4",
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];
const Card = () => {
  const [choice, setChoice] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
  });
  const accordionHandler = (id) => {
    if (id === "1") {
      setChoice({
        1: true,
        2: false,
        3: false,
        4: false,
      });
    } else if (id === "2") {
      setChoice({
        1: false,
        2: true,
        3: false,
        4: false,
      });
    } else if (id === "3") {
      setChoice({
        1: false,
        2: false,
        3: true,
        4: false,
      });
    } else if (id === "4") {
      setChoice({
        1: false,
        2: false,
        3: false,
        4: true,
      });
    }
  };
  const [left, setLeft] = React.useState(1);
  const keyDownEvent = (event) => {
    console.log(event.code);
    if (event.code === "ArrowRight") {
      setLeft(() => {
        if (left >= 3) {
          return 0;
        } else if (left === 3) {
          return left - 3;
        } else {
          return left + 1;
        }
      });
      accordionHandler((left + 1).toString());
    }
    if (event.code === "ArrowLeft") {
      setLeft(() => {
        if (left <= 0) {
          return 5;
        }
        if (left === 2) {
          return left + 3;
        } else {
          return left - 1;
        }
      });

      accordionHandler((left - 1).toString());
    }
    if (event.code === "ArrowDown") {
      setLeft(() => {
        if (left >= 3) {
          return 0;
        } else if (left === 3) {
          return left - 3;
        } else {
          return left + 1;
        }
      });
      accordionHandler((left + 1).toString());
    }
    if (event.code === "ArrowUp") {
      setLeft(() => {
        if (left <= 0) {
          return 5;
        }
        if (left === 2) {
          return left + 3;
        } else {
          return left - 1;
        }
      });

      accordionHandler((left - 1).toString());
    }
  };
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className={classes.card} onKeyDown={keyDownEvent} tabIndex={0}>
      <div className={classes.card__row__heading}>
        <img
          src={IconStar}
          alt="Icon of a star"
          className={classes.card__heading__icon}
        />
        <h1 className={classes.card__heading}>FAQs</h1>
      </div>
      {FAQ.map((qa) => (
        <div className={classes.card__faq} key={qa.id}>
          <div
            className={classes.card__row}
            onClick={() => accordionHandler(qa.id)}
          >
            <h2 className={classes.card__subheading}>{qa.question}</h2>
            <button className={classes.card__btn}>
              <img
                src={choice[qa.id] ? IconMinus : IconPlus}
                alt={choice[qa.id] ? "Icon minus" : "Icon plus"}
              />
            </button>
          </div>
          {choice[qa.id] && (
            <div className={classes.card__answer}>
              <p className={classes.card__text}>{qa.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Card;
