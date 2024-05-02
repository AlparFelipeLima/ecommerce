const app = angular.module('ecommerce-app', [])
app.controller('HomeController', ($scope, $http) => {
    $scope.products = []

    $scope.getProducts = () => {
        const token = localStorage.getItem('token')

        $http.get('http://localhost:3333/api/products', {
            headers: {
                'Authorization': 'Bearer ' + token + 'sdf'
            }
        }).then((response) => {
            $scope.products = response.data;
        })
    }

    $scope.logout = () => {
        localStorage.removeItem('token')
        location.href = '/login.html'
    }

    $scope.verifyLogin = () => {
        const token = localStorage.getItem('token')

        if (!token) {
            location.href = "/login.html"
        }
    }

    $scope.verifyLogin()
    $scope.getProducts()
})