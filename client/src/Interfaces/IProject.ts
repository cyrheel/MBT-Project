export default interface IProjet {
  id: number;
  title: string;
  description: string;
  start_time: Date;
  end_time?: Date;
  status: string;
  user_id: number;
  ticket_id: number;
  picture_id: number;
}
