import React from "react";
import logo from "../Statics/Capture52.svg";

function ProjectDetail() {
  return (
    <div className="flex flex-wrap grid justify-items-center">
    <div className="w-2/3 md:w-2/3 p-3">
        <div className="bg-white shadow">
            <div id="book" className="flex flex-row flex-wrap">
                <div id="entete" className="w-2/6 shadow-md flex flex-wrap place-items-center ">
                    <div className="grid w-full p-2">
                        <img src={logo} alt="" className="rounded-full mx-auto w-1/2 "></img>
                        <span className="text-center text-gray-500 font-bold">Project 1</span>
                    </div>
                    <ul id="list-user" className="w-full">
                        <li id="user"
                            className=" flex flex-warp m-2 rounded bg-orange-600 shadow">
                            <div className="flex flex-warp w-5/6 bg-white ">
                                <img src="../Card-Models/i4.jpg" alt="" className="m-2 w-10 rounded-full"></img>
                                <p
                                    className=" text-lg text-gray-500 font-bold w-full inline-block align-middle text-center mx-auto my-auto">
                                    User 1</p>
                            </div>
                            <div className="w-1/6 grid justify-items-center place-items-center"><i
                                    className="ti-crown text-white"></i></div>
                        </li>
                        <li id="user" className=" flex flex-warp m-2 rounded bg-sky-600 shadow">
                            <div className="flex flex-warp w-5/6 bg-white ">
                                <img src="../Card-Models/i4.jpg" alt="" className="m-2 w-10 rounded-full"></img>
                                <p
                                    className=" text-lg text-gray-500 font-bold w-full inline-block align-middle text-center mx-auto my-auto">
                                    User 1</p>
                            </div>
                            <div className="w-1/6 grid justify-items-center place-items-center"><i
                                    className="ti-notepad text-white"></i></div>
                        </li>
                        <li id="user"
                            className=" flex flex-warp m-2 rounded bg-lime-600 shadow">
                            <div className="flex flex-warp w-5/6 bg-white ">
                                <img src="../Card-Models/i4.jpg" alt="" className="m-2 w-10 rounded-full"></img>
                                <p
                                    className=" text-lg text-gray-500 font-bold w-full inline-block align-middle text-center mx-auto my-auto">
                                    User 1</p>
                            </div>
                            <div className="w-1/6 grid justify-items-center place-items-center"><i
                                    className="ti-server text-white"></i></div>
                        </li>
                    </ul>
                </div>
                <div id="body" className="w-4/6 flex flex-row flex-wrap">
                    <p className="w-full text-center text-2xl pt-2 underline text-sky-500 font-bold">Description
                    </p>
                    <div id="description" className="p-2 flex flex-warp ">
                            <p className="text-center text-md overscroll-auto h-1/4 w-full">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam, quidem.
                            </p>
                    </div>
                    <div id="Task" className="p-2 w-full">
                        <div className="w-full border-b">
                            <h3 className="w-full text-center text-2xl pt-2 underline text-sky-500 font-bold">Task</h3>
                        </div>
                        <div id="task" className="w-4/4 h-12 place-items-center justify-items-center flex m-2 bg-sky-500 rounded-md">
                            <a id ="difficulty" className="ti-pulse text-white bg-lime-500 rounded-full p-2 m-2"></a>
                            <a id ="difficulty" className="ti-bolt text-white bg-red-500 rounded-full p-2 m-2"></a>
                            <h1 className="text-center w-full text-white font-bold text-2xl">Task title</h1>
                            <button id ="1"  className="ti-angle-down text-sky-600 bg-white rounded-full p-2 m-2"></button>
                        </div>
                        <div id="task" className="w-4/4 h-12 place-items-center justify-items-center flex m-2 bg-sky-500 rounded-md">
                            <a id ="difficulty" className="ti-pulse text-white bg-green-500 rounded-full p-2 m-2"></a>
                            <a id ="difficulty" className="ti-bolt text-white bg-orange-500 rounded-full p-2 m-2"></a>
                            <h1 className="text-center w-full text-white font-bold text-2xl">Task title</h1>
                            {/* <button id ="2" onclick={moreInfoTask} className="ti-angle-down text-sky-600 bg-white rounded-full p-2 m-2"></button> */}
                        </div>
                        <div id="task" className="w-4/4 h-12 place-items-center justify-items-center flex m-2 bg-sky-500 rounded-md">
                            <a id ="difficulty" className="ti-pulse text-white bg-orange-500 rounded-full p-2 m-2"></a>
                            <a id ="difficulty" className="ti-bolt text-white bg-green-500 rounded-full p-2 m-2"></a>
                            <h1 className="text-center w-full text-white font-bold text-2xl">Task title</h1>
                            {/* <button id ="1" onclick={moreInfoTask} className="ti-angle-down text-sky-600 bg-white rounded-full p-2 m-2"></button> */}
                        </div>
                        <div id="task" className="w-4/4 h-12 place-items-center justify-items-center flex m-2 bg-sky-500 rounded-md">
                            <a id ="difficulty" className="ti-pulse text-white bg-red-500 rounded-full p-2 m-2"></a>
                            <a id ="difficulty" className="ti-bolt text-white bg-lime-500 rounded-full p-2 m-2"></a>
                            <h1 className="text-center w-full text-white font-bold text-2xl">Task title</h1>
                            {/* <button id ="1" onclick={moreInfoTask} className="ti-angle-down text-sky-600 bg-white rounded-full p-2 m-2"></button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default ProjectDetail;
