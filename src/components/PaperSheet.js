import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin:8,
    
    

  },
});

function PaperSheet(props) {
  const { classes, title, text } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1} style={{width:"auto"}}>
        <Typography variant="h5" component="h3">
          {title}
        </Typography>
        <Typography component="p">
          {text}
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default withStyles(styles)(PaperSheet);