import ReactDOM from 'react-dom';
import '../Styles/index.css';
    
const name = 'Ticket Details';
const TicketDetailPage = (<>
  <div>
    <h2 className="flex items-center justify-center font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">{name}</h2>
    <div className="max-w-sm w-full lg:max-w-full lg:flex bg-slate-100">
      
    </div>
      
  </div>
</>);
      
      
ReactDOM.render(
  TicketDetailPage,
  document.getElementById('root')
); 
export default TicketDetailPage;