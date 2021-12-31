import { observer } from 'mobx-react-lite'
import taskList from './mobx/TaskList'

function TaskList () {
  const toggleTask = function (task) {
    return function () {
      task.toggle()
    }
  }

  // const innerFunction = toggleTask({});
  // innerFunction()

  return (
    <div>
      <ul>
        {taskList.filteredList.map(task => (
          <li key={task.id}>
            <input
              type='checkbox'
              checked={task.done}
              onChange={toggleTask(task)}
            />
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default observer(TaskList)
