export interface Character {
    id: number;     
    name: string;
    status: 'Alive' | 'Dead' | 'unknown'; //Tipado estrito para las tres opciones
    species: string;
    image: string
}
