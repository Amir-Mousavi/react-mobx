import { makeAutoObservable, observable, action } from 'mobx'

let idGenerator = 0

export default class Task {

    id = idGenerator++
    title = ''
    done = false

    constructor() {
        makeAutoObservable(this, {
            title: observable,
            done: observable,
            setTitle: action,
            toggle: action
        })
    }

    setTitle(newTitle) {
        this.title = newTitle
    }

    toggle() {
        this.done = !this.done
    }
}