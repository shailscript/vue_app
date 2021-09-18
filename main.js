var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'We\'ll see awesome socks here, in a bit. I\'d update the description once the product arrives!',
        image: 'vmSocks-green-onWhite.jpg',
        inventory : 100,
        onSale: true,
        details: ["80% cotton", "breathable", "bright colors"],
        variants: [
            {
                variantId: 1,
                variantColor: 'green'
            },
            {
                variantId: 2,
                variantColor: 'blue' 
            }
        ],
        cart: 0
    },
    methods: {
        addToCart: function() {
            this.cart +=1;
        }
    }
    
});

var footer = new Vue({
    el: '#footer',
    data: {
        link: 'https:\\github.com\shailscript'
    }
})
