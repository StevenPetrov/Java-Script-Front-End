function calculateSprint(array) {
  let board = {};

  // Iterate over the first n elements to initialize the Sprint board
  for (let i = 1; i <= array[0]; i++) {
    let [assignee, taskId, title, status, estimatedPoints] = array[i].split(':');
    if (!board[assignee]) {
      board[assignee] = [];
    }
    board[assignee].push({ taskId, title, status, estimatedPoints: Number(estimatedPoints) });
  }

  // Iterate over the remaining elements to perform commands
  for (let i = array[0] + 1; i < array.length; i++) {
    let [command, assignee, taskIdOrIndex, newStatusOrTitle, estimatedPoints] = array[i].split(':');
    switch (command) {
      case 'Add New':
        if (!board[assignee]) {
          console.log(`Assignee ${assignee} does not exist on the board!`);
          break;
        }
        board[assignee].push({ taskId: taskIdOrIndex, title: newStatusOrTitle, status: estimatedPoints, estimatedPoints: Number(estimatedPoints) });
        break;
      case 'Change Status':
        if (!board[assignee]) {
          console.log(`Assignee ${assignee} does not exist on the board!`);
          break;
        }
        let task = board[assignee].find(task => task.taskId === taskIdOrIndex);
        if (!task) {
          console.log(`Task with ID ${taskIdOrIndex} does not exist for ${assignee}!`);
          break;
        }
        task.status = newStatusOrTitle;
        break;
      case 'Remove Task':
        if (!board[assignee]) {
          console.log(`Assignee ${assignee} does not exist on the board!`);
          break;
        }
        let index = Number(taskIdOrIndex);
        if (index >= board[assignee].length || index < 0) {
          console.log(`Index is out of range!`);
          break;
        }
        board[assignee].splice(index, 1);
        break;
    }
  }

  // Calculate the total estimation points for each status type
  let toDoTasksTotalPoints = 0;
  let inProgressTasksTotalPoints = 0;
  let codeReviewTasksTotalPoints = 0;
  let doneTasksTotalPoints = 0;

  for (let assignee in board) {
    for (let task of board[assignee]) {
      switch (task.status) {
        case 'ToDo':
          toDoTasksTotalPoints += task.estimatedPoints;
          break;
        case 'In Progress':
          inProgressTasksTotalPoints += task.estimatedPoints;
          break;
        case 'Code Review':
          codeReviewTasksTotalPoints += task.estimatedPoints;
          break;
        case 'Done':
          doneTasksTotalPoints += task.estimatedPoints;
          break;
      }
    }
  }

  // Print the total estimation points for each status type
  console.log(`ToDo: ${toDoTasksTotalPoints}pts`);
  console.log(`In Progress: ${inProgressTasksTotalPoints}pts`);
  console.log(`Code Review: ${codeReviewTasksTotalPoints}pts`);
  console.log(`Done Points: ${doneTasksTotalPoints}pts`);


  if (doneTasksTotalPoints >= (toDoTasksTotalPoints + inProgressTasksTotalPoints + codeReviewTasksTotalPoints)) {
    console.log('Sprint was successful!');
  } else {
    console.log('Sprint was unsuccessful...');
  }
}




calculateSprint(
    [
        '5',
        'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
        'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
        'Peter:BOP-1211:POC:Code Review:5',
        'Georgi:BOP-1212:Investigation Task:Done:2',
        'Mariya:BOP-1213:New Account Page:In Progress:13',
        'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
        'Change Status:Peter:BOP-1290:ToDo',
        'Remove Task:Mariya:1',
        'Remove Task:Joro:1',
    ]
)