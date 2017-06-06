import faker from 'faker';
import R from 'ramda';

class FakeData {
  constructor (size) {
    this.size = size || 2000;
    this._cache = [];
  }

  createFakeRowObjectData (index) {
    const budgetMin = faker.random.number({min: 0, max: 15000});
    const budgetMax = budgetMin + faker.random.number({min: 0, max: 15000});

    return {
      id: index,
      avatar: faker.image.avatar(),
      city: faker.address.city(),
      email: faker.internet.email(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      street: faker.address.streetName(),
      zipCode: faker.address.zipCode(),
      date: faker.date.past(),
      bs: faker.company.bs(),
      catchPhrase: faker.company.catchPhrase(),
      companyName: faker.company.companyName(),
      words: faker.lorem.words(),
      sentence: faker.lorem.sentence(),
      checked: false,
      budgetMin: budgetMin,
      budgetMax: budgetMax,
      budget: (budgetMin / budgetMax) * 100
    }
  }

  getObjectAt (index) {
    if (index < 0 || index > this.size){
      return undefined;
    }
    if (this._cache[index] === undefined) {
      this._cache[index] = this.createFakeRowObjectData(index);
    }
    return this._cache[index];
  }

  setObjectAt (index, key, value) {
    if (index < 0 || index > this.size){
      return undefined;
    }
    if (this._cache[index] === undefined) {
      this._cache[index] = this.createFakeRowObjectData(index);
    }
    if (this._cache[index][key] === true || this._cache[index][key] === false) {
      this._cache[index][key] = !this._cache[index][key];
    } else this._cache[index][key] = value;
    return this;
  }

  getAll () {
    if (this._cache.length < this.size) {
      for (let i = 0; i < this.size; i++) {
        this.getObjectAt(i);
      }
    }
    return this._cache.slice();
  }

  getSize () {
    return this.size;
  }
}

export default FakeData;