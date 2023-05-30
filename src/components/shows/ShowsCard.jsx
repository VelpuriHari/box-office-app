const ShowsCard = ({ name, image, id, summary }) => {
  const summaryStripped = summary
    ? summary.split('').slice(0, 100).join('').replace(/<.+?>/g, '')
    : 'No description';
  return (
    <dev>
      <dev>
        <img src={image}></img>
      </dev>
      <h1>{name}</h1>
      <dev>{summaryStripped}</dev>

      <button type="button">Star me🌟</button>
      <h6>{id}</h6>
    </dev>
  );
};
export default ShowsCard;
