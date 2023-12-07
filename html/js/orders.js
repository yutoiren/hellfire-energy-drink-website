function paymentValidate() {
    let paymentMethod = document.querySelector('input[name="payment"]:checked');
    if (paymentMethod == null) {
        alert("Please select a payment method.");
        return false;
    }
    return true;
}
