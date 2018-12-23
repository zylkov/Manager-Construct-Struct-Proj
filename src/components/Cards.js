import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import MyCard from './MyCard'

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2
    
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  }
});



function Cards(props) {
  const { classes, cards, isLoading } = props;

  return (
    <React.Fragment>
      <CssBaseline />

      { isLoading ? 
        <LinearProgress/>
        :
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {cards.map(card => (
              <Grid item key={card.id} sm={6} md={4} lg={3}>
                <MyCard name={card.name} discription={card.discription}/>
              </Grid>
            ))}
          </Grid>
        </div>
      }
    </React.Fragment>
  );
}

Cards.propTypes = {
  classes: PropTypes.object.isRequired,
  cards: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,

};

export default withStyles(styles)(Cards);