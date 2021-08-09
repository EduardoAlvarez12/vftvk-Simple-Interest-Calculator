function compute() {
      //If the principal field value is valid then compute the results
      if (checkdata() == true) {
            //Obtaining values
            var principal = document.getElementById("principal").value;
            var rate = document.getElementById("rate").value;
            var years = document.getElementById("years").value;

            //Calculating the interest
            var interest = principal * years * rate / 100;

            //Obtaining the year
            var year = new Date().getFullYear() + parseInt(years);

            //Adding html and text to span result
            document.getElementById("result").innerHTML = "If you deposit \<mark>" + principal +
                  "\</mark>,\<br\>at an interest rate of \<mark>" + rate + "\</mark> %\<br\>You will receive an amount of \<mark>" +
                  interest + "\</mark>,\<br\>in the year \<mark>" + year + "\</mark> \<br\>"
      }
}

function updateRate() {
      var rateval = document.getElementById("rate").value;
      document.getElementById("rate_val").innerText = rateval;
}

function checkdata() {
      //Create references to the input elements we wish to validate
      var principal = document.getElementById("principal");

      //Validate principal field
      if (principal.value <= 0) {
            alert("Please enter a positive number");
            principal.focus();
            return false;
      }
      //If all is well return true.
      return true;
}