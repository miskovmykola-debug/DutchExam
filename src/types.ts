export type TicketType =
  | "E-mail"
  | "Formulier"
  | "Wijkkrant"
  | "Briefje"
  | "Brief";

export interface Ticket {
  id: number;
  title: string;
  type: TicketType;
  category: string[];
  fullTask: string;
  points: string[];
  keywords: string[];
  simpleAnswer: string;
}
