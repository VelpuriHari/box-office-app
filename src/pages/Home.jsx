import { useState } from 'react';
import { searchForShows, searchForPeople } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ActorsGrid from '../components/actors/ActorsGrid';
import ShowsGrid from '../components/shows/ShowsGrid';
const Home = () => {
  const [apiData, setApiData] = useState([]);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
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
    //const body = await apiGet(`search/shows?q=${searchStr}`);

    /* const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchStr}`
    );
    const body = await response.json();*/
    //console.log(body);
  };
  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured :{apiDataError.message}</div>;
    }
    if (apiData?.length === 0) {
      return <dev>Not found </dev>;
    }

    if (apiData) {
      return apiData[0].show ? (
        <ShowsGrid apiData={apiData} />
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
