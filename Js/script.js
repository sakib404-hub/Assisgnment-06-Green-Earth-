// All Plants information
//! category: "Ornamental Plant"
//! description: "An elegant indoor palm that purifies air and adds tropical charm. Low maintenance and perfect for home interiors."
//! id: 20
//! image: "https://i.ibb.co.com/Y79mHSng/areca-palm-min.jpg"
//! name: "Areca Palm"
//! price: 600

const loadAllPlantData = async () => {
  const url = "https://openapi.programming-hero.com/api/plants";
  const res = await fetch(url);
  const informations = await res.json();
  //   displayAllPlants(informations.plants);
  displayCategories(informations.plants);
};
//TODO: Displaying all the trees
// const displayAllPlants = (plants) => {
//   plants.forEach((plant) => {
//     console.log(plant.image);
//     console.log(plant.description);
//     console.log(plant.name);
//     console.log(plant.price);
//   });
// };

//TODO : loading the Categories
const loadingCategories = async () => {
  const url = "https://openapi.programming-hero.com/api/categories";

  const res = await fetch(url);
  const categoryInformation = await res.json();

  displayCategories(categoryInformation.categories);
  //   displayCategories(categoryInformation)
};
//TODO : Displaying the Categories
const displayCategories = (plants) => {
  //?Getting the container and empty it
  const categoriesContainer = document.getElementById("categories");

  plants.forEach((plant) => {
    //?--> Create an Element
    const divContainer = document.createElement("div");

    //? --> Setting up the container inner Html
    divContainer.innerHTML = `
     <div class="px-4 py-1 text-gray-700 rounded-md shadow-sm transition:all duration-300 ease-in-out hover:bg-[#15803D] hover:text-white hover:shadow-md hover:scale-105 cursor-pointer"
              >
                ${plant.category_name}
              </div>`;
    //?---> Appending the child
    categoriesContainer.appendChild(divContainer);
    // console.log(plant.category_name);
  });
};

// loadAllPlantData();
loadingCategories();
