/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;  
  for(var i = 0, len = preferences.length; i < len; i++){    
    var first = preferences[i];
    var second = preferences[first - 1];
    var third = preferences[second - 1];

    if(preferences[i] === null || (first == second && second == third))
      continue;  

    if((i + 1) === third){
      count++;
      preferences[i] = null;
      preferences[first - 1] = null;
      preferences[second - 1] = null;
    }
  }
  return count;
};

