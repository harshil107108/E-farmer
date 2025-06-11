const cropData = [
  {
    item: "Carrot",
    image:
      "https://t4.ftcdn.net/jpg/02/28/90/67/360_F_228906712_r4bb71gSmKvyDHq54JvjXAhKWpQiqWvX.jpg",
    price: 40,
  },
  {
    item: "Tomato",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWZctt5zuXzw7Oil9ILCZTDnyWrrlyTEGVcw&s",
    price: 25,
  },
  {
    item: "Potato",
    image:
      "https://media.istockphoto.com/id/157430678/photo/three-potatoes.jpg?s=612x612&w=0&k=20&c=qkMoEgcj8ZvYbzDYEJEhbQ57v-nmkHS7e88q8dv7TSA=",
    price: 20,
  },
  {
    item: "Broccoli",
    image:
      "https://media.istockphoto.com/id/1364035705/photo/fresh-broccoli-on-white-background.jpg?s=612x612&w=0&k=20&c=fEcEq65rKBmT8PltpAyg_-na0WomTJ6S6m04uXQQtJs=",
    price: 90,
  },
  {
    item: "Spinach",
    image: "https://m.media-amazon.com/images/I/71tdN2taTCL.jpg",
    price: 30,
  },
  {
    item: "Onion",
    image:
      "https://media.istockphoto.com/id/499146870/photo/red-onions.jpg?s=612x612&w=0&k=20&c=OaZUynAtxIJyPaSgAsAGWwAbpTs_EfKF5zT_UvBDpbY=",
    price: 30,
  },
  {
    item: "Cucumber",
    image: "https://m.media-amazon.com/images/I/71xkI-PIE5L.jpg",
    price: 35,
  },
  {
    item: "Lettuce",
    image:
      "https://organicmandya.com/cdn/shop/files/Lettuce.jpg?v=1721374982&width=1000",
    price: 80,
  },
  {
    item: "Bell Pepper",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaR3DS9CM7KzrdGTdtDr_30wM4mFs5DNYM3A&s",
    price: 70,
  },
  {
    item: "Cabbage",
    image:
      "https://media.istockphoto.com/id/673162168/photo/green-cabbage-isolated-on-white.jpg?s=612x612&w=0&k=20&c=mCc4mXATvCcfp2E9taRJBp-QPYQ_LCj6nE1D7geaqVk=",
    price: 35,
  },
  {
    item: "Cauliflower",
    image: "https://m.media-amazon.com/images/I/91EdPVzD99L.jpg",
    price: 40,
  },
  {
    item: "Garlic",
    image: "https://m.media-amazon.com/images/I/51BSNgiBDqL.jpg",
    price: 160,
  },
  {
    item: "Peas",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8XD_lWAdDXDZ9QiTcTux2hDoHJlsT2alsA&s",
    price: 60,
  },
  {
    item: "Zucchini",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVI4Trz9KGz2nUJwJzXuna_cZ7r47w-xnRRg&s",
    price: 70,
  },
  {
    item: "Pumpkin",
    image:
      "https://www.healthxchange.sg/sites/hexassets/Assets/food-nutrition/pumpkin-health-benefits-nutrition-facts.jpg",
    price: 30,
  },
  {
    item: "Asparagus",
    image: "https://5.imimg.com/data5/CB/WR/MY-27583284/asparagus-500x500.jpg",
    price: 180,
  },
  {
    item: "Mushrooms",
    image: "https://m.media-amazon.com/images/I/71XMKwfQCzL.jpg",
    price: 100,
  },
  {
    item: "Radish",
    image:
      "https://agribegri.com/productimage/13d03fcd73c7702b41072d97c4515678-07-01-21-17-28-00.webp",
    price: 25,
  },
  {
    item: "Sweet Potato",
    image: "https://foodcare.in/cdn/shop/files/sweetpotato.jpg?v=1725364564",
    price: 40,
  },
  {
    item: "Avocado",
    image:
      "https://static.vecteezy.com/system/resources/previews/035/267/057/non_2x/ai-generated-green-avocado-fruit-free-photo.jpeg",
    price: 180,
  },
  {
    item: "Corn",
    image:
      "https://i.pinimg.com/736x/c0/2f/eb/c02feb92941a5fed89ab37d9c6184a7c.jpg",
    price: 40,
  },
  {
    item: "Apple",
    image:
      "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=",
    price: 150,
  },
  {
    item: "Banana",
    image: "https://thumbs.dreamstime.com/b/bunch-bananas-6175887.jpg",
    price: 50,
  },
  {
    item: "Orange",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsa3K1PkfEgVzc6JeayE-uGwejpsBDBbVBUw&s",
    price: 60,
  },
  {
    item: "Grapes",
    image:
      "https://media.istockphoto.com/id/489520104/photo/green-grape-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=9kg_3pMeBKYnHHjx2JECF61QwzxTikLaQ2w-6A5tOO0=",
    price: 130,
  },
  {
    item: "Pineapple",
    image:
      "https://organicmandya.com/cdn/shop/files/Pineapple.jpg?v=1721375225&width=1000",
    price: 80,
  },
  {
    item: "Strawberries",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbF-1I6_uHPYUQcVIL3-tJvgjSsBvzKbZsRQ&s",
    price: 250,
  },
  {
    item: "Blueberries",
    image:
      "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZWJlcnJ5fGVufDB8fDB8fHww",
    price: 300,
  },
  {
    item: "Mango",
    image:
      "https://media.istockphoto.com/id/186018991/photo/mango-on-a-white-background.jpg?s=612x612&w=0&k=20&c=wmj1JQKjI8GYShKsLtMkHbAPJ-GjyaVBnx-CAX_DDtM=",
    price: 80,
  },
  {
    item: "Peach",
    image:
      "https://t3.ftcdn.net/jpg/03/00/59/16/360_F_300591692_sE2Zpz9hoU0H1Klz0JzRw1F74HO7vWne.jpg",
    price: 120,
  },
  {
    item: "Plum",
    image:
      "https://media.istockphoto.com/id/687478414/photo/red-cherry-plum-with-green-leaves-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=vje7nFHGnWl-cHDA8wP_UZHryRT5LkAFwn7_8qKtiyc=",
    price: 100,
  },
  {
    item: "Cherry",
    image:
      "https://media.istockphoto.com/id/506627545/photo/cherry-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=xa-4D_CcLiARKWnDKU-blrB0NWHQKpklO7fLswGmbEs=",
    price: 500,
  },
  {
    item: "Watermelon",
    image:
      "https://media.istockphoto.com/id/1142119394/photo/whole-and-slices-watermelon-fruit-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=A5XnLyeI_3mwkCNadv-QLU4jzgNux8kUPfIlDvwT0jo=",
    price: 30,
  },
  {
    item: "Pomegranate",
    image: "https://m.media-amazon.com/images/I/611a1wD9ZGL.jpg",
    price: 150,
  },
  {
    item: "Kiwi",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQjAfVMSv0rvTIJl97anIxiSC29qJZKjXSg&s",
    price: 200,
  },
  {
    item: "Lemon",
    image:
      "https://t4.ftcdn.net/jpg/02/55/39/77/360_F_255397744_rwNCund3WjKsrsv6yKKpK8tzmJ8sYRnF.jpg",
    price: 30,
  },
  {
    item: "Papaya",
    image:
      "https://media.istockphoto.com/id/864053288/photo/whole-and-half-of-ripe-papaya-fruit-with-seeds-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=hJ5DpNTt0oKjZMIHYV6gUHTntB2zIs_78dPKiuDUXgE=",
    price: 40,
  },
  {
    item: "Date",
    image: "https://cdn.dotpe.in/longtail/store-items/1087846/CqRhKqLy.jpeg",
    price: 300,
  },
  {
    item: "Apricot",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2a/Apricot_and_cross_section.jpg",
    price: 200,
  },
  {
    item: "Cantaloupe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_kzdMqdrQ1e9tayC2w84xnY-6SQrk1YZikw&s",
    price: 60,
  },
  {
    item: "Chili Pepper",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/50/Madame_Jeanette_and_other_chillies.jpg",
    price: 80,
  },
  {
    item: "Lime",
    image:
      "https://resources.markon.com/sites/default/files/styles/large/public/pi_photos/Citrus_Limes_Hero.jpg",
    price: 20,
  },
  {
    item: "Wheat",
    image:
      "https://organicmandya.com/cdn/shop/files/WheatWhole_2_de1e8667-567f-47bb-98e8-9b8523c6ba86.jpg?v=1719142861&width=1024",
    price: 45,
  },
  {
    item: "Oats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvVR1xdFVZcztJUPef0LRgg7bq1aceOHRziQ&s",
    price: 90,
  },
  {
    item: "Barley",
    image:
      "https://m.media-amazon.com/images/I/71zrh-xst0L._AC_UF1000,1000_QL80_.jpg",
    price: 60,
  },
  {
    item: "Rye",
    image:
      "https://www.sattvicfoods.in/cdn/shop/files/HimalayanRyeGrainsLoose.jpg?v=1714454802",
    price: 80,
  },
  {
    item: "Quinoa",
    image:
      "https://m.media-amazon.com/images/I/51y5-+eWxLL._AC_UF1000,1000_QL80_.jpg",
    price: 220,
  },
  {
    item: "Buckwheat",
    image:
      "https://media.istockphoto.com/id/114332953/photo/wooden-spoon-filled-with-buckwheat-grain.jpg?s=612x612&w=0&k=20&c=KfXy1vGT39nYOsubPGFzsjkj4eT1auOfHdoYD47GXjg=",
    price: 180,
  },
  {
    item: "Millet",
    image:
      "https://milletamma.com/cdn/shop/products/77_2cd0fde0-b2fe-434a-9a5c-172d43bba8c9.jpg?v=1717386773",
    price: 120,
  },
  {
    item: "Spelt",
    image:
      "https://media.post.rvohealth.io/wp-content/uploads/2020/08/AN344-Spelt-Grain-Flour-732x549-thumb-1.jpg",
    price: 150,
  },
  {
    item: "Triticale",
    image:
      "https://www.glnc.org.au/wp-content/uploads/2019/07/Triticale_CROP.jpg",
    price: 150,
  },
  {
    item: "Amaranth",
    image:
      "https://5.imimg.com/data5/GLADMIN/Default/2022/4/SH/EE/TN/27975561/amaranth-seeds-500x500.jpeg",
    price: 250,
  },
  {
    item: "Teff",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2020/8/YR/BN/EJ/70421202/teff-seed.jpg",
    price: 350,
  },
  {
    item: "Sorghum",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh7NeLTHjMY3IiJNx4LrZfLu_4h_VsCrVLlA&s",
    price: 80,
  },
  {
    item: "Chia Seeds",
    image:
      "https://www.nutseedmart.com/wp-content/uploads/2021/08/Chia-Seeds.jpg",
    price: 600,
  },
];

module.exports = { data: cropData };
