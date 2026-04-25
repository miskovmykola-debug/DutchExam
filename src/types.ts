export type TicketType =
  | "Formulier"
  | "E-mail"
  | "Wijkkrant"
  | "Briefje"
  | "Brief"
  | "Bericht";

export interface Ticket {
  id: number;
  title: string;
  type: TicketType;
  task: string;
  points: string[];
  keywords: string[];
  simpleAnswer: string;
  template: string;
}
