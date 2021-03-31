import React from 'react';

import { Box} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TaskItem from '../TaskItem/index';

const index = ({tasks,status}) => {
  return (
    <Grid item md={4} key={status.value}>
      <Box mt={1} mb={2}>
        <div>{status.label}</div>
      </Box>

      <div>
        {
          tasks.map((task,index) => {
            return (
              <TaskItem status={status} task={task}/>
            );
          })
        }
      </div>
    </Grid>
  );
};

export default index;