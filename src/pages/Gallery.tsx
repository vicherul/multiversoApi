import CharacterCard from "../components/CharacterCard/CharacterCard";
import { useCharacter } from "../hooks/useCharacter"
import "./Gallery.css";

const Gallery = () =>{
  const {character, loading, error} = useCharacter();
  
  return (
    <main className="gallery-page">
      <section className="gallery-shell">
        <header className="gallery-header">
          <p className="gallery-eyebrow">Multiverso</p>
          <h1 className="gallery-title">Rick and Morty Characters</h1>
          <p className="gallery-subtitle">
            Explora personajes en una cuadricula dinamica con su estado actual.
          </p>
          {!loading && !error && (
            <p className="gallery-counter">{character.length} personajes encontrados</p>
          )}
        </header>

        {/* MIENTRAS CARGA */}
        {loading &&
          <div className="gallery-loader" role="status" aria-label="Cargando personajes">
            <div className="loader-ring"></div>
          </div>
        }

        {/* SI HAY ERRORES */}
        {error && (
          <div className="gallery-error" role="alert">
            El error es: {error}
          </div>
        )}

        {/* El camino feliz */}
        {!error && !loading && (
          <div className="gallery-grid" aria-live="polite">
            {character.map((char)=>(
              <CharacterCard key={char.id} character={char} />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default Gallery;