const registerEmail = document.getElementById("registerEmail");
const registerPassword = document.getElementById("registerPassword");
const registerConfirmPW = document.getElementById("registerConfirmPW");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btnRegister = document.getElementById("btnRegister");
const btnLogin = document.getElementById("btnLogin");
const btnLogout = document.getElementById("btnLogout");
const btnMainLogin = document.getElementById("btnMainLogin");

//add to database
function registerClick() {
  // Store data from Register Email to firebase
  var firebaseRef = firebase.database().ref("Customers/");
  if(registerPassword.value == registerConfirmPW.value) {
    firebaseRef.push().set({
      email: registerEmail.value,
      password: registerPassword.value
    });
    window.alert("You have been registered successfully!");
  }
  else {
    window.alert("Passwords do not match.");
  }
}

// sign up event
btnRegister.addEventListener('click', e => {
  const email = registerEmail.value;
  const pass = registerPassword.value;
  //Sign in
  console.log(email);
  firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error){
    console.log(error.code);
    console.log(error.message);
  });

});

//Add Login Event
btnLogin.addEventListener('click', e => {
  const inputEmail = email.value;
  const pass = password.value;
  //Sign in
  console.log(inputEmail);
  console.log(pass);
  firebase.auth().signInWithEmailAndPassword(inputEmail, pass).catch(function(error){
    console.log(error.code);
    console.log(error.message);
  });
});

//Add Logout Event
btnLogout.addEventListener('click', e => {
  firebase.auth().signOut().then(function() {
    console.log("Logged out!")
  }, function(error) {
    console.log(error.code);
    console.log(error.message);
 });
});

//add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser)
  {
    console.log(firebaseUser);
    window.alert("Logged in");
    btnMainLogin.style.display = "none";
    btnLogout.style.display = "inline";
  }
  else
  {
    window.alert("Logged out");
    btnMainLogin.style.display = "inline";
    btnLogout.style.display = "none";
  }
})


