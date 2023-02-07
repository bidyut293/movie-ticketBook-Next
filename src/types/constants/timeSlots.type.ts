export interface timeSlotType {
  id: any;
  name: any;
  address: any;
  locationId: any;
  movies?: any;
  location?: any;
  theatreLogo: any;
  showType: Array<{
    id: string;
    name: string;
    price: string;
    show: Array<{
      id: string;
      showTime: string;
      showPrice: any;
      selected?: any;
      name: string;
      name2: string;
    }>;
  }>;
}
