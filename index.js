// CLASSE USER

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  compareAge = function (otherUser) {
    if (this.age > otherUser.age) {
      return this.firstName + " è più vecchio di " + otherUser.firstName;
    } else {
      return this.firstName + " è più giovane di " + otherUser.firstName;
    }
  };
}

const user1 = new User("Mario", "Rossi", "25", "Roma");
console.log("user1", user1);

const user2 = new User("Luca", "Santi", "30", "Milano");
console.log("user2", user2);

const user3 = new User("Giovanna", "Bianchi", "28", "Bari");
console.log("user3", user3);

console.log(user1.compareAge(user2));
console.log(user2.compareAge(user3));

// FORM PET

//Nome animale
const petName = document.getElementById("pet-name");
//Nome proprietario
const ownerName = document.getElementById("owner");
//Animale
const animal = document.getElementById("animal");
//Razza
const breed = document.getElementById("breed");
//Check padrone
const sameOwner = document.getElementById("same-owner");
// riferimento generico al form
const formTag = document.getElementsByTagName("form")[0];

//array
const animalsArray = [];

class animalsList {
  constructor(_petName, _ownerName, _animal, _breed, _sameOwner) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.animal = _animal;
    this.breed = _breed;
    this.sameOwner = _sameOwner;
  }
}

// aggiungi animale
formTag.addEventListener("submit", function (e) {
  e.preventDefault();
  const animalFromForm = new animalsList(
    petName.value,
    ownerName.value,
    animal.value,
    breed.value,
    sameOwner.checked
  );

  animalsArray.push(animalFromForm);
  console.log("Animale", animalFromForm);
  updateAnimals()
});

// card con animale
const updateAnimals = function () {
    const animalRow = document.getElementById('animal-row');
    animalRow.innerHTML = ""; 
    animalsArray.forEach((element) => {
        const newDiv = document.createElement('div');
        newDiv.classList.add("col");
        newDiv.innerHTML = `
            <div class="card${
                element.sameOwner ? ' bg-success border-3' : ''
              }">
                <div class="card-body">
                <h5 class="card-title">${element.petName}</h5>
                <ul class="list-group">
                <li class="list-group-item">Owner: ${element.ownerName}</li>
                <li class="list-group-item">Species: ${element.animal}</li>
                <li class="list-group-item">Breed: ${element.breed}</li>
                </ul>
                </div>
            </div>
        `;
        animalRow.appendChild(newDiv);
    });
};
