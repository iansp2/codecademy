const dogFactory = (name, breed, weight) => {
  const newDog = {
    _name: null,
    _breed: null,
    _weight: null,
    set name(newName) {
      if (typeof newName === 'string') {
        this._name = newName;
      } else {
        console.log('Name must be string');
      }
    },
    set breed(newBreed) {
      if (typeof newBreed === 'string') {
        this._breed = newBreed;
      } else {
        console.log('Breed must be string');
      }
    },
    set weight(newWeight) {
      if (typeof newWeight === 'number') {
        this._weight = newWeight;
      } else {
        console.log('Weight must be number');
      }
    },
    get name() {
      return this._name
    },
    get breed() {
      return this._breed;
    },
    get weight() {
      return this._weight;
    },
    bark() {
      return 'ruff! ruff!';
    },
    eatTooManyTreats() {
      this._weight++;
    }
  };
  
  newDog.name = name;
  newDog.breed = breed;
  newDog.weight = weight;

  return newDog
}