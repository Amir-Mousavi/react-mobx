import { observer } from 'mobx-react-lite'
import taskList, { FILTERS } from './mobx/TaskList'

function Filter () {
  return (
    <label>
      Filter:{' '}
      <select
        onChange={e => taskList.setFilter(e.target.value)}
        value={taskList.filter}
      >
        <option value={FILTERS.ALL}>All</option>
        <option value={FILTERS.DONE}>Done</option>
        <option value={FILTERS.UNDONE}>Undone</option>
      </select>
    </label>
  )
}

export default observer(Filter)
