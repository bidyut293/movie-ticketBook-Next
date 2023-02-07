import { NextPage } from 'next';
import { moviesListing } from '../../src/data/data';

interface SelectedMoviePageProps {
    movieData: any
}

const SelectedMoviePage: NextPage<SelectedMoviePageProps> = ({movieData}) => {
  return <></>;
};
export async function getServerSideProps(context) {
  // Logic- Find selected movie with slug as identifier from movieList
  const selectedMovieData = moviesListing.find(());
  return {
    props: {}, // will be passed to the page component as props
  };
}
export default SelectedMoviePage;
