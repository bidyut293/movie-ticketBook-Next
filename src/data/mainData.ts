import { hoursToMinutes } from 'date-fns';

export const moviesListing: Array<any> = [
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
    category: ['theatre-2'],
    linkImg:
      'https://www.scrolldroll.com/wp-content/uploads/2022/04/Doctor-strange-Hollywood-movies-releasing-in-may-2022.webp',
    Genre: 'sci-fi',
    Director: 'Gulf Kubet',
    rating1: 'MA',
    rating: 'rat-2',
    duration: hoursToMinutes(2.8),
    flag: 'PRIMARY',
  },
  {
    id: 3,
    slug: 'black-phone',
    title: 'Black Phone',
    category: ['theatre-3'],
    linkImg: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2xfSO3YLkfW7rfLFKCpt9cROeBy.jpg',
    Genre: 'Horror , Thriller',
    Director: 'Scott Derrickson',
    rating1: 'MA',
    rating: 'rat-3',
    duration: hoursToMinutes(2.8),
    flag: 'PRIMARY',
  },
  {
    id: 4,
    slug: 'top-gun-maverick',
    title: 'Top Gun Maverick',
    category: ['theatre-4'],
    linkImg: 'https://www.themoviedb.org/t/p/original/xOk8XAUnJR08GDFq6hwqD1vjV9O.jpg',
    Genre: 'Action,Drama',
    Director: 'Scott Derrickson',
    rating1: 'MA',
    rating: 'rat-4',
    duration: hoursToMinutes(2.1),
    flag: 'PRIMARY',
  },
  {
    id: 5,
    slug: 'moon-knight',
    title: 'Moon Knight',
    category: ['theatre-5'],
    linkImg: 'https://www.themoviedb.org/t/p/original/fHQuhMKniqfvb3IrjIU1F5MfgQT.jpg',
    Genre: 'Action & Adventure',
    Director: 'Scott Derrickson',
    rating1: 'MA',
    rating: 'rat-5',
    duration: hoursToMinutes(2.1),
    flag: 'PRIMARY',
  },
  {
    id: 6,
    slug: 'secret-dumbeldore',
    title: 'Secret Dumbeldore',
    category: ['theatre-6'],
    linkImg:
      'https://www.filmibeat.com/img/196x261/popcorn/movie_posters/fantasticbeaststhesecretsofdumbledore-20220106135936-20667.jpg',
    Genre: 'Action & Adventure',
    Director: 'Mike Richardsen',
    rating1: 'MA',
    rating: 'rat-6',
    duration: hoursToMinutes(2.6),
    flag: 'PRIMARY',
  },
  {
    id: 7,
    slug: 'adam-project',
    title: 'Adam Project',
    category: ['theatre-7'],
    linkImg:
      'https://www.filmibeat.com/img/196x261/popcorn/movie_posters/theadamproject-20220311195514-20811.jpg',
    Genre: 'Action & Adventure',
    Director: 'John Root',
    rating1: 'MA',
    rating: 'rat-7',
    duration: hoursToMinutes(2.6),
    flag: 'PRIMARY',
  },
];

