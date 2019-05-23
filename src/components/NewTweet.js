import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddTweet } from '../actions/tweets'


class NewTweet extends Component{

  MAX_LENGTH = 280
  WARNING_LENGTH = 100

  state = {
    text: ''
  }

  handleChange = (e) => {

    const text = e.target.value
    this.setState(() => ({text}))

  }

  handleSubmit = (e) => {

    e.preventDefault()
    const {text} = this.state
    const { dispatch, replyingToId } = this.props
    this.setState(()=>({text: ''}))
    console.log('new Tweet: ', text)
    dispatch(handleAddTweet(text, replyingToId))



    //TODO: provide text to redux store
    //TODO: redirect to / after submit

  }

  render(){

    const {text}= this.state
    const tweetLeft = this.MAX_LENGTH-text.length

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