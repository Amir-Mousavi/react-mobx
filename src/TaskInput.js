import { useState } from 'react'
import { observer } from 'mobx-react-lite'

import Task from './mobx/Task'
import taskList from './mobx/TaskList'

function TaskInput () {
  const [title, setTitle] = useState('')

  const onChange = e => setTitle(e.target.value)
  const onSubmit = e => {
    e.preventDefault()
    const newTask = new Task()
    newTask.setTitle(title)
    taskList.add(newTask)
    setTitle('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input placeholder='Task title...' onChange={onChange} value={title} />
    </form>
  )
}

export default observer(TaskInput)
