function connect(){
  const specialVal = 8
  return function(val){
    return (val * val) + specialVal
  }
}

console.log(connect()(5))