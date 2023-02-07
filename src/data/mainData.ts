import { hoursToMinutes, getYear } from 'date-fns';
import { moviesListingType } from '../types/constants/movieListing.type';
import { theatreListingType } from '../types/constants/theatreListing.type';
import { areaType } from '../types/constants/city.type';
import { ratingType } from '../types/constants/rating.type';
import { adsDataType} from '../types/constants/adsData.type'

export const moviesListing: moviesListingType[] = [
  {
    id: 1,
    slug: 'house-of-dragon',
    title: 'House of the Dragon',
    category: ['theatre-1', 'theatre-2'],
    linkImg: 'https://www.themoviedb.org/t/p/original/ixOE4qfspKZaaGZUnPCQDANznTz.jpg',
    genre: 'Mystery',
    director: 'John Watts',
    rating1: 'MA',
    rating: 'rat-1',
    duration: hoursToMinutes(2.5),
    flag: 'PRIMARY',
  },
  {
    id: 2,
    slug: 'doctor-strange',
    title: 'Doctor Strange',
    category: ['theatre-2', 'theatre-4'],
    linkImg:
      'https://www.scrolldroll.com/wp-content/uploads/2022/04/Doctor-strange-Hollywood-movies-releasing-in-may-2022.webp',
    genre: 'sci-fi',
    director: 'Gulf Kubet',
    rating1: 'MA',
    rating: 'rat-2',
    duration: hoursToMinutes(2.8),
    flag: 'PRIMARY',
  },
  {
    id: 3,
    slug: 'black-phone',
    title: 'Black Phone',
    category: ['theatre-3', 'theatre-4', 'theatre-5'],
    linkImg: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2xfSO3YLkfW7rfLFKCpt9cROeBy.jpg',
    genre: 'Horror , Thriller',
    director: 'Scott Derrickson',
    rating1: 'MA',
    rating: 'rat-3',
    duration: hoursToMinutes(2.8),
    flag: 'PRIMARY',
  },
  {
    id: 4,
    slug: 'top-gun-maverick',
    title: 'Top Gun Maverick',
    category: ['theatre-2', 'theatre-4', 'theatre-5', 'theatre-7'],
    linkImg: 'https://www.themoviedb.org/t/p/original/xOk8XAUnJR08GDFq6hwqD1vjV9O.jpg',
    genre: 'Action,Drama',
    director: 'Scott Derrickson',
    rating1: 'MA',
    rating: 'rat-4',
    duration: hoursToMinutes(2.1),
    flag: 'PRIMARY',
  },
  {
    id: 5,
    slug: 'mbulance',
    title: 'Ambulance',
    category: ['theatre-1', 'theatre-3', 'theatre-5'],
    linkImg: 'https://www.themoviedb.org/t/p/original/fHQuhMKniqfvb3IrjIU1F5MfgQT.jpg',
    genre: 'Action & Adventure',
    director: 'Scott Derrickson',
    rating1: 'MA',
    rating: 'rat-5',
    duration: hoursToMinutes(2.1),
    flag: 'PRIMARY',
  },
  {
    id: 6,
    slug: 'secret-dumbeldore',
    title: 'Secret Dumbeldore',
    category: ['theatre-6', 'theatre-7'],
    linkImg:
      'https://www.scrolldroll.com/wp-content/uploads/2022/02/ambulance-boy-hollywood-movies-releasing-in-march-2022.jpeg',
    genre: 'Action & Adventure',
    director: 'Mike Richardsen',
    rating1: 'MA',
    rating: 'rat-6',
    duration: hoursToMinutes(2.6),
    flag: 'PRIMARY',
  },
  {
    id: 7,
    slug: 'firestarter',
    title: 'Firestarter',
    category: ['theatre-6', 'theatre-7'],
    linkImg:
      'https://www.scrolldroll.com/wp-content/uploads/2022/04/Firestarter-Hollywood-Movies-Releasing-in-May-2022.jpg',
    genre: 'Action & Adventure',
    director: 'John Root',
    rating1: 'MA',
    rating: 'rat-7',
    duration: hoursToMinutes(2.6),
    flag: 'PRIMARY',
  },
];

