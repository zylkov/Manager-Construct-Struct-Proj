import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  }
});

function MyCard(props) {
  const { classes, name, discription } = props;

  return (
    <React.Fragment>
      <CssBaseline />
                <Card className={classes.card}>
                  
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {
                        name
                      }
                    </Typography>
                    <Typography>
                      {discription}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Открыть
                    </Button>
                    
                  </CardActions>
                </Card>
    </React.Fragment>
  );
}

MyCard.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  discription: PropTypes.string.isRequired
};

export default withStyles(styles)(MyCard);