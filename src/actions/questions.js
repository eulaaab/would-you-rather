export const RECEIVE_QUESTIONS = "RECEIVE QUESTIONS";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}