export const theatreListing: theatreListingType[] = [
  {
    id: 'theatre-1',
    shortForm: 'BRC',
    name: 'Bajrang Cinema',
    address: 'Ved Road, Surat',
    area: ['city-1'],
    show: [
      {
        type: 'regularTwoD',
        name: 'Regular 2D',
        time: [
          {
            time: new Date(getYear(new Date()), 1, 10, 10, 0).getHours(),
            price: 100,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 14, 0).getHours(),
            price: 100,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 16, 0).getHours(),
            price: 100,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 19, 0).getHours(),
            price: 100,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 22, 0).getHours(),
            price: 100,
          },
        ],
      },
      {
        type: 'goldClassTwoD',
        name: 'Gold Class 2D',
        time: [
          {
            time: new Date(getYear(new Date()), 1, 10, 9, 0).getHours(),
            price: 120,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 12, 0).getHours(),
            price: 120,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 14, 0).getHours(),
            price: 120,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 17, 0).getHours(),
            price: 120,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 20, 0).getHours(),
            price: 120,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 20, 0).getHours(),
            price: 120,
          },
        ],
      },
      {
        type: 'velvetTwoD',
        name: 'Velvet 2D',
        time: [
          {
            time: new Date(getYear(new Date()), 1, 10, 7, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 9, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 11, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 13, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 15, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 17, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 19, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 21, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 23, 0).getHours(),
            price: 150,
          },
        ],
      },
    ],
  },
  {
    id: 'theatre-2',
    shortForm: 'VM',
    name: 'Valam Multiplex',
    address: 'Varacha, Surat',
    area: ['city-2'],
    show: [
      {
        type: 'twoD',
        name: '2D',
        time: [
          {
            time: new Date(getYear(new Date()), 1, 10, 10, 0).getHours(),
            price: 100,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 14, 0).getHours(),
            price: 100,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 16, 0).getHours(),
            price: 100,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 19, 0).getHours(),
            price: 100,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 22, 0).getHours(),
            price: 100,
          },
        ],
      },
    ],
  },
  {
    id: 'theatre-3',
    shortForm: 'CPT',
    name: 'CINE PLUS THEATRE',
    address: 'Kohinoor Road, Surat',
    area: ['city-3'],
    show: [
      {
        type: 'twoD',
        name: '2D',
        time: [
          {
            time: new Date(getYear(new Date()), 1, 10, 12, 0).getHours(),
            price: 50,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 15, 0).getHours(),
            price: 50,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 19, 0).getHours(),
            price: 50,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 21, 0).getHours(),
            price: 50,
          },
        ],
      },
    ],
  },
  {
    id: 'theatre-4',
    shortForm: 'IRM',
    name: 'INOX Reliance Mall',
    address: 'Udhna Darwaja, Surat',
    area: ['city-4'],
    show: [
      {
        type: 'twoD',
        name: '2D',
        time: [
          {
            time: new Date(getYear(new Date()), 1, 10, 12, 0).getHours(),
            price: 50,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 15, 0).getHours(),
            price: 50,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 19, 0).getHours(),
            price: 50,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 21, 0).getHours(),
            price: 50,
          },
        ],
      },
    ],
  },
  {
    id: 'theatre-5',
    shortForm: 'DRW',
    name: 'INOX DR World Surat',
    address: 'Parvat Patiya, Surat',
    area: ['city-5'],
    show: [
      {
        type: 'regularTwoD',
        name: 'Regular 2D',
        time: [
          {
            time: new Date(getYear(new Date()), 1, 10, 10, 0).getHours(),
            price: 100,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 14, 0).getHours(),
            price: 100,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 16, 0).getHours(),
            price: 100,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 19, 0).getHours(),
            price: 100,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 22, 0).getHours(),
            price: 100,
          },
        ],
      },
      {
        type: 'goldClassTwoD',
        name: 'Gold Class 2D',
        time: [
          {
            time: new Date(getYear(new Date()), 1, 10, 9, 0).getHours(),
            price: 120,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 12, 0).getHours(),
            price: 120,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 14, 0).getHours(),
            price: 120,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 17, 0).getHours(),
            price: 120,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 20, 0).getHours(),
            price: 120,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 20, 0).getHours(),
            price: 120,
          },
        ],
      },
      {
        type: 'velvetTwoD',
        name: 'Velvet 2D',
        time: [
          {
            time: new Date(getYear(new Date()), 1, 10, 7, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 9, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 11, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 13, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 15, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 17, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 19, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 21, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 23, 0).getHours(),
            price: 150,
          },
        ],
      },
    ],
  },
  {
    id: 'theatre-6',
    shortForm: 'Cinepolis',
    name: 'Cinepolis',
    address: 'Hazira-Adajan, Surat',
    area: ['city-6'],
    show: [
      {
        type: 'twoD',
        name: '2D',
        time: [
          {
            time: new Date(getYear(new Date()), 1, 10, 12, 0).getHours(),
            price: 50,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 15, 0).getHours(),
            price: 50,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 19, 0).getHours(),
            price: 50,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 21, 0).getHours(),
            price: 50,
          },
        ],
      },
    ],
  },
  {
    id: 'theatre-7',
    shortForm: 'RCH',
    name: 'Rajhans Cinema Hall',
    address: 'Pal, Surat',
    area: ['city-7'],
    show: [
      {
        type: 'twoD',
        name: '2D',
        time: [
          {
            time: new Date(getYear(new Date()), 1, 10, 12, 0).getHours(),
            price: 50,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 15, 0).getHours(),
            price: 50,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 19, 0).getHours(),
            price: 50,
          },
          {
            time: new Date(getYear(new Date()), 1, 10, 21, 0).getHours(),
            price: 50,
          },
        ],
      },
    ],
  },
];

