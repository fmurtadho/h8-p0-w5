function naikAngkot(arrPenumpang) {

    var object = []
    var output = []
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    
    for( var i = 0 ; i < arrPenumpang.length ; i ++){
        var current = arrPenumpang[i]
        object[i] = {
            start: current[1],
            end: current[2],
            mulai:0,
            akhir:0,
        }

        for( var j = 0 ; j < rute.length ; j ++){
            if(rute[j] === object[i].start){
                object[i].mulai = j+1
            }else if(rute[j] === object[i].end){
                object[i].akhir = j+1
            }
        }

        var bayar = (object[i].akhir - object[i].mulai)*2000

        output[i] = {
            penumpang: current[0],
            naikDari: current[1],
            tujuan: current[2],
            bayar: Math.abs(bayar) // supaya bisa arah sebaliknya
        }
    }

    return output
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]