window.onload = function() {
  orderConfirmed1();
  orderConfirmed2();

  var form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();  
    paymentValidate();
  });

  function paymentValidate() {
      let paymentMethod = document.querySelector('input[name="payment"]:checked');
      if (paymentMethod == null) {
          alert("Please select a payment method.");
          return false;
      }
      alert("You have successfully chosen your payment method! Please continue filling out the form to complete your order!")
      return true;
  }

  function orderConfirmed1() {
      const form = document.getElementById("ordering");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Order confirmed, please check your email for the confirmation!");
      });
  }

  function orderConfirmed2() {
      const form = document.getElementById("ordering1");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Order confirmed, please check your email for the confirmation!");
      });
  }

  
    function changingtoYellow() {
      ordering.style.color = "yellow";
    }
  
    function changingtoBlack() {
      ordering.style.color = "black";
    }

    function validatePhoneNumber(phnum) {
      var regex = /^\\d{10}$/;
      if (regex.test(phnum)) {
        return true;
      } else {
        alert('Please enter a valid 10-digit phone number with no spaces, commas, or punctuation.');
        return false;
      }
    }

    var visualImpaired = document.querySelectorAll("#accessibility, #accessibility1, #accessibility2, #accessibility3, #accessibility4, #accessibility5, #accessibility6, #accessibility7, #accessibility8");

    for (var i = 0; i < visualImpaired.length; i++) {
      visualImpaired[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = "cyan";
      });
      visualImpaired[i].addEventListener("mouseout", function() {
        this.style.backgroundColor = "none";
      });
    }

    function changingtoVI() {
      ordering.style.color = "green";
    }
  
    function changingtoNorm() {
      ordering.style.color = "black";
    }

    ordering.addEventListener("mouseover", changingtoVI);
    ordering.addEventListener("mouseout", changingtoNorm);
    visualImpaired.addEventListener("mouseover", accessibilityHighlightRed);
    visualImpaired.addEventListener("mouseout", accessibiltyHighlightNorm);
  

  orderConfirmed1();
  orderConfirmed2();
  accessibility();
  validatePhoneNumber(phnum);
}
