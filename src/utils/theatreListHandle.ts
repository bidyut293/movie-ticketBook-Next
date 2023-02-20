import { theatreListing } from '../data/mainData';
import { moviesListingType } from '../types/constants/movieListing.type';
import { theatreListingType } from '../types/constants/theatreListing.type';

export const theatreListHandle = (
  selectedMovie: moviesListingType | undefined,
  filter?: string
) => {
  console.log({ filter });
  let theatreList: Array<theatreListingType> = [];
  if (selectedMovie) {
    theatreListing.map(item => {
      if (selectedMovie.category.includes(item.id)) {
        theatreList.push(item);
      }
    });
  }
  console.log({ theatreList });
  if (filter && filter !== 'city-all') {
    let filterData: Array<theatreListingType> = [];
    theatreList.map(item => {
      if (item.area === filter) {
        filterData.push(item);
      }
    });
    console.log({ filterData });
    return filterData;
  }
  return theatreList;
};
