function calculateSprint(list) {
  num = list.splice(0, 1)[0];
  people = list.splice(0, num);
  actions = list

  peopleObj = {};

  for (person of people) {
    [personName,taskId,taskName,taskStatus,taskPoints] = person.split(':');

    (peopleObj[personName] ||= []).push({taskId, taskName, taskStatus, taskPoints})
  }

  for (action of actions) {
    [command, person, ...args] = action.split(':')
    let assigneeNotExist = `Assignee ${person} does not exist on the board!`

    if (command === 'Add New'){
      const [taskId, taskName, taskStatus, taskPoints] = args;
      peopleObj[person] ? peopleObj[person].push({taskId, taskName, taskStatus, taskPoints}) : console.log(assigneeNotExist)
    } 
    else if (command === 'Change Status') {
      const [taskId, newStatus] = args
      if (!peopleObj[person]){console.log(assigneeNotExist)}
      else{
        taskFinder = peopleObj[person].find(task => task.taskId === taskId)
        if (taskFinder){
          taskFinder.status = newStatus
        } else {console.log(`Task with ID ${taskId} does not exist for ${person}!`);}
      }
    }
    else if (command === 'Remove Task'){
      index = parseInt(args[0])
      if (!peopleObj[person]){console.log(assigneeNotExist)}
      else if (index < 0 || index >= peopleObj[person].length) {
        console.log(`Index is out of range!`);}
      else {
        peopleObj[person].splice(index, 1)}
  }
}

  const points = { ToDo: 0, 'In Progress': 0, 'Code Review': 0, Done: 0 };

    for (const assignee in peopleObj) {
        for (const task of peopleObj[assignee]) {
            points[task.taskStatus] += Number(task.taskPoints);
        }
    }
 
    console.log(`ToDo: ${points.ToDo}pts\nIn Progress: ${points['In Progress']}pts\nCode Review: ${points['Code Review']}pts\nDone Points: ${points.Done}pts`);
 
    if (points.Done >= points.ToDo + points['In Progress'] + points['Code Review']) {
        console.log('Sprint was successful!');
    } else {
        console.log('Sprint was unsuccessful...');
    }




}




calculateSprint(
  [
    '4',
    'Kiril:BOP-1213:Fix Typo:Done:1',
    'Peter:BOP-1214:New Products Page:In Progress:2',
    'Mariya:BOP-1215:Setup Routing:ToDo:8',
    'Georgi:BOP-1216:Add Business Card:Code Review:3',
    'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
    'Change Status:Georgi:BOP-1216:Done',
    'Change Status:Will:BOP-1212:In Progress',
    'Remove Task:Georgi:3',
    'Change Status:Mariya:BOP-1215:Done',
]

)