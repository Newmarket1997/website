function indexPage() {
  var index =
    '<body onresize="resizecheck()">' +
    '  <header id="header">' +
    '    <div class="logo-container">' +
    '      <img src="./img/icon.svg" alt="logo">' +
    '      <h4 class="logo">Orange</h4>' +
    '    </div>' +
    '    <nav>' +
    '      <ul class="nav-links">' +
    '        <li><a class="nav-link" href="index.html">Home</a></li>' +
    '        <li><a class="nav-link" href="products.html">Products</a></li>' +
    '        <li><a class="nav-link" href="accessories.html">Accessories</a></li>' +
    '        <li><a class="nav-link" href="contact.html">Contact</a></li>' +
    '      </ul>' +
    '    </nav>' +
    '    <div class="cart">' +
    '      <img src="./img/cart.svg" alt="cart" />' +
    '    </div>' +
    '    <div class="ham">' +
    '      <a id="hambut" onclick="mobilenav();"><img src="./img/hamburger.svg" alt="ham" /></a>' +
    '        <div class=cart2>' +
    '            <img src="./img/cart.svg" alt="cart2" />' +
    '        </div>' +
    '    </div>' +
    '    <div class ="mobileDiv">' +
    '      <ul id="mobileL">' +
    '        <img src="./img/icon.svg" alt="logo">' +
    '        <h4 class="logoMobile">Orange</h4>' +
    '        <li><a class="mobile-link" href="index.html">Home</a></li>' +
    '        <li><a class="mobile-link" href="products.html">Products</a></li>' +
    '        <li><a class="mobile-link" href="accessories.html">Accessories</a></li>' +
    '        <li><a class="mobile-link" href="contact.html">Contact</a></li>' +
    '        <li><a class="mobile-link" href="#">Cart</a></li>' +
    '      </ul>' +
    '    </div>' +
    '  </header>' +
    '  <main>' +
    '    <section class="presentation">' +
    '      <div class="introduction">' +
    '        <div class="intro-text">' +
    '          <h1>Facbook Pro 2020</h1>' +
    '          <p>' +
    '            The new 32 inch display oferring a 8k' +
    '            display' +
    '          </p>' +
    '        </div>' +
    '        <div class="cta">' +
    '          <button class="cta-select">14 Inch</button>' +
    '          <button class="cta-add">Add To Cart</button>' +
    '        </div>' +
    '      </div>' +
    '      <div class="cover">' +
    '        <img src="./img/macbook.png" alt="macbook" />' +
    '      </div>' +
    '    </section>' +
    '  </main>' +
    '  <div class="formTitle">' +
    '    <h4>Subscribe to our newsletter!</h4>' +
    '    <br>' +
    '  </div>' +
    '  <div class="form">' +
    '    <form action="https://getform.io/f/31b48fcc-a775-466d-8f77-b21e407b658e" method="POST">' +
    '      <label> Email <input type="text" name="_replyto" placeholder="bestsite@gmail.com">' +
    '      </label>' +
    '      <label for="fname">First Name</label>' +
    '      <input type="text" id="fname" name="firstname" placeholder="Jacky...">' +
    '      <label for="lname">Last Name</label>' +
    '      <input type="text" id="lname" name="lastname" placeholder="Chan...">' +
    '      <input type="submit" value="Submit">' +
    '    </form>' +
    '  </div>' +
    '  <footer>' +
    '' +
    '    <div class="copyright">' +
    '      <a>© 2020 Copyright orange.com</a>' +
    '    </div>' +
    '  </footer>' +
    '</body>';
  document.write(index);
}
function productPage() {
  var products =
    '<head>' +
    '  <meta charset="UTF-8" />' +
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0" />' +
    '  <link href="https://fonts.googleapis.com/css?family=Poppins:400,500&display=swap" rel="stylesheet" />' +
    '  <link rel="stylesheet" href="./style.css" />' +
    '    <link rel="stylesheet" href="./cards.css" />' +
    '  <link rel="shortcut icon" type="image/x-icon" href="img/icon.svg" />' +
    '  <title>Orange</title>' +
    '  </head>' +
    '  <body>' +
    '    <header id="header" class="header">' +
    '        <div class="logo-container">' +
    '            <img src="./img/icon.svg" alt="logo">' +
    '            <h4 class="logo">Orange</h4>' +
    '        </div>' +
    '        <nav>' +
    '            <ul class="nav-links">' +
    '                <li><a class="nav-link" href="index.html">Home</a></li>' +
    '                <li><a class="nav-link" href="products.html">Products</a></li>' +
    '                <li><a class="nav-link" href="accessories.html">Accessories</a></li>' +
    '                <li><a class="nav-link" href="contact.html">Contact</a></li>' +
    '            </ul>' +
    '        </nav>' +
    '        <div class="cart">' +
    '            <img src="./img/cart.svg" alt="cart" />' +
    '        </div>' +
    '    <div class="ham">' +
    '      <a id="hambut" onclick="mobilenav();"><img src="./img/hamburger.svg" alt="ham" /></a>' +
    '        <div class=cart2>' +
    '            <img src="./img/cart.svg" alt="cart2" />' +
    '        </div>' +
    '    </div>' +
    '    <div class ="mobileDiv">' +
    '      <ul id="mobileL">' +
    '        <img src="./img/icon.svg" alt="logo">' +
    '        <h4 class="logoMobile">Orange</h4>' +
    '        <li><a class="mobile-link" href="index.html">Home</a></li>' +
    '        <li><a class="mobile-link" href="products.html">Products</a></li>' +
    '        <li><a class="mobile-link" href="accessories.html">Accessories</a></li>' +
    '        <li><a class="mobile-link" href="contact.html">Contact</a></li>' +
    '        <li><a class="mobile-link" href="#">Cart</a></li>' +
    '      </ul>' +
    '    </div>' +
    '    </header>' +
    '    <main>' +
    '        <div class="Pbanner">' +
    '            <img src="img/productbanner.jpg" alt="Probanner" class="ProBan" style="width:100%;">' +
    '            <img src="img/productbannerPhone.jpg" alt="Phonbanner" class="phoneBan" style="width:100%;">' +
    '        </div>' +
    '        <div class="navcontainer">' +
    '            <div class="navbox">' +
    '                <ul class="navmenu">' +
    '                    <li><a class="navmenus" onclick="productDeleteLap();">Lowest Price</a></li>' +
    '                    <li><a class="navmenus" onclick="productDeleteHighLap();"">Highest Price</a></li>' +
    '                </ul>' +
    '            </div>' +
    '        </div>' +
    '<div id="productDelete">' +
    '        <div class="productContainer">' +
    '            <div class="card">' +
    '                <img src="img/macbook.png" alt="oBook" style="width:100%">' +
    '                <h1>Orangebook Pro 2020</h1>' +
    '                <p class="price">$1999</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '            <div class="card">' +
    '                <img src="img/airbook.png" alt="oBook" style="width:73%">' +
    '                <h1>Orangebook Air 2020</h1>' +
    '                <p class="price">$1699</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '            <div class="card">' +
    '                <img src="img/orangebooklite.png" alt="oBook" style="width:100%">' +
    '                <h1>Orangebook Lite 2020</h1>' +
    '                <p class="price">$1499</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '        </div>' +
    '        <div class="productContainer">' +
    '            <div class="card">' +
    '                <img src="img/macbook2014.png" alt="oBook" style="width:100%">' +
    '                <h1>Orangebook Pro 2014</h1>' +
    '                <p class="price">$1399</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '            <div class="card">' +
    '                <img src="img/macbook2013.png" alt="oBook" style="width:100%">' +
    '                <h1>Orangebook Pro 2013</h1>' +
    '                <p class="price">$1299</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '            <div class="card">' +
    '                <img src="img/macbooklite2012.png" alt="oBook" style="width:100%">' +
    '                <h1>Orangebook Lite 2012</h1>' +
    '                <p class="price">$899</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '        </div>' +
    '   </div>' +
    '    </main>' +
    '    <div class="formTitle">' +
    '        <h4>Subscribe to our newsletter!</h4>' +
    '    </div>' +
    '    <div class="form">' +
    '        <form action="https://getform.io/f/31b48fcc-a775-466d-8f77-b21e407b658e" method="POST">' +
    '            <label> Email <input type="text" name="_replyto" placeholder="bestsite@gmail.com">' +
    '            </label>' +
    '            <label for="fname">First Name</label>' +
    '            <input type="text" id="fname" name="firstname" placeholder="Jacky...">' +
    '            <label for="lname">Last Name</label>' +
    '            <input type="text" id="lname" name="lastname" placeholder="Chan...">' +
    '            <input type="submit" value="Submit">' +
    '        </form>' +
    '    </div>' +
    '    <footer>' +
    '        <div class="copyright">' +
    '            <a>© 2020 Copyright orange.com</a>' +
    '        </div>' +
    '    </footer>' +
    '</body>';
  document.write(products);
}
function productDeleteLap() {
  document.getElementById('productDelete').innerHTML = '';
  lowestPriceLap();
}
function productDeleteHighLap() {
  document.getElementById('productDelete').innerHTML = '';
  highestPriceLap();
}
function lowestPriceLap() {
  var lowPrice = '';
  document.getElementById('productDelete').innerHTML =
    '<div class="productContainer">' +
    '            <div class="card">' +
    '                <img src="img/macbooklite2012.png" alt="oBook" style="width:100%">' +
    '                <h1>Orangebook Lite 2012</h1>' +
    '                <p class="price">$899</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '            <div class="card">' +
    '                <img src="img/macbook2013.png" alt="oBook" style="width:100%">' +
    '                <h1>Orangebook Pro 2013</h1>' +
    '                <p class="price">$1299</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '            <div class="card">' +
    '                <img src="img/macbook2014.png" alt="oBook" style="width:100%">' +
    '                <h1>Orangebook Pro 2014</h1>' +
    '                <p class="price">$1399</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '        </div>' +
    '' +
    '        <div class="productContainer">' +
    '            <div class="card">' +
    '                <img src="img/orangebooklite.png" alt="oBook" style="width:100%">' +
    '                <h1>Orangebook Lite 2020</h1>' +
    '                <p class="price">$1499</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '            <div class="card">' +
    '                <img src="img/airbook.png" alt="oBook" style="width:73%">' +
    '                <h1>Orangebook Air 2020</h1>' +
    '                <p class="price">$1699</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '            <div class="card">' +
    '                <img src="img/macbook.png" alt="oBook" style="width:100%">' +
    '                <h1>Orangebook Pro 2020</h1>' +
    '                <p class="price">$1999</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '        </div>';
}

