import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Wrapper } from './Wrapper'
import { incrementCounter, decrementCounter } from '../actions'

export const Counter = ({ counter, incrementCounter, decrementCounter }) =>
  <Wrapper name='components/Counter.js'>
    <button onClick={incrementCounter}> + </button>
    <span> {counter} </span>
    <button onClick={decrementCounter}> - </button>
  </Wrapper>

const mapStateProps = store => ({
  counter: store.counterState.counter
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ incrementCounter, decrementCounter }, dispatch)

export default connect(mapStateProps, mapDispatchToProps)(Counter)
