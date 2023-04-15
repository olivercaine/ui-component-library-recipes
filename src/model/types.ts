/* eslint-disable max-len, camelcase */

export interface PrepTimes {
  for_2: number
}

export interface BasicsEntityOrAllergensEntityOrCuisine {
  slug: string
  title: string
}

export interface AllergenEntity {
  slug: string
}

export interface Allergens {
  allergen?: (AllergenEntity | null)[] | null
}

export interface ImagesEntity {
  image: string
  width: number
}

export interface Media1 {
  images?: (ImagesEntity | null)[] | null
}

export interface CookingInstructionsEntity {
  instruction: string
  order: number
  media: Media1
}

export interface Media {
  images: (ImagesEntity)[] | null
}

export interface IngredientsEntity {
  label: string
  title: string
  uid: string
  name: string
  media: Media
  allergens: Allergens
}

export interface Seo {
  title: string
  description: string
  robots?: (null)[] | null
  canonical: string
  open_graph_image: string
}

export interface PerHundredGramsOrPerPortion {
  energy_kcal: number
  energy_kj: number
  fat_mg: number
  fat_saturates_mg: number
  carbs_mg: number
  carbs_sugars_mg: number
  fibre_mg: number
  protein_mg: number
  salt_mg: number
  net_weight_mg: number
}

export interface NutritionalInformation {
  per_hundred_grams: PerHundredGramsOrPerPortion
  per_portion: PerHundredGramsOrPerPortion
}

export interface Rating {
  average: number
  count: number
}

export interface CategoriesEntity {
  title: string
  url: string
  uid: string
}

export interface Recipe {
  uid: string
  mealie_id: string
  mealie_uid: string
  url: string
  title: string
  categories?: (CategoriesEntity)[] | null
  media: Media
  rating: Rating
  description: string
  prep_times: PrepTimes
  cuisine: BasicsEntityOrAllergensEntityOrCuisine
  ingredients?: (IngredientsEntity)[] | null
  basics?: (BasicsEntityOrAllergensEntityOrCuisine)[] | null
  cooking_instructions?: (CookingInstructionsEntity)[] | null
  allergens?: (BasicsEntityOrAllergensEntityOrCuisine)[] | null
  seo: Seo
  tags?: (null)[] | null
  _version: number
  nutritional_information: NutritionalInformation
}
