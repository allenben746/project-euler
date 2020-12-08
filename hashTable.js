//dummy env variables
const ENVIRONMENT = 'dev';

const devLog = (data) => {
    if (ENVIRONMENT === 'dev') {
        console.log(data)
    }
} 


class HashTable {
    constructor(size=5) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let prime = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * prime + value) % this.keyMap.length;
        }

        return total;
    }

    set(key, value) {
        if (!key || !value) {
            throw new Error(`Missing key or value. '{${key}: ${value}}'`)
        }

        let index = this._hash(key);
        devLog(`Checking if index ${index} is occupied.`)
        if (!this.keyMap[index]) {
            devLog(`Index ${index} is unoccupied - placing empty array.`)
            this.keyMap[index] = [];
        }
        devLog(`Placing [${key}, ${value}] into index ${index}`);
        this.keyMap[index].push([key, value])
    }

    get(key) {
        let index = this._hash(key);
            if (this.keyMap[index]) {
                const result = this.keyMap[index].find(item => item[0] === key)
                return result ? result[1] : undefined
            }
            return undefined
    }

    keys() {
       let keysArr = [];
       for(let i=0; i < this.keyMap.length; i++) {
           if (this.keyMap[i]) {
              if (this.keyMap[i].length > 1) {
               this.keyMap[i].forEach(item => {
                   keysArr.push(item[0])
               })
           } else {
               keysArr.push(this.keyMap[i][0][0])
           } 
           }
       }
       return keysArr
    }

    values() {
       let valuesArr = [];
       for(let i=0; i < this.keyMap.length; i++) {
           if (this.keyMap[i]) {
              if (this.keyMap[i].length > 1) {
               this.keyMap[i].forEach(item => {
                   valuesArr.push(item[1])
               })
           } else {
               valuesArr.push(this.keyMap[i][0][1])
           } 
           }
       }
       return valuesArr
    }
}

const ht = new HashTable();

//Run ht.set([key, value]) to insert data
//Run ht.get(key) to retrieve data
//Run ht.keys() to return all keys
//Rusn ht.values() to return all values