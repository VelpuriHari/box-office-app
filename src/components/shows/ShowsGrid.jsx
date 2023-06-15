import ShowsCard from './ShowsCard';
import { useStarredShows } from '../../lib/useStarredShows';
import { FlexGrid } from '../common/FlexGrid';

/*
const usePersistedReducer = (reducer, initialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    const persistedValue = localStorage.getItem(localStorageKey);

    return persistedValue ? JSON.parse(persistedValue) : initial;
  });
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);
  return [state, dispatch];
};
const starredShowsReducer = (currentStarred, action) => {
  switch (action.type) {
    case 'STAR':
      return currentStarred.concat(action.showId);

    case 'UNSTAR':
      return currentStarred.filter(showId => showId !== action.showId);
    default:
      return currentStarred;
  }
};
*/

const ShowsGrid = ({ shows }) => {
  const [starredShows, dispatchStarred] = useStarredShows();
  const onStarMeClick = showId => {
    const isStarred = starredShows.includes(showId);
    console.log({ starredShows });
    console.log({ isStarred });
    console.log(showId);
    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', showId });
    } else {
      dispatchStarred({ type: 'STAR', showId });
    }
  };
  return (
    <FlexGrid>
      {shows.map(data => (
        <ShowsCard
          name={data.show.name}
          image={data.show.image ? data.show.image.medium : './notfoundimg.png'}
          id={data.show.id}
          summary={data.show.summary}
          key={data.show.id}
          onStarMeClick={onStarMeClick}
          isStarred={starredShows.includes(data.show.id)}
        />
      ))}
    </FlexGrid>
  );
};
export default ShowsGrid;
