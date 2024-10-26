

export const formatUrl = (id) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`

export const formatTypeUrl = (url) => {
    const splittedUrl = url.split('/')
    const id = splittedUrl[splittedUrl.length - 2]
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/${id}.png`
};

export const formatName = (name) => name.charAt(0).toUpperCase() + name.slice(1)