export const theatreListing = [
  {
    id: 'theatre1',
    shortForm: 'BRC',
    name: 'Bajrang Cinema',
    address: 'Ved Road, Surat',
    area: ['city-1'],
    show: [
      {
        type: 'regularTwoD',
        name: 'Regular 2D',
        amount: 100,
        time: [
          {
            time: new Date(2022, 1, 10, 10, 0).getHours(),
            price: 100,
          },
          {
            time: new Date(2022, 1, 10, 14, 0).getHours(),
            price: 100,
          },
          {
            time: new Date(2022, 1, 10, 16, 0).getHours(),
            price: 100,
          },
          {
            time: new Date(2022, 1, 10, 19, 0).getHours(),
            price: 100,
          },
          {
            time: new Date(2022, 1, 10, 22, 0).getHours(),
            price: 100,
          },
        ],
      },
      {
        type: 'goldClassTwoD',
        name: 'Gold Class 2D',
        amount: 120,
        time: [
          {
            time: new Date(2022, 1, 10, 9, 0).getHours(),
            price: 120,
          },
          {
            time: new Date(2022, 1, 10, 12, 0).getHours(),
            price: 120,
          },
          {
            time: new Date(2022, 1, 10, 14, 0).getHours(),
            price: 120,
          },
          {
            time: new Date(2022, 1, 10, 17, 0).getHours(),
            price: 120,
          },
          {
            time: new Date(2022, 1, 10, 20, 0).getHours(),
            price: 120,
          },
          {
            time: new Date(2022, 1, 10, 20, 0).getHours(),
            price: 120,
          },
        ],
      },
      {
        type: 'Velvet-2D',
        name: 'Velvet 2D',
        amount5: 150,
        time: [
          {
            time: new Date(2022, 1, 10, 7, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(2022, 1, 10, 9, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(2022, 1, 10, 11, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(2022, 1, 10, 13, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(2022, 1, 10, 15, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(2022, 1, 10, 17, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(2022, 1, 10, 19, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(2022, 1, 10, 21, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(2022, 1, 10, 23, 0).getHours(),
            price: 150,
          },
        ],
      },
    ],
  },

  {
    id: 'theatre2',
    shortForm: 'VM',
    name: 'Valam Multiplex',
    address: 'Varacha, Surat',
    area: ['city-2'],
    show: [
      {
        type: '2D',
        name: '2D',
        amount: 100,
        time: [
          {
            time: new Date(2022, 1, 10, 10, 0).getHours(),
            price: 100,
          },
          {
            time: new Date(2022, 1, 10, 14, 0).getHours(),
            price: 100,
          },
          {
            time: new Date(2022, 1, 10, 16, 0).getHours(),
            price: 100,
          },
          {
            time: new Date(2022, 1, 10, 19, 0).getHours(),
            price: 100,
          },
          {
            time: new Date(2022, 1, 10, 22, 0).getHours(),
            price: 100,
          },
        ],
      },
    ],
  },
  {
    id: 'theatre3',
    shortForm: 'CPT',
    name: 'CINE PLUS THEATRE',
    address: 'Kohinoor Road, Surat',
    area: ['city-3'],
    show: [
      {
        type: '2D',
        name: '2D',
        amount: 50,
        time: [
          {
            time: new Date(2022, 1, 10, 12, 0).getHours(),
            price: 50,
          },
          {
            time: new Date(2022, 1, 10, 15, 0).getHours(),
            price: 50,
          },
          {
            time: new Date(2022, 1, 10, 19, 0).getHours(),
            price: 50,
          },
          {
            time: new Date(2022, 1, 10, 21, 0).getHours(),
            price: 50,
          },
        ],
      },
    ],
  },
  {
    id: 'theatre4',
    shortForm: 'IRM',
    name: 'INOX Reliance Mall',
    address: 'Udhna Darwaja, Surat',
    area: ['city-4'],
    show: [
      {
        type: '2D',
        name: '2D',
        amount: 50,
        time: [
          {
            time: new Date(2022, 1, 10, 12, 0).getHours(),
            price: 50,
          },
          {
            time: new Date(2022, 1, 10, 15, 0).getHours(),
            price: 50,
          },
          {
            time: new Date(2022, 1, 10, 19, 0).getHours(),
            price: 50,
          },
          {
            time: new Date(2022, 1, 10, 21, 0).getHours(),
            price: 50,
          },
        ],
      },
    ],
  },
  {
    id: 'theatre5',
    shortForm: 'DRW',
    name: 'INOX DR World Surat',
    address: 'Parvat Patiya, Surat',
    area: ['city-5'],
    show: [
      {
        type: 'Regular-2D',
        name: 'Regular 2D',
        amount: 100,
        time: [
          {
            time: new Date(2022, 1, 10, 10, 0).getHours(),
            price: 100,
          },
          {
            time: new Date(2022, 1, 10, 14, 0).getHours(),
            price: 100,
          },
          {
            time: new Date(2022, 1, 10, 16, 0).getHours(),
            price: 100,
          },
          {
            time: new Date(2022, 1, 10, 19, 0).getHours(),
            price: 100,
          },
          {
            time: new Date(2022, 1, 10, 22, 0).getHours(),
            price: 100,
          },
        ],
      },
      {
        type: 'Gold_Class-2D',
        name: 'Gold Class 2D',
        amount: 120,
        time: [
          {
            time: new Date(2022, 1, 10, 9, 0).getHours(),
            price: 120,
          },
          {
            time: new Date(2022, 1, 10, 12, 0).getHours(),
            price: 120,
          },
          {
            time: new Date(2022, 1, 10, 14, 0).getHours(),
            price: 120,
          },
          {
            time: new Date(2022, 1, 10, 17, 0).getHours(),
            price: 120,
          },
          {
            time: new Date(2022, 1, 10, 20, 0).getHours(),
            price: 120,
          },
          {
            time: new Date(2022, 1, 10, 20, 0).getHours(),
            price: 120,
          },
        ],
      },
      {
        type: 'Velvet-2D',
        name: 'Velvet 2D',
        amount5: 150,
        time: [
          {
            time: new Date(2022, 1, 10, 7, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(2022, 1, 10, 9, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(2022, 1, 10, 11, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(2022, 1, 10, 13, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(2022, 1, 10, 15, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(2022, 1, 10, 17, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(2022, 1, 10, 19, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(2022, 1, 10, 21, 0).getHours(),
            price: 150,
          },
          {
            time: new Date(2022, 1, 10, 23, 0).getHours(),
            price: 150,
          },
        ],
      },
    ],
  },
  {
    id: 'theatre6',
    shortForm: 'Cinepolis',
    name: 'Cinepolis',
    address: 'Hazira-Adajan, Surat',
    area: ['city-6'],
    show: [
      {
        type: '2D',
        name: '2D',
        amount: 50,
        time: [
          {
            time: new Date(2022, 1, 10, 12, 0).getHours(),
            price: 50,
          },
          {
            time: new Date(2022, 1, 10, 15, 0).getHours(),
            price: 50,
          },
          {
            time: new Date(2022, 1, 10, 19, 0).getHours(),
            price: 50,
          },
          {
            time: new Date(2022, 1, 10, 21, 0).getHours(),
            price: 50,
          },
        ],
      },
    ],
  },
  {
    id: 'theatre7',
    shortForm: 'RCH',
    name: 'Rajhans Cinema Hall',
    address: 'Pal, Surat',
    area: ['city-7'],
    show: [
      {
        type: '2D',
        name: '2D',
        amount: 50,
        time: [
          {
            time: new Date(2022, 1, 10, 12, 0).getHours(),
            price: 50,
          },
          {
            time: new Date(2022, 1, 10, 15, 0).getHours(),
            price: 50,
          },
          {
            time: new Date(2022, 1, 10, 19, 0).getHours(),
            price: 50,
          },
          {
            time: new Date(2022, 1, 10, 21, 0).getHours(),
            price: 50,
          },
        ],
      },
    ],
  },
];

export const city = [
  {
    id: 'city-1',
    name: 'SURAT',
    value: 'SUT',
  },
  {
    id: 'city-2',
    name: 'SURAT',
    value: 'SUT',
  },
  {
    id: 'city-3',
    name: 'SURAT',
    value: 'SUT',
  },
  {
    id: 'city-4',
    name: 'SURAT',
    value: 'SUT',
  },
  {
    id: 'city-5',
    name: 'SURAT',
    value: 'SUT',
  },
  {
    id: 'city-6',
    name: 'SURAT',
    value: 'SUT',
  },
  {
    id: 'city-7',
    name: 'SURAT',
    value: 'SUT',
  },
];

export const rating = [
  {
    id: 'rat-1',
    value: 'MA',
  },
  {
    id: 'rat-2',
    value: 'B',
  },
  {
    id: 'rat-3',
    value: 'C',
  },
  {
    id: 'rat-4',
    value: 'A',
  },
  {
    id: 'rat-5',
    value: 'B',
  },
  {
    id: 'rat-6',
    value: 'A',
  },
  {
    id: 'rat-7',
    value: 'A',
  },
];
