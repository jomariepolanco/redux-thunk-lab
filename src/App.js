import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchCats} from './actions/catActions'
import CatList from './CatList'

class App extends Component {   

  componentDidMount(){
    this.props.fetchCats()
  }
  
  render() {
    console.log(this.props.cats)
    return (
      <div>
        <h1>CatBook</h1>
        <CatList catPics={this.props.cats}/>
      </div>
    );
  }
}

const msp = state => {
  return {
    cats: state.cats,
    loading: state.loading
  }
}

const mdp = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(msp, mdp)(App)

