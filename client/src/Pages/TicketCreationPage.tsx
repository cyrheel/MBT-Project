import ReactDOM from 'react-dom';
import '../Styles/index.css';
const name = 'Create Task';
const TicketCreationPage = (<>
  <div>
    <h2 className="flex items-center justify-center font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">{name}</h2>
    <div className="max-w-sm w-full lg:max-w-full lg:flex bg-slate-100">
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">Task Name</label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"></input>

          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">Label</label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"></input>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">Project Name</label>
            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name"></textarea>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-members">Members</label>
            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-members">
              <option>Select</option>
              <option>Norhen</option>
              <option>Jonathan</option>
              <option>Rachid</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-members">Project</label>
            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-members">
              <option>Select</option>
              <option>React</option>
              <option>Front</option>
              <option>Back</option>
            </select>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-members">Difficulty</label>
            <p>Checkbox etoile </p>
            <div className="flex justify-center">
              <div className="form-check form-check-inline">
                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                <label className="form-check-label inline-block text-gray-800" htmlFor="inlineCheckbox1">1</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                <label className="form-check-label inline-block text-gray-800" htmlFor="inlineCheckbox2">2</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="checkbox" id="inlineCheckbox3" value="option3" disabled></input>
                <label className="form-check-label inline-block text-gray-800 opacity-50" htmlFor="inlineCheckbox3">3</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="checkbox" id="inlineCheckbox3" value="option3" disabled></input>
                <label className="form-check-label inline-block text-gray-800 opacity-50" htmlFor="inlineCheckbox4">4</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="checkbox" id="inlineCheckbox3" value="option3" disabled></input>
                <label className="form-check-label inline-block text-gray-800 opacity-50" htmlFor="inlineCheckbox5">5</label>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-members">Emergency</label>
            <p>Checkbox etoile </p>
            <div className="flex justify-center">
              <div className="form-check form-check-inline">
                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                <label className="form-check-label inline-block text-gray-800" htmlFor="inlineCheckbox1">1</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                <label className="form-check-label inline-block text-gray-800" htmlFor="inlineCheckbox2">2</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="checkbox" id="inlineCheckbox3" value="option3" disabled></input>
                <label className="form-check-label inline-block text-gray-800 opacity-50" htmlFor="inlineCheckbox3">3</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="checkbox" id="inlineCheckbox3" value="option3" disabled></input>
                <label className="form-check-label inline-block text-gray-800 opacity-50" htmlFor="inlineCheckbox4">4</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="checkbox" id="inlineCheckbox3" value="option3" disabled></input>
                <label className="form-check-label inline-block text-gray-800 opacity-50" htmlFor="inlineCheckbox5">5</label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <label htmlFor="">Dead line</label>
            <p>Calendar</p>
            <div inline-datepicker data-date="02/25/2022">ici</div>
          </div>
          
        </div>
        <button className='btn btn-blue'>Create</button>
      </form>
    </div>
    <script src="/client/src/index.js"></script>  
  </div></>
  
);
    
    
ReactDOM.render(
  TicketCreationPage,
  document.getElementById('root')
); 
export default TicketCreationPage;

