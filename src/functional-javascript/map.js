const map = (arr, func) => {
  const mappedArr = [];

  for (let i = 0; i < arr.length; i++) {
    mappedArr.push(func(arr[i]));
  }

  return mappedArr;
};

const mapWithReduce = (arr, func) => 
  arr.reduce((acc, element) => {
    acc.push(func(element));
    return acc;
  }, []);

// testing if it works:

// Should be [2, 4, 6]
console.log(mapWithReduce([1, 2, 3], (x) => x * 2));

// Should be [-5, -6, -7, -8, -9, -10]
console.log(mapWithReduce([5, 6, 7, 8, 9, 10], (x) => -x));

// Should be ['A', 'B', 'C', 'D']
console.log(mapWithReduce(['a', 'b', 'c', 'd'], (x) => x.toUpperCase()));
