fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        console.log(data)
        // let tableData = document.getElementById("table_body")
        cardData = "";
        data.map((value) => {
            cardData += ` <img src="${value.image}" alt="Avatar" style="width:50px">
            <div class="container">
                <h4>${value.price}</h4>
                <p>${value.category}</p>
                <p>${value.title}</p>
                <p>${value.description}</p>`
        });
        document.getElementById("card-items").innerHTML = cardData;
    })

