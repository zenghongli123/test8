'use strict';

function collect_all_even(collection) {
  var arry=new Array();
  var k=0;
  for(var i=0;i<collection.length;i++)
  {
  	if(collection[i]%2==0)
  	{
  		arry[k]=collection[i];
  		k++;
  	}
  }
  return arry;
}

module.exports = collect_all_even;
