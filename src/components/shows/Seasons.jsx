const Seasons = ({ seasons }) => {
  return (
    <div>
      <p>season in total :{seasons.length}</p>
      <p>
        Episodes in total :{''}
        {seasons.reduce((sum, season) => sum + season.episodeOrder, 0)}
      </p>
      <div>
        {seasons.map(season => (
          <div key={season.id}>
            <p>Season {season.id}</p>
            <p>Episodes : {season.episodeOrder}</p>

            <div>
              {!!season.premiereDate &&
                `Aired: ${season.premiereDate} - ${season.endDate}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Seasons;
