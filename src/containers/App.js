import React, { Component } from 'react';
import {connect} from 'react-redux'

import Cards from '../components/Cards'
import ShellUI from '../components/ShellUI'
import DialogAddProj from './DialogAddProj'

import {getCards} from '../actions/CardsActions'
import {clickDialogAddProj} from '../actions/UiActions'

class App extends Component {
  componentDidMount(){
    this.props.getCardsAction()
  }

  render() {
    const {cards, ui, clickDialogAddProjAction} = this.props
    const onClickAdd = () => clickDialogAddProjAction(ui.openDialogAddProj)
    return (
      <React.Fragment>
        
      <DialogAddProj open={ui.openDialogAddProj} onCloseDialog={onClickAdd}/>
      <ShellUI title="Проекты" add={true} addAction={onClickAdd} addShow={true}>
        <Cards cards={cards.cards} isLoading={cards.isLoading}/>
      </ShellUI> 
     </React.Fragment>
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
    getCardsAction: () => dispatch(getCards()),
    clickDialogAddProjAction: (show) => dispatch(clickDialogAddProj(show))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
