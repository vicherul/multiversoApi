import type { Character } from "../../types/character"
import "./CharacterCard.css";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({character}: CharacterCardProps) => {
  // Diccionario para destacar visualmente el estado del personaje.
  const statusColors = {
    Alive: 'status-alive',
    Dead: 'status-dead',
    unknown: 'status-unknown'
  }

  return (
    <article className="character-card">
      <img
        src={character.image}
        alt={`Foto de ${character.name}`}
        className="character-image"
        loading="lazy"
      />
      <div className="character-body">
        <h2 className="character-name">{character.name}</h2>
        <div className="character-meta">
          <div className={`character-status-dot ${statusColors[character.status]}`}></div>
          <span>{character.status} - {character.species}</span>
        </div>
      </div>
    </article>
  )
}

export default CharacterCard