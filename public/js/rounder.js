export default function beautify(num) {
  if (num >= 1000000) return new Intl.NumberFormat().format(Math.round((num / 1000000) * 10) / 10) + "m";
  else if(num >= 1000) return new Intl.NumberFormat().format((num / 1000) * 10 / 10) + "k";//don't need extra func call, cz youtube does
}

/*

function abbrNum(number, decPlaces) {
    decPlaces = Math.pow(10,decPlaces);
    var abbrev = [ "k", "m", "b", "t" ];
    for (var i=abbrev.length-1; i>=0; i--) {
        var size = Math.pow(10,(i+1)*3);
        if(size <= number) {
             number = Math.round(number*decPlaces/size)/decPlaces;
             if((number == 1000) && (i < abbrev.length - 1)) {
                 number = 1;
                 i++;
             }
             number += abbrev[i];
             break;
        }
    }

    return number;
}

*/