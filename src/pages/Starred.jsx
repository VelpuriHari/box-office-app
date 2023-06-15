import ShowsGrid from '../components/shows/ShowsGrid';
import { useStarredShows } from '../lib/useStarredShows';
import { useQuery } from '@tanstack/react-query';
import { getShowsByIds } from '../api/tvmaze';

const Starred = () => {
  const [starredShowsIds] = useStarredShows();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: () =>
      getShowsByIds(starredShowsIds).then(result =>
        result.map(show => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });
  if (starredShows?.length === 0) {
    return <div>No shows were starred</div>;
  }
  if (starredShows?.length > 0) {
    return <ShowsGrid shows={starredShows} />;
  }
  if (starredShowsError) {
    return <div>Error occured : {starredShowsError.message}</div>;
  }

  return <div>Shows are loading</div>;
};

export default Starred;
