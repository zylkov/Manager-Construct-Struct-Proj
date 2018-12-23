import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function DialogAddProj(props) {
    const {open} = props
    const onClose = () => {console.log("Диалог закрылся")}
    return (
    <Dialog
        open={open}
        onClose={onClose()}
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
            fullWidth
          />
          <TextField
            variant="outlined"
            margin="dense"
            id="name"
            label="Описание"
            type="text"
            rows={3}
            rowsMax={5}
            fullWidth
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose()} color="primary">
            Отмена
          </Button>
          <Button onClick={onClose()} color="primary">
            Добавить
          </Button>
        </DialogActions>
      </Dialog>
    )
}

DialogAddProj.propTypes = {
    open: PropTypes.bool.isRequired
}

export default DialogAddProj