import {getInitialData} from "../utils/api"
import {receiveUsers} from '../actions/users'
import {receiveQuestions} from "../actions/questions"

export default handleInitialData () {
  return (dispatch) => {
    return getInitialData().then(({users,questions}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
    }
    )
  }
}