$(document).ready(function() {
  //---------------------------------------------------------------------------
  // javascript for modals
  //---------------------------------------------------------------------------
  // might be able to do this using just bootstrap html
  // hide first modal
  $("#registerButton").on("click", function() {
    $('#loginModal').modal('hide');
  });
  // trigger next modal
  $("#registerButton").on("click", function() {
    $('#registerModal').modal('show');
  });
  //---------------------------END----------------------------------------------
  // --------------------------------------------------------------------------
  // Javascript for checkout page
  //---------------------------------------------------------------------------
  // this will be on database when we figure it out
  var prices = {
    "Supreme Pizza":10,
    "Pepperoni Pizza":9,
    "Cheese Pizza":8,
    "Custom Pizza":11,  //once again probably change this
    "Buffalo Wings":8,
    "Lemon Pepper Wings":8,
    "Hot Wings":8,
    "Breadsticks":6,
    "Fries":5,
    "Cheese Sticks":6,
    "Salad":5,
    "Mashed Potatoes":5,
    "Coca-Cola":3,
    "Mountain Dew":3,
    "Crush":3,
    "Brisk":3,
    "Lemonade":3,
  };

  // adjust value for size
  var sizePrice = {
    "Large":5,
    "Medium":3,
    "Small":0,
  };
  // probably need object for custom pizza

  var orderSummary = [];
  var orderPrices = [];

  function calcTotalSum(){
    var total = 0;
    for(var i = 0; i < orderPrices.length; i++){
      if((i % 2) == 0)
        total += Number(orderPrices[i].replace("$", "")); //get rid of $
    }
    $("#totalCost").html("$" + total.toString());
    //console.log(total);
  }

  // THERE IS PROBABLY A BETTER WAY OF DOING THIS
  // update summary box
  function changeOrderSum(){
    if(!(document.getElementById("supremePizzaCheck").checked)){
      $("#pizzaRadio1").attr('hidden', 'true');
      var index = orderSummary.indexOf("Supreme Pizza");
      if(index > -1){
        orderSummary.splice(index, 2);
        orderPrices.splice(index, 2);
      }
    }
    if(!(document.getElementById("pepperoniPizzaCheck").checked)){
      $("#pizzaRadio2").attr('hidden', 'true');
      var index = orderSummary.indexOf("Pepperoni Pizza");
      if(index > -1){
        orderSummary.splice(index, 2);
        orderPrices.splice(index, 2);
      }
    }
    if(!(document.getElementById("cheesePizzaCheck").checked)){
      $("#pizzaRadio3").attr('hidden', 'true');
      var index = orderSummary.indexOf("Cheese Pizza");
      if(index > -1){
        orderSummary.splice(index, 2);
        orderPrices.splice(index, 2);
      }
    }
    //once again probably need to change this
    if(!(document.getElementById("customPizzaCheck").checked)){
      var index = orderSummary.indexOf("Custom Pizza");
      if(index > -1){
        orderSummary.splice(index, 2);
        orderPrices.splice(index, 2);
      }
    }
    if(!document.getElementById("buffaloWingCheck").checked){
      $("#wingsRadio1").attr('hidden', 'true');
      var index = orderSummary.indexOf("Buffalo Wings");
      if(index > -1){
        orderSummary.splice(index, 2);
        orderPrices.splice(index, 2);
      }
    }
    if(!document.getElementById("lemonWingCheck").checked){
      $("#wingsRadio2").attr('hidden', 'true');
      var index = orderSummary.indexOf("Lemon Pepper Wings");
      if(index > -1){
        orderSummary.splice(index, 2);
        orderPrices.splice(index, 2);
      }
    }
    if(!document.getElementById("hotWingCheck").checked){
      $("#wingsRadio3").attr('hidden', 'true');
      var index = orderSummary.indexOf("Hot Wings");
      if(index > -1){
        orderSummary.splice(index, 2);
        orderPrices.splice(index, 2);
      }
    }
    if(!document.getElementById("breadStickCheck").checked){
      var index = orderSummary.indexOf("Breadsticks");
      if(index > -1){
        orderSummary.splice(index, 2);
        orderPrices.splice(index, 2);
      }
    }
    if(!document.getElementById("friesCheck").checked){
      var index = orderSummary.indexOf("Fries");
      if(index > -1){
        orderSummary.splice(index, 2);
        orderPrices.splice(index, 2);
      }
    }
    if(!document.getElementById("cheeseSticksCheck").checked){
      var index = orderSummary.indexOf("Cheese Sticks");
      if(index > -1){
        orderSummary.splice(index, 2);
        orderPrices.splice(index, 2);
      }
    }
    if(!document.getElementById("saladCheck").checked){
      var index = orderSummary.indexOf("Salad");
      if(index > -1){
        orderSummary.splice(index, 2);
        orderPrices.splice(index, 2);
      }
    }
    if(!document.getElementById("mashedPotatoCheck").checked){
      var index = orderSummary.indexOf("Mashed Potatoes");
      if(index > -1){
        orderSummary.splice(index, 2);
        orderPrices.splice(index, 2);
      }
    }
    if(!document.getElementById("cokeCheck").checked){
      var index = orderSummary.indexOf("Coca-Cola");
      if(index > -1){
        orderSummary.splice(index, 2);
        orderPrices.splice(index, 2);
      }
    }
    if(!document.getElementById("mountainDewCheck").checked){
      var index = orderSummary.indexOf("Mountain Dew");
      if(index > -1){
        orderSummary.splice(index, 2);
        orderPrices.splice(index, 2);
      }
    }
    if(!document.getElementById("crushCheck").checked){
      var index = orderSummary.indexOf("Crush");
      if(index > -1){
        orderSummary.splice(index, 2);
        orderPrices.splice(index, 2);
      }
    }
    if(!document.getElementById("briskCheck").checked){
      var index = orderSummary.indexOf("Brisk");
      if(index > -1){
        orderSummary.splice(index, 2);
        orderPrices.splice(index, 2);
      }
    }
    if(!document.getElementById("lemonadeCheck").checked){
      var index = orderSummary.indexOf("Lemonade");
      if(index > -1){
        orderSummary.splice(index, 2);
        orderPrices.splice(index, 2);
      }
    }


    // display items
    //console.log(orderSummary);
    if(orderSummary.length == 0)
      $("#orderSumItems").html("Select Items To Begin");
    else
      $("#orderSumItems").html(orderSummary);

    // display prices
    $("#orderSumPrice").html(orderPrices);

    calcTotalSum();
  }

  // DEFINITELY A BETTER WAY OF DOING THIS
  // check if pressed
  function checkMark(){
    $( "input" ).on( "click", function() {
      if(document.getElementById("supremePizzaCheck").checked){
        // if no supreme pizza, then add it
        $("#pizzaRadio1").removeAttr('hidden');
        if(!orderSummary.includes("Supreme Pizza")){
          orderSummary.push("Supreme Pizza");
          orderSummary.push("<br \>");
          orderPrices.push("$" + prices["Supreme Pizza"].toString());
          orderPrices.push("<br \>");
        } else{
          orderPrices[orderSummary.indexOf("Supreme Pizza")] = "$" + (prices["Supreme Pizza"] + Number($('input[name=pizzaRadioOptions1]:checked', '#pizzaRadio1').val())).toString();
        }
      }
      if(document.getElementById("pepperoniPizzaCheck").checked){
        $("#pizzaRadio2").removeAttr('hidden');
        if(!orderSummary.includes("Pepperoni Pizza")){
          orderSummary.push("Pepperoni Pizza");
          orderSummary.push("<br \>");
          orderPrices.push("$" + prices["Pepperoni Pizza"].toString());
          orderPrices.push("<br \>");
        } else{
          orderPrices[orderSummary.indexOf("Pepperoni Pizza")] = "$" + (prices["Pepperoni Pizza"] + Number($('input[name=pizzaRadioOptions2]:checked', '#pizzaRadio2').val())).toString();
        }
      }
      if(document.getElementById("cheesePizzaCheck").checked){
        $("#pizzaRadio3").removeAttr('hidden');
        if(!orderSummary.includes("Cheese Pizza")){
          orderSummary.push("Cheese Pizza");
          orderSummary.push("<br \>");
          orderPrices.push("$" + prices["Cheese Pizza"].toString());
          orderPrices.push("<br \>");
        }  else{
          orderPrices[orderSummary.indexOf("Cheese Pizza")] = "$" + (prices["Cheese Pizza"] + Number($('input[name=pizzaRadioOptions3]:checked', '#pizzaRadio3').val())).toString();
        }
      }
      // probably gonna need to implement custom pizza differently
      if(document.getElementById("customPizzaCheck").checked){
        if(!orderSummary.includes("Custom Pizza")){
          orderSummary.push("Custom Pizza");
          orderSummary.push("<br \>");
          orderPrices.push("$" + prices["Custom Pizza"].toString());
          orderPrices.push("<br \>");
        }
      }
      if(document.getElementById("buffaloWingCheck").checked){
        $("#wingsRadio1").removeAttr('hidden');
        if(!orderSummary.includes("Buffalo Wings")){
          orderSummary.push("Buffalo Wings");
          orderSummary.push("<br \>");
          orderPrices.push("$" + (prices["Buffalo Wings"] + Number($('input[name=wingsRadioOptions1]:checked', '#wingsRadio1').val())).toString());
          orderPrices.push("<br \>");
        } else{
          orderPrices[orderSummary.indexOf("Buffalo Wings")] = "$" + (prices["Buffalo Wings"] + Number($('input[name=wingsRadioOptions1]:checked', '#wingsRadio1').val())).toString();
        }
      }
      if(document.getElementById("lemonWingCheck").checked){
        $("#wingsRadio2").removeAttr('hidden');
        if(!orderSummary.includes("Lemon Pepper Wings")){
          orderSummary.push("Lemon Pepper Wings");
          orderSummary.push("<br \>");
          orderPrices.push("$" + (prices["Lemon Pepper Wings"] + Number($('input[name=wingsRadioOptions2]:checked', '#wingsRadio2').val())).toString());
          orderPrices.push("<br \>");
        } else{
          orderPrices[orderSummary.indexOf("Lemon Pepper Wings")] = "$" + (prices["Lemon Pepper Wings"] + Number($('input[name=wingsRadioOptions2]:checked', '#wingsRadio2').val())).toString();
        }
      }
      if(document.getElementById("hotWingCheck").checked){
        $("#wingsRadio3").removeAttr('hidden');
        if(!orderSummary.includes("Hot Wings")){
          orderSummary.push("Hot Wings");
          orderSummary.push("<br \>");
          orderPrices.push("$" + (prices["Hot Wings"] + Number($('input[name=wingsRadioOptions3]:checked', '#wingsRadio3').val())).toString());
          orderPrices.push("<br \>");
        } else{
          orderPrices[orderSummary.indexOf("Hot Wings")] = "$" + (prices["Hot Wings"] + Number($('input[name=wingsRadioOptions3]:checked', '#wingsRadio3').val())).toString();
        }
      }
      if(document.getElementById("breadStickCheck").checked){
        if(!orderSummary.includes("Breadsticks")){
          orderSummary.push("Breadsticks");
          orderSummary.push("<br \>");
          orderPrices.push("$" + prices["Breadsticks"].toString());
          orderPrices.push("<br \>");
        }
      }
      if(document.getElementById("friesCheck").checked){
        if(!orderSummary.includes("Fries")){
          orderSummary.push("Fries");
          orderSummary.push("<br \>");
          orderPrices.push("$" + prices["Fries"].toString());
          orderPrices.push("<br \>");
        }
      }
      if(document.getElementById("cheeseSticksCheck").checked){
        if(!orderSummary.includes("Cheese Sticks")){
          orderSummary.push("Cheese Sticks");
          orderSummary.push("<br \>");
          orderPrices.push("$" + prices["Cheese Sticks"].toString());
          orderPrices.push("<br \>");
        }
      }
      if(document.getElementById("saladCheck").checked){
        if(!orderSummary.includes("Salad")){
          orderSummary.push("Salad");
          orderSummary.push("<br \>");
          orderPrices.push("$" + prices["Salad"].toString());
          orderPrices.push("<br \>");
        }
      }
      if(document.getElementById("mashedPotatoCheck").checked){
        if(!orderSummary.includes("Mashed Potatoes")){
          orderSummary.push("Mashed Potatoes");
          orderSummary.push("<br \>");
          orderPrices.push("$" + prices["Mashed Potatoes"].toString());
          orderPrices.push("<br \>");
        }
      }
      if(document.getElementById("cokeCheck").checked){
        if(!orderSummary.includes("Coca-Cola")){
          orderSummary.push("Coca-Cola");
          orderSummary.push("<br \>");
          orderPrices.push("$" + prices["Coca-Cola"].toString());
          orderPrices.push("<br \>");
        }
      }
      if(document.getElementById("mountainDewCheck").checked){
        if(!orderSummary.includes("Mountain Dew")){
          orderSummary.push("Mountain Dew");
          orderSummary.push("<br \>");
          orderPrices.push("$" + prices["Mountain Dew"].toString());
          orderPrices.push("<br \>");
        }
      }
      if(document.getElementById("crushCheck").checked){
        if(!orderSummary.includes("Crush")){
          orderSummary.push("Crush");
          orderSummary.push("<br \>");
          orderPrices.push("$" + prices["Crush"].toString());
          orderPrices.push("<br \>");
        }
      }
      if(document.getElementById("briskCheck").checked){
        if(!orderSummary.includes("Brisk")){
          orderSummary.push("Brisk");
          orderSummary.push("<br \>");
          orderPrices.push("$" + prices["Brisk"].toString());
          orderPrices.push("<br \>");
        }
      }
      if(document.getElementById("lemonadeCheck").checked){
        if(!orderSummary.includes("Lemonade")){
          orderSummary.push("Lemonade");
          orderSummary.push("<br \>");
          orderPrices.push("$" + prices["Lemonade"].toString());
          orderPrices.push("<br \>");
        }
      }

      changeOrderSum();
    });
  }
  $('#wingsContainer input').on('change', function() {
    checkMark();
  });

  checkMark();
  changeOrderSum();
  //---------------------------END----------------------------------------------
});