export const area: areaType[] = [
  {
    id: 'city-all',
    name: 'All',
    value: 'All',
  },
  {
    id: 'city-1',
    name: 'Ved Road',
    value: 'Ved Road',
  },
  {
    id: 'city-2',
    name: 'Varacha',
    value: 'Varacha',
  },
  {
    id: 'city-3',
    name: 'Kohinoor Road',
    value: 'Kohinoor Road',
  },
  {
    id: 'city-4',
    name: 'Udhna Darwaja',
    value: 'Udhna Darwaja',
  },
  {
    id: 'city-5',
    name: 'Parvat Patiya',
    value: 'Parvat Patiya',
  },
  {
    id: 'city-6',
    name: 'Hazira-Adajan',
    value: 'Hazira-Adajan',
  },
  {
    id: 'city-7',
    name: 'Pal',
    value: 'Pal',
  },
];

export const rating: ratingType[] = [
  {
    id: 'rat-1',
    value: 'MA',
  },
  {
    id: 'rat-2',
    value: 'G',
  },
  {
    id: 'rat-3',
    value: 'PG-13',
  },
  {
    id: 'rat-4',
    value: 'R',
  },
  {
    id: 'rat-5',
    value: 'NC-17',
  },
  {
    id: 'rat-6',
    value: 'PG',
  },
  {
    id: 'rat-7',
    value: 'M',
  },
];


export const adsData: adsDataType[] = [
  {
    id: 1,
    adsImage: 'https://i.postimg.cc/1zRSzwrZ/Ads-1.png',
  },
  {
    id: 2,
    adsImage: 'https://i.postimg.cc/j5GBy7P2/Ads-2.png',
  },
  {
    id: 3,
    adsImage: 'https://i.postimg.cc/wMX4Jb94/Ads-3.png',
  },
];
