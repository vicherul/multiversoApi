import { useEffect, useState } from "react";
import type { Character } from "../types/character";

export const useCharacter = () => {
    const [character, setCharacter] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const fetchCharacter = async () => {
        try {
          const response = await fetch('https://rickandmortyapi.com/api/character');
          if (!response.ok) {
            throw new Error('Error al cargar los datos del personaje');
          }

          const data = await response.json();
          setCharacter(data.results);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Error desconocido');
        } finally {
          setLoading(false);
        }
      };

      fetchCharacter();
    }, []);

    return { character, loading, error };
  };
    
