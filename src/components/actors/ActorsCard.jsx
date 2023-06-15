import { SearchCard, SearchImgWrapper } from '../common/SearchCard';

const ActorsCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image}></img>
      </SearchImgWrapper>
      <h1>
        {name}
        {!!gender && `(${gender})`}
      </h1>
      <p>{country ? `Comes from ${country}` : 'No country Known'}</p>

      {!!birthday && <p>Born {birthday}</p>}
      <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </SearchCard>
  );
};
export default ActorsCard;
