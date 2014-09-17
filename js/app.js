angular.module('DemoAppRate', [
  'DemoAppRate.services',
  'DemoAppRate.controllers',
  'ngRoute',
  //'ngCookies',
  //'ngStorage'
  
]).
config(['$routeProvider', function($routeProvider) {
  // $routeProvider.
  // when("/search/:id", {templateUrl: "/angularapp/app/partials/search.html", controller: "searchController"}).
  // when("/wishlist", {templateUrl: "/angularapp/app/partials/wishlist.html", controller: "wishlistController",
  //         resolve : {load: checkLogin}}).
  // when("/login", {templateUrl: "/angularapp/app/partials/login.html", controller: "loginController"}).
  // when("/login/:id", {templateUrl: "/angularapp/app/partials/login.html", controller: "loginController"}).
  // when("/product_detail/:id", {templateUrl: "/angularapp/app/partials/product_detail.html", controller: "productDetailController"}).
  // when("/cart", {templateUrl: "/angularapp/app/partials/cart.html", controller: "cartController"}).
  // when("/cart/:id", {templateUrl: "/angularapp/app/partials/cart.html", controller: "cartController"}).
  // when("/register", {templateUrl: "/angularapp/app/partials/register.html", controller: "registerController"}).
  // when("/forgotPassword", {templateUrl: "/angularapp/app/partials/forgot_password.html", controller: "forgotPasswordController"}).
  // when("/shipping_address", {templateUrl: "/angularapp/app/partials/shipping_address.html", controller: "shippingAddressController"}).
  // when("/add_shipping_address", {templateUrl: "/angularapp/app/partials/add_shipping_address.html", controller: "addShippingAddressController"}).
  // when("/credit_cards", {templateUrl: "/angularapp/app/partials/credit_cards.html", controller: "creditCardController"}).
  // when("/add_credit_card", {templateUrl: "/angularapp/app/partials/add_credit_card.html", controller: "addCreditCardController"}).
  // when("/add_credit_card/:id", {templateUrl: "/angularapp/app/partials/add_credit_card.html", controller: "addCreditCardController"}).
  // when("/place_order", {templateUrl: "/angularapp/app/partials/place_order.html", controller: "placeOrderController"}).
  // when("/add_shipping_address/:id", {templateUrl: "/angularapp/app/partials/add_shipping_address.html", controller: "addShippingAddressController"}).
  // when("/thank_you/:order_number/:email", {templateUrl: "/angularapp/app/partials/thankyou.html", controller: "thankyouController"}).
  // when("/password", {templateUrl: "/angularapp/app/partials/Password.html", controller: "passwordController"}).
  // otherwise({redirectTo: '/'});
}])

