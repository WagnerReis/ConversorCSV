class Table{
  constructor(arr){
    this.reader = arr[0];
    arr.shift();
    this.rows = arr;
  }
  
}

module.exports = Table;