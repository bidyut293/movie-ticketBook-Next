import { timePriceType } from './timePrice.type';
export interface selectedTimeDataType {
  date?: number;
  movieId?: string;
  day: string;
  id: string;
  name: string;
  name2: string;
  showPrice: number;
  showTime: string;
  theatreName: string;
  title: string;
  theatreType: string;
  selectedTime: number;
  ticketPrice?: number;
  showTimeAll: timePriceType[];
}

export interface selectedShowType {
  theatreId: string;
  movieId: string;
  showTime: Date;
  price: number;
  showId: string;
}
