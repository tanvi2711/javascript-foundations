const name = "Tanvi"
const reopCount=15

// console.log(name+reopCount+" Value");


console.log(`Hello my name is ${name} and my repo count is ${reopCount}`);

const gameName= new String('Tanvi-engg-tj')
console.log(gameName)

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('n'));


const newString=gameName.substring(3,9)
console.log(newString);


const anotherString =gameName.slice(-8,4)
console.log(anotherString);


const newString1="    tanvi     "
console.log(newString1);
console.log(newString1.trim());


const url="htttps://tanvi.com/tanvi%20jivatode"
console.log(url.replace('%20','-'));

console.log(url.includes("jivatode"))
console.log(url.includes("hit"))


console.log(gameName.split('-'));
