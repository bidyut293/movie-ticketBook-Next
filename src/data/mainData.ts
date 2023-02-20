import { hoursToMinutes, getYear, getUnixTime, getMonth, getDate } from 'date-fns';
import { moviesListingType } from '../types/constants/movieListing.type';
import { theatreListingType } from '../types/constants/theatreListing.type';
import { areaType } from '../types/constants/city.type';
import { ratingType } from '../types/constants/rating.type';
import { adsDataType } from '../types/constants/adsData.type';
import { seatDatasType } from '../types/constants/seatDatas.type';
import { coupenListType } from '../types/constants/coupenList.type';

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
    flag: 'PRIMARY'
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
    flag: 'PRIMARY'
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
    flag: 'PRIMARY'
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
    flag: 'PRIMARY'
  },
  {
    id: 5,
    slug: 'moon-knight',
    title: 'Moon Knight',
    category: ['theatre-1', 'theatre-3', 'theatre-5'],
    linkImg: 'https://www.themoviedb.org/t/p/original/fHQuhMKniqfvb3IrjIU1F5MfgQT.jpg',
    genre: 'Action & Adventure',
    director: 'Scott Derrickson',
    rating1: 'MA',
    rating: 'rat-5',
    duration: hoursToMinutes(2.1),
    flag: 'PRIMARY'
  },
  {
    id: 6,
    slug: 'ambulance',
    title: 'Ambulance',
    category: ['theatre-6', 'theatre-7'],
    linkImg:
      'https://www.scrolldroll.com/wp-content/uploads/2022/02/ambulance-boy-hollywood-movies-releasing-in-march-2022.jpeg',
    genre: 'Action & Adventure',
    director: 'Mike Richardsen',
    rating1: 'MA',
    rating: 'rat-6',
    duration: hoursToMinutes(2.6),
    flag: 'PRIMARY'
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
    flag: 'PRIMARY'
  },
  {
    id: 8,
    slug: 'black-adam',
    title: 'Black Adam',
    category: ['theatre-6', 'theatre-7'],
    linkImg: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/66PWgqYeRjK7Sd36JKxr5QLoNVT.jpg',
    genre: 'Action, Fantasy, Science Fiction',
    director: 'John Root',
    rating1: 'MA',
    rating: 'rat-7',
    duration: hoursToMinutes(2.6),
    flag: 'SECONDERY'
  },
  {
    id: 9,
    slug: 'halloween-ends',
    title: 'Halloween Ends',
    category: ['theatre-6', 'theatre-7'],
    linkImg: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2uqv9MlFznqee0dcO3oHwlu9PNy.jpg',
    genre: 'Horror, Thriller',
    director: 'John Root toe',
    rating1: 'MA',
    rating: 'rat-7',
    duration: hoursToMinutes(2.6),
    flag: 'SECONDERY'
  },
  {
    id: 10,
    slug: 'wakanda-forever',
    title: 'Wakanda Forever',
    category: ['theatre-6', 'theatre-7'],
    linkImg: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ci2vrL970Q9Ckcpc3GVYlEwhx4n.jpg',
    genre: 'Action, Adventure, Science Fiction',
    director: 'John Root joe',
    rating1: 'MA',
    rating: 'rat-7',
    duration: hoursToMinutes(2.6),
    flag: 'SECONDERY'
  }
];

