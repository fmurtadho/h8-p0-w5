function highestScore (students) {
    var object = {}
    var bestFoxes = 0;
    var bestWolves = 0;
    var bestTigers = 0;

    for ( var i = 0 ; i < students.length ; i ++){
        var current = students[i]
        var kelas = current.class

        if(object[kelas] == null){
            object[kelas] = {
            }
        }
        if(current.class === 'foxes' && current.score > bestFoxes){
          bestFoxes = current.score
          object[current.class] = {
            name: current.name,
            score:current.score
          }
        }
        if(current.class === 'wolves' && current.score > bestWolves){
          bestWolves = current.score
          object[current.class] = {
            name: current.name,
            score:current.score
          }
        }
        if(current.class === 'tigers' && current.score > bestTigers){
          bestTigers = current.score
          object[current.class] = {
            name: current.name,
            score:current.score
          }
        }
    }
    return object
  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
//   // {
//   //   foxes: { name: 'Alexander', score: 100 },
//   //   wolves: { name: 'Alisa', score: 76 },
//   //   tigers: { name: 'Viktor', score: 80 }
//   // }
  
  
  console.log(highestScore([])); //{}