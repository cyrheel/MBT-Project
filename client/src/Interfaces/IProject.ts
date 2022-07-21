export default interface IProjet {
  id: number;
  title: string;
  description: string;
  start_time: Date;
  end_time?: Date;
  daysLeft?: string;
  status: string;
  user_id: [object];
  numUsers?: number;
  Tickets?:[
    {id:number}
  ] 
  nbTicket?: number;
  picture_id?: number;
}