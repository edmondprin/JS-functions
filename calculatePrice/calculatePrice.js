let good1;
let good2;
let good3;

function calculatePrice() {
    good1 = parseFloat(document.getElementById("good1").value); 
    good2 = parseFloat(document.getElementById("good2").value); 
    good3 = parseFloat(document.getElementById("good3").value); 

    let totalPrice = good1 + good2 + good3;

    document.getElementById("resultPrice").innerText = `The total amount is $ ${totalPrice}`;
}

