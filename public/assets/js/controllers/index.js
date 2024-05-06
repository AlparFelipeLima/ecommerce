app.controller('HomeController', ($scope, $http, AdminService, SessionService) => {
    $scope.products = []

    $scope.getProducts = () => {
        const token = localStorage.getItem('token')

        $http.get('http://localhost:3333/api/products').then((response) => {
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

    $scope.isAdmin = AdminService.isAdmin();
    $scope.isAuthenticated = SessionService.isAuthenticated()
    $scope.getProducts()
})