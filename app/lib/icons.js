const json = [
    {
      "uid": "trade1",
      "trader": "Alice",
      "time": "2025-03-03T08:15:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e738",
          "name": "Cheater Heavy Armor",
          "imageUrl": "dominion-armor",
          "description": "UT heavy armor",
          "tags": ["heavy armor", "ut"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e72b",
          "name": "Potion of Vitality",
          "imageUrl": "potion-of-vitality",
          "description": "Increases the Vitality stat",
          "tags": ["stat potion"],
          "__v": 0
        }
      ],
      "sellingTags": ["heavy armor", "ut"],
      "buyingTags": ["stat potion"],
      "traderPfp": ""
    },
    {
      "uid": "trade2",
      "trader": "Bob",
      "time": "2025-03-03T08:30:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e73a",
          "name": "Candy-Coated Armor",
          "imageUrl": "candy-coated-armor",
          "description": "Festive armor with a sweet coating",
          "tags": ["UT", "heavy armor"],
          "__v": 0
        },
        {
          "_id": "672dc35de3e4105633c2e73d",
          "name": "Cuirass of the Black Blade",
          "imageUrl": "cuirass-of-the-black-blade-armor",
          "description": "Dark and powerful cuirass",
          "tags": ["UT", "heavy armor"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e72e",
          "name": "Greater Potion of Defense",
          "imageUrl": "greater-potion-of-defense",
          "description": "Increases the Defense stat significantly",
          "tags": ["stat potion", "greater potion"],
          "__v": 0
        }
      ],
      "sellingTags": ["UT", "heavy armor"],
      "buyingTags": ["stat potion", "greater potion"],
      "traderPfp": ""
    },
    {
      "uid": "trade3",
      "trader": "Charlie",
      "time": "2025-03-03T08:45:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e742",
          "name": "Desolation Armor",
          "imageUrl": "desolation-armor",
          "description": "T10 heavy armor",
          "tags": ["heavy armor", "t10"],
          "__v": 0
        },
        {
          "_id": "672dc35de3e4105633c2e743",
          "name": "Vengeance Armor",
          "imageUrl": "vengeance-armor",
          "description": "T11 heavy armor",
          "tags": ["heavy armor", "t11"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e75f",
          "name": "Book of Geb",
          "imageUrl": "book-of-geb",
          "description": "ST",
          "tags": ["tome", "ability", "st"],
          "__v": 0
        }
      ],
      "sellingTags": ["heavy armor", "t10", "t11"],
      "buyingTags": ["tome", "ability", "st"],
      "traderPfp": ""
    },
    {
      "uid": "trade4",
      "trader": "Anonymous",
      "time": "2025-03-03T09:00:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e744",
          "name": "Abyssal Armor",
          "imageUrl": "abyssal-armor",
          "description": "T12 heavy armor",
          "tags": ["heavy armor", "t12"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e761",
          "name": "Botany Book",
          "imageUrl": "botany-book",
          "description": "UT",
          "tags": ["tome", "ability", "ut"],
          "__v": 0
        },
        {
          "_id": "672dc35de3e4105633c2e72c",
          "name": "Potion of Wisdom",
          "imageUrl": "potion-of-wisdom",
          "description": "Increases the Wisdom stat",
          "tags": ["stat potion"],
          "__v": 0
        }
      ],
      "sellingTags": ["heavy armor", "t12"],
      "buyingTags": ["tome", "ability", "ut", "stat potion"],
      "traderPfp": ""
    },
    {
      "uid": "trade5",
      "trader": "Diana",
      "time": "2025-03-03T09:15:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e746",
          "name": "Dominion Armor",
          "imageUrl": "dominion-armor",
          "description": "T14 heavy armor",
          "tags": ["heavy armor", "t14"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e732",
          "name": "Greater Potion of Wisdom",
          "imageUrl": "greater-potion-of-wisdom",
          "description": "Increases the Wisdom stat significantly",
          "tags": ["stat potion", "greater potion"],
          "__v": 0
        }
      ],
      "sellingTags": ["heavy armor", "t14"],
      "buyingTags": ["stat potion", "greater potion"],
      "traderPfp": ""
    },
    {
      "uid": "trade6",
      "trader": "Ethan",
      "time": "2025-03-03T09:30:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e747",
          "name": "Cheater Heavy Armor",
          "imageUrl": "dominion-armor",
          "description": "UT heavy armor",
          "tags": ["heavy armor", "ut"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e753",
          "name": "Elemental Detonation Spell",
          "imageUrl": "elemental-detonation-spell",
          "description": "(6)",
          "tags": ["spell", "ability", "t6"],
          "__v": 0
        }
      ],
      "sellingTags": ["heavy armor", "ut"],
      "buyingTags": ["spell", "ability", "t6"],
      "traderPfp": ""
    },
    {
      "uid": "trade7",
      "trader": "Fiona",
      "time": "2025-03-03T09:45:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e75a",
          "name": "Tome of Holy Guidance",
          "imageUrl": "tome-of-holy-guidance",
          "description": "(T6)",
          "tags": ["tome", "ability", "t6"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e75f",
          "name": "Book of Geb",
          "imageUrl": "book-of-geb",
          "description": "ST",
          "tags": ["tome", "ability", "st"],
          "__v": 0
        }
      ],
      "sellingTags": ["tome", "ability", "t6"],
      "buyingTags": ["tome", "ability", "st"],
      "traderPfp": ""
    },
    {
      "uid": "trade8",
      "trader": "George",
      "time": "2025-03-03T10:00:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e761",
          "name": "Botany Book",
          "imageUrl": "botany-book",
          "description": "UT",
          "tags": ["tome", "ability", "ut"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e72b",
          "name": "Potion of Vitality",
          "imageUrl": "potion-of-vitality",
          "description": "Increases the Vitality stat",
          "tags": ["stat potion"],
          "__v": 0
        }
      ],
      "sellingTags": ["tome", "ability", "ut"],
      "buyingTags": ["stat potion"],
      "traderPfp": ""
    },
    {
      "uid": "trade9",
      "trader": "Hannah",
      "time": "2025-03-03T10:15:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e72b",
          "name": "Potion of Vitality",
          "imageUrl": "potion-of-vitality",
          "description": "Increases the Vitality stat",
          "tags": ["stat potion"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e72e",
          "name": "Greater Potion of Defense",
          "imageUrl": "greater-potion-of-defense",
          "description": "Increases the Defense stat significantly",
          "tags": ["stat potion", "greater potion"],
          "__v": 0
        }
      ],
      "sellingTags": ["stat potion"],
      "buyingTags": ["stat potion", "greater potion"],
      "traderPfp": ""
    },
    {
      "uid": "trade10",
      "trader": "Ivan",
      "time": "2025-03-03T10:30:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e72e",
          "name": "Greater Potion of Defense",
          "imageUrl": "greater-potion-of-defense",
          "description": "Increases the Defense stat significantly",
          "tags": ["stat potion", "greater potion"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e732",
          "name": "Greater Potion of Wisdom",
          "imageUrl": "greater-potion-of-wisdom",
          "description": "Increases the Wisdom stat significantly",
          "tags": ["stat potion", "greater potion"],
          "__v": 0
        }
      ],
      "sellingTags": ["stat potion", "greater potion"],
      "buyingTags": ["stat potion", "greater potion"],
      "traderPfp": ""
    },
    {
      "uid": "trade11",
      "trader": "Jack",
      "time": "2025-03-03T10:45:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e732",
          "name": "Greater Potion of Wisdom",
          "imageUrl": "greater-potion-of-wisdom",
          "description": "Increases the Wisdom stat significantly",
          "tags": ["stat potion", "greater potion"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e742",
          "name": "Desolation Armor",
          "imageUrl": "desolation-armor",
          "description": "T10 heavy armor",
          "tags": ["heavy armor", "t10"],
          "__v": 0
        }
      ],
      "sellingTags": ["stat potion", "greater potion"],
      "buyingTags": ["heavy armor", "t10"],
      "traderPfp": ""
    },
    {
      "uid": "trade12",
      "trader": "Kelly",
      "time": "2025-03-03T11:00:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e742",
          "name": "Desolation Armor",
          "imageUrl": "desolation-armor",
          "description": "T10 heavy armor",
          "tags": ["heavy armor", "t10"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e744",
          "name": "Abyssal Armor",
          "imageUrl": "abyssal-armor",
          "description": "T12 heavy armor",
          "tags": ["heavy armor", "t12"],
          "__v": 0
        }
      ],
      "sellingTags": ["heavy armor", "t10"],
      "buyingTags": ["heavy armor", "t12"],
      "traderPfp": ""
    },
    {
      "uid": "trade13",
      "trader": "Liam",
      "time": "2025-03-03T11:15:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e744",
          "name": "Abyssal Armor",
          "imageUrl": "abyssal-armor",
          "description": "T12 heavy armor",
          "tags": ["heavy armor", "t12"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e736",
          "name": "Acropolis Armor",
          "imageUrl": "acropolis-armor",
          "description": "T13 heavy armor",
          "tags": ["heavy armor", "t13"],
          "__v": 0
        }
      ],
      "sellingTags": ["heavy armor", "t12"],
      "buyingTags": ["heavy armor", "t13"],
      "traderPfp": ""
    },
    {
      "uid": "trade14",
      "trader": "Mia",
      "time": "2025-03-03T11:30:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e736",
          "name": "Acropolis Armor",
          "imageUrl": "acropolis-armor",
          "description": "T13 heavy armor",
          "tags": ["heavy armor", "t13"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e746",
          "name": "Dominion Armor",
          "imageUrl": "dominion-armor",
          "description": "T14 heavy armor",
          "tags": ["heavy armor", "t14"],
          "__v": 0
        }
      ],
      "sellingTags": ["heavy armor", "t13"],
      "buyingTags": ["heavy armor", "t14"],
      "traderPfp": ""
    },
    {
      "uid": "trade15",
      "trader": "Noah",
      "time": "2025-03-03T11:45:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e746",
          "name": "Dominion Armor",
          "imageUrl": "dominion-armor",
          "description": "T14 heavy armor",
          "tags": ["heavy armor", "t14"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e73b",
          "name": "Frost Citadel Armor",
          "imageUrl": "frost-citadel-armor",
          "description": "Armor designed for extreme cold conditions",
          "tags": ["UT", "heavy armor"],
          "__v": 0
        }
      ],
      "sellingTags": ["heavy armor", "t14"],
      "buyingTags": ["UT", "heavy armor"],
      "traderPfp": ""
    },
    {
      "uid": "trade16",
      "trader": "Olivia",
      "time": "2025-03-03T12:00:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e73b",
          "name": "Frost Citadel Armor",
          "imageUrl": "frost-citadel-armor",
          "description": "Armor designed for extreme cold conditions",
          "tags": ["UT", "heavy armor"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e748",
          "name": "Resurrected Warrior’s Armor",
          "imageUrl": "resurrected-warriors-armor",
          "description": "Unique armor set for resurrected warriors",
          "tags": ["UT", "heavy armor"],
          "__v": 0
        }
      ],
      "sellingTags": ["UT", "heavy armor"],
      "buyingTags": ["UT", "heavy armor"],
      "traderPfp": ""
    },
    {
      "uid": "trade17",
      "trader": "Paul",
      "time": "2025-03-03T12:15:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e748",
          "name": "Resurrected Warrior’s Armor",
          "imageUrl": "resurrected-warriors-armor",
          "description": "Unique armor set for resurrected warriors",
          "tags": ["UT", "heavy armor"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e74f",
          "name": "Legacy Fairy Plate",
          "imageUrl": "legacy-fairy-plate-armor",
          "description": "Magical armor of the ancient fairy legacy",
          "tags": ["UT", "heavy armor"],
          "__v": 0
        }
      ],
      "sellingTags": ["UT", "heavy armor"],
      "buyingTags": ["UT", "heavy armor"],
      "traderPfp": ""
    },
    {
      "uid": "trade18",
      "trader": "Quinn",
      "time": "2025-03-03T12:30:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e74f",
          "name": "Legacy Fairy Plate",
          "imageUrl": "legacy-fairy-plate-armor",
          "description": "Magical armor of the ancient fairy legacy",
          "tags": ["UT", "heavy armor"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e750",
          "name": "Warped Mantle",
          "imageUrl": "warped-mantle-armor",
          "description": "Distorted mantle with unique powers",
          "tags": ["UT", "heavy armor"],
          "__v": 0
        }
      ],
      "sellingTags": ["UT", "heavy armor"],
      "buyingTags": ["UT", "heavy armor"],
      "traderPfp": ""
    },
    {
      "uid": "trade19",
      "trader": "Rachel",
      "time": "2025-03-03T12:45:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e750",
          "name": "Warped Mantle",
          "imageUrl": "warped-mantle-armor",
          "description": "Distorted mantle with unique powers",
          "tags": ["UT", "heavy armor"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e759",
          "name": "Tome of Divine Favor",
          "imageUrl": "tome-of-divine-favor",
          "description": "(T5)",
          "tags": ["tome", "ability", "t5"],
          "__v": 0
        }
      ],
      "sellingTags": ["UT", "heavy armor"],
      "buyingTags": ["tome", "ability", "t5"],
      "traderPfp": ""
    },
    {
      "uid": "trade20",
      "trader": "Steve",
      "time": "2025-03-03T13:00:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e759",
          "name": "Tome of Divine Favor",
          "imageUrl": "tome-of-divine-favor",
          "description": "(T5)",
          "tags": ["tome", "ability", "t5"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e75c",
          "name": "Tome of Purification",
          "imageUrl": "tome-of-purification",
          "description": "UT",
          "tags": ["tome", "ability", "ut"],
          "__v": 0
        }
      ],
      "sellingTags": ["tome", "ability", "t5"],
      "buyingTags": ["tome", "ability", "ut"],
      "traderPfp": ""
    },
    {
      "uid": "trade21",
      "trader": "Tina",
      "time": "2025-03-03T13:15:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e75c",
          "name": "Tome of Purification",
          "imageUrl": "tome-of-purification",
          "description": "UT",
          "tags": ["tome", "ability", "ut"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e727",
          "name": "Potion of Attack",
          "imageUrl": "potion-of-attack",
          "description": "Increases the Attack stat",
          "tags": ["stat potion"],
          "__v": 0
        }
      ],
      "sellingTags": ["tome", "ability", "ut"],
      "buyingTags": ["stat potion"],
      "traderPfp": ""
    },
    {
      "uid": "trade22",
      "trader": "Uma",
      "time": "2025-03-03T13:30:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e727",
          "name": "Potion of Attack",
          "imageUrl": "potion-of-attack",
          "description": "Increases the Attack stat",
          "tags": ["stat potion"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e72c",
          "name": "Potion of Wisdom",
          "imageUrl": "potion-of-wisdom",
          "description": "Increases the Wisdom stat",
          "tags": ["stat potion"],
          "__v": 0
        }
      ],
      "sellingTags": ["stat potion"],
      "buyingTags": ["stat potion"],
      "traderPfp": ""
    },
    {
      "uid": "trade23",
      "trader": "Victor",
      "time": "2025-03-03T13:45:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e72c",
          "name": "Potion of Wisdom",
          "imageUrl": "potion-of-wisdom",
          "description": "Increases the Wisdom stat",
          "tags": ["stat potion"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e72f",
          "name": "Greater Potion of Speed",
          "imageUrl": "greater-potion-of-speed",
          "description": "Increases the Speed stat significantly",
          "tags": ["stat potion", "greater potion"],
          "__v": 0
        }
      ],
      "sellingTags": ["stat potion"],
      "buyingTags": ["stat potion", "greater potion"],
      "traderPfp": ""
    },
    {
      "uid": "trade24",
      "trader": "Wendy",
      "time": "2025-03-03T14:00:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e72f",
          "name": "Greater Potion of Speed",
          "imageUrl": "greater-potion-of-speed",
          "description": "Increases the Speed stat significantly",
          "tags": ["stat potion", "greater potion"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e730",
          "name": "Greater Potion of Dexterity",
          "imageUrl": "greater-potion-of-dexterity",
          "description": "Increases the Dexterity stat significantly",
          "tags": ["stat potion", "greater potion"],
          "__v": 0
        }
      ],
      "sellingTags": ["stat potion", "greater potion"],
      "buyingTags": ["stat potion", "greater potion"],
      "traderPfp": ""
    },
    {
      "uid": "trade25",
      "trader": "Xander",
      "time": "2025-03-03T14:15:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e730",
          "name": "Greater Potion of Dexterity",
          "imageUrl": "greater-potion-of-dexterity",
          "description": "Increases the Dexterity stat significantly",
          "tags": ["stat potion", "greater potion"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e734",
          "name": "Vengeance Armor",
          "imageUrl": "vengeance-armor",
          "description": "T11 heavy armor",
          "tags": ["heavy armor", "t11"],
          "__v": 0
        }
      ],
      "sellingTags": ["stat potion", "greater potion"],
      "buyingTags": ["heavy armor", "t11"],
      "traderPfp": ""
    },
    {
      "uid": "trade26",
      "trader": "Yara",
      "time": "2025-03-03T14:30:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e734",
          "name": "Vengeance Armor",
          "imageUrl": "vengeance-armor",
          "description": "T11 heavy armor",
          "tags": ["heavy armor", "t11"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e739",
          "name": "Resurrected Warrior’s Armor",
          "imageUrl": "resurrected-warriors-armor",
          "description": "Unique armor set for resurrected warriors",
          "tags": ["UT", "heavy armor"],
          "__v": 0
        }
      ],
      "sellingTags": ["heavy armor", "t11"],
      "buyingTags": ["UT", "heavy armor"],
      "traderPfp": ""
    },
    {
      "uid": "trade27",
      "trader": "Zack",
      "time": "2025-03-03T14:45:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e739",
          "name": "Resurrected Warrior’s Armor",
          "imageUrl": "resurrected-warriors-armor",
          "description": "Unique armor set for resurrected warriors",
          "tags": ["UT", "heavy armor"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e73c",
          "name": "Armor of Heavenly Light",
          "imageUrl": "armor-of-heavenly-light-armor",
          "description": "Radiant armor imbued with celestial power",
          "tags": ["UT", "heavy armor"],
          "__v": 0
        }
      ],
      "sellingTags": ["UT", "heavy armor"],
      "buyingTags": ["UT", "heavy armor"],
      "traderPfp": ""
    },
    {
      "uid": "trade28",
      "trader": "Alice2",
      "time": "2025-03-03T15:00:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e73c",
          "name": "Armor of Heavenly Light",
          "imageUrl": "armor-of-heavenly-light-armor",
          "description": "Radiant armor imbued with celestial power",
          "tags": ["UT", "heavy armor"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e73f",
          "name": "Frost Citadel Armor",
          "imageUrl": "frost-citadel-armor",
          "description": "Armor designed for extreme cold conditions",
          "tags": ["UT", "heavy armor"],
          "__v": 0
        }
      ],
      "sellingTags": ["UT", "heavy armor"],
      "buyingTags": ["UT", "heavy armor"],
      "traderPfp": ""
    },
    {
      "uid": "trade29",
      "trader": "Bob2",
      "time": "2025-03-03T15:15:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e73f",
          "name": "Frost Citadel Armor",
          "imageUrl": "frost-citadel-armor",
          "description": "Armor designed for extreme cold conditions",
          "tags": ["UT", "heavy armor"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e74e",
          "name": "Almandine Armor of Anger",
          "imageUrl": "almandine-armor-of-anger",
          "description": "Armor infused with the wrath of almandine",
          "tags": ["UT", "heavy armor"],
          "__v": 0
        }
      ],
      "sellingTags": ["UT", "heavy armor"],
      "buyingTags": ["UT", "heavy armor"],
      "traderPfp": ""
    },
    {
      "uid": "trade30",
      "trader": "Charlie2",
      "time": "2025-03-03T15:30:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e74e",
          "name": "Almandine Armor of Anger",
          "imageUrl": "almandine-armor-of-anger",
          "description": "Armor infused with the wrath of almandine",
          "tags": ["UT", "heavy armor"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e750",
          "name": "Warped Mantle",
          "imageUrl": "warped-mantle-armor",
          "description": "Distorted mantle with unique powers",
          "tags": ["UT", "heavy armor"],
          "__v": 0
        }
      ],
      "sellingTags": ["UT", "heavy armor"],
      "buyingTags": ["UT", "heavy armor"],
      "traderPfp": ""
    },
    {
      "uid": "trade31",
      "trader": "Diana2",
      "time": "2025-03-03T15:45:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e750",
          "name": "Warped Mantle",
          "imageUrl": "warped-mantle-armor",
          "description": "Distorted mantle with unique powers",
          "tags": ["UT", "heavy armor"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e73c",
          "name": "Armor of Heavenly Light",
          "imageUrl": "armor-of-heavenly-light-armor",
          "description": "Radiant armor imbued with celestial power",
          "tags": ["UT", "heavy armor"],
          "__v": 0
        }
      ],
      "sellingTags": ["UT", "heavy armor"],
      "buyingTags": ["UT", "heavy armor"],
      "traderPfp": ""
    },
    {
      "uid": "trade32",
      "trader": "Ethan2",
      "time": "2025-03-03T16:00:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e73c",
          "name": "Armor of Heavenly Light",
          "imageUrl": "armor-of-heavenly-light-armor",
          "description": "Radiant armor imbued with celestial power",
          "tags": ["UT", "heavy armor"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e751",
          "name": "Destruction Sphere Spell",
          "imageUrl": "destruction-sphere-spell",
          "description": "(4)",
          "tags": ["spell", "ability", "t4"],
          "__v": 0
        }
      ],
      "sellingTags": ["UT", "heavy armor"],
      "buyingTags": ["spell", "ability", "t4"],
      "traderPfp": ""
    },
    {
      "uid": "trade33",
      "trader": "Fiona2",
      "time": "2025-03-03T16:15:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e751",
          "name": "Destruction Sphere Spell",
          "imageUrl": "destruction-sphere-spell",
          "description": "(4)",
          "tags": ["spell", "ability", "t4"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e757",
          "name": "Legacy Ancient Spell: Pierce",
          "imageUrl": "legacy-ancient-spell-pierce",
          "description": "ST",
          "tags": ["spell", "ability", "st"],
          "__v": 0
        }
      ],
      "sellingTags": ["spell", "ability", "t4"],
      "buyingTags": ["spell", "ability", "st"],
      "traderPfp": ""
    },
    {
      "uid": "trade34",
      "trader": "George2",
      "time": "2025-03-03T16:30:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e757",
          "name": "Legacy Ancient Spell: Pierce",
          "imageUrl": "legacy-ancient-spell-pierce",
          "description": "ST",
          "tags": ["spell", "ability", "st"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e75b",
          "name": "Tome of Moral Support",
          "imageUrl": "tome-of-moral-support",
          "description": "UT",
          "tags": ["tome", "ability", "ut"],
          "__v": 0
        }
      ],
      "sellingTags": ["spell", "ability", "st"],
      "buyingTags": ["tome", "ability", "ut"],
      "traderPfp": ""
    },
    {
      "uid": "trade35",
      "trader": "Hannah2",
      "time": "2025-03-03T16:45:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e75b",
          "name": "Tome of Moral Support",
          "imageUrl": "tome-of-moral-support",
          "description": "UT",
          "tags": ["tome", "ability", "ut"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e75d",
          "name": "Necronomicon",
          "imageUrl": "necronomicon",
          "description": "UT",
          "tags": ["tome", "ability", "ut"],
          "__v": 0
        }
      ],
      "sellingTags": ["tome", "ability", "ut"],
      "buyingTags": ["tome", "ability", "ut"],
      "traderPfp": ""
    },
    {
      "uid": "trade36",
      "trader": "Ivan2",
      "time": "2025-03-03T17:00:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e75d",
          "name": "Necronomicon",
          "imageUrl": "necronomicon",
          "description": "UT",
          "tags": ["tome", "ability", "ut"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e75e",
          "name": "Tome of Holy Protection",
          "imageUrl": "tome-of-holy-protection",
          "description": "UT",
          "tags": ["tome", "ability", "ut"],
          "__v": 0
        }
      ],
      "sellingTags": ["tome", "ability", "ut"],
      "buyingTags": ["tome", "ability", "ut"],
      "traderPfp": ""
    },
    {
      "uid": "trade37",
      "trader": "Jack2",
      "time": "2025-03-03T17:15:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e75e",
          "name": "Tome of Holy Protection",
          "imageUrl": "tome-of-holy-protection",
          "description": "UT",
          "tags": ["tome", "ability", "ut"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e728",
          "name": "Potion of Defense",
          "imageUrl": "potion-of-defense",
          "description": "Increases the Defense stat",
          "tags": ["stat potion"],
          "__v": 0
        }
      ],
      "sellingTags": ["tome", "ability", "ut"],
      "buyingTags": ["stat potion"],
      "traderPfp": ""
    },
    {
      "uid": "trade38",
      "trader": "Kelly2",
      "time": "2025-03-03T17:30:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e728",
          "name": "Potion of Defense",
          "imageUrl": "potion-of-defense",
          "description": "Increases the Defense stat",
          "tags": ["stat potion"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e729",
          "name": "Potion of Speed",
          "imageUrl": "potion-of-speed",
          "description": "Increases the Speed stat",
          "tags": ["stat potion"],
          "__v": 0
        }
      ],
      "sellingTags": ["stat potion"],
      "buyingTags": ["stat potion"],
      "traderPfp": ""
    },
    {
      "uid": "trade39",
      "trader": "Liam2",
      "time": "2025-03-03T17:45:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e729",
          "name": "Potion of Speed",
          "imageUrl": "potion-of-speed",
          "description": "Increases the Speed stat",
          "tags": ["stat potion"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e72a",
          "name": "Potion of Dexterity",
          "imageUrl": "potion-of-dexterity",
          "description": "Increases the Dexterity stat",
          "tags": ["stat potion"],
          "__v": 0
        }
      ],
      "sellingTags": ["stat potion"],
      "buyingTags": ["stat potion"],
      "traderPfp": ""
    },
    {
      "uid": "trade40",
      "trader": "Mia2",
      "time": "2025-03-03T18:00:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e72a",
          "name": "Potion of Dexterity",
          "imageUrl": "potion-of-dexterity",
          "description": "Increases the Dexterity stat",
          "tags": ["stat potion"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e72d",
          "name": "Greater Potion of Attack",
          "imageUrl": "greater-potion-of-attack",
          "description": "Increases the Attack stat significantly",
          "tags": ["stat potion", "greater potion"],
          "__v": 0
        }
      ],
      "sellingTags": ["stat potion"],
      "buyingTags": ["stat potion", "greater potion"],
      "traderPfp": ""
    },
    {
      "uid": "trade41",
      "trader": "Noah2",
      "time": "2025-03-03T18:15:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e72d",
          "name": "Greater Potion of Attack",
          "imageUrl": "greater-potion-of-attack",
          "description": "Increases the Attack stat significantly",
          "tags": ["stat potion", "greater potion"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e731",
          "name": "Greater Potion of Vitality",
          "imageUrl": "greater-potion-of-vitality",
          "description": "Increases the Vitality stat significantly",
          "tags": ["stat potion", "greater potion"],
          "__v": 0
        }
      ],
      "sellingTags": ["stat potion", "greater potion"],
      "buyingTags": ["stat potion", "greater potion"],
      "traderPfp": ""
    },
    {
      "uid": "trade42",
      "trader": "Olivia2",
      "time": "2025-03-03T18:30:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e731",
          "name": "Greater Potion of Vitality",
          "imageUrl": "greater-potion-of-vitality",
          "description": "Increases the Vitality stat significantly",
          "tags": ["stat potion", "greater potion"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e74f",
          "name": "Legacy Fairy Plate",
          "imageUrl": "legacy-fairy-plate-armor",
          "description": "Magical armor of the ancient fairy legacy",
          "tags": ["UT", "heavy armor"],
          "__v": 0
        }
      ],
      "sellingTags": ["stat potion", "greater potion"],
      "buyingTags": ["UT", "heavy armor"],
      "traderPfp": ""
    },
    {
      "uid": "trade43",
      "trader": "Paul2",
      "time": "2025-03-03T18:45:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e74f",
          "name": "Legacy Fairy Plate",
          "imageUrl": "legacy-fairy-plate-armor",
          "description": "Magical armor of the ancient fairy legacy",
          "tags": ["UT", "heavy armor"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e736",
          "name": "Acropolis Armor",
          "imageUrl": "acropolis-armor",
          "description": "T13 heavy armor",
          "tags": ["heavy armor", "t13"],
          "__v": 0
        }
      ],
      "sellingTags": ["UT", "heavy armor"],
      "buyingTags": ["heavy armor", "t13"],
      "traderPfp": ""
    },
    {
      "uid": "trade44",
      "trader": "Quinn2",
      "time": "2025-03-03T19:00:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e736",
          "name": "Acropolis Armor",
          "imageUrl": "acropolis-armor",
          "description": "T13 heavy armor",
          "tags": ["heavy armor", "t13"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e73a",
          "name": "Candy-Coated Armor",
          "imageUrl": "candy-coated-armor",
          "description": "Festive armor with a sweet coating",
          "tags": ["UT", "heavy armor"],
          "__v": 0
        }
      ],
      "sellingTags": ["heavy armor", "t13"],
      "buyingTags": ["UT", "heavy armor"],
      "traderPfp": ""
    },
    {
      "uid": "trade45",
      "trader": "Rachel2",
      "time": "2025-03-03T19:15:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e73a",
          "name": "Candy-Coated Armor",
          "imageUrl": "candy-coated-armor",
          "description": "Festive armor with a sweet coating",
          "tags": ["UT", "heavy armor"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e74e",
          "name": "Almandine Armor of Anger",
          "imageUrl": "almandine-armor-of-anger",
          "description": "Armor infused with the wrath of almandine",
          "tags": ["UT", "heavy armor"],
          "__v": 0
        }
      ],
      "sellingTags": ["UT", "heavy armor"],
      "buyingTags": ["UT", "heavy armor"],
      "traderPfp": ""
    },
    {
      "uid": "trade46",
      "trader": "Steve2",
      "time": "2025-03-03T19:30:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e74e",
          "name": "Almandine Armor of Anger",
          "imageUrl": "almandine-armor-of-anger",
          "description": "Armor infused with the wrath of almandine",
          "tags": ["UT", "heavy armor"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e752",
          "name": "Magic Nova Spell",
          "imageUrl": "magic-nova-spell",
          "description": "(5)",
          "tags": ["spell", "ability", "t5"],
          "__v": 0
        }
      ],
      "sellingTags": ["UT", "heavy armor"],
      "buyingTags": ["spell", "ability", "t5"],
      "traderPfp": ""
    },
    {
      "uid": "trade47",
      "trader": "Tina2",
      "time": "2025-03-03T19:45:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e752",
          "name": "Magic Nova Spell",
          "imageUrl": "magic-nova-spell",
          "description": "(5)",
          "tags": ["spell", "ability", "t5"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e754",
          "name": "Spelling Spell",
          "imageUrl": "spelling-spell",
          "description": "UT",
          "tags": ["spell", "ability", "ut"],
          "__v": 0
        }
      ],
      "sellingTags": ["spell", "ability", "t5"],
      "buyingTags": ["spell", "ability", "ut"],
      "traderPfp": ""
    },
    {
      "uid": "trade48",
      "trader": "Uma2",
      "time": "2025-03-03T20:00:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e754",
          "name": "Spelling Spell",
          "imageUrl": "spelling-spell",
          "description": "UT",
          "tags": ["spell", "ability", "ut"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e755",
          "name": "Random Spell Extraction Device",
          "imageUrl": "random-spell-extraction-device",
          "description": "UT",
          "tags": ["spell", "ability", "ut"],
          "__v": 0
        }
      ],
      "sellingTags": ["spell", "ability", "ut"],
      "buyingTags": ["spell", "ability", "ut"],
      "traderPfp": ""
    },
    {
      "uid": "trade49",
      "trader": "Victor2",
      "time": "2025-03-03T20:15:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e755",
          "name": "Random Spell Extraction Device",
          "imageUrl": "random-spell-extraction-device",
          "description": "UT",
          "tags": ["spell", "ability", "ut"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e756",
          "name": "Thousand Suns Spell",
          "imageUrl": "thousand-suns-spell",
          "description": "UT",
          "tags": ["spell", "ability", "ut"],
          "__v": 0
        }
      ],
      "sellingTags": ["spell", "ability", "ut"],
      "buyingTags": ["spell", "ability", "ut"],
      "traderPfp": ""
    },
    {
      "uid": "trade50",
      "trader": "Wendy2",
      "time": "2025-03-03T20:30:00Z",
      "trading": [
        {
          "_id": "672dc35de3e4105633c2e756",
          "name": "Thousand Suns Spell",
          "imageUrl": "thousand-suns-spell",
          "description": "UT",
          "tags": ["spell", "ability", "ut"],
          "__v": 0
        }
      ],
      "tradingFor": [
        {
          "_id": "672dc35de3e4105633c2e758",
          "name": "Tome of Renewing",
          "imageUrl": "tome-of-renewing",
          "description": "(T4)",
          "tags": ["tome", "ability", "t4"],
          "__v": 0
        }
      ],
      "sellingTags": ["spell", "ability", "ut"],
      "buyingTags": ["tome", "ability", "t4"],
      "traderPfp": ""
    }
  ]
  


print(json[1])