function highestPriceLap() {
  var highPrice = '';
  document.getElementById('productDelete').innerHTML =
    '<div class="productContainer">' +
    '            <div class="card">' +
    '                <img src="img/macbook.png" alt="oBook" style="width:100%">' +
    '                <h1>Orangebook Pro 2020</h1>' +
    '                <p class="price">$1999</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '            <div class="card">' +
    '                <img src="img/airbook.png" alt="oBook" style="width:73%">' +
    '                <h1>Orangebook Air 2020</h1>' +
    '                <p class="price">$1699</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '            <div class="card">' +
    '                <img src="img/orangebooklite.png" alt="oBook" style="width:100%">' +
    '                <h1>Orangebook Lite 2020</h1>' +
    '                <p class="price">$1499</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '        </div>' +
    '        <div class="productContainer">' +
    '            <div class="card">' +
    '                <img src="img/macbook2014.png" alt="oBook" style="width:100%">' +
    '                <h1>Orangebook Pro 2014</h1>' +
    '                <p class="price">$1399</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '            <div class="card">' +
    '                <img src="img/macbook2013.png" alt="oBook" style="width:100%">' +
    '                <h1>Orangebook Pro 2013</h1>' +
    '                <p class="price">$1299</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '            <div class="card">' +
    '                <img src="img/macbooklite2012.png" alt="oBook" style="width:100%">' +
    '                <h1>Orangebook Lite 2012</h1>' +
    '                <p class="price">$899</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '        </div>';
}

