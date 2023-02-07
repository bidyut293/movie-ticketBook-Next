export interface selectedTimeDataType {
  date: string;
  day: string;
  id: string;
  name: string;
  name2: string;
  showPrice: number;
  showTime: string;
  showTimeAll: Array<{
    id: string;
    name: string;
    name2: string;
    showPrice: number;
    showTime: string;
  }>;
}
