import { parseISO, format } from 'date-fns'
import type { MovieDetails200ProductionCountriesItem as ProductionCountry } from '@/shared/api/generated/model/movieDetails200ProductionCountriesItem'
import type { ConfigurationCountries200Item as CountryTranslation } from '@/shared/api/generated/model/configurationCountries200Item'

export function getMovieYear(releaseDate?: string): string | undefined {
  if (!releaseDate) return undefined

  return format(parseISO(releaseDate), 'yyyy')
}

export function getMovieGenres(genres?: { name?: string }[]): string[] {
  return (
    genres
      ?.map((genre) => genre.name)
      .filter((genre) => genre !== undefined) ?? []
  )
}

export function getMovieCountries(
  countries: ProductionCountry[] = [],
  dictionary: CountryTranslation[] = [],
): string[] {
  return countries.map((country) => {
    const translation = dictionary.find(
      (item) => item.iso_3166_1 === country.iso_3166_1,
    )

    return translation?.native_name ?? country.name ?? ''
  })
}

export function getMovieDuration(runtime?: number): string | undefined {
  if (!runtime) return undefined

  const hours = Math.floor(runtime / 60)
  const minutes = runtime % 60

  return `${hours} ч ${minutes} мин`
}
