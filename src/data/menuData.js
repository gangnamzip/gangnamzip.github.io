const menuData = [
    {
      'category': 'appetizer',
      'korean': '간식',
      'items': [
        {
          'name': 'Takoyaki',
          'amount': 6,
          'isSpicy': false,
          'isVegan': false,
          'isGF': false,
          'price': 10,
          'description': 'Round deep fried batter filled with octopus, topped with seaweed bonito flakes, mayo, and donkatsu sauce.'
        }, {
          'name': 'Dumpling',
          'amount': 8,
          'isSpicy': false,
          'isVegan': false,
          'isGF': false,
          'price': 8,
          'description': 'Delicate dough fried with filled with meat and vegetables.'
        }, {
          'name': 'Spicy Edamame',
          'amount': null,
          'isSpicy': true,
          'isVegan': true,
          'isGF': false,
          'price': 6,
          'description': 'Soy bean pods lightly salted and tossed in spicy chili.'
        }, {
          'name': 'Edamame',
          'amount': null,
          'isSpicy': false,
          'isVegan': true,
          'isGF': true,
          'price': 5,
          'description': 'Soy bean pods lightly salted.'
        }, {
          'name': 'Seaweed Salad',
          'amount': null,
          'isSpicy': false,
          'isVegan': true,
          'isGF': false,
          'price': 5,
          'description': 'Seaweed tossed in rice vinegar dressing with sesame oil, soy sauce, and ginger juice.'
        }, {
          'name': 'Gangnam Kimchi',
          'amount': null,
          'isSpicy': true,
          'isVegan': false,
          'isGF': false,
          'price': '6 | 9',
          'description': 'Cured napa cabbage mixed with vegetables, red chili, salt and fish sauce. Comes in small or large size. '
        }
      ]
    }, {
      'category': 'soups',
      'korean': '수프',
      'items': [{
        'name': 'Miso Soup',
        'amount': null,
        'isSpicy': false,
        'isVegan': false,
        'isGF': false,
        'price': '5 | 8',
        'description': 'Soy bean soup simmered with tofu and green onion.'
      }, {
        'name': 'Fish Cake Soup',
        'amount': null,
        'isSpicy': false,
        'isVegan': false,
        'isGF': false,
        'price': '6 | 10',
        'description': 'Boil radish and green onion and season with fish sauce with fish cake and green onion. Does not include purple rice.'
      }]
    }, {
      'category': 'gangnam meal',
      'korean': '강남 식사',
      'meal': [{
        'size': 'cup',
        'description': 'Includes rice and sweet potato noodles, topped with sweet and spicy mayo sauce.'
      }, {
        'size': 'dup',
        'description': 'Includes rice, side salad, and side of miso soup.'
      }, {
        'size': 'zip',
        'description': 'Includes rice, 3 side dishes, and side of miso soup.'
      }],
      'protein': [{
        'name': 'Beef Bulgogi', 
        'cup': 12,
        'dup': 14,
        'zip': 16,
        'description': 'Stir-fried beef marinated in seasoned soy sauce.'
      }, {
        'name': 'Spicy Pork Bulgogi', 
        'isSpicy': true,
        'cup': 11,
        'dup': 13,
        'zip': 15,
        'description': 'Grilled pork marinated in a seasoned spicy chili and sweet sauce.'
      }, {
        'name': 'Teriyaki Chicken Bulgogi', 
        'cup': 11,
        'dup': 13,
        'zip': 15,
        'description': 'Grilled chicken marinated with sweet sauce.'
      }, {
        'name': 'Spicy Chicken Bulgogi', 
        'isSpicy': true,
        'cup': 12,
        'dup': 14,
        'zip': 16,
        'description': 'Grilled chicken marinated in a spicy chili sauce.'
      }, {
        'name': 'Fried Tofu', 
        'isVegan': true,
        'cup': 12,
        'dup': 14,
        'zip': 16,
        'description': 'Fried Tofu with sweet or spicy sauce.',
        'option': 'Cup does not include sweet potato noodles.'
      }, {
        'name': 'Fried Chicken', 
        'cup': 12,
        'dup': 14,
        'zip': 16,
        'description': 'Fried Chicken wings tossed in your choice of sauce. Choose between garlic, sweet or spicy sauce.',
        'option': 'Cup size does not include sweet potato noodles.'
      }],
      'additional': [{
        'name': 'purple rice',
        'price': 3
      },{
        'name': 'sweet potato noodles',
        'price': 4.5
      }]
    }, {
      'category' : 'gangnam plate',
      'korean': '강남 접시',
      'plate': 'Comes with spring mix, avocado, cucumber, edamame, carrots, fruits, served over sweet potato noodles or rice, and topped with sesame seeds.',
      'protein': {
        'meat': [{
          'name': 'Grilled Beef Short Rib',
          'price': 'MKT'
        }, {
          'name': 'Beef',
          'price': 16
        }, {
          'name': 'Grilled Chicken',
          'price': 14
        }, {
          'name': 'Spicy Chicken',
          'isSpicy': true,
          'price': 15
        }, {
          'name': 'Spicy Pork',
          'isSpicy': true,
          'price': 15
        }],
        'seafood': [{
          'name': 'Shrimp',
          'price': 15
        }, {
          'name': 'Spicy Shrimp',
          'isSpicy': true,
          'price': 15
        }, {
          'name': 'Crab',
          'price': 16
        },{
          'name': 'Spicy Crab',
          'isSpicy': true,
          'price': 16
        }],
        'vegetarian': [{
          'name': 'Seaweed Salad',
          'isVegan': true,
          'price': 16
        }, {
          'name': 'Tofu',
          'isVegan': true,
          'price': 15
        }, {
          'name': 'Fried Tofu',
          'isVegan': true,
          'price': 17
        }]
      },
      'dressing': ['House Sauce', 'Garlic & Onion Sauce', 'Spicy Mayo & Sweet Sauce', 'Oriential Sauce', 'Jalapeno Ranch', 'Thousand Island']
    }, {
      'category': 'gangnam ramen',
      'korean': '강남 라면',
      'items': [{
        'name': 'Tonkatsu',
        'price': 13.5,
        'description': 'Pork broth, topped with chashu pork, bean sprouts, bamboo, black fungus, seaweed, and seasoned egg.'
      }, {
        'name': 'Spicy Tonkatsu',
        'isSpicy': true,
        'price': 14.5,
        'description': 'Pork broth with spicy sauce, topped with chashu pork, bean sprouts, bamboo, black fungus, seaweed, and seasoned egg.'
      }, {
        'name': 'Black Garlic',
        'price': 14.5, 
        'description': 'Pork broth, topped with chashu pork, bean sprouts, bamboo, black fungus, seaweed, seasoned egg, and black garlic oil.'
      }, {
        'name': 'Miso',
        'price': 13.5, 
        'description': 'Miso broth, topped with chashu pork, bean sprouts, bamboo, black fungus, seaweed, and seasoned egg.'
      }, {
        'name': 'Spicy Miso',
        'isSpicy': true,
        'price': 14.5,
        'description': 'Miso broth with spicy sauce, topped with chashu pork, bean sprouts, bamboo, black fungus, seaweed, and seasoned egg.'
      }, {
        'name': 'Beef Bulgogi',
        'price': 14.5, 
        'description': 'Pork broth, topped with beef bulgogi, bean sprouts, bamboo, black fungus, seaweed, and seasoned egg.'
      }, {
        'name': 'Spicy Pork Bulgogi',
        'isSpicy': true,
        'price': 13.5,
        'description': 'Pork broth, topped with spicy pork bulgogi, bean sprouts, bamboo, black fungus, seaweed, and seasoned egg.'
      }, {
        'name': 'Gangnam Donkatsu',
        'price': 16,
        'description': 'Pork broth, topped with fried pork cutlet, bean sprouts, bamboo, black fungus, seaweed, and seasoned egg.'
      }, {
        'name': 'Vegetarian',
        'isVegan': true,
        'price': 13.5,
        'description': 'Vegetable broth topped with tofu, broccoli, bean sprouts, bamboo, black fungus, seaweed, garlic oil and chili oil.'
      }], 
      'bomb': [{
        'name': 'Spicy-chili Bomb',
        'price': 1
      }, {
        'name': 'Butter Bomb',
        'price': 1
      }, {
        'name': 'Kimchi Bomb',
        'price': 1
      }]
    }, {
      'category': 'gangnam specials',
      'korean': '강남 특별식',
      'items': [{
        'name': 'Beef Short Rib',
        'price': 'MKT',
        'description': 'Grilled beef short rib marinated in seasoned sweet soy sauce. Served with a side of miso or fish cake soup.'
      },{
        'name': 'Donkatsu',
        'price': 17,
        'description': 'Fried pork cutlet with sauce. Served  with a side of miso or fish cake soup.'
      },{
        'name': 'Bibimbap', 
        'isSpicy': true,
        'price': 13, 
        'description': 'Rice bowl, topped with beef and cooked vegetables, served with chili sauce to top over dish and fried egg to be mixed thoroughly. Served with a side of miso soup.'
      }, {
        'name': 'Kimchi Fried Rice', 
        'price': 13, 
        'isSpicy': true,
        'description': 'A spicy dish consisting of fried rice with chopped kimchi, topped with pork and fried egg.',
        'option': 'Make it vegetarian.'
      }, {
        'name': 'Chashu Bowl', 
        'price': 13, 
        'description': 'Topped with chashu pork, avocado, seaweed, and seasoned egg. Drizzled with sweet sauce.'
      }]
    }, {
      'category': 'beverages',
      'korean': '음료수',
      'beverages': [
        {
          'name': 'Smoothies',
          'price': 4.5,
          'description': ['Banana', 'Coconut', 'Green tea', 'Honeydew', 'Mango', 'Mocha', 'Peach', 'Pineapple', 'Strawberry', 'Taro', 'Thai']
      }, {
        'name': 'Special Tea',
        'price': 4,
        'description': ['Gangnam Ice Coffee', 'Mango', 'Milk Tea', 'Peach Black', 'Raspberry', 'Rose Fruit', 'Thai Milk Tea', 'Taro Milk Tea']
      }],
      'addons': [{
        'name': 'Avocado',
        'price': 1
      }, {
        'name': 'Banana',
        'price': 1
      }, {
        'name': 'Mango Popping Boba',
        'price': 1
      }, {
        'name': 'Strawberry Popping Boba',
        'price': 1
      }, {
        'name': 'Tapioca Pearls',
        'price': '.5'
      }]
    }
  ];

  export default menuData;