function accessPage() {
  var access =
    '<head>' +
    '  <meta charset="UTF-8" />' +
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0" />' +
    '  <meta http-equiv="X-UA-Compatible" content="ie=edge" />' +
    '  <link href="https://fonts.googleapis.com/css?family=Poppins:400,500&display=swap" rel="stylesheet" />' +
    '  <link rel="stylesheet" href="./style.css" />' +
    '    <link rel="stylesheet" href="./cards.css" />' +
    '  <link rel="shortcut icon" type="image/x-icon" href="img/icon.svg" />' +
    '  <title>Orange</title>' +
    '  </head>' +
    '  <body>' +
    '    <header id="header">' +
    '        <div class="logo-container">' +
    '            <img src="./img/icon.svg" alt="logo">' +
    '            <h4 class="logo">Orange</h4>' +
    '        </div>' +
    '        <nav>' +
    '            <ul class="nav-links">' +
    '                <li><a class="nav-link" href="index.html">Home</a></li>' +
    '                <li><a class="nav-link" href="products.html">Products</a></li>' +
    '                <li><a class="nav-link" href="#">Accessories</a></li>' +
    '                <li><a class="nav-link" href="contact.html">Contact</a></li>' +
    '            </ul>' +
    '        </nav>' +
    '        <div class="cart">' +
    '            <img src="./img/cart.svg" alt="cart" />' +
    '        </div>' +
    '    <div class="ham">' +
    '      <a id="hambut" onclick="mobilenav();"><img src="./img/hamburger.svg" alt="ham" /></a>' +
    '        <div class=cart2>' +
    '            <img src="./img/cart.svg" alt="cart2" />' +
    '        </div>' +
    '    </div>' +
    '    <div class ="mobileDiv">' +
    '      <ul id="mobileL">' +
    '        <img src="./img/icon.svg" alt="logo">' +
    '        <h4 class="logoMobile">Orange</h4>' +
    '        <li><a class="mobile-link" href="index.html">Home</a></li>' +
    '        <li><a class="mobile-link" href="products.html">Products</a></li>' +
    '        <li><a class="mobile-link" href="accessories.html">Accessories</a></li>' +
    '        <li><a class="mobile-link" href="contact.html">Contact</a></li>' +
    '        <li><a class="mobile-link" href="#">Cart</a></li>' +
    '      </ul>' +
    '    </div>' +
    '    </header>' +
    '    <main>' +
    '        <div class="navcontainer">' +
    '            <div class="navbox">' +
    '                <ul class="navmenu">' +
    '                    <li><a class="navmenus" onclick="productDelete();">Lowest Price</a></li>' +
    '                    <li><a class="navmenus" onclick="productDeleteHigh();"">Highest Price</a></li>' +
    '                </ul>' +
    '            </div>' +
    '        </div>' +
    '<div id="productDeleteAccess">' +
    '        <div class="productContainer">' +
    '            <div class="card">' +
    '                <img src="img/oPods.png" alt="oBook" style="width:100%">' +
    '                <h1>oPods Truely Wireless EarBuds</h1>' +
    '                <p class="price">$399</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '            <div class="card">' +
    '                <img src="img/keyboard.png" alt="oBook" style="width:100%">' +
    '                <h1>Orange Universial Keyboard</h1>' +
    '                <p class="price">$299</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '            <div class="card">' +
    '                <img src="img/orangeMouse.png" alt="oBook" style="width:100%">' +
    '                <h1>Orange Universal Mouse</h1>' +
    '                <p class="price">$199</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '        </div>' +
    '        <div class="productContainer">' +
    '            <div class="card">' +
    '                <img src="img/charger.png" alt="oBook" style="width:100%">' +
    '                <h1>Orangebook Universal Charger</h1>' +
    '                <p class="price">$189</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '            <div class="card">' +
    '                <img src="img/sleeve.png" alt="oBook" style="width:100%">' +
    '                <h1>Orangebook Universial Sleeve</h1>' +
    '                <p class="price">$150</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '            <div class="card">' +
    '                <img src="img/dongle.png" alt="oBook" style="width:100%">' +
    '                <h1>OrangeDong Universial dongle</h1>' +
    '                <p class="price">$99</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '        </div>' +
    '   </div>' +
    '' +
    '' +
    '    </main>' +
    '    <div class="formTitle">' +
    '        <h4>Subscribe to our newsletter!</h4>' +
    '    </div>' +
    '    <div class="form">' +
    '        <form action="https://getform.io/f/31b48fcc-a775-466d-8f77-b21e407b658e" method="POST">' +
    '            <label> Email <input type="text" name="_replyto" placeholder="bestsite@gmail.com">' +
    '            </label>' +
    '            <label for="fname">First Name</label>' +
    '            <input type="text" id="fname" name="firstname" placeholder="Jacky...">' +
    '            <label for="lname">Last Name</label>' +
    '            <input type="text" id="lname" name="lastname" placeholder="Chan...">' +
    '            <input type="submit" value="Submit">' +
    '        </form>' +
    '    </div>' +
    '    <footer>' +
    '        <div class="copyright">' +
    '            <a>© 2020 Copyright orange.com</a>' +
    '        </div>' +
    '    </footer>' +
    '</body>';
  document.write(access);
}
function productDelete() {
  document.getElementById('productDeleteAccess').innerHTML = '';
  lowestPriceAccess();
}
function productDeleteHigh() {
  document.getElementById('productDeleteAccess').innerHTML = '';
  highestPrice();
}
function lowestPriceAccess() {
  document.getElementById('productDeleteAccess').innerHTML =
    '<div class="productContainer">' +
    '            <div class="card">' +
    '                <img src="img/dongle.png" alt="oBook" style="width:100%">' +
    '                <h1>OrangeDong Universial dongle</h1>' +
    '                <p class="price">$99</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '            <div class="card">' +
    '                <img src="img/sleeve.png" alt="oBook" style="width:100%">' +
    '                <h1>Orangebook Universial Sleeve</h1>' +
    '                <p class="price">$150</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '            <div class="card">' +
    '                <img src="img/charger.png" alt="oBook" style="width:100%">' +
    '                <h1>Orangebook Universal Charger</h1>' +
    '                <p class="price">$189</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '        </div>' +
    '        <div class="productContainer">' +
    '            <div class="card">' +
    '                <img src="img/oPods.png" alt="oBook" style="width:100%">' +
    '                <h1>oPods Truely Wireless EarBuds</h1>' +
    '                <p class="price">$399</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '            <div class="card">' +
    '                <img src="img/keyboard.png" alt="oBook" style="width:100%">' +
    '                <h1>Orange Universial Keyboard</h1>' +
    '                <p class="price">$299</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '            <div class="card">' +
    '                <img src="img/orangeMouse.png" alt="oBook" style="width:100%">' +
    '                <h1>Orange Universal Mouse</h1>' +
    '                <p class="price">$199</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '        </div>';
}
function highestPrice() {
  document.getElementById('productDeleteAccess').innerHTML =
    '<div class="productContainer">' +
    '            <div class="card">' +
    '                <img src="img/oPods.png" alt="oBook" style="width:100%">' +
    '                <h1>oPods Truely Wireless EarBuds</h1>' +
    '                <p class="price">$399</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '            <div class="card">' +
    '                <img src="img/keyboard.png" alt="oBook" style="width:100%">' +
    '                <h1>Orange Universial Keyboard</h1>' +
    '                <p class="price">$299</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '            <div class="card">' +
    '                <img src="img/orangeMouse.png" alt="oBook" style="width:100%">' +
    '                <h1>Orange Universal Mouse</h1>' +
    '                <p class="price">$199</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '        </div>' +
    '        <div class="productContainer">' +
    '            <div class="card">' +
    '                <img src="img/charger.png" alt="oBook" style="width:100%">' +
    '                <h1>Orangebook Universal Charger</h1>' +
    '                <p class="price">$189</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '            <div class="card">' +
    '                <img src="img/sleeve.png" alt="oBook" style="width:100%">' +
    '                <h1>Orangebook Universial Sleeve</h1>' +
    '                <p class="price">$150</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>' +
    '            <div class="card">' +
    '                <img src="img/dongle.png" alt="oBook" style="width:100%">' +
    '                <h1>OrangeDong Universial dongle</h1>' +
    '                <p class="price">$99</p>' +
    '                <p><button>Add to Cart</button></p>' +
    '            </div>';
}

