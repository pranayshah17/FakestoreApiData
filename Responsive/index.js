fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        console.log(data)
        // let tableData = document.getElementById("table_body")
        cardData = "";
        data.map((value) => {
            cardData += `<div class="card">
             <img src="${value.image}" alt="Avatar" style="width:60px;">
            <h2>${value.title}</h2>
                <h4>${value.category}</h4>
                <p>${value.price}</p>
                <p><button>Add to Cart</button></p>
                </div>`
        });
        document.getElementById("card-items").innerHTML = cardData;
    })
