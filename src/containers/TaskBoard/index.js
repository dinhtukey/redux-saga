import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';

import { STATUSES } from '../../constants';
import TaskList from '../../components/TaskList/index';
import TaskForm from '../../components/TaskForm/index';

const listTask = [
  {
    id:1,
    title: "Read Book",
    description: "Read material ui book",
    status: 0
  },
  {
    id:2,
    title: "Play football",
    description: "With my friends",
    status: 1
  },
  {
    id:3,
    title: "Listen to mussic",
    description: "alone",
    status: 2
  }
];

const TaskBoard = () => {
  const [open, setOpen] = useState(false);
  
  const renderBoard = () => {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {
          STATUSES.map((status) => {
            const taskFilter = listTask.filter(task => task.status === status.value);
            return (
              <TaskList tasks={taskFilter} status={status} />
            );
          })
        }
      </Grid>
    );
    return xhtml;
  };
  const openForm = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
      <Button variant="contained" color="primary" onClick={openForm}>
        <AddIcon /> Thêm mới công việc
      </Button>
      {renderBoard()}
      <TaskForm open={open} handleClose={handleClose}/>
    </div>
  );
};

export default TaskBoard;