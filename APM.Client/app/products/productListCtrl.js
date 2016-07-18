(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl",
                     ["productResource", ProductListCtrl]);

    function ProductListCtrl(productResource) {
        var vm = this;

        vm.searchCriteria = "TBX";

        productResource.query({ $skip : 1, $top : 3 },function (data) {
            vm.products = data;
        })

        //productResource.query({ $filter: "contains(ProductCode, 'GDN') and "}, function (data) {
        //    vm.products = data;
        //})

    }
}());