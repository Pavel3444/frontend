import episode from '../data/episode.json';
import Categories from "../components/categories";

export default function Episode() {
  return (
    <div>
      <Categories list={episode} />
    </div>
  );
}
