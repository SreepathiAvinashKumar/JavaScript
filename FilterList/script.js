const container = document.getElementById('container');
const itemContainer = document.getElementById('item-container');
const imageContainer = document.getElementById('image-container');
const itemDetails = document.getElementById('item-details')


let ProductList = [...products];



function displayProducts(){
    if(ProductList.length<1){
        container.innerHTML =  '<h2>No Items Left In the Website</h2>'
        return;
    }
        container.innerHTML = ProductList.map((product)=>{
            const {id,title,image,price} = product;
            return `<article class="product" data-id="${id}">
          <img
           width="300px" height="300px" src="${image}"
            class="product-img img"
            alt=""
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <p class="product-price">${price}</p>
          </footer>
        </article>`;
        }).join('')
};
displayProducts();


//filter 
const form = document.getElementById('search-form');
const inputbox = document.getElementById('filtertext');
form.addEventListener('keyup',()=>{

    const Inputvalue  = inputbox.value;
   ProductList = products.filter((product) => {
    return product.title.toLowerCase().includes(Inputvalue);
   })
 
displayProducts();
})
