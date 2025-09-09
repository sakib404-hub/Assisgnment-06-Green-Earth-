// All Plants information
//! category: "Ornamental Plant"
//! description: "An elegant indoor palm that purifies air and adds tropical charm. Low maintenance and perfect for home interiors."
//! id: 20
//! image: "https://i.ibb.co.com/Y79mHSng/areca-palm-min.jpg"
//! name: "Areca Palm"
//! price: 600

const loadAllPlantData = async () => {
  manageSpinner(true);
  const url = "https://openapi.programming-hero.com/api/plants";
  const res = await fetch(url);
  const informations = await res.json();
  //   displayAllPlants(informations.plants);
  displayAllPlants(informations.plants);
};
//TODO: Displaying trees
const displayAllPlants = (plants) => {
  //? ---> Getting the card Container and empty it
  const cardContainer = document.getElementById("card_container");
  cardContainer.innerHTML = "";

  plants.forEach((plant) => {
    // console.log(plant.image);
    // console.log(plant.description);
    // console.log(plant.name);
    // console.log(plant.price);
    //? --> Creating the card
    const cardDiv = document.createElement("div");
    //? ---> Setting the card contents
    cardDiv.innerHTML = `<div class="h-full rounded-xl bg-white p-2 flex flex-col gap-2">
                <!-- container for the image  -->
                <div class="rounded-md h-50 overflow-hidden">
                  <img src="${plant.image}" alt="" class="w-full h-full object-cover"/>
                </div>
                <!-- container for the title, description and the add to cart button  -->
                <div class="flex flex-col flex-1 space-y-3">
                  <h1 class="text-xl font-semibold">${plant.name}</h1>
                  <p class="text-gray-700 text-sm">${plant.description}</p>
                  <div class="flex justify-between p-1">
                    <button
                      class="border px-2 py-1 rounded-full bg-[#DCFCE7] text-[#2E9053]"
                    >
                      ${plant.category}
                    </button>
                    <p class="text-base font-semibold">
                      <span
                        ><i class="fa-solid fa-bangladeshi-taka-sign"></i></span
                      >${plant.price}
                    </p>
                  </div>
                  <button
                    class="w-full rounded-full p-2 font-medium text-white bg-[#2e9053] transition:all duration-200 ease-in-out hover:scale-103 mt-auto"
                  >
                    Add to cart Button
                  </button>
                </div>
              </div>`;
    cardContainer.appendChild(cardDiv);
  });
  manageSpinner(false);
};

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
     <div class="px-4 py-1 text-gray-700 rounded-md shadow-sm transition:all duration-300 ease-in-out hover:bg-[#15803D] hover:text-white hover:shadow-md hover:scale-105 cursor-pointer" onclick="displayPlantsByCategory(${plant.id})"
              >
                ${plant.category_name}
              </div>`;
    //?---> Appending the child
    categoriesContainer.appendChild(divContainer);
    // console.log(plant.category_name);
  });
};

const displayPlantsByCategory = async (id) => {
  manageSpinner(true);
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  const res = await fetch(url);
  const informations = await res.json();
  displayAllPlants(informations.plants);
};

const manageSpinner = (status) => {
  if (status == true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("card_container").classList.add("hidden");
  } else {
    document.getElementById("spinner").classList.add("hidden");
    document.getElementById("card_container").classList.remove("hidden");
  }
};

loadAllPlantData();
loadingCategories();
