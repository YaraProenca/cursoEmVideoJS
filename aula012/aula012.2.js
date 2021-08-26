let now = new Date()
let hour = now.getHours()
console.log(`Now it's ${hour}.`);

if (hour < 12) {
  console.log('Morning!');  
}
else if (hour < 18) {
  console.log('Afeternoon!'); 
}
else{
  console.log('Night!');
}