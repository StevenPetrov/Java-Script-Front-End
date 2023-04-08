function sprintReview(list){
  countState = list.splice(0,1)[0]
  pplList = list.splice(0,countState)
  tasks = list
  people = []
  toDoPoints = 0
  inProgresPoints = 0
  codeReviewPoints = 0
  donePoints = 0

  
for (x of pplList){
  const [ name,id,title,statusBar,points] = x.split(':')
  console.log(statusBar)
      if (name in people){
          if (people[name].hasOwnProperty(id)){
              people[name] = {id: title,statusBar,points}
              
      } else{
          people[name] = {id: title,statusBar,points}
      }
}

for (task of tasks){
  desolator = task.split(':')
  action = desolator[0]
  assignee =  desolator[1]

  if (action === 'Add New'){
      id = desolator[2]
      title = desolator[3]
      statusBar = desolator[4]
      points = desolator[5]
      if (assignee in people){
          people[assignee] = {id : title,statusBar,points}
      } else {console.log(`Assignee ${assignee} does not exist on the board!`)}
  } else if (action === 'Change Status'){
      id = desolator[2]
      statusBar = desolator[3]
      changeStatus(assignee, id, statusBar)
  } else if (action === 'Remove Task'){
      index = desolator[2]
      removeTask(assignee, index)
  }
}


function changeStatus(assignee, taskId, statusBar) {
  if (!people.hasOwnProperty(assignee)) {
    console.log(`Assignee ${assignee} does not exist on the board!`);
    return;
  }
  if (!people[assignee].hasOwnProperty(id)) {
    console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
    return;
  }
  people[assignee][taskId].statusBar = statusBar;
  console.log(`Status changed for ${assignee}${taskId} to ${statusBar}`);
}

function removeTask(assignee, index) {
  if (!people.hasOwnProperty(assignee)) {
    console.log(`Assignee ${assignee} does not exist on the board!`);
    return;
  }
  if (index < 0 || index >= people[assignee].length) {
    console.log("Index is out of range!");
    return;
  }
  // people[assignee][index].splice(index, 1);
}

pointsCalc();

function pointsCalc(){
  for (assigne in people){
      for (id in people[assigne]){
          console.log(id)
      }
  }
}
}
}