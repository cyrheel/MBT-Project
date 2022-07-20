import React, { Component, useState } from "react";
import IProjet from "../Interfaces/IProject";
import '../Styles/index.css';
import {
  projectItemWrapper,
  projectHeaderStyle,
  projectBodyStyle,
} from "../Styles/style";

function ProjectItem(project: IProjet): JSX.Element {


  return (
                <div id="card" className="lg:w-5/12 w-9/12 m-6 rounded drop-shadow-xl shadow-xl shadow-blue-800/50 bg-white lg:h-64">
                    <div id="additional" className="w-full h-full lg:h-64">
                        <div id="user-card" className="w-1/4 h-full p-2 float-left grid grid-cols-1 place-items-center justify-items-center">
                                <div className="rounded-full bg-sky-200 text-center w-auto h-auto py-1 px-2">
                                    {project.numUsers || 0}
                                </div>
                                <div className="align-items-center grid w-auto">
                                    <img src="./logo192.png" alt="" className="rounded-full mx-auto "/>
                                </div>
                                <div className="rounded-full bg-sky-200 text-center w-auto h-auto p-4">
                                    {project.daysLeft || "No deadline"}
                                </div>
                        </div>
                        <div id="more-info" className="h-full show-more float-left absolute left-1/4 rounded-l pt-2">
                            <h1 className="text-center">{project.title}</h1>
                            <p className="px-8 py-2">{project.description}</p>
                            <div className="stats absolute bottom-24 grid grid-cols-2 w-full justify-items-center">
                                <div>
                                  <div className="title font-bold text-xs text-center uppercase text-slate-900">Status</div>
                                  <div className="value font-bold text-2xl text-center text-slate-900">{project.status}</div>
                                </div>                                
                                <div>
                                  <div className="title font-bold text-xs uppercase text-center text-slate-900">Numbers Ticket</div>
                                  <div className="value font-bold text-2xl text-center text-slate-900">{project.nbTicket || "0"}</div>
                                </div>
                                <div>
                                </div>
                            </div>
                            <span id="deadline" className="absolute bottom-4 left-4 text-base">{project.start_time.toString()}</span>
                            <a className="title absolute bottom-4 right-4 font-bold text-lg hover:shadow-md shadow-blue-600 text-sky-600 bg-white rounded-md p-2">Open</a>
                        </div>
                    </div>
                </div>
  );
}

export default ProjectItem;
