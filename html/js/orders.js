function paymentValidate() {
    let paymentMethod = document.querySelector('input[name="payment"]:checked');
    if (paymentMethod == null) {
        alert("Please select a payment method.");
        return false;
    }
    return true;
}


function orderConfirmed() {
    const form = document.getElementById("ordering");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Order confirmed, please check your email for the confirmation!");
    });
}

function orderConfirmed() {
    const form = document.getElementById("ordering1");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Order confirmed, please check your email for the confirmation!");
    });
}
