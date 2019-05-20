//cSpell: words AUTHED

import getInitialData from '../utils/api'
import receiveUsers from '../actions/users'
import receiveTweets from '../actions/tweets'
import receiveAuthedUser from '../actions/authedUser'


const AUTHED_ID = 'tylermcginnis'


export function handleInitialData (users, tweets){
  return(
    (dispatch) =>{

      return getInitialData()
        .then(
          ({users, tweets}) =>{
            dispatch(receiveUsers(users))
            dispatch(receiveTweets(tweets))
            dispatch(receiveAuthedUser(AUTHED_ID))
          })
    }
  )

}