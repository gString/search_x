const data = [
	{
		"term": "Alabama",
		"id":   "id_1"
	},
	{
		"term": "Ali Baba",
		"id":   "id_2"
	},
	{
		"term": "Alligator",
		"id":   "id_3"
	},
	{
		"term": "Albatross",
		"id":   "id_4"
	},
	{
		"term": "Ali Baba Albatross",
		"id":   "id_5"
	},
	{
		"term": "Michal Abamson, lawyer",
		"id":   "id_6"
	},
	{
		"term": "Brighton, England",
		"id":   "id_7"
	},
	{
		"term": "Brighton's alligators",
		"id":   "id_8"
	},
	{
		"term": "Bnei Brighton killing it",
		"id":   "id_9"
	},
	{
		"term": "Bagdad cafe, Alabama",
		"id":   "id_10"
	},
	{
		"term": "Birmingham Addidas England",
		"id":   "id_11"
	},
	{
		"term": "Terminator - Arnold",
		"id":   "id_12"
	},
	{
		"term": "Alimony for alligators ",
		"id":   "id_13"
	},
	{
		"term": "Alabama 14",
		"id":   "id_14"
	},
	{
		"term": "Ali Baba 5",
		"id":   "id_15"
	},
	{
		"term": "Alligator 16",
		"id":   "id_16"
	},
	{
		"term": "Albatross - 7",
		"id":   "id_17"
	},
	{
		"term": "Ali Baba Albatross 18",
		"id":   "id_18"
	},
	{
		"term": "Michal Abamson, lawyer 19",
		"id":   "id_19"
	},
	{
		"term": "All about Brighton, England",
		"id":   "id_20"
	},
	{
		"term": "Brighton, England 21",
		"id":   "id_21"
	},
	{
		"term": "Brighton's alligators 22",
		"id":   "id_22"
	},
	{
		"term": "Bagdad cafe, Alabama 23",
		"id":   "id_23"
	},
	{
		"term": "Terminator - Arnold",
		"id":   "id_24"
	},
	{
		"term": "Alimony for alligators 25",
		"id":   "id_25"
	},
	{
		"term": "Alabama 26",
		"id":   "id_26"
	},
	{
		"term": "Ali Baba Albatross 27",
		"id":   "id_27"
	},
	{
		"term": "Bnei Brighton killing it 28",
		"id":   "id_28"
	},
	{
		"term": "Birmingham Addidas England 29",
		"id":   "id_29"
	},
	{
		"term": "Terminator - Arnold 30",
		"id":   "id_30"
	},
	{
		"term": "Bagdad cafe, Alabama 31",
		"id":   "id_31"
	},
	{
		"term": "Bnei Barak",
		"id":   "id_32"
	},
	{
		"term": "Bridge Too Far",
		"id":   "id_33"
	}
]

export const auto_complete = searchTerm => {
	return new Promise((resolve) => {
		resolve(data.filter (item => item.term.toLowerCase().startsWith (searchTerm.toLowerCase())));
	})
}