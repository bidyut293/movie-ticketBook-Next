export interface selectedMovieTimeType {
  date: string;
  day: string;
  id: string;
  name: string;
  name2: string;
  selectedSeat: Array<{
    Available: any;
    Booked: any;
    Selected: any;
    id: any;
    name: string;
  }>;
  showPrice: any;
  showTime: string;
  total?: any;
  showTimeAll?: Array<{
    id: string;
    name: string;
    name2: string;
    showPrice: any;
    showTime: string;
  }>;
}
