export const queries = {
    getPlaces: `*[_type == "place"]`,
    getPlace: (slug: string) => `*[_type == "place"]`,
}