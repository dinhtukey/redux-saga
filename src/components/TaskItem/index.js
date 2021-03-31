import React from 'react';
import Card from '@material-ui/core/Card';
import { CardActions, CardContent, Fab, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  cardAction: {
    justifyContent: 'flex-end '
  },
};
const index = ({task,status,classes}) => {
  return (
    <Card variant="body2" key={task.id}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item md={8}>
            <Typography component="h2">
              {task.title}
            </Typography>
          </Grid>
          <Grid item md={4}>
            {status.label}
          </Grid>
        </Grid>
        <p>{task.description}</p>
      </CardContent>
      
      <CardActions className={classes.cardAction}>
        <Fab color="primary" aria-label="add" size="small">
          
          <EditIcon fontSize="small"/>
        </Fab>
        <Fab color="secondary" aria-label="edit" size="small">
          <DeleteIcon fontSize="small" />
        </Fab>
      </CardActions>
    </Card>
  );
};

export default  withStyles(styles)(index);