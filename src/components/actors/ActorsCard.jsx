const ActorsCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <div>
      <div>
        <img src={image}></img>
      </div>
      <h1>
        {name}
        {!!gender && `(${gender})`}
      </h1>
      <p>{country ? `Comes from ${country}` : 'No country Known'}</p>

      {!!birthday && <p>Born {birthday}</p>}
      <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </div>
  );
};
export default ActorsCard;
