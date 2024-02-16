const colorArr = ['yellow', 'green', 'blue','pink'];
document.getElementById('colors').innerHTML = colorArr.map(color => 
											`<label class="custom-radio">
												<input type="radio" name="radio" value=${color} checked>
												<span class="checkmark" style='background-color:${color}'></span>
											</label>`).join('');										
const sizeArr = ['Small', 'Medium', 'Large','Extra Large','XXL'];
document.getElementById('size').innerHTML = sizeArr.map( size => <div class="rBtn"><input type="radio" id=${size} name="size" value=${size} checked><label for=${size}>${size}</label></div>).join('');
function increaseQuantity() {
    const quantityElement = document.getElementById('quantity');
    let quantity = parseInt(quantityElement.value);
    quantity++;
    quantityElement.value = quantity.toString();
}

function decreaseQuantity() {
    const quantityElement = document.getElementById('quantity');
    let quantity = parseInt(quantityElement.value);
    if (quantity > 1) { 
        quantity--;
        quantityElement.value = quantity.toString();
    }
}
const radioButtons = document.querySelectorAll('input[type="radio"]');
let color = null;
let size = null;
radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('change', function() {
        color = document.querySelector('input[name="radio"]:checked').value;
        size = document.querySelector('input[name="size"]:checked').value;
    });
});
const addingCart = document.getElementById('addingInCart');
const cartButton = document.querySelector('.cartButton');
cartButton.addEventListener("click" , function(e){
	// console.log(color+" "+size);
	if(color!==null && size!==null) {
		addingCart.classList.remove("hide");
		addingCart.classList.add("show");
		addingCart.innerText = Embrace Sideboard with color ${color} and Size ${size} added to cart;}
});