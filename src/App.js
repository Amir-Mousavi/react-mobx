import './App.css'
import TaskListView from './TaskListView'
import Filter from './Filter'
import TaskInput from './TaskInput'

function App () {
  return (
    <div className='App'>
      <h1>Mobx</h1>
      <Filter />
      <TaskInput />
      <TaskListView />
    </div>
  )
}

export default App
