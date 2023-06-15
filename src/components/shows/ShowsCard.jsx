const ShowsCard = ({ name, image, id, summary, onStarMeClick, isStarred }) => {
  const summaryStripped = summary
    ? summary.split('').slice(0, 100).join('').replace(/<.+?>/g, '')
    : 'No description';
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>

      <h1>{name}</h1>

      <p>{summaryStripped}</p>
      <div>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read more
        </a>

        <button type="button" onClick={() => onStarMeClick(id)}>
          {isStarred ? 'Unstar me' : ' Star me⭐'}
        </button>
      </div>
    </div>
  );
};
export default ShowsCard;
