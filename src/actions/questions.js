import { saveQuestion, saveQuestionAnswer } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE QUESTIONS";
export const ADD_QUESTION = "ADD QUESTION";
export const SAVE_ANSWER = "SAVE_ANSWER";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

//two text values payloads - send data from your application to your store - new question async action creator function
export function handleAddNewQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    }).then((question) => dispatch(addQuestion(question)));
  };
}

//save the answer action creator function
export function saveAnswer(authedUser, id, selected) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    id,
    selected,
  };
}

//action to take the answered value from the unanaswered question
export function handleSaveQuestionAnswer(id, selected) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    console.log("this is the id", id);
    console.log("this is selected Answer", selected);
    return saveQuestionAnswer({
      authedUser: authedUser,
      qid: id,
      answer: selected,
    }).then(() => dispatch(saveAnswer(authedUser, id, selected)));
  };
}