function contactPage() {
  var contact =
    '<head>' +
    '  <meta charset="UTF-8" />' +
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0" />' +
    '  <link href="https://fonts.googleapis.com/css?family=Poppins:400,500&display=swap" rel="stylesheet" />' +
    '  <link rel="stylesheet" href="./style.css" />' +
    '    <link rel="stylesheet" href="./cards.css" />' +
    '  <link rel="shortcut icon" type="image/x-icon" href="img/icon.svg" />' +
    '  <title>Orange</title>' +
    '  </head>' +
    '  <body>' +
    '    <header id="header">' +
    '        <div class="logo-container">' +
    '            <img src="./img/icon.svg" alt="logo">' +
    '            <h4 class="logo">Orange</h4>' +
    '        </div>' +
    '        <nav>' +
    '            <ul class="nav-links">' +
    '                <li><a class="nav-link" href="index.html">Home</a></li>' +
    '                <li><a class="nav-link" href="products.html">Products</a></li>' +
    '                <li><a class="nav-link" href="accessories.html">Accessories</a></li>' +
    '                <li><a class="nav-link" href="#">Contact</a></li>' +
    '            </ul>' +
    '        </nav>' +
    '        <div class="cart">' +
    '            <img src="./img/cart.svg" alt="cart" />' +
    '        </div>' +
    '    <div class="ham">' +
    '      <a id="hambut" onclick="mobilenav();"><img src="./img/hamburger.svg" alt="ham" /></a>' +
    '        <div class=cart2>' +
    '            <img src="./img/cart.svg" alt="cart2" />' +
    '        </div>' +
    '    </div>' +
    '    <div class ="mobileDiv">' +
    '      <ul id="mobileL">' +
    '        <img src="./img/icon.svg" alt="logo">' +
    '        <h4 class="logoMobile">Orange</h4>' +
    '        <li><a class="mobile-link" href="index.html">Home</a></li>' +
    '        <li><a class="mobile-link" href="products.html">Products</a></li>' +
    '        <li><a class="mobile-link" href="accessories.html">Accessories</a></li>' +
    '        <li><a class="mobile-link" href="contact.html">Contact</a></li>' +
    '        <li><a class="mobile-link" href="#">Cart</a></li>' +
    '      </ul>' +
    '    </div>' +
    '    </header>' +
    '    <div class="formTitle2">' +
    '        <h4>Contact Us!</h4>' +
    '    </div>' +
    '    <div class="form">' +
    '        <form action="http://httpbin.org/post" method="POST">' +
    '            <label> Email <input type="email" name="_replyto" placeholder="bestsite@gmail.com" required>' +
    '            </label>' +
    '            <label for="fname">First Name</label>' +
    '            <input type="text" id="fname" name="firstname" placeholder="Jacky..." required>' +
    '            <label for="lname">Last Name</label>' +
    '            <input type="text" id="lname" name="lastname" placeholder="Chan...">' +
    '            <label for="city">City</label>' +
    '            <input type="text" id="city" name="city" list="suggestions" placeholder="Newmarket.." />' +
    '            <datalist id="suggestions">' +
    '            <option label="Barrie" value="Barrie"></option>' +
    '            <option label="Calgary" value="Calgary"></option>' +
    '            <option label="Charlottetown" value="Charlottetown"></option>' +
    '            <option label="Chibougamau" value="Chibougamau"></option>' +
    '            <option label="Chilliwack" value="Chilliwack"></option>' +
    '            <option label="Cold Lake" value="Cold Lake"></option>' +
    '            <option label="Dorval" value="Dorval"></option>' +
    '            <option label="Edmonton" value="Edmonton"></option>' +
    '            <option label="Flin Flon" value="Flin Flon"></option>' +
    '            <option label="Hamilton" value="Hamilton"></option>' +
    '            <option label="Iqualuit" value="Iqualuit"></option>' +
    '            <option label="Ottawa" value="Ottawa"></option>' +
    '            <option label="Miramichi" value="Miramichi"></option>' +
    '            <option label="Montreal" value="Montreal"></option>' +
    '            <option label="Red Deer" value="Red Deer"></option>' +
    '            <option label="St. John" value="St. John"></option>' +
    '            <option label="St. John\'s" value="St. John\'s"></option>' +
    '            <option label="Toronto" value="Toronto"></option>' +
    '            <option label="Vancouver" value="Vancouver"></option>' +
    '            <option label="Whitehorse" value="Whitehorse"></option>' +
    '            <option label="Winnipeg" value="Winnipeg"></option>' +
    '            <option label="Yellowknife" value="Yellowknife"></option>' +
    '            </datalist>' +
    '            <label for="Postal">Postal Code</label>' +
    '            <input type="zip" name"zip" type="text" pattern="[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]" placeholder="M2J 2X5" title="Postal Code Format: M2J 2X5 NO SPACE AFTER" required>' +
    '            <label for="Phone">Phone Number</label>' +
    '            <input type="tel" pattern="[0-9]{3}[-][0-9]{3}[-][0-9]{4}" title="Phone Number Format: 123-456-7890" placeholder="123-456-7890" required>' +
    '            <label for="check">Would you like to be phoned?</label>' +
    '             <input type="checkbox" id="phoneYes" class="checkboxBig" name="phone" value="yes"><br>' +
    '            <label for="check">What is this about?</label>' +
    '            <br> <label for="question"> Question? </label>' +
    '             <input type="radio" id="question" name="about" class="radioBig" value="question"onclick="radioChecker()">' +
    '             <label for="problem"> Problem? </label>' +
    '             <input type="radio" id="problem" name="about" class="radioBig" value="problem" onclick="radioChecker()">' +
    '             <br><label for="Order"> Order Problem? </label>' +
    '             <input type="radio" id="Order" name="about" class="radioBig" value="order" onclick="radioChecker()"><br>' +
    '              <div class="orderProblem" id="orderProblem">' +
    '             <label for="aboutOrder" class="orderProblemText">What is the problem with your order?</label>' +
    '             <textarea name="aboutOrder" rows="10" cols="30">...</textarea>' +
    '             </div>' +
    '             <input type="submit" value="Submit">' +
    '        </form>' +
    '    </div>' +
    '    <footer>' +
    '        <div class="copyright">' +
    '            <a>© 2020 Copyright orange.com</a>' +
    '        </div>' +
    '    </footer>' +
    '</body>';
  document.write(contact);
}

function radioChecker() {
  var checkBox = document.getElementById('Order');
  var orderProblem = document.getElementById('orderProblem');
  if (checkBox.checked === true) {
    orderProblem.style.display = 'block';
  } else {
    orderProblem.style.display = 'none';
  }
}
function mobilenav() {
  var x = document.getElementById("mobileL");
  var y = document.getElementById("header");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.height = "10vh"
  }
  else {
    x.style.display = "block";
    y.style.height = "60vh"
  }
}

var mql = window.matchMedia('(min-width: 701px)');

function resizeHeader(size) {
  var x = document.getElementById("mobileL");
  var y = document.getElementById("header");
  if (size.matches) {
    x.style.display = "none";
    y.style.height = "10vh"
  }
}

mql.addListener(resizeHeader)