exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('moves').del()
    .then(function () {
      // Inserts seed entries
      return knex('moves').insert([
        { id: 1, name: 'the flappy flooper', images: '/images/dance-1.jpg' },
        { id: 2, name: 'the leany backer', images: '/images/dance-2.jpg' },
        { id: 3, name: 'the twiddly twister', images: '/images/dance-3.jpg' },
        { id: 4, name: 'the pointy upper', images: '/images/dance-4.jpg' },
        { id: 5, name: 'the dad', images: '/images/dance-5.jpg' },
        { id: 6, name: 'the MJ twinkle toes', images: '/images/dance-6.jpg' },
        { id: 7, name: 'the olympic swimmer', images: '/images/dance-7.jpg' },
        { id: 8, name: 'the woooaahhhh man', images: '/images/dance-8.jpg' },
        { id: 9, name: 'the duck diver', images: '/images/dance-9.jpg' },
        { id: 10, name: 'the juicy juggler', images: '/images/dance-10.jpg' },
        { id: 11, name: 'the hip hop', images: '/images/dance-11.jpg' },
        { id: 12, name: 'the conor mcgreggor', images: '/images/dance-12.jpg' },
        { id: 13, name: 'the hidey jivey', images: '/images/dance-13.jpg' },
        { id: 14, name: 'the out me waaayyy', images: '/images/dance-14.jpg' },
        { id: 15, name: 'the smelly lunchbox', images: '/images/dance-15.jpg' },
        { id: 16, name: 'the limp loosey goosey', images: '/images/dance-16.jpg' }
      ])
    })
}
