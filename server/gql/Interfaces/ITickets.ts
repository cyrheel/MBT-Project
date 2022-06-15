export default interface ITicket {
  id: number;
  title: string;
  description: string;
  estimated_time: Date;
  spent_time: Date;
  status: string;
  labels: string;
  priority: string;
  difficulty: string;
  user: object;
  ticket: object;
  picture_id?: number;
}
