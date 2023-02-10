export interface MovieType {}

export interface movieDataType {
  id: any;
  title: any;
  category1?: any;
  category2?: any;
  category3?: any;
  linkImg: any;
  Genera: any;
  TimeHH: any;
  TimeMM: any;
  Director: any;
  rating1: any;
  Text?: string;
  date?: string;
  day?: string;
  name?: string;
  name2?: string;
  showPrice?: number;
  showTime?: string;
  showTimeAll?: Array<{
    id: string;
    name: string;
    name2: string;
    showPrice: number;
    showTime: string;
  }>;
}
