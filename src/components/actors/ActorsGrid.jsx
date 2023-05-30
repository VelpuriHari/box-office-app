import ActorsCard from './ActorsCard';

const ActorsGrid = ({ apiData }) => {
  return apiData.map(data => (
    <ActorsCard
      name={data.person.name}
      image={data.person.image ? data.person.image.medium : './notfoundimg.png'}
      birthday={data.person.birthday}
      deathday={data.person.deathday}
      gender={data.person.gender}
      country={data.person.country ? data.person.country.name : null}
      key={data.person.id}
    />
  ));
};
export default ActorsGrid;
