import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddTweet } from '../actions/tweets'
import { Redirect } from 'react-router-dom'


class NewTweet extends Component{

  MAX_LENGTH = 280
  WARNING_LENGTH = 100

  state = {
    text: '' ,
    toHome: false ,
  }

  handleChange = (e) => {

    const text = e.target.value
    this.setState(() => ({text}))

  }

  handleSubmit = (e) => {

    e.preventDefault()
    const {text, toHome} = this.state
    const { dispatch, replyingToId } = this.props
    

      /*     console.group('NEW-tweet')
            console.log( 'text: ', text)
            console.log('replyingToId: ', replyingToId)
          console.groupEnd() */

    dispatch(handleAddTweet(text, replyingToId))

    //reset the text and redirect to home, if on the new tweet page
    this.setState(()=>({
      text: '' , 
      toHome: replyingToId? false:true ,
    }))

  }

  render(){

    const {text, toHome}= this.state
    const tweetLeft = this.MAX_LENGTH - text.length

    if(toHome === true){
      return <Redirect to='/' />
    }

    return(
      <div>
        <h3 className='center'>Compose New Tweet</h3>
        <form
          className='new-tweet'
          onSubmit ={this.handleSubmit}
          >
          
          <textarea
            className='textarea'
            placeholder="what's happening?"
            onChange={this.handleChange}
            maxLength={this.MAX_LENGTH}
            value={text}
          />

          { // report text remaining
            tweetLeft  < this.WARNING_LENGTH &&
            <div
              className='tweet-length'>
              {tweetLeft}
            </div>
          }
      
          <button
            className='btn'
            type='submit'
            disabled={text===''}
            >
              Submit
          </button>
        </form>
        
      </div>
    )
  }
}

export default connect ()(NewTweet)