export const theatreListing: theatreListingType[] = [
  {
    id: 'theatre-1',
    shortForm: 'BRC',
    name: 'Bajrang Cinema',
    address: 'Ved Road, Surat',
    area: 'city-1',
    show: [
      {
        type: 'regularTwoD',
        name: 'Regular 2D',
        time: [
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 10, 0),
            price: 100
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 14, 0),
            price: 100
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 16, 0),
            price: 100
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 19, 0),
            price: 100
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 22, 0),
            price: 100
          }
        ]
      },
      {
        type: 'goldClassTwoD',
        name: 'Gold Class 2D',
        time: [
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 9, 0),
            price: 120
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 12, 0),
            price: 120
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 14, 0),
            price: 120
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 17, 0),
            price: 120
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 20, 0),
            price: 120
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 20, 0),
            price: 120
          }
        ]
      },
      {
        type: 'velvetTwoD',
        name: 'Velvet 2D',
        time: [
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 7, 0),
            price: 150
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 9, 0),
            price: 150
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 11, 0),
            price: 150
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 13, 0),
            price: 150
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 15, 0),
            price: 150
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 17, 0),
            price: 150
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 19, 0),
            price: 150
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 21, 0),
            price: 150
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 23, 0),
            price: 150
          }
        ]
      }
    ]
  },
  {
    id: 'theatre-2',
    shortForm: 'VM',
    name: 'Valam Multiplex',
    address: 'Varacha, Surat',
    area: 'city-2',
    show: [
      {
        type: 'twoD',
        name: '2D',
        time: [
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 10, 0),
            price: 100
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 14, 0),
            price: 100
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 16, 0),
            price: 100
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 19, 0),
            price: 100
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 22, 0),
            price: 100
          }
        ]
      }
    ]
  },
  {
    id: 'theatre-3',
    shortForm: 'CPT',
    name: 'CINE PLUS THEATRE',
    address: 'Kohinoor Road, Surat',
    area: 'city-3',
    show: [
      {
        type: 'twoD',
        name: '2D',
        time: [
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 12, 0),
            price: 50
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 15, 0),
            price: 50
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 19, 0),
            price: 50
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 21, 0),
            price: 50
          }
        ]
      }
    ]
  },
  {
    id: 'theatre-4',
    shortForm: 'IRM',
    name: 'INOX Reliance Mall',
    address: 'Udhna Darwaja, Surat',
    area: 'city-4',
    show: [
      {
        type: 'twoD',
        name: '2D',
        time: [
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 12, 0),
            price: 50
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 15, 0),
            price: 50
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 19, 0),
            price: 50
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 21, 0),
            price: 50
          }
        ]
      }
    ]
  },
  {
    id: 'theatre-5',
    shortForm: 'DRW',
    name: 'INOX DR World Surat',
    address: 'Parvat Patiya, Surat',
    area: 'city-5',
    show: [
      {
        type: 'regularTwoD',
        name: 'Regular 2D',
        time: [
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 10, 0),
            price: 100
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 14, 0),
            price: 100
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 16, 0),
            price: 100
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 19, 0),
            price: 100
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 22, 0),
            price: 100
          }
        ]
      },
      {
        type: 'goldClassTwoD',
        name: 'Gold Class 2D',
        time: [
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 9, 0),
            price: 120
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 12, 0),
            price: 120
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 14, 0),
            price: 120
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 17, 0),
            price: 120
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 20, 0),
            price: 120
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 20, 0),
            price: 120
          }
        ]
      },
      {
        type: 'velvetTwoD',
        name: 'Velvet 2D',
        time: [
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 7, 0),
            price: 150
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 9, 0),
            price: 150
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 11, 0),
            price: 150
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 13, 0),
            price: 150
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 15, 0),
            price: 150
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 17, 0),
            price: 150
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 19, 0),
            price: 150
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 21, 0),
            price: 150
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 23, 0),
            price: 150
          }
        ]
      }
    ]
  },
  {
    id: 'theatre-6',
    shortForm: 'Cinepolis',
    name: 'Cinepolis',
    address: 'Hazira-Adajan, Surat',
    area: 'city-6',
    show: [
      {
        type: 'twoD',
        name: '2D',
        time: [
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 12, 0),
            price: 50
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 15, 0),
            price: 50
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 19, 0),
            price: 50
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 21, 0),
            price: 50
          }
        ]
      }
    ]
  },
  {
    id: 'theatre-7',
    shortForm: 'RCH',
    name: 'Rajhans Cinema Hall',
    address: 'Pal, Surat',
    area: 'city-7',
    show: [
      {
        type: 'twoD',
        name: '2D',
        time: [
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 12, 0),
            price: 50
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 15, 0),
            price: 50
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 19, 0),
            price: 50
          },
          {
            time: new Date(getYear(new Date()), getMonth(new Date()), getDate(new Date()), 21, 0),
            price: 50
          }
        ]
      }
    ]
  }
];

