import { useState } from "react"
import AddTasks from "./assets/components/AddTasks"
import Tasks from "./assets/components/Tasks"

function App(){
  const [tasks, setTasks] = useState([{
    id: 1,
    title: "Estudar Programação",
    description: "Estudar programação para se tornar um programador Full Stack.",
    isCompleted: false
  },
  {
    id: 2,
    title: "Estudar Inglês",
    description: "Estudar Inglês para se tornar fluente.",
    isCompleted: false
  },
  {
    id: 3,
    title: "Estudar Matemática",
    description: "Estudar matemática para se tornar um desenvolvedor Full Stack",
    isCompleted: false
  },
]);

  function onTaskClick(taskId){
    const newTasks = tasks.map(task =>{
      //PRECISO ATUALIZAR ESSA TAREFA
      if(task.id == taskId){
        return{...task, isCompleted: !task.isCompleted}
      } else{
        return task
      }

      //NÃO PRECISO ATUALIZAR ESSA TAREFA
      
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId){
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description){
  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    isCompleted: false,
    }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>)
}


export default App
