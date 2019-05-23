import  {RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET}  from '../actions/tweets'


export default function users (state ={}, action){
  switch(action.type){
    case RECEIVE_TWEETS :
      return {
        ...state,
        ...action.tweets
      }

    case TOGGLE_TWEET :
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes: action.hasLiked === true
            ? state[action.id].likes.filter((uid)=> uid !== action.authedUser)
            //: [...state[action.id].likes, [action.authedUser]]
            : state[action.id].likes.concat([action.authedUser])
        }
      }

    case ADD_TWEET :

      const newTweet = action.tweet
      let replyingTo = {}

      if(newTweet.replyingTo !== null){

        replyingTo = {
          [newTweet.replyingTo] : {
            ...state[newTweet.replyingTo] , 
            replies: [...state[newTweet.replyingTo].replies, newTweet.id ]
          }
        }
      }

      return{
        ...state , 
        [newTweet.id]: newTweet , 
        ...replyingTo , 
      }

    default :
      return state
  }
}