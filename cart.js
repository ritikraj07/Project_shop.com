
  var ProductInCart = JSON.parse(localStorage.getItem('cart'))||[]
    display(ProductInCart)
    function display(DATA){
        var total_price = 0
        document.querySelector('#pro_appender').innerHTML=null;
        DATA.map(function(element, index){
            var product_ = document.createElement('div')
            product_.setAttribute('id', 'Product_');

            var div1 = document.createElement('div');
            var image = document.createElement('img');
            image.setAttribute("src",element.image)
            image.setAttribute("alt",element.name);
            div1.append(image);

            var div2 = document.createElement('div');
            var name = document.createElement('h1')
            name.innerText=element.name
            var price = document.createElement('h1')
            var prc = ''
        
            for(var i =1; i<element.price.length; i++){
                prc+=element.price[i];
            }
            Number(prc)
            
            var final_price_each = prc * Number(element.quantity)
            price.innerText="$"+ final_price_each;
            total_price+=final_price_each;
            var p1 = document.createElement('span')
            p1.innerHTML='<span><p>+ $0.3 <img class="mid_p" src="https://img.shop.com/Image/resources/images/cashback-icon.svg" alt=""> caseback</p></span>'

            var item = document.createElement('p')
            item.innerText= "Item: "+element.type;
            var color = document.createElement('p')
            color.innerText="Color: "+ element.color
            var size = document.createElement('p')
            size.innerText="Size: " + element.size

            var quantity = document.createElement('Select')
            
            quantity.setAttribute('id', 'quantity_')
            var opt1 = document.createElement('option')
            opt1.innerText=1;
            opt1.setAttribute('value', 1)

            var opt2 = document.createElement('option')
            opt2.innerText=2;
            opt2.setAttribute('value', 2)
            var opt3 = document.createElement('option')
            opt3.innerText=3;
            opt3.setAttribute('value', 3)
            var opt4 = document.createElement('option')
            opt4.innerText=4;
            opt4.setAttribute('value', 4)
            var opt5 = document.createElement('option')
            opt5.innerText=5;
            opt5.setAttribute('value', 5)
            var opt6 = document.createElement('option')
            opt6.innerText=6;
            opt6.setAttribute('value', 6)
            var opt7 = document.createElement('option')
            opt7.innerText=7;
            opt7.setAttribute('value', 7)
            var opt8 = document.createElement('option')
            opt8.innerText=8;
            opt8.setAttribute('value',8)
            var opt9 = document.createElement('option')
            opt9.innerText=9;
            opt9.setAttribute('value', 9)
            var opt10 = document.createElement('option')
            opt10.innerText=10;
            opt10.setAttribute('value', 10)
            quantity.append(opt1, opt2, opt3, opt4, opt5, opt6, opt7, opt8, opt9, opt10)

            var div3 = document.createElement('div');
            div3.innerText='Quantity'
            div3.append(quantity)
            quantity.addEventListener('change', function(){
              var qun = document.querySelector('#quantity_').value
              console.log(qun)
              ProductInCart[index].quantity=qun
              localStorage.setItem('cart', JSON.stringify(ProductInCart))
              display(ProductInCart)
            })

            div2.append(name, price, p1, item, color, size, div3)


            var div4 = document.createElement('div');
            var s4l = document.createElement('button')
            s4l.innerText='Save for Later'
            div4.append(s4l)

            var div5 =document.createElement('div')
            var removebtn = document.createElement('button')
            removebtn.innerText='Remove';
            removebtn.addEventListener('click', function(){
              remove_from_cart(index)
            })
            div5.append(removebtn)
            product_.append(div1, div2, div4, div5)
            var barrr = document.createElement('hr')

            document.getElementById('pro_appender').append(product_, barrr)

        })
        document.getElementById('price').innerText='$ ' + total_price.toFixed(2);
        var total = total_price.toFixed(2)
        localStorage.setItem('totalPrice', total)
        // console.log(total)
    }
    
  function remove_from_cart(index){
    ProductInCart.splice(index, 1)
    localStorage.setItem('cart',JSON.stringify(ProductInCart))
    display(ProductInCart)
  }    

