import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type TasksType = {
    [todolistID: string]: TaskType[]
}

export type FilterValuesType = "all" | "active" | "completed";

function App() {


    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<TasksType>({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });

    function changeFilter(todolistId: string, value: FilterValuesType) {
        setTodolists(todolists.map(tdl => tdl.id === todolistId ? {...tdl, filter: value} : tdl))

    }

    function removeTodolist(todolistId: string) {
        setTodolists([...todolists.filter(tdl => tdl.id !== todolistId)])
    }

    function removeTask(todolistId: string, id: string) {
        setTasks({...tasks, [todolistId]: tasks[todolistId].filter(tsk => tsk.id !== id)})
        setTodolists([...todolists])
        /*let filteredTasks = tasks.filter(t => t.id != id);
        setTasks(filteredTasks);*/
    }

    function addTask(todolistId: string, title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todolistId]: [newTask, ...tasks[todolistId]]})
    }

    function changeStatus(todolistId: string, taskId: string, isDone: boolean) {
        setTasks({...tasks, [todolistId]: tasks[todolistId].map(tsk => tsk.id === taskId ? {...tsk, isDone} : tsk)})

    }



    return (
        <div className="App">
            {todolists.map((mappedTodolists) => {
                let tasksForTodolist = tasks[mappedTodolists.id]

                if (mappedTodolists.filter === "active") {
                    tasksForTodolist = tasks[mappedTodolists.id].filter(t => !t.isDone);
                }
                if (mappedTodolists.filter === "completed") {
                    tasksForTodolist = tasks[mappedTodolists.id].filter(t => t.isDone);
                }

                return (
                    <Todolist key={mappedTodolists.id}
                              todolistId={mappedTodolists.id}
                              title={mappedTodolists.title}
                              tasks={tasksForTodolist}
                              removeTask={removeTask}
                              changeFilter={changeFilter}
                              addTask={addTask}
                              changeTaskStatus={changeStatus}
                              filter={mappedTodolists.filter}
                    />
                )
            })}
        </div>
    );
}

export default App;
