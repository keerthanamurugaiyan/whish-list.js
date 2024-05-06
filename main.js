const wishlistItems = [];
function updateWishlist() {
    const wishlistElement = document.getElementById('wishlist');
    wishlistElement.innerHTML = '';
    wishlistItems.forEach((item,i)=> {
        wishlistElement.innerHTML += `<li><span><i class='bx bx-chevrons-right mt-2 fs-4'></i></span>${item} <button class="btn btn-danger mt-1 ms-3" onclick="removeFunction('${i}')"><i class="fa-solid fa-x text-white"></i></button></li>`;
    });
}
function addFunction(productName) {
    wishlistItems.push(productName);
    updateWishlist();
}
function removeFunction(i){
        wishlistItems.splice(i, 1);
        updateWishlist();
};