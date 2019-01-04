import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {addCard} from '../actions/CardsActions'
import {setBufferDialog, clearBufferDialog, cheackDialogData, clearErrorDialog} from '../actions/UiActions'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class DialogAddProj extends Component {
constructor(props){
  super(props)

  this.instalBufferDialog = this.instalBufferDialog.bind(this)
  this.addClick = this.addClick.bind(this)
  this.inputChange = this.inputChange.bind(this)
  this.onCloseDialog = this.onCloseDialog.bind(this)
}
componentDidMount(){
  this.instalBufferDialog()
}

onCloseDialog(){
  this.props.clearErrorDialogAction()
  this.props.clearBufferDialogAction()
  this.instalBufferDialog()
  this.props.onCloseDialog()
}

addClick(){
  let promise = new Promise((resolve,reject)=>{
    this.props.clearErrorDialogAction()
    resolve()
  })

  promise
  .then(()=>{
    this.props.cheackDialogDataAction('name', (val)=> val.length<5, "Название должно содержать больше 5 символов")
    this.props.cheackDialogDataAction('name', (val)=> val.length===0, "Поле должно быть заполнено")
  })
  .then(()=>{
    console.log("Mass",this.props.ui)
    if(Object.keys(this.props.ui.errorDialog).length===0){
      this.props.addCardAction(this.props.ui.bufferDialog.name, this.props.ui.bufferDialog.discription)
      this.onCloseDialog()
    }
  })
  

}

  inputChange(e){
    const { target: { id, value } } = e;
    this.props.setBufferDialogAction(id,value)
  }

  instalBufferDialog(){
    this.props.setBufferDialogAction('name',"")
    this.props.setBufferDialogAction("discription","")
  }  
  
  render(){

      const {ui, 
            open} = this.props
      
      return (
      <Dialog
          open={open}
          onClose={this.onCloseDialog}
          aria-labelledby="form-dialog-title"
          fullWidth
      >
          <DialogTitle id="form-dialog-title">Добавление проекта</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Введите параметры проекта
            </DialogContentText>
            <TextField
              error={ui.errorDialog.name}
              helperText={ui.errorDialog.name}
              autoFocus
              margin="dense"
              id="name"
              label="Название"
              type="text"
              onChange={this.inputChange}
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="dense"
              id="discription"
              label="Описание"
              type="text"
              rows={3}
              rowsMax={5}
              onChange={this.inputChange}
              fullWidth
              multiline
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.onCloseDialog} color="primary">
              Отмена
            </Button>
            <Button onClick={this.addClick} color="primary">
              Добавить
            </Button>
          </DialogActions>
        </Dialog>
      )
    }
}

DialogAddProj.propTypes = {
    open: PropTypes.bool.isRequired,
    onCloseDialog: PropTypes.func.isRequired
}


const mapStateToProps = store => {
  return{
    ui: store.ui
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    addCardAction: (name,discription) => dispatch(addCard(name,discription)),
    setBufferDialogAction : (id, data) => dispatch(setBufferDialog(id,data)),
    clearBufferDialogAction : () => dispatch(clearBufferDialog()),
    cheackDialogDataAction : (idData, funcheacker, errorText) => dispatch(cheackDialogData(idData, funcheacker, errorText)),
    clearErrorDialogAction : () => dispatch(clearErrorDialog())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DialogAddProj)