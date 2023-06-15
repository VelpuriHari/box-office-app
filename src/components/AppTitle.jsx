export default function AppTitle(props) {
  const {
    title = 'Box Office📽️',
    subtitle = 'Are you looking for movie🍿 or an actor👩🏾‍🎤?',
  } = props;
  return (
    <div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}
