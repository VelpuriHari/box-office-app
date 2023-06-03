const ActorsCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <dev>
      <dev>
        <img src={image}></img>
      </dev>
      <h1>
        {name}
        {!!gender && `(${gender})`}
      </h1>
      <p>{country ? `Comes from ${country}` : 'No country Known'}</p>

      {!!birthday && <p>Born {birthday}</p>}
      <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </dev>
  );
};
export default ActorsCard;
