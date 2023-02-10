import { movieDataType } from '../types/constants/movie.type';

export const movieData: {
  primary: Array<movieDataType>;
  secondary: Array<movieDataType>;
} = {
  primary: [
    {
      id: 1,
      title: 'House of the Dragon',
      category1: 'CCV',
      category2: 'XXI',
      category3: 'Cinepolis',
      linkImg: 'https://www.themoviedb.org/t/p/original/ixOE4qfspKZaaGZUnPCQDANznTz.jpg',
      Genera: 'Mystery',
      TimeHH: 1,
      TimeMM: 25,
      Director: 'John Watts',
      rating1: 'MA',
    },
    {
      id: 2,
      title: 'Black Phone',
      category1: 'CCV',
      category2: 'XXI',
      category3: 'Cinepolis',
      linkImg:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2xfSO3YLkfW7rfLFKCpt9cROeBy.jpg',
      Genera: 'Horror , Thriller ',
      TimeHH: 1,
      TimeMM: 43,
      Director: 'Scott Derrickson',

      rating1: 'R',
    },
    {
      id: 3,
      title: 'Top Gun Maverick',
      category1: 'CCV',
      category2: 'XXI',
      category3: 'Cinepolis',
      linkImg: 'https://www.themoviedb.org/t/p/original/xOk8XAUnJR08GDFq6hwqD1vjV9O.jpg',
      Genera: 'Action,Drama',
      TimeHH: 2,
      TimeMM: 10,
      Director: 'Joseph Kosinski  ',

      rating1: 'PG-13',
    },
    {
      id: 4,
      title: 'Moon Knight',
      category1: 'CCV',
      category2: 'XXI',
      category3: 'Cinepolis',
      linkImg: 'https://www.themoviedb.org/t/p/original/fHQuhMKniqfvb3IrjIU1F5MfgQT.jpg',
      Genera: 'Action & Adventure',
      TimeHH: 1,
      TimeMM: 15,
      Director: 'Jeremy Slater',

      rating1: 'TV-14',
    },
  ],
  secondary: [
    {
      id: 5,
      linkImg:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/66PWgqYeRjK7Sd36JKxr5QLoNVT.jpg',
      title: 'Black Adam',
      Text: 'Action, Fantasy, Science Fiction',
      Genera: 'Action, Fantasy, Science Fiction',
      TimeHH: 2,
      TimeMM: 5,
      Director: 'Jaume Collet-Serra',
      rating1: 'PG-13',
    },
    {
      id: 6,
      linkImg:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2uqv9MlFznqee0dcO3oHwlu9PNy.jpg',
      title: 'Halloween Ends',
      Text: 'Horror, Thriller',
      Genera: 'Horror, Thriller',
      TimeHH: 1,
      TimeMM: 51,
      Director: 'David Gordon Green',
      rating1: 'R',
    },
    {
      id: 7,
      linkImg:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ci2vrL970Q9Ckcpc3GVYlEwhx4n.jpg',
      title: 'Wakanda Forever',
      Text: 'Action, Adventure, Science Fiction',
      Genera: 'Action, Adventure, Science Fiction',
      TimeHH: 2,
      TimeMM: 45,
      Director: 'Ryan Coogler',
      rating1: 'PG-13',
    },
  ],
};
