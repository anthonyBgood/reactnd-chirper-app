import { saveLikeToggle } from '../utils/api'



export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEETS'

export function receiveTweets (tweets){
  return {
    type: RECEIVE_TWEETS, 
    tweets,
  }
}

export function toggleTweet(id,authedUser,hasLiked){
  return{
    type: TOGGLE_TWEET,
    id,
    authedUser,
    hasLiked,
  }
}


export function handleToggleTweet(info){

  

  return (dispatch) =>{
    
    dispatch(toggleTweet(info.id, info.authedUser,info.hasLiked))

    saveLikeToggle(info)
      .catch(
        (e)=>{
          console.warning('Error: api.saveLikedToggle: ',e)
          alert('failed to toggle tweet like, try again')
          dispatch(toggleTweet(info.id, info.authedUser,info.hasLiked))
        }
      )
  }
}