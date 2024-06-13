// Function to generate random price in Indian currency
function generateRandomPrice() {
    // Generate random price between 100 and 10000
    var price = Math.floor(Math.random() * 9901) + 100;
    // Format the price with Indian currency symbol (₹) and commas
    return "₹" + price.toLocaleString();
}

// Function to open different pages
function openPage(pageName) {
    var mainContent = document.getElementById("main-content");
    // Load different pages based on the selected option
    switch (pageName) {
        case 'home':
            mainContent.innerHTML = "<section class='hero'><h1>Welcome to MYCart</h1><p>Your one-stop shop for all things bright and beautiful!</p><a href='#' class='btn'>Shop Now</a></section>";
            break;
        case 'shop':
            mainContent.innerHTML = "<section class='products'><h2>Shop</h2><div class='product'><img src='images/product1.jpg' alt='Product 1'><h3>keyboard</h3><p>Zebronics keyboard QWERT keyboard ,felxibleto use wired non-disposable keyboard.</p><p>Price: " + generateRandomPrice() + "</p></div><div class='product'><img src='images/product2.jpg' alt='Product 2'><h3>Watch</h3><p>Experience timeless elegance with the Samel watch collection. Crafted with precision and style, these watches blend sophistication with functionality. Elevate your everyday look with Samel's signature timepieces.</p><p>Price: " + generateRandomPrice() + "</p></div><div class='product'><img src='images/product3.jpg' alt='Product 3'><h3>ASUS laptop</h3><p>ASUS Zenbook(DOU UX840056)14 Full HD ,touchscreen and altra ARC grapics</p><p>Price: " + generateRandomPrice() + "</p></div><div class='product'><img src='images/product4.jpg' alt='Product 4'><h3>SAMSUNG phone</h3><p>GALAXY S23pro /12GB ROM/512GM RAM/Nano supported</p><p>Price: " + generateRandomPrice() + "</p></div><div class='product'><img src='images/product5.jpg' alt='Product 5'><h3>EARBUDS</h3><p>BOAT earbuds ,noice modulation with high resolution .</p><p>Price: " + generateRandomPrice() + "</p></div><div class='product'><img src='images/product6.jpg' alt='Product 6'><h3DELL LAPTOP</h3><p>DELL 8GB /512GB /i5 to use</p><p>Price: " + generateRandomPrice() + "</p></div><div class='product'><img src='images/product7.jpg' alt='Product 7'><h3>MSI gaming laptop</h3><p>MSI gaming laptop with i5/16GB/1024GB/graphic card </p><p>Price: " + generateRandomPrice() + "</p></div><div class='product'><img src='images/product8.jpg' alt='Product 8'><h3>DIGITAL Watch</h3><p>Simple watch with the stylish belt ,can listien music,use for the running tracker.</p><p>Price: " + generateRandomPrice() + "</p></div><div class='product'><img src='images/product9.jpg' alt='Product 9'><h3>NOICE earbuds</h3><p>noice buds are HD sound with high resolution.</p><p>Price: " + generateRandomPrice() + "</p></div><div class='product'><img src='images/product10.jpg' alt='Product 10'><h3>MSI C14</h3><p>MSI 14 /8GB/512GB/14 inch/felxible to use backlight and HDMI</p><p>Price: " + generateRandomPrice() + "</p></div><div class='product'><img src='images/product11.jpg' alt='Product 11'><h3>REALME phone</h3><p>REALME pro 16GBRAM/512GBROM/dual SIM/External camera/</p><p>Price: " + generateRandomPrice() + "</p></div><div class='product'><img src='images/product12.jpg' alt='Product 12'><h3>MINI ipad</h3><p>JBL sound mini ipad HD quality sound ,easy to carry and chraged box</p><p>Price: " + generateRandomPrice() + "</p></div><div class='product'><img src='images/product13.jpg' alt='Product 13'><h3>desktop system</h3><p>Zebronics Computer with desktop/mouse/keyboard/monitor/CPU.</p><p>Price: " + generateRandomPrice() + "</p></div><div class='product'><img src='images/product14.jpg' alt='Product 14'><h3>CPU</h3><p>DELL CPU harddisk is with the high capacity storage ,its easy to use and best quality.</p><p>Price: " + generateRandomPrice() + "</p></div><div class='product'><img src='images/product15.jpg' alt='Product 15'><h3>DELL desktop system</h3><p>DELL product with CPU/monitor/keyboard/mouse/Externalspeakers.</p><p>Price: " + generateRandomPrice() + "</p></div></section>";
            break;
        case 'about':
            mainContent.innerHTML = "<section class='about'><h2>About Us</h2><p>Your ultimate tech destination. Explore the latest gadgets with ease. Elevate your tech experience today!Where innovation meets convenience. Discover curated tech products tailored to your needs. Shop securely and stay ahead in the tech game.</p></section>";
            break;
        case 'contact':
            mainContent.innerHTML = "<section class='contact'><h2>Contact Us</h2><p>Get in touch with us for any inquiries.<p> MYCart is the best store to buy the electronic devices with the best quality products</p><P> MYCart company<br></p><p>Warangal,Hanumakonda, 500061</P> <P></p></section>";
            break;
        default:
            mainContent.innerHTML = "<section class='hero'><h1>Welcome to  MYCart</h1><p>Your one-stop shop for all things bright and beautiful!</p><a href='#' class='btn'>Shop Now</a></section>";
    }
}

function toggleMenu() {
    var nav = document.getElementById("main-nav");
    nav.classList.toggle("active");
}
