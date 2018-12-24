import React, { Component } from 'react';
import {connect} from 'react-redux'

import Cards from '../components/Cards'
import ShellUI from '../components/ShellUI'

import {getCards} from '../actions/CardsActions'

class App extends Component {
  componentDidMount(){
    this.props.getCardsAction()
  }

  render() {
    const {cards, ui} = this.props
    return (
     <ShellUI title="Проекты" add={true}>
       <Cards cards={cards.cards} isLoading={cards.isLoading}/>
     </ShellUI> 
    )
  }
}

const mapStateToProps = store => {
  console.log(store)
  return{
    cards: store.cards,
    ui: store.ui
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    getCardsAction: () => dispatch(getCards())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
