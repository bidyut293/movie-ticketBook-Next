export interface selectedTimeDataType {
  date?: number;
  day: string;
  id: string;
  name: string;
  name2: string;
  showPrice: number;
  showTime: string;
  theatreName: string;
  theatreType: string;
  selectedTime: number;
  showTimeAll: Array<{
    id: string;
    name: string;
    name2: string;
    showPrice: number;
    showTime: string;
  }>;
}
