export default function AppTitle(props) {
  const {
    title = 'Box Office📽️',
    subtitle = 'Are you looking for movie🍿 or an actor👩🏾‍🎤?',
  } = props;
  return (
    <dev>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </dev>
  );
}
