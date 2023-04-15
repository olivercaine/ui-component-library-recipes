
/* eslint-disable max-len */
import { Recipe } from './types'

export const exampleRecipe: Recipe = {
  url: '/classic-eggs-benedict',
  title: 'Classic Eggs Benedict',
  categories: [
    {
      title: 'Breakfast',
      url: '/breakfast',
      uid: '12345'
    }
  ],
  uid: '43473cb2-db34-11ed-afa1-0242ac120002',
  mealie_id: '1',
  mealie_uid: 'a410236e-db35-11ed-afa1-0242ac120002',
  media: {
    images: [
      {
        image: 'https://raw.githubusercontent.com/olivercaine/ui-component-library-recipes/main/src/images/eggs-benedict/dalle-2023-04-15-122313-close-up-of-eggs-benedict-on-a-blue-plate-in-a-sunny-kitchen.png',
        width: 1024
      }
    ]
  },
  rating: {
    average: 4.8,
    count: 1234
  },
  description: 'Eggs Benedict is a classic breakfast dish consisting of two halves of an English muffin, topped with Canadian bacon or ham, poached eggs, and hollandaise sauce. It is often served with a side of roasted potatoes or fresh fruit. The dish is known for its rich and creamy hollandaise sauce, which is made from butter, egg yolks, lemon juice, and seasoning. Eggs Benedict is a popular brunch item and is enjoyed by many people around the world.',
  prep_times: {
    for_2: 20,
  },
  cuisine: {
    slug: 'american',
    title: 'American'
  },
  ingredients: [
    {
      label: '4 Tablespoon Olive oil for frying',
      title: '4 Tablespoon Olive oil for frying',
      uid: '934bbf3c-db3c-11ed-afa1-0242ac120001',
      name: '4 Tablespoon Olive oil for frying',
      media: {
        images: [
          {
            image: 'https://raw.githubusercontent.com/olivercaine/ui-component-library-recipes/main/src/images/ingredients/dalle-2023-04-15-150151-bottle-of-olive-oil-with-a-white-background.png',
            width: 1500
          }
        ]
      },
      allergens: {
        allergen: []
      }
    },
    {
      label: 'White wine vinegar for poaching',
      title: 'White wine vinegar for poaching',
      uid: '934bbf3c-db3c-11ed-afa1-0242ac120002',
      name: 'White wine vinegar for poaching',
      media: {
        images: [
          {
            image: 'https://raw.githubusercontent.com/olivercaine/ui-component-library-recipes/main/src/images/ingredients/dalle-2023-04-15-150041-bottle-of-white-wine-vinegar-with-a-white-background.png',
            width: 1500
          }
        ]
      },
      allergens: {
        allergen: []
      }
    },
    {
      label: '8 di Parma ham slices',
      title: '8 di Parma ham slices',
      uid: '934bbf3c-db3c-11ed-afa1-0242ac120003',
      name: '8 di Parma ham slices',
      media: {
        images: [
          {
            image: 'https://raw.githubusercontent.com/olivercaine/ui-component-library-recipes/main/src/images/ingredients/dalle-2023-04-15-150307-parma-ham-slices-on-a-plate-with-a-white-background.png',
            width: 1500
          }
        ]
      },
      allergens: {
        allergen: [
          {
            slug: 'pork'
          }
        ]
      }
    },
    {
      label: '4 Whole eggs',
      title: '4 Whole eggs',
      uid: '934bbf3c-db3c-11ed-afa1-0242ac120004',
      name: '4 Whole eggs',
      media: {
        images: [
          {
            image: 'https://raw.githubusercontent.com/olivercaine/ui-component-library-recipes/main/src/images/ingredients/dalle-2023-04-15-150443-egg-with-a-white-background.png',
            width: 1500
          }
        ]
      },
      allergens: {
        allergen: [
          {
            slug: 'egg'
          }
        ]
      }
    },
    {
      label: '2 Split English muffins',
      title: '2 Split English muffins',
      uid: '934bbf3c-db3c-11ed-afa1-0242ac120005',
      name: '2 Split English muffins',
      media: {
        images: [
          {
            image: 'https://raw.githubusercontent.com/olivercaine/ui-component-library-recipes/main/src/images/ingredients/dalle-2023-04-15-150542-a-single-english-muffin.png',
            width: 1500
          }
        ]
      },
      allergens: {
        allergen: [
          {
            slug: 'wheat'
          }
        ]
      }
    },
  ],
  basics: [
    {
      title: 'Butter',
      slug: 'butter'
    },
    {
      title: 'Olive oil',
      slug: 'olive-oil'
    },
    {
      title: 'Pepper',
      slug: 'pepper'
    },
    {
      title: 'Salt',
      slug: 'salt'
    }
  ],
  cooking_instructions: [
    {
      instruction: 'Toast the English muffins and set them aside.',
      order: 1,
      media: {
        images: [
          {
            image: 'https://raw.githubusercontent.com/olivercaine/ui-component-library-recipes/main/src/images/eggs-benedict/dalle-2023-04-15-133932-toasting-english-muffins.png',
            width: 1500
          }
        ]
      }
    },
    {
      instruction: 'In a skillet, cook the Canadian bacon or ham until it is lightly browned, then set it aside.',
      order: 2,
      media: {
        images: [
          {
            image: 'https://raw.githubusercontent.com/olivercaine/ui-component-library-recipes/main/src/images/eggs-benedict/dalle-2023-04-15-134106-skillet-cooking-bacon.png',
            width: 1500
          }
        ]
      }
    },
    {
      instruction: 'Fill a saucepan with 4 cups of water and add the white vinegar. Bring to a simmer over medium-high heat.',
      order: 3,
      media: {
        images: [
          {
            image: 'https://raw.githubusercontent.com/olivercaine/ui-component-library-recipes/main/src/images/eggs-benedict/dalle-2023-04-15-134214-water-simmering-in-a-saucepan.png',
            width: 1500
          }
        ]
      }
    },
    {
      instruction: 'Crack one egg into a small bowl or ramekin.',
      order: 4,
      media: {
        images: [
          {
            image: 'https://raw.githubusercontent.com/olivercaine/ui-component-library-recipes/main/src/images/eggs-benedict/dalle-2023-04-15-134306-cracked-egg-in-a-ramekin.png',
            width: 1500
          }
        ]
      }
    },
    {
      instruction: 'Use a spoon to create a whirlpool in the simmering water, then carefully pour the egg into the center of the whirlpool. Cook the egg for 3-4 minutes, or until the whites are set but the yolk is still runny.',
      order: 5,
      media: {
        images: [
          {
            image: 'https://raw.githubusercontent.com/olivercaine/ui-component-library-recipes/main/src/images/eggs-benedict/dalle-2023-04-15-134631-egg-yoke-in-a-ramekin-being-poured-into-a-saucepan-full-of-boiling-water.png',
            width: 1500
          }
        ]
      }
    },
    {
      instruction: 'Use a slotted spoon to remove the poached egg from the water and set it on a paper towel to drain. Repeat with the remaining eggs.',
      order: 6,
      media: {
        images: [
          {
            image: 'https://raw.githubusercontent.com/olivercaine/ui-component-library-recipes/main/src/images/eggs-benedict/dalle-2023-04-15-134851-poached-egg-on-paper-towl.png',
            width: 1500
          }
        ]
      }
    },
    {
      instruction: 'To make the hollandaise sauce, melt the butter in a saucepan over low heat.',
      order: 7,
      media: {
        images: [
          {
            image: 'https://raw.githubusercontent.com/olivercaine/ui-component-library-recipes/main/src/images/eggs-benedict/dalle-2023-04-15-134943-butter-melting-in-a-saucepan.png',
            width: 1500
          }
        ]
      }
    },
    {
      instruction: 'Add the lemon juice, salt, and black pepper to the melted butter and whisk to combine.',
      order: 8,
      media: {
        images: [
          {
            image: 'https://raw.githubusercontent.com/olivercaine/ui-component-library-recipes/main/src/images/eggs-benedict/', // TODO: generate
            width: 1500
          }
        ]
      }
    },
    {
      instruction: 'In a separate bowl, whisk the egg yolks until they are light and frothy.',
      order: 9,
      media: {
        images: [
          {
            image: 'https://raw.githubusercontent.com/olivercaine/ui-component-library-recipes/main/src/images/eggs-benedict/', // TODO: generate
            width: 1500
          }
        ]
      }
    },
    {
      instruction: 'Slowly pour the melted butter mixture into the egg yolks while whisking constantly. Continue whisking until the sauce is thickened and creamy.',
      order: 10,
      media: {
        images: [
          {
            image: 'https://raw.githubusercontent.com/olivercaine/ui-component-library-recipes/main/src/images/eggs-benedict/', // TODO: generate
            width: 1500
          }
        ]
      }
    },
    {
      instruction: 'To assemble, place two English muffin halves on a plate. Top each half with a slice of Canadian bacon or ham, then a poached egg.',
      order: 11,
      media: {
        images: [
          {
            image: 'https://raw.githubusercontent.com/olivercaine/ui-component-library-recipes/main/src/images/eggs-benedict/', // TODO: generate
            width: 1500
          }
        ]
      }
    },
    {
      instruction: 'Spoon the hollandaise sauce over the poached eggs.',
      order: 12,
      media: {
        images: [
          {
            image: 'https://raw.githubusercontent.com/olivercaine/ui-component-library-recipes/main/src/images/eggs-benedict/', // TODO: generate
            width: 1500
          }
        ]
      }
    },
    {
      instruction: 'Serve immediately and enjoy!',
      order: 13,
      media: {
        images: [
          {
            image: 'https://raw.githubusercontent.com/olivercaine/ui-component-library-recipes/main/src/images/eggs-benedict/dalle-2023-04-15-122313-close-up-of-eggs-benedict-on-a-blue-plate-in-a-sunny-kitchen.png',
            width: 1500
          }
        ]
      }
    },
  ],
  allergens: [
    {
      title: 'egg',
      slug: 'egg'
    },
    {
      title: 'wheat',
      slug: 'wheat'
    },
    {
      title: 'milk',
      slug: 'milk'
    },
    {
      title: 'pork',
      slug: 'pork'
    }
  ],
  seo: {
    title: 'Classic Eggs Benedict',
    description: 'Eggs Benedict is a classic breakfast dish consisting of two halves of an English muffin, topped with Canadian bacon or ham, poached eggs, and hollandaise sauce. It is often served with a side of roasted potatoes or fresh fruit. The dish is known for its rich and creamy hollandaise sauce, which is made from butter, egg yolks, lemon juice, and seasoning. Eggs Benedict is a popular brunch item and is enjoyed by many people around the world.',
    robots: [],
    canonical: '',
    open_graph_image: 'dalle-2023-04-15-122313-close-up-of-eggs-benedict-on-a-blue-plate-in-a-sunny-kitchen.png'
  },
  tags: [],
  _version: 1,
  nutritional_information: {
    per_hundred_grams: {
      energy_kcal: 86,
      energy_kj: 374,
      fat_mg: 2944,
      fat_saturates_mg: 602,
      carbs_mg: 10882,
      carbs_sugars_mg: 2560,
      fibre_mg: 1312,
      protein_mg: 4802,
      salt_mg: 320,
      net_weight_mg: 100000
    },
    per_portion: {
      energy_kcal: 482,
      energy_kj: 2038,
      fat_mg: 16126,
      fat_saturates_mg: 3283,
      carbs_mg: 59562,
      carbs_sugars_mg: 13961,
      fibre_mg: 7197,
      protein_mg: 26302,
      salt_mg: 1771,
      net_weight_mg: 547502
    }
  }
}
