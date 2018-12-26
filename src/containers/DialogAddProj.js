import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {addCard} from '../actions/CardsActions'
import {setBufferDialog, clearBufferDialog} from '../actions/UiActions'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function DialogAddProj(props) {
    const {ui, 
          open, 
          onCloseDialog, 
          addCardAction, 
          setBufferDialogAction, 
          clearBufferDialogAction} = props

    function addClick(){
      addCardAction(ui.bufferDialog.name, ui.bufferDialog.discription)
      clearBufferDialogAction()
      onCloseDialog()
      
    }

    function inputChange(e){
      const { target: { id, value } } = e;
      setBufferDialogAction(id,value)
    }

    return (
    <Dialog
        open={open}
        onClose={()=> onCloseDialog()}
        aria-labelledby="form-dialog-title"
        fullWidth
    >
        <DialogTitle id="form-dialog-title">Добавление проекта</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Введите параметры проекта
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Название"
            type="text"
            onChange={inputChange}
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
            onChange={inputChange}
            fullWidth
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=> onCloseDialog()} color="primary">
            Отмена
          </Button>
          <Button onClick={addClick} color="primary">
            Добавить
          </Button>
        </DialogActions>
      </Dialog>
    )
}

DialogAddProj.propTypes = {
    open: PropTypes.bool.isRequired,
    onCloseDialog: PropTypes.func.isRequired
}

const mapStateToProps = store => {
  console.log(store)
  return{
    ui: store.ui
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    addCardAction: (name,discription) => dispatch(addCard(name,discription)),
    setBufferDialogAction : (id, data) => dispatch(setBufferDialog(id,data)),
    clearBufferDialogAction : () => dispatch(clearBufferDialog())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DialogAddProj)