export const RECEIVE_QUESTIONS = "RECEIVE QUESTIONS";
export const ADD_QUESTION = "ADD QUESTION";
export const ANSWER_QUESTION = "ANSWER QUESTION";

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

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    }).then((question) => dispatch(addQuestion(question)));
  };
}
export function answerQuestion(authedUser, qId, answer) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qId,
    answer,
  };
}
