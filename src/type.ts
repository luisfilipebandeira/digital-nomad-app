export type Category = {
    id: string
    code: CategoryCode
    name: string
    description: string
}

export type CategoryCode = 
    | 'ADVENTURE'
    | 'BEACH'
    | 'CULTURE'
    | "GASTRONOMY"
    | "HISTORY"
    | "LUXURY"
    | "NATURE"
    | "SHOPPING"
    | "URBAN" 
    | "FAVORITE"

export type City = {
    id: string
    name: string
    country: string
    coverImage: number
    description: string
    touristAttractions: TouristAttraction[]
    location: {
        latitude: number
        longitude: number
    }
    categories: Category[]
    relatedCitiesIds: string[]
}

export type TouristAttraction = {
    id: string
    name: string
    description: string
    cityId: string
}

export type CityPreview = Pick<City, "id" | "name" | "country" | "coverImage">