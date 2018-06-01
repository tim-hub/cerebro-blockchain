import React, { Component, PropTypes } from 'react'
import { getDificulty } from './api'
import styles from './styles.scss'


export default class Preview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      difficulty: null,
      error: null,
    }
  }

  componentDidMount() {
    getDificulty()
      .then(difficulty => this.setState({ difficulty }))
      .catch(error => this.setState({ error }))
  }


}