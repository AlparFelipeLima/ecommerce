app.controller('CartController', ($scope, $http, SessionService, AdminService) => {
    $scope.items = []

    function getCart() {
        $http.get('http://localhost:3333/api/carts', {
            headers: {
                authorization: `Bearer ${SessionService.getToken()}`
            }
        }).then((response) => {
            $scope.items = response.data.items;
        })
    }

    $scope.onQuantityChange = (id) => {
        const item = $scope.items.find(item => item.id === id)

        item.quantity = String(item.quantity).replace(/\D/g, '').trim()

        item.quantity = Number(item.quantity || '0')

        item.quantity = item.quantity < 1 ? 1 : item.quantity;

        $scope.total = $scope.items.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    }

    $scope.increase = (id) => {
        const item = $scope.items.find(item => item.id === id)
        item.quantity++
        $scope.onQuantityChange(id)
    }
    $scope.decrease = (id) => {
        const item = $scope.items.find(item => item.id === id)
        item.quantity--
        $scope.onQuantityChange(id)
    }

    getCart()
    $scope.total = $scope.items.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
})