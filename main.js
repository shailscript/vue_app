var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'We\'ll see awesome socks here, in a bit. I\'d update the description once the product arrives!',
        image: 'vmSocks-green-onWhite.jpg',
        inStock: true
    }
});

var footer = new Vue({
    el: '#footer',
    data: {
        link: 'https:\\github.com\shailshukla96'
    }
})