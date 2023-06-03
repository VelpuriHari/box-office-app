import { Link } from 'react-router-dom';

const ShowsCard = ({ name, image, id, summary }) => {
  const summaryStripped = summary
    ? summary.split('').slice(0, 100).join('').replace(/<.+?>/g, '')
    : 'No description';
  return (
    <dev>
      <dev>
        <img src={image}></img>
      </dev>
      <dev>
        <h1>{name}</h1>
      </dev>
      <dev>{summaryStripped}</dev>
      <Link to={`/show/${id}`}>Read more</Link>

      <button type="button">Star me🌟</button>
    </dev>
  );
};
export default ShowsCard;
