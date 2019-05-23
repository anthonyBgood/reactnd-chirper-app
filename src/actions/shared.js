
import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveTweets } from '../actions/tweets'
import receiveAuthedUser from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'


const AUTHED_ID = 'tylermcginnis'


export function handleInitialData (users, tweets){
  return(
    (dispatch) =>{

      dispatch(showLoading())
      return getInitialData()
        .then(
          ({users, tweets}) =>{
            dispatch(receiveUsers(users))
            dispatch(receiveTweets(tweets))
            dispatch(receiveAuthedUser(AUTHED_ID))
            dispatch(hideLoading())
          })
    }
  )

}