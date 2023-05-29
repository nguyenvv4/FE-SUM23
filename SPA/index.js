window.nhanVienController = function ($scope, $http) {
  $scope.listNhanVien = [];
  $http.get("http://localhost:3000/nhanVien").then(function (response) {
    $scope.listNhanVien = response.data;
  });
};
window.gioiThieu = function ($scope, $http) {
  $scope.gioiThieu = "Day la trang giosi thieu";
};
