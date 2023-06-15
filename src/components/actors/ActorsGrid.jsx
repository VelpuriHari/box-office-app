import ActorsCard from './ActorsCard';
import { FlexGrid } from '../common/FlexGrid';
const ActorsGrid = ({ apiData }) => {
  return (
    <FlexGrid>
      {apiData.map(data => (
        <ActorsCard
          name={data.person.name}
          image={
            data.person.image ? data.person.image.medium : './notfoundimg.png'
          }
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          gender={data.person.gender}
          country={data.person.country ? data.person.country.name : null}
          key={data.person.id}
        />
      ))}
    </FlexGrid>
  );
};
export default ActorsGrid;
