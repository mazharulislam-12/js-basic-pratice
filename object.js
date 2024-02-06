var roton = {
    color: 'Black',
    "full Name": "Hero Alom",
    age: 23,
    height: 5.9,
    isSingle: true,
    location: "Mymenshingh",
    friends: ['Rahim', 'Karim'],
    rotonAllDetails: {
        favMovies: 'Beder Meya Jusna',
        favColor: 'Black'
    }
};

//do not change 
Object.freeze(roton)

roton.age = 21
console.log(roton.age);
console.log(roton.age);
console.log(roton["color"]);
console.log(roton["full Name"]);
console.log(roton.friends); 
console.log(roton.friends[1]);
console.log(roton);
console.log(roton.rotonAllDetails);
delete roton.height;
console.log(roton);