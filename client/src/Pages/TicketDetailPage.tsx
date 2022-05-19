import React from "react";
import Navbar from '../Components/Navbar';
import '../Styles/index.css';
import defaultPP from "../statics/DefaultPP.svg";
    
const title = 'Ticket Details';
const taskId = 2;
const nameTask = 'nametask';
const nameProject = 'nameproject';
const taskMembers = ['baptiste','norhen','rachid','jonathan'];
const taskDescription ='lorem lipsum';
const taskComments = ['kpfkdgp1','ffgr2','rgrgr3'];

      
function TicketDetailPage(): JSX.Element {
  return (
  <div>
    <Navbar/>
    <h2 className="flex items-center justify-center font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">
      {title}
    </h2>
    <div className="flex mb-4">
      <div className="w-1/2 bg-slate-100">
        <h3 className="mb-6">Task n° {taskId}</h3>
        <div className="flex items-center justify-around mb-2">
          <h4 >{nameTask}</h4>
          <h4 >{nameProject}</h4>
        </div>
        
        <div className="flex justify-around mb-6">
          {taskMembers.map((members, index) => (
          <div className="flex rounded-lg bg-white">
            <img className="default-pp h-6 mr-2" src={defaultPP} alt="avatar" />         
            <p className="text-gray-700 text-base">
              {members}
            </p>
          </div>
          ))}  
        </div>
        <h4 className="mb-4">Description</h4>
        <p>{taskDescription}</p>
      </div>
      <div className="w-1/2 bg-slate-100 ">
        <h3 className="mb-6">TimeSheet</h3>
        
        <form className="mr-8 mb-6 rounded-lg bg-white ">
          <div className="mb-2 flex justify-around">
            <input placeholder='Time spend'/>
            <input placeholder='Time spend'/>
          </div>
          <br />
          <div className="flex items-center justify-center">
            <button className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded">Add Time</button>
          </div>
          
        </form>
        <div className="mr-8 mb-6 rounded-lg bg-white">
          <h4>Comments</h4>
          <button className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded">ViewAll</button>
          {taskComments.map((comment, index) => (
            <p>{comment}</p>
          ))}
          <div>
            <form action="" className="w-full p-4">
              <input className=" mr-4 w-full h-10 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                name="comment" placeholder=""/>    
              <button className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default TicketDetailPage;
