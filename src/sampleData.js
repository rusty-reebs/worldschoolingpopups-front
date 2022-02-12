const sampleData = [
  {
    name: "Redneck Pop Up",
    location: {
      country: "Canada",
      state: "AB",
      city: "Grande Prairie",
      lat: 55.170834,
      lon: -118.794724,
    },
    date: {
      start: "2022-03-01",
      end: "2022-03-15",
    },
    accomIncluded: true,
    age: {
      min: "6",
      max: "18",
    },
    temperature: {
      min: "-20",
      max: "15",
    },
    cost: {
      amount: "500",
      currency: "CAD",
    },
    excursions: "Optional day trip to Dinosaur Museum",
    description:
      "Pop up in beautiful GPAB. Come learn about Canada's working city.",
    images: {
      image1:
        "https://res.cloudinary.com/dnwnw3z4z/image/upload/v1644442931/worldschoolingpopups/gpab_e9dlky.jpg",
      image2:
        "https://res.cloudinary.com/dnwnw3z4z/image/upload/v1644595490/worldschoolingpopups/gbab-2_jx9por.jpg",
      image3:
        "https://res.cloudinary.com/dnwnw3z4z/image/upload/v1644622732/worldschoolingpopups/gpab-3_xrbmpa.jpg",
    },
    contact: {
      name: "Jaime Salonen",
      email: "plan.b.giver@gmail.com",
    },
    website: "www.gpworldschool.com",
    _id: 1,
  },
  {
    name: "Bali Pop Up",
    location: {
      country: "Indonesia",
      state: "Bali",
      city: "Ubud",
      lat: -8.519268,
      lon: 115.263298,
    },
    date: {
      start: "2022-04-01",
      end: "2022-04-15",
    },
    accomIncluded: false,
    age: {
      min: "10",
      max: "16",
    },
    temperature: {
      min: "18",
      max: "32",
    },
    cost: {
      amount: "100",
      currency: "USD",
    },
    excursions: "Daily excursions to the yoga studio.",
    description:
      "Come enjoy Bali while you learn. Banana pancakes will be served daily. You will also get to see so many offerings being made all around the property. Wake up to the pleasant sound of roosters in the morning.",
    images: {
      image1:
        "https://res.cloudinary.com/dnwnw3z4z/image/upload/v1644444627/worldschoolingpopups/bali_avfotf.jpg",
      image2: "",
      image3: "",
    },
    contact: {
      name: "Ketut Mendra",
      email: "ketut@gmail.com",
    },
    website: "www.baliworldschool.com",
    _id: 2,
  },
];

export function getSampleData() {
  return sampleData;
}

export function getEvent(id) {
  return sampleData.find((event) => event._id === id);
}
