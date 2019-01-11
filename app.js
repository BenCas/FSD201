
var Cart = {
  name: "Your Cart",
  comics: [],
}
 function addComic(title, price){
   console.log("addComic", title, price);
    this.title=title;
    this.price=price;

    var qty=1;

    var elem = '<tr><td>' + title + '</td><td>' + price + '</td></tr>'
    document.getElementById('cart').innerHTML += elem;
    

 total +=(price * qty)

    // update the total the use have to pay
document.getElementById("total").value= total;
  }
  


