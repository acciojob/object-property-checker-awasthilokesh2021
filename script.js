const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
 let arr1 = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };
  // let  obj = arr1.hasOwnProperty(" ")

  for (let key1 in arr1) {
    if (key1 == key) {
      return true;
    } else {
      return false;
    }
  }
}

// Do not change the code below
//const key = prompt("Enter Key.");
//alert(hasKey(key));
