import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Wrapper } from './Wrapper'
import { updateMessage } from '../actions'

export const Hello = ({ message, updateMessage }) =>
  <Wrapper name='components/Hello.js'>
    <input
      onChange={event => updateMessage(event.target.value)}
      type='text' />
    <p>Hello {message}</p>
  </Wrapper>

const mapStateProps = store => ({
  message: store.helloState.message
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateMessage }, dispatch)

export default connect(mapStateProps, mapDispatchToProps)(Hello)
