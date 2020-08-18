// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

 let ToDo:Array<Object> = [{taskname:"tracking_task",taskDate:"22 June               2020",taskStatus:"Done"},
          {taskname:"map_tsk",taskDate:"01 July 2020",taskStatus:"Done"},
          {taskname:"booking_task",taskDate:"05 july 2020",taskStatus:"Pending"},
          {taskname:"update_task",taskDate:"10 July 2020",taskStatus:"Done"},
          {taskname:"game_task",taskDate:"15 July 2020",taskStatus:"Pending"},
          {taskname:"salon_task",taskDate:"29 Jul 2020",taskStatus:"Todo"},
          {taskname:"flight_task",taskDate:"01 August 2020",taskStatus:"Pending"},
          {taskname:"security_task",taskDate:"03 August 2020",taskStatus:"Todo"},
          {taskname:"school_task",taskDate:"07 August 2020",taskStatus:"Pending"},
          {taskname:"covid_task",taskDate:"10 August 2020",taskStatus:"Pending"}]

function update(){
ToDo[4]['taskStatus'] = "Done"

}
update()

console.log(ToDo[4]);