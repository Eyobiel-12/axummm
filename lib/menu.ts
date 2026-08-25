export type Dish = {
  name: string
  amharic?: string
  description: string
  price: string
  tags?: string[]
  image?: string
}

export type MenuSection = {
  id: string
  title: string
  subtitle: string
  dishes: Dish[]
}

export const menu: MenuSection[] = [
  {
    id: 'beginnings',
    title: 'Beginnings',
    subtitle: 'Mekakel · to open the table',
    dishes: [
      {
        name: 'Lentil Sambusa',
        amharic: 'ሳምቡሳ',
        description:
          'Crisp pastry parcels filled with spiced red lentils, green chili and caramelized onion. Served with awaze aioli.',
        price: '14',
        tags: ['Vegan'],
        image: '/images/dish-sambusa.png',
      },
      {
        name: 'Kategna',
        description:
          'Toasted injera brushed with niter kibbeh and berbere, blistered until golden. A humble, beloved start.',
        price: '11',
        tags: ['Vegetarian'],
      },
      {
        name: 'Azifa',
        description:
          'Chilled green lentil salad with mustard, lemon, shallot and jalapeño. Bright and herbaceous.',
        price: '13',
        tags: ['Vegan'],
      },
    ],
  },
  {
    id: 'signatures',
    title: 'Signatures',
    subtitle: 'Yebet Mgeb · the heart of Axum',
    dishes: [
      {
        name: 'Doro Wat',
        amharic: 'ዶሮ ወጥ',
        description:
          'Slow-simmered chicken in a deep berbere and niter kibbeh sauce, finished with a spiced egg. Our defining dish.',
        price: '29',
        tags: ['House Favorite', 'Spicy'],
        image: '/images/dish-beyaynetu.png',
      },
      {
        name: 'Kitfo',
        amharic: 'ክትፎ',
        description:
          'Prime beef minced and warmed in mitmita and clarified niter kibbeh, with ayib cheese and gomen.',
        price: '32',
        tags: ['Signature'],
        image: '/images/dish-kitfo.png',
      },
      {
        name: 'Beef Tibs',
        amharic: 'ጥብስ',
        description:
          'Seared cubes of tenderloin with rosemary, onion, jalapeño and a whisper of berbere. Served sizzling.',
        price: '28',
        tags: ['Spicy'],
        image: '/images/dish-tibs.png',
      },
      {
        name: 'Beyaynetu',
        amharic: 'በያይነቱ',
        description:
          'A vegetarian tapestry — misir wat, shiro, gomen, atkilt and salads arrayed across a single injera.',
        price: '26',
        tags: ['Vegan'],
      },
    ],
  },
  {
    id: 'ceremony',
    title: 'Ceremony & Sweets',
    subtitle: 'Buna · to close with warmth',
    dishes: [
      {
        name: 'Coffee Ceremony',
        amharic: 'ቡና',
        description:
          'Green beans roasted tableside, ground and brewed in a clay jebena, served with frankincense. For the table.',
        price: '24',
        tags: ['For Two'],
        image: '/images/coffee-ceremony.png',
      },
      {
        name: 'Honey Wine',
        amharic: 'ጠጅ',
        description:
          'House tej — fermented honey wine infused with gesho. Floral, golden and gently sparkling.',
        price: '12',
      },
      {
        name: 'Baklava of Teff',
        description:
          'Layered teff pastry with spiced honey, pistachio and a scoop of cardamom cream.',
        price: '13',
        tags: ['Vegetarian'],
      },
    ],
  },
]
