function deepSum (arr) {

    if(arr.length == 0){
        return 'No Number'
    }

    var output = 0;

    for ( var i = 0 ; i < arr.length ; i ++){
        var current = arr[i]
        
        for (var j = 0 ; j < current.length; j ++){
            var current2 = current[j]
            
            for ( var k = 0 ; k < current2.length ; k++){
                var current3 = current2[k]
                output = output + current3
            }
        }
        
    }

    return output

  }
  
  //TEST CASE
  console.log(deepSum([
    [
      [4, 5, 6],
      [9, 1, 2, 10],
      [9, 4, 3]
    ],
    [
      [4, 14, 31],
      [9, 10, 18, 12, 20],
      [1, 4, 90]
    ],
    [
      [2, 5, 10],
      [3, 4, 5],
      [2, 4, 5, 10]
    ]
  ])); // 316
  
  console.log(deepSum([
    [
      [20, 10],
      [15],
      [1, 1]
    ],
    [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      [2],
      [9, 11]
    ],
    [
      [3, 5, 1],
      [1, 5, 3],
      [1]
    ],
    [
      [2]
    ]
  ])); // 156
  
  console.log(deepSum([])); // No number