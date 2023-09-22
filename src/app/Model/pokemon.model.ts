export interface Pokemon {
  name: string,
  url: string
}

export interface PokemonDetail{
  id: number,
  name: string,
  base_experience: number,
  height: number,
  is_default: boolean,
  order: number,
  weight: number,
  abilities: any[],
  forms: any[],
  game_indices: any[],
  held_items: any[],
  location_area_encounters: string,
  moves: any[],
  past_types: any[],
  sprites: PokemonSprites,

}

export interface PokemonSprites{
  back_default: string | null,
  back_female: string | null,
  back_shiny:  string | null,
  back_shiny_female: string | null,
  front_default: string | null,
  front_female: string | null,
  front_shiny: string | null,
  front_shiny_female: string | null
}

export interface PokemonRest{
  count: number,
  next: any,
  previus: any,
  results: Pokemon[]
}
