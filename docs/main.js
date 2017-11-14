$(document).ready(function() {
  //---------------------------------------------------------------------------
  // javascript for modals
  // might be able to do this using just bootstrap html
  // hide first modal
  $("#registerButton").on("click", function() {
    $('#loginModal').modal('hide');
  });
  // trigger next modal
  $("#registerButton").on("click", function() {
    $('#registerModal').modal('show');
  });
  //----------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // Javascript for checkout page
  // this will be on database when we figure it out
  var prices = {
    "Supreme Pizza":10,
    "Pepperoni Pizza":9,
    "Cheese Pizza":8,
    "Custom Pizza":11,  //once again probably change this
    "Buffalo Wings":8,
    "Lemon Pepper Wings":8,
    "Hot Wings":8,
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
    for(var i = 0; i < orderSummary.length; i++){
      if((i % 2) == 0)
        total += prices[orderSummary[i]];
    }
    $("#totalCost").html("$" + total.toString());
    console.log(total);
  }

  // THERE IS PROBABLY A BETTER WAY OF DOING THIS
  function changeOrderSum(){
    if(!(document.getElementById("supremePizzaCheck").checked)){
      var index = orderSummary.indexOf("Supreme Pizza");
      if(index > -1){
        orderSummary.splice(index, 2);
        orderPrices.splice(index, 2);
      }
    }
    if(!(document.getElementById("pepperoniPizzaCheck").checked)){
      var index = orderSummary.indexOf("Pepperoni Pizza");
      if(index > -1){
        orderSummary.splice(index, 2);
        orderPrices.splice(index, 2);
      }
    }
    if(!(document.getElementById("cheesePizzaCheck").checked)){
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
      var index = orderSummary.indexOf("Buffalo Wings");
      if(index > -1){
        orderSummary.splice(index, 2);
        orderPrices.splice(index, 2);
      }
    }
    if(!document.getElementById("lemonWingCheck").checked){
      var index = orderSummary.indexOf("Lemon Pepper Wings");
      if(index > -1){
        orderSummary.splice(index, 2);
        orderPrices.splice(index, 2);
      }
    }
    if(!document.getElementById("hotWingCheck").checked){
      var index = orderSummary.indexOf("Hot Wings");
      if(index > -1){
        orderSummary.splice(index, 2);
        orderPrices.splice(index, 2);
      }
    }


    // display items
    console.log(orderSummary);
    if(orderSummary.length == 0)
      $("#orderSumItems").html("Select Items To Begin");
    else
      $("#orderSumItems").html(orderSummary);

    // display prices
    $("#orderSumPrice").html(orderPrices);

    calcTotalSum();
  }

  // DEFINITELY A BETTER WAY OF DOING THIS
  $( "input" ).on( "click", function() {
    if(document.getElementById("supremePizzaCheck").checked){
      // if no supreme pizza, then add it
      if(!orderSummary.includes("Supreme Pizza")){
        orderSummary.push("Supreme Pizza");
        orderSummary.push("<br \>");
        orderPrices.push("$" + prices["Supreme Pizza"].toString());
        orderPrices.push("<br \>");
      }
    }
    if(document.getElementById("pepperoniPizzaCheck").checked){
      if(!orderSummary.includes("Pepperoni Pizza")){
        orderSummary.push("Pepperoni Pizza");
        orderSummary.push("<br \>");
        orderPrices.push("$" + prices["Pepperoni Pizza"].toString());
        orderPrices.push("<br \>");
      }
    }
    if(document.getElementById("cheesePizzaCheck").checked){
      if(!orderSummary.includes("Cheese Pizza")){
        orderSummary.push("Cheese Pizza");
        orderSummary.push("<br \>");
        orderPrices.push("$" + prices["Cheese Pizza"].toString());
        orderPrices.push("<br \>");
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
      if(!orderSummary.includes("Buffalo Wings")){
        orderSummary.push("Buffalo Wings");
        orderSummary.push("<br \>");
        orderPrices.push("$" + prices["Buffalo Wings"].toString());
        orderPrices.push("<br \>");
      }
    }
    if(document.getElementById("lemonWingCheck").checked){
      if(!orderSummary.includes("Lemon Pepper Wings")){
        orderSummary.push("Lemon Pepper Wings");
        orderSummary.push("<br \>");
        orderPrices.push("$" + prices["Lemon Pepper Wings"].toString());
        orderPrices.push("<br \>");
      }
    }
    if(document.getElementById("hotWingCheck").checked){
      if(!orderSummary.includes("Hot Wings")){
        orderSummary.push("Hot Wings");
        orderSummary.push("<br \>");
        orderPrices.push("$" + prices["Hot Wings"].toString());
        orderPrices.push("<br \>");
      }
    }

    changeOrderSum();
    //$("#orderSum").html($("input:checked").val() + " is checked.");
  });

  changeOrderSum();
  //---------------------------------------------------------------------------
});