import { Link, useParams } from 'react-router-dom';
import { getShowbyId } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import ShowMainData from '../components/shows/ShowMainData';
import Details from '../components/shows/Details';
import Seasons from '../components/shows/Seasons';
import Cast from '../components/shows/Cast';
import styled from 'styled-components';
import { TextCenter } from '../components/common/TextCenter';
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
      <ShowPageWrapper>
        <BackHomeWrapper>
          <Link to="/">Go back to home</Link>
        </BackHomeWrapper>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />
        <InfoBlock>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </InfoBlock>
        <InfoBlock>
          <h2>Seasons </h2>
          <Seasons seasons={showData._embedded.seasons} />
        </InfoBlock>
        <InfoBlock>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast} />
        </InfoBlock>
      </ShowPageWrapper>
    );
  }
  if (showError) {
    return <TextCenter>We have an error:{showError.message}</TextCenter>;
  }

  return <TextCenter>Showss {ShowId}</TextCenter>;
};
export default Show;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
