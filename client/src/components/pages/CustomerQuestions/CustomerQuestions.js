import React, { useState, useEffect } from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, questions_arry, dynmicForm } from './QuestionsData';

function CustomerQuestions() {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [homeObjOneD, setHomeObjOneD] = useState(homeObjOne)

  homeObjOne.onClick = () => {
    if (questions_arry.length > questionIndex + 1) {
      setQuestionIndex(questionIndex + 1)
    }
  }

  useEffect(() => {
    setHomeObjOneD({
      ...homeObjOne,
      buttonLabel: questions_arry.length == questionIndex + 1 ? 'Review / Complete' : 'Next',
      description: dynmicForm(questions_arry[questionIndex]['questions']),
      img: `images/svg-${questionIndex + 3}.svg`,
      headline: questions_arry[questionIndex]['headline'],
      // lightBg: homeObjOneD.lightBg ? false : true,
      // lightText: homeObjOneD.lightText ? false : true,
      // lightTextDesc: homeObjOneD.lightTextDesc ? false : true,
      imgStart: homeObjOneD.imgStart === 'start' ? '' : 'start',
    })
  }, [questionIndex]);

  return (
    <>
      <HeroSection {...homeObjOneD} />
    </>
  );
}

export default CustomerQuestions;
