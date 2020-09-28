const path = require("path")

module.exports.createPages = async ({ actions }) => {
    const { createPage } = actions
    const ArtistTemplate = path.resolve('./src/templates/artist.js')
    const AlbumTempate = path.resolve('./src/templates/album.js')
    const artists = [
        {
            name: "Norma Jean Bell",
            photo: null,
            location: "Detroit, Michigan",
            albums: [
                {
                    name: "test",
                    photo: null,
                    songs: [{ url: null, photoUrl: null, name: "test song" }]
                }, {
                    name: "test2",
                    photo: null,
                    songs: [{ url: null, photoUrl: null, name: null }]
                },]
        }
    ]

    const albums = artists.map(artist =>
        artist.albums.map(album => {
            return { artistName: artist.name, ...album }
        })
    )

    artists.forEach((edge, i) => {
        createPage({
            component: ArtistTemplate,
            path: `/artist/${edge.name}`,
            context: edge
        })
    })

    albums.forEach(edge => {
        edge.forEach(album => {
            createPage({
                component: AlbumTempate,
                path: `/artist/${album.artistName}/${album.name}`,
                context: album
            })
        })

    })
}
