const express = require('express')
const request = require('superagent')

const router = express.Router()

const musicURL = 'https://deezerdevs-deezer.p.rapidapi.com/playlist/1291471565'
const music = [];

// GET /api/v1/music/
router.get('/', (req, res) => {
  if ('production' !== process.env.NODE_ENV) {
    console.log('non-prod environment. returning subset')
    res.json(
      [
        'https://cdns-preview-1.dzcdn.net/stream/c-108ac9c7d95a02154e9326f76249f8a0-4.mp3',
        'https://cdns-preview-a.dzcdn.net/stream/c-a421c23e0cc19c2721112d7dc8eac5d6-6.mp3',
        'https://cdns-preview-a.dzcdn.net/stream/c-a65c4d54e983cc54dbb1c5d76df2f069-3.mp3',
        'https://cdns-preview-0.dzcdn.net/stream/c-0dde6a89856471fc39e8daa831114eaf-3.mp3',
        'https://cdns-preview-1.dzcdn.net/stream/c-1b40d706fc6e646694b57e6054cf9376-4.mp3',
        'https://cdns-preview-7.dzcdn.net/stream/c-7ab4309685a66a46e1a77eac53a13cca-4.mp3',
        'https://cdns-preview-8.dzcdn.net/stream/c-88c3da3064d80712dc8866f1b7c8d9c5-3.mp3'
      ]
    )
  } else if (music.length === 0) {
    request.get(musicURL)
      .set('x-rapidapi-host', 'deezerdevs-deezer.p.rapidapi.com')
      .set('x-rapidapi-key', process.env.DEEZER_API_KEY)
      .then((response) => {
        response.body.tracks.data.map(track => {
          music.push(track.preview)
        })

        console.log(music)

        res.json(music)
      })
      .catch(err => {
        console.log(err)
      })
  } else {
    res.json(music)
  }
})

module.exports = router