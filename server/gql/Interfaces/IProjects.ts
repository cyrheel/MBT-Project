export default interface IProject {
  id?: number;
  title: string;
  description: string;
  start_time: Date;
  end_time?: Date;
  status: string;
  user_id: object;
  ticket_id?: number;
  picture_id?: number;
}
