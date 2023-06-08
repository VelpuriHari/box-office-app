import { Link, useParams } from 'react-router-dom';
import { getShowbyId } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../components/shows/ShowMainData';
import Details from '../components/shows/Details';
import Seasons from '../components/shows/Seasons';
import Cast from '../components/shows/Cast';
//import { useEffect, useState } from 'react';
/*
const useShowId = ShowId => {
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getShowbyId(ShowId);
        setShowData(data);
      } catch (err) {
        setShowError(err);
      }
    }
    fetchData();
  }, [ShowId]);
  return { showData, showError };
};
*/

const Show = () => {
  const { ShowId } = useParams();

  //const { showData, showError } = useShowId(ShowId);

  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', ShowId],
    queryFn: () => getShowbyId(ShowId),
    refetchOnWindowFocus: false,
  });

  if (showData) {
    return (
      <div>
        <Link to="/">Go back to home</Link>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />
        <div>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </div>
        <div>
          <h2>Seasons </h2>
          <Seasons seasons={showData._embedded.seasons} />
        </div>
        <div>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast} />
        </div>
      </div>
    );
  }
  if (showError) {
    return <div>We have an error:{showError.message}</div>;
  }

  return <div>Showss {ShowId}</div>;
};
export default Show;
