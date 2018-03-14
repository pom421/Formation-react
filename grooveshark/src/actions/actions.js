export const SHOW_TITRES = "SHOW_TITRES"
export const SHOW_ALBUMS = "SHOW_ALBUMS"
export const SHOW_CATEGORIES = "SHOW_CATEGORIES"

export function showTItres(album) {
    return { type: SHOW_TITRES, payload: album}
}

export function showAlbums(albums) {
    return { type: SHOW_ALBUMS, payload: albums}
}

export function showCategories(categories) {
    return { type: SHOW_CATEGORIES, payload: categories}
}