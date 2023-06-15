import { useState } from 'react';
import { searchForShows, searchForPeople } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ActorsGrid from '../components/actors/ActorsGrid';
import { useQuery } from '@tanstack/react-query';
import ShowsGrid from '../components/shows/ShowsGrid';
import { TextCenter } from '../components/common/TextCenter';
const Home = () => {
  const [filter, setFilter] = useState(null);
  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchForShows(filter.q)
        : searchForPeople(filter.q),
    // ⬇️ disabled as long as the filter is empty
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  // const [apiData, setApiData] = useState([]);
  //const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    setFilter({ q, searchOption });
    /*
    let result;
    try {
      setApiDataError(null);
      if (searchOption === 'shows') {
        result = await searchForShows(q);
        setApiData(result);
      } else {
        result = await searchForPeople(q);
        setApiData(result);
      }
    } catch (error) {
      setApiDataError(error);
    }
    */
    //const body = await apiGet(`search/shows?q=${searchStr}`);

    /* const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchStr}`
    );
    const body = await response.json();*/
    //console.log(body);
  };
  const renderApiData = () => {
    if (apiDataError) {
      return <TextCenter>Error occured :{apiDataError.message}</TextCenter>;
    }
    if (apiData?.length === 0) {
      return <TextCenter>Not found </TextCenter>;
    }

    if (apiData) {
      return apiData[0].show ? (
        <ShowsGrid shows={apiData} />
      ) : (
        <ActorsGrid apiData={apiData} />
      );
    }
    return null;
  };
  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
