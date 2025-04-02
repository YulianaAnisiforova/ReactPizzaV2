 import pizza_1 from './../assets/img/1.jpeg'
 import pizza_2 from './../assets/img/2.png'
 import pizza_3 from './../assets/img/3.jpeg'
 import pizza_4 from './../assets/img/4.jpeg'
 import pizza_5 from './../assets/img/5.jpeg'
 import pizza_6 from './../assets/img/6.jpeg'
 import pizza_7 from './../assets/img/7.jpeg'
 import pizza_8 from './../assets/img/8.jpeg'
 import pizza_9 from './../assets/img/9.jpeg'
 import pizza_10 from './../assets/img/10.jpeg'

 export type PizzaType = {
   id: number,
   imageUrl: string,
   title: string,
   types: number[],
   sizes: number[],
   price: number,
   category: number,
   rating: number,
 }

 export const PizzaDoughType = ['тонкое', 'традиционное']

export const pizzas: PizzaType[] =  [
  {
    "id": 0,
    "imageUrl": pizza_1,
    "title": "Пепперони Фреш с перцем",
    "types": [0, 1],
    "sizes": [26, 30, 40],
    "price": 803,
    "category": 0,
    "rating": 4
  },
  {
    "id": 1,
    "imageUrl": pizza_2,
    "title": "Сырная",
    "types": [0],
    "sizes": [26, 40],
    "price": 245,
    "category": 0,
    "rating": 6
  },
  {
    "id": 2,
    "imageUrl": pizza_3,
    "title": "Цыпленок барбекю",
    "types": [0],
    "sizes": [26, 40],
    "price": 295,
    "category": 1,
    "rating": 4
  },
  {
    "id": 3,
    "imageUrl": pizza_4,
    "title": "Кисло-сладкий цыпленок",
    "types": [1],
    "sizes": [26, 30, 40],
    "price": 275,
    "category": 2,
    "rating": 2
  },
  {
    "id": 4,
    "imageUrl": pizza_5,
    "title": "Чизбургер-пицца",
    "types": [0, 1],
    "sizes": [26, 30, 40],
    "price": 415,
    "category": 3,
    "rating": 8
  },
  {
    "id": 5,
    "imageUrl": pizza_6,
    "title": "Крэйзи пепперони",
    "types": [0],
    "sizes": [30, 40],
    "price": 580,
    "category": 2,
    "rating": 2
  },
  {
    "id": 6,
    "imageUrl": pizza_7,
    "title": "Пепперони",
    "types": [0, 1],
    "sizes": [26, 30, 40],
    "price": 675,
    "category": 1,
    "rating": 9
  },
  {
    "id": 7,
    "imageUrl": pizza_8,
    "title": "Маргарита",
    "types": [0, 1],
    "sizes": [26, 30, 40],
    "price": 450,
    "category": 4,
    "rating": 10
  },
  {
    "id": 8,
    "imageUrl": pizza_9,
    "title": "Четыре сезона",
    "types": [0, 1],
    "sizes": [26, 30, 40],
    "price": 395,
    "category": 5,
    "rating": 10
  },
  {
    "id": 9,
    "imageUrl": pizza_10,
    "title": "Овощи и грибы",
    "types": [0, 1],
    "sizes": [26, 30, 40],
    "price": 285,
    "category": 5,
    "rating": 7
  }
]