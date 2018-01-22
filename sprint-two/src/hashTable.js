var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.count = 0;
  this.storage = [];
// console.log(LimitedArray)
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  var bucket = this._storage.get(index);
  if (!bucket) {
    this._storage.set(index, [tuple]);
    this.count++;
  } else {
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
      } else {
        bucket.push(tuple);
    this.count++
      }
    }
  }
  this.resize();
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i] && bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
  return;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        delete bucket[i];
        this.count--;
      }
    }
  } else {
    return;
  } 
};

HashTable.prototype.resize = function() {
//if count > 70% of limit size, 
  let doubleHash = function() {
    let newStorage = [];
    console.log("DoubleHash");
    //collect current items into new array
    this._storage.each( function(item) {
      if (item && item.length === 1) {
        newStorage.push(item[0]);
      } else if (item && item.length > 1) {
        for (let i = 0; i < item.length; i++) {
          newStorage.push(item[i]);
        }
      } 
    });
    //-----------
    //Delete storage and renew count
    delete this._storage;
    this.count = 0;
    //renew LimitedArray value
    console.log("this.limit" , this._limit);
    this._storage = LimitedArray(this._limit);
    //for all newitems, iterate over each and call this.insert using bind method
    newStorage.forEach( function(item) {
      this.insert(item[0], item[1]);
    }.bind(this));
  }.bind(this); // END DOUBLE HASH

  HashTable.prototype.checkRatio = function() {
    if ( 100 * (this.count / this._limit) >= 75) {
      console.log('double', this._limit / this.count);
      this._limit = this._limit * 2;
      doubleHash();
    } else if (100 * (this.count / this._limit) <= 25 && this.count >= 1 && this._limit > 8) {
      console.log('min', this.count / this._limit);
      this._limit = (this._limit / 2);
      doubleHash();
    }
  };

  // console.log(100 * (this.count / this._limit), 100 * (this.count / this._limit) );
};




/*
 * Complexity: What is the time complexity of the above functions?
 */