export const area: areaType[] = [
  {
    id: 'city-all',
    name: 'All',
    value: 'All'
  },
  {
    id: 'city-1',
    name: 'Ved Road',
    value: 'Ved Road'
  },
  {
    id: 'city-2',
    name: 'Varacha',
    value: 'Varacha'
  },
  {
    id: 'city-3',
    name: 'Kohinoor Road',
    value: 'Kohinoor Road'
  },
  {
    id: 'city-4',
    name: 'Udhna Darwaja',
    value: 'Udhna Darwaja'
  },
  {
    id: 'city-5',
    name: 'Parvat Patiya',
    value: 'Parvat Patiya'
  },
  {
    id: 'city-6',
    name: 'Hazira-Adajan',
    value: 'Hazira-Adajan'
  },
  {
    id: 'city-7',
    name: 'Pal',
    value: 'Pal'
  }
];

export const rating: ratingType[] = [
  {
    id: 'rat-1',
    value: 'MA'
  },
  {
    id: 'rat-2',
    value: 'G'
  },
  {
    id: 'rat-3',
    value: 'PG-13'
  },
  {
    id: 'rat-4',
    value: 'R'
  },
  {
    id: 'rat-5',
    value: 'NC-17'
  },
  {
    id: 'rat-6',
    value: 'PG'
  },
  {
    id: 'rat-7',
    value: 'M'
  }
];

export const adsData: adsDataType[] = [
  {
    id: 1,
    adsImage: 'https://i.postimg.cc/1zRSzwrZ/Ads-1.png'
  },
  {
    id: 2,
    adsImage: 'https://i.postimg.cc/j5GBy7P2/Ads-2.png'
  },
  {
    id: 3,
    adsImage: 'https://i.postimg.cc/wMX4Jb94/Ads-3.png'
  }
];

