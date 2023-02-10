export interface theatreListingType {
  id: string;
  shortForm: string;
  name: string;
  address: string;
  area: Array<string>;
  show: Array<{
    type: string;
    name: string;
    time: Array<{
      time: Date;
      price: number;
    }>;
  }>;
}
