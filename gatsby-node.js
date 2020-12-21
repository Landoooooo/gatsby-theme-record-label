const path = require("path")
// postgres://krnwccpgmjlmqq:b874e82873549760debfaff4d1dc4a3543fd7bdac311a8f1d1bd2485da96b7db@ec2-54-237-155-151.compute-1.amazonaws.com:5432/d4km9nip85o43q

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const ArtistTemplate = path.resolve("./src/templates/artist.js")
  const AlbumTempate = path.resolve("./src/templates/album.js")

  const data = await graphql(`
    query {
      pandamonium {
        artists {
          name
          albums {
            name
            photo
            songs {
              url
              photoUrl
              name
            }
          }
        }
      }
    }
  `)

  console.log("data", data)

  const {
    data: {
      pandamonium: { artists },
    },
  } = data

  const albums = artists.map(artist =>
    artist.albums.map(album => {
      return { artistName: artist.name, ...album }
    })
  )

  artists.forEach((edge, i) => {
    createPage({
      component: ArtistTemplate,
      path: `/artist/${edge.name}`,
      context: edge,
    })
  })

  albums.forEach(edge => {
    edge.forEach(album => {
      createPage({
        component: AlbumTempate,
        path: `/artist/${album.artistName}/${album.name}`,
        context: album,
      })
    })
  })
}
