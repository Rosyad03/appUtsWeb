document.addEventListener("DOMContentLoaded", function() {
    const orderButtons = document.querySelectorAll(".order-button");
    const orderList = document.getElementById("order-list");
    const totalPriceElement = document.getElementById("total-price");
    let totalPrice = 0;

    orderButtons.forEach(button => {
        button.addEventListener("click", function() {
            const item = this.parentElement;
            const itemName = item.querySelector("h3").textContent;
            const itemPrice = item.querySelector(".price").textContent;
            const price = parseInt(itemPrice.replace(/\D/g, ""));
            totalPrice += price;
            orderList.innerHTML += `<li>${itemName} - ${itemPrice}</li>`;
            totalPriceElement.textContent = `Rp ${totalPrice}`;
        });
    });

    const checkoutButton = document.querySelector(".checkout-button");
    checkoutButton.addEventListener("click", function() {
        alert(`Total pembelian Anda adalah Rp ${totalPrice}`);
        // Here you can add further actions like sending the order to a server
    });
});
