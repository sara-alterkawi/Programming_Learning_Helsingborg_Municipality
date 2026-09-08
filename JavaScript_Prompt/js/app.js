//Make variable and prompt message
var age = prompt('Please enter your age');

//age must be over 18 and not a letter
while (age < 18 || isNaN(age) ){
    alert("Sorry you are not old enough");
    age = prompt('Please enter your age');
}

//If age over 18
 if (age >= 18) {
    var name = prompt('Please enter your name');
    document.getElementById("title").innerHTML = ("Hello " + name + " you are wellcome here");
};

swal({
    icon: "success",
  });

//make empty array
var shoppingList = [];

//Attach html to Js
var form = document.getElementById('shopping-form');

//Submit function listener
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Attach input to Js
    var input = document.getElementById('input-form').value;

    //Add another array, push to array.
    shoppingList.push(input);

    //Show array in HTML / Home site.
    document.getElementById('list').innerHTML = shoppingList;

    //reset the array.
    form.reset();
});