window.nhanVienController = function ($scope, $http) {
  $scope.listNhanVien = [];
  $http.get("http://localhost:3000/nhanVien").then(function (response) {
    $scope.listNhanVien = response.data;
  });

  $scope.addNhanVien = function () {
    $http
      .post("http://localhost:3000/nhanVien", {
        id: $scope.id,
        hoTen: $scope.hoTen,
        tuoi: $scope.tuoi,
        diaChi: $scope.diaChi,
      })
      .then(function (response) {
        if (response.status === 200) {
          alert("Them thanh cong");
        }
      });
  };
};
