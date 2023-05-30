import ShowsCard from './ShowsCard';

const ShowsGrid = ({ apiData }) => {
  return apiData.map(data => (
    <ShowsCard
      name={data.show.name}
      image={data.show.image ? data.show.image.medium : './notfoundimg.png'}
      id={data.show.id}
      summary={data.show.summary}
      key={data.show.id}
    />
  ));
};
export default ShowsGrid;
