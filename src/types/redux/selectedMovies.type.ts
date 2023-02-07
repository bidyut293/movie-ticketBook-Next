export interface SelectedMoviesType {
  movie: {
    Director: string;
    Genera: string;
    Rating1: any;
    TimeMM: any;
    category1: string;
    category2: string;
    category3: string;
    id?: any;
    linkImg: string;
    title?: string;
    date?: string;
    day?: string;
    name?: string;
    name2?: string;
    selectedSeat?: Array<{
      Available?: any;
      Booked?: any;
      Selected?: any;
      id?: any;
      name?: string;
    }>;
    showPrice?: any;
    showTime?: string;
    total?: any;
    showTimeAll?: Array<{
      id?: string;
      name?: string;
      name2?: string;
      showPrice?: any;
      showTime?: string;
    }>;
  };
}
