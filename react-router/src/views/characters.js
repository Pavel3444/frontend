import characters from '../data/characters.json';
import Categories from "../components/categories";

export default function Characters() {
  return (
    <div>
      <Categories list={characters} />
    </div>
  )
}
