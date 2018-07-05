window.addEventListener("message", function(e){
  alert('您选择了:' + e.data.name + ',' + e.data.address)
}, false);
