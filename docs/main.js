$(document).ready(function() {
  var prices = {
    "Supreme Pizza":10,
    "Pepperoni Pizza":9,
    "Buffalo Wings":8,
    "Lemon Pepper Wings":8,
  };

  var orderSummary = [];

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
      if(index > -1)
        orderSummary.splice(index, 2);
    }
    if(!(document.getElementById("pepperoniPizzaCheck").checked)){
      var index = orderSummary.indexOf("Pepperoni Pizza");
      if(index > -1)
        orderSummary.splice(index, 2);
    }
    if(!document.getElementById("buffaloWingCheck").checked){
      var index = orderSummary.indexOf("Buffalo Wings");
      if(index > -1)
        orderSummary.splice(index, 2);
    }
    if(!document.getElementById("lemonWingCheck").checked){
      var index = orderSummary.indexOf("Lemon Pepper Wings");
      if(index > -1)
        orderSummary.splice(index, 2);
    }

    $("#orderSum").html(orderSummary);
    calcTotalSum();
  }

  // DEFINITELY A BETTER WAY OF DOING THIS
  $( "input" ).on( "click", function() {
    if(document.getElementById("supremePizzaCheck").checked){
      // if no supreme pizza, then add it
      if(!orderSummary.includes("Supreme Pizza")){
        orderSummary.push("Supreme Pizza");
        orderSummary.push("<br \>");
        console.log(orderSummary);
      }
    }
    if(document.getElementById("pepperoniPizzaCheck").checked){
      if(!orderSummary.includes("Pepperoni Pizza")){
        orderSummary.push("Pepperoni Pizza");
        orderSummary.push("<br \>");
        console.log(orderSummary);
      }
    }
    if(document.getElementById("buffaloWingCheck").checked){
      if(!orderSummary.includes("Buffalo Wings")){
        orderSummary.push("Buffalo Wings");
        orderSummary.push("<br \>");
        console.log(orderSummary);
      }
    }
    if(document.getElementById("lemonWingCheck").checked){
      if(!orderSummary.includes("Lemon Pepper Wings")){
        orderSummary.push("Lemon Pepper Wings");
        orderSummary.push("<br \>");
        console.log(orderSummary);
      }
    }
    changeOrderSum();
    //$("#orderSum").html($("input:checked").val() + " is checked.");
  });
  changeOrderSum();
});