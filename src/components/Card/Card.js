import React, { useState } from "react";
import classes from "./Card.module.scss";
import IconStar from "../../assets/images/icon-star.svg";
import IconMinus from "../../assets/images/icon-minus.svg";
import IconPlus from "../../assets/images/icon-plus.svg";

const FAQ = [
  {
    id: "q1",
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    id: "q2",
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    id: "q3",
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    id: "q4",
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];
const Card = () => {
  const [choice, setChoice] = useState({
    q1: true,
    q2: false,
    q3: false,
    q4: false,
  });
  const accordionHandler = (id) => {
    if (id === "q1") {
      setChoice({
        q1: true,
        q2: false,
        q3: false,
        q4: false,
      });
    } else if (id === "q2") {
      setChoice({
        q1: false,
        q2: true,
        q3: false,
        q4: false,
      });
    } else if (id === "q3") {
      setChoice({
        q1: false,
        q2: false,
        q3: true,
        q4: false,
      });
    } else if (id === "q4") {
      setChoice({
        q1: false,
        q2: false,
        q3: false,
        q4: true,
      });
    }
  };
  
  return (
    <div className={classes.card}>
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
          <div className={classes.card__row} onClick={()=> accordionHandler(qa.id)}>
            <h2 className={classes.card__subheading} >{qa.question}</h2>
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
