import { useParams } from 'react-router-dom';
import { getShowbyId } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';
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
  });

  if (showData) {
    return <div>Got show data: {showData.name}</div>;
  }
  if (showError) {
    return <div>We have an error:{showError.message}</div>;
  }

  return <dev>Showss {ShowId}</dev>;
};
export default Show;
