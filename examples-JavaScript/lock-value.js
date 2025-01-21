h5gg.require(7.9); //min version
/*
h5gg.clearResults();
h5gg.searchNumber("123", "I32", "0x0", "0xFFFFFFFF00000000");
var count = h5gg.getResultsCount();
var results = h5gg.getResults(count);

var locker = setInterval(function() {
    console.log("running...");
    for(var i=0; i<count; i++) {
        h5gg.setValue(results[i].address, "456", "I32");
    }
},
500  //lock/freeze time interval (millseconds)
);
*/
const expAddrs =[0x11192BD00,0x115E2B3EC];
setInterval(()=>{
  expAddrs.forEach((addr)=>{
    h5gg.setValue(addr,"0","I16");
  });
},2000)
