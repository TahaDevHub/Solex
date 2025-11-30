// Number of Products in Collection
                var productsdiv=document.querySelector(".productsdiv");
                var cards=Array.from(productsdiv.children);
                var numofproducts=cards.length;
                var pnumofproducts=document.getElementById("pnumofproducts");
                pnumofproducts.innerText=numofproducts+" Products";

                
// Change Image for specific color
const colorBtn=document.querySelectorAll(".color button"); //all means all like if without all then it will only select the very first one matching the requiredment but with all it create a nodelist (ARRAY) then you can use as forEach
                colorBtn.forEach( button=>{
                    button.addEventListener("click",e=>{
                        e.stopPropagation(); // Stop event from reaching the <a> link
                        e.preventDefault();  // Extra safety: do not open the link like prevent the default work of button
                        //Find the card where click happened
                        const card=e.target.closest(".card");
                        //Get the card image inside that card
                        const cardImg=card.querySelector(".card_img img");
                        //get the path of the clicked img
                        const newImg=button.querySelector("img").src;
                        //Change the path of that image
                        cardImg.src=newImg;
                    })
                })