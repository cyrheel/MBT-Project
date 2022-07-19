import React, { Component, useState } from "react";
import IProjet from "../Interfaces/IProject";
import '../Styles/index.css';
import logo from "../Statics/project.jpg";
import {
  projectItemWrapper,
  projectHeaderStyle,
  projectBodyStyle,
} from "../Styles/style"; 

function ProjectItem(project: IProjet): JSX.Element {
    //state
    const [moreInfoStatus, setMoreInfoStatus] = useState<boolean>(false);
    const [clickedButton, setClickedButton] = useState('');
    //funcs
    const moreInfoHS = (event: React.MouseEvent<HTMLButtonElement>):any => {
        const button: HTMLButtonElement = event.currentTarget;
        setClickedButton(button.id);
        let BtnSlide:HTMLElement | null = document.getElementById(project.id.toString());
        let MoreInfo:HTMLElement | null = document.getElementById("element".concat( project.id.toString()));
        if( MoreInfo && BtnSlide) {
            if(moreInfoStatus){
                MoreInfo.style.height = "0%";
                MoreInfo.style.overflow = "hidden";
                MoreInfo.style.transition = "display 0.6s";
                MoreInfo.style.display = "none";
                BtnSlide.classList.add("ti-angle-down");
                BtnSlide.classList.remove("ti-angle-up");
                setMoreInfoStatus(false);
            }else{
                MoreInfo.style.height = "auto";
                MoreInfo.style.overflow = "auto";
                MoreInfo.style.display = "block";
                BtnSlide.classList.remove("ti-angle-down");
                BtnSlide.classList.add("ti-angle-up");
                setMoreInfoStatus(true);
            }
        }
    }

  return (
    <div id="card" className="lg:w-5/12 w-9/12 m-6 rounded-md drop-shadow-xl shadow-xl shadow-blue-800/50 bg-white">
    <div id="additional" className="w-full rounded-md">
        <div id="user-card" className="w-4/4 h-12 place-items-center justify-items-center flex  bg-sky-300 rounded-md">
            <div className="align-items-center grid h-full py-1 px-12 border-r-2 border-white">
                <img src={logo} alt="" className="rounded-full mx-auto h-10 w-10"/>
            </div>
            <h1 className="text-center w-full text-white font-bold text-2xl">{project.title}</h1>
            <a id ="open" href="http://localhost:3000/projetDetails" className="ti-fullscreen text-sky-600 bg-white rounded-full p-2 m-2"></a>
            <button id={project.id.toString()} onClick={moreInfoHS} className="ti-angle-down text-sky-600 bg-white rounded-full p-2 m-2"></button>
        </div>
        <div id={"element".concat(project.id.toString())} className="more-info-show w-full rounded-md pt-2 bg-slate-100">
            <div className="flex">
                <div className="w-1/6 mx-4">
                        <div className="w-full text-center">User</div>
                        <div className="rounded-full  bg-white text-center w-auto h-auto py-1 px-2">
                            {project.numUsers? project.numUsers.toString(): "0"}
                        </div>
                        <div className="w-full text-center mt-2">Deadline</div>
                        <div className="rounded-full bg-white text-center w-auto h-auto p-4 mb-2">
                            {project.end_time ? project.end_time.toString().substring(0,10): "No deadline"}
                        </div>
                </div>
                <div className="w-5/6 mx-4 block">
                    <p className="px-8 py-2 w-full text-sm ">{project.description}</p>
                    <div className=" grid grid-cols-2 w-full justify-items-center">
                        <div>
                            <div className="title font-bold text-xs text-center uppercase text-slate-900">Status</div>
                            <div className="value font-bold text-2xl text-center text-slate-900">{project.status}</div>
                        </div>                                
                        <div>
                            <div className="title font-bold text-xs uppercase text-center text-slate-900">Numbers Ticket</div>
                            <div className="value font-bold text-2xl text-center text-slate-900">{project.nbTicket? project.nbTicket : "0"}</div>
                        </div>
                        <div>
                            
                        </div>
                        <div className="px-8 py-4">
                            <div id="Start" className="text-base">Start : {project.start_time.toString().substring(0,10)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default ProjectItem;
