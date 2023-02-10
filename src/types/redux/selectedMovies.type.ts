export interface SelectedMoviesType {
  movie: {
    date: number;
    selectedTime: number;
    movieId: string;
    showTimeAll: Array<{
      price: number;
      time: Date;
    }>;
    theatreName: string;
    theatreType: string;
    ticketPrice: number;
    title: string;
  };
}