export const seatDatas: seatDatasType[] = [
  {
    id: 1,
    name: 'A1',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 2,
    name: 'A2',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 3,
    name: 'A3',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 4,
    name: 'A4',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 5,
    name: 'A5',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 6,
    name: 'A6',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 7,
    name: 'A7',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 8,
    name: 'A8',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 9,
    name: 'A9',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 10,
    name: 'A10',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 11,
    name: 'A11',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 12,
    name: 'A12',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 13,
    name: 'A13',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 14,
    name: 'A14',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 15,
    name: 'A15',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 16,
    name: 'A16',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 17,
    name: 'A17',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 18,
    name: 'A18',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 19,
    name: 'A19',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 20,
    name: 'A20',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 21,
    name: 'B1',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 22,
    name: 'B2',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 23,
    name: 'B3',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 24,
    name: 'B4',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 25,
    name: 'B5',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 26,
    name: 'B6',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 27,
    name: 'B7',
    Booked: true,
    Available: true,
    Selected: false
  },
  {
    id: 28,
    name: 'B8',
    Booked: true,
    Available: true,
    Selected: false
  },
  {
    id: 29,
    name: 'B9',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 30,
    name: 'B10',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 31,
    name: 'B11',
    Booked: true,
    Available: true,
    Selected: false
  },
  {
    id: 32,
    name: 'B12',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 33,
    name: 'B13',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 34,
    name: 'B14',
    Booked: true,
    Available: true,
    Selected: false
  },
  {
    id: 35,
    name: 'B15',
    Booked: true,
    Available: true,
    Selected: false
  },
  {
    id: 36,
    name: 'B16',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 37,
    name: 'B17',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 38,
    name: 'B18',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 39,
    name: 'B19',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 40,
    name: 'B20',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 41,
    name: 'C1',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 42,
    name: 'C2',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 43,
    name: 'C3',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 44,
    name: 'C4',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 45,
    name: 'C5',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 46,
    name: 'C6',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 47,
    name: 'C7',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 48,
    name: 'C8',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 49,
    name: 'C9',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 50,
    name: 'C10',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 51,
    name: 'C11',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 52,
    name: 'C12',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 53,
    name: 'C13',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 54,
    name: 'C14',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 55,
    name: 'C15',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 56,
    name: 'C16',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 57,
    name: 'C17',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 58,
    name: 'C18',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 59,
    name: 'C19',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 60,
    name: 'C20',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 61,
    name: 'D1',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 62,
    name: 'D2',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 63,
    name: 'D3',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 64,
    name: 'D4',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 65,
    name: 'D5',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 66,
    name: 'D6',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 67,
    name: 'D7',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 68,
    name: 'D8',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 69,
    name: 'D9',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 70,
    name: 'D10',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 71,
    name: 'D11',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 72,
    name: 'D12',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 73,
    name: 'D13',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 74,
    name: 'D14',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 75,
    name: 'D15',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 76,
    name: 'D16',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 77,
    name: 'D17',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 78,
    name: 'D18',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 79,
    name: 'D19',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 80,
    name: 'D20',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 81,
    name: 'E1',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 82,
    name: 'E2',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 83,
    name: 'E3',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 84,
    name: 'E4',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 85,
    name: 'E5',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 86,
    name: 'E6',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 87,
    name: 'E7',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 88,
    name: 'E8',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 89,
    name: 'E9',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 90,
    name: 'E10',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 91,
    name: 'E11',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 92,
    name: 'E12',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 93,
    name: 'E13',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 94,
    name: 'E14',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 95,
    name: 'E15',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 96,
    name: 'E16',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 97,
    name: 'E17',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 98,
    name: 'E18',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 99,
    name: 'E19',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 100,
    name: 'E20',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 101,
    name: 'F1',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 102,
    name: 'F2',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 103,
    name: 'F3',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 104,
    name: 'F4',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 105,
    name: 'F5',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 106,
    name: 'F6',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 107,
    name: 'F7',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 108,
    name: 'F8',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 109,
    name: 'F9',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 110,
    name: 'F10',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 111,
    name: 'F11',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 112,
    name: 'F12',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 113,
    name: 'F13',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 114,
    name: 'F14',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 115,
    name: 'F15',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 116,
    name: 'F16',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 117,
    name: 'F17',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 118,
    name: 'F18',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 119,
    name: 'F19',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 120,
    name: 'F20',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 121,
    name: 'G1',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 122,
    name: 'G2',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 123,
    name: 'G3',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 124,
    name: 'G4',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 125,
    name: 'G5',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 126,
    name: 'G6',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 127,
    name: 'G7',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 128,
    name: 'G8',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 129,
    name: 'G9',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 130,
    name: 'G10',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 131,
    name: 'G11',
    Booked: true,
    Available: true,
    Selected: false
  },
  {
    id: 132,
    name: 'G12',
    Booked: true,
    Available: true,
    Selected: false
  },
  {
    id: 133,
    name: 'G13',
    Booked: true,
    Available: true,
    Selected: false
  },
  {
    id: 134,
    name: 'G14',
    Booked: true,
    Available: true,
    Selected: false
  },
  {
    id: 135,
    name: 'G15',
    Booked: true,
    Available: true,
    Selected: false
  },
  {
    id: 136,
    name: 'G16',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 137,
    name: 'G17',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 138,
    name: 'G18',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 139,
    name: 'G19',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 140,
    name: 'G20',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 141,
    name: 'H1',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 142,
    name: 'H2',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 143,
    name: 'H3',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 144,
    name: 'H4',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 145,
    name: 'H5',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 146,
    name: 'H6',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 147,
    name: 'H7',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 148,
    name: 'H8',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 149,
    name: 'H9',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 150,
    name: 'H10',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 151,
    name: 'H11',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 152,
    name: 'H12',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 153,
    name: 'H13',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 154,
    name: 'H14',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 155,
    name: 'H15',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 156,
    name: 'H16',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 157,
    name: 'H17',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 158,
    name: 'H18',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 159,
    name: 'H19',
    Booked: false,
    Available: true,
    Selected: false
  },
  {
    id: 160,
    name: 'H20',
    Booked: false,
    Available: true,
    Selected: false
  }
];

export const coupenList: coupenListType[] = [
  {
    name: 'FLAT100',
    id: 'flaatHundred',
    price: 100
  },
  {
    name: 'FLAT50',
    id: 'flaatFifty',
    price: 50
  }
];
