import React, { Component } from 'react';
import {connect} from 'react-redux'

import Cards from '../components/Cards'
import ShellUI from './ShellUI'
import DialogAddProj from './DialogAddProj'
import LinearProgress from '@material-ui/core/LinearProgress';

import {getCards} from '../actions/CardsActions'
import {clickDialogAddProj, setUi} from '../actions/UiActions'

class PageGallery extends Component {
  componentDidMount(){
    this.props.getCardsAction()
    this.props.setUiAction("Проекты",false,"",true)
  }

  render() {
    const {cards, ui, clickDialogAddProjAction} = this.props
    const onClickAdd = () => clickDialogAddProjAction()
    return (
      <React.Fragment>
        
      <DialogAddProj open={ui.openDialogAddProj} onCloseDialog={onClickAdd}/>
      <ShellUI addAction={onClickAdd}>
      {
        cards.isLoading ?
        <LinearProgress/>:
        ''
      }
        <Cards cards={cards.cards}/>
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
    clickDialogAddProjAction: (show) => dispatch(clickDialogAddProj(show)),
    setUiAction: (title,backButton,backButtonLink,addButton) => dispatch(setUi(title,backButton,backButtonLink,addButton))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageGallery);
