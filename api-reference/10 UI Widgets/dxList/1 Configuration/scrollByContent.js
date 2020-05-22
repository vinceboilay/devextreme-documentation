//<!--@Knockout-->
var myViewModel = {
    listDataSource: new DevExpress.data.DataSource("/Content/data/states.txt"),
    contentScrolling: ko.observable(true)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.listDataSource = new DevExpress.data.DataSource("/Content/data/states.txt");
    $scope.contentScrolling = true;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myList").dxList({
    height: '80%',
    dataSource: new DevExpress.data.DataSource("/Content/data/states.txt"),
    itemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.append("<p style=\"font-size:larger;\"><b>" + itemData.name + "</b></p>");
        itemElement.append("<p>Capital: <i>" + itemData.capital + "</i></p>");
    }
});
$("#scrollSelector").dxSwitch({
    value: true,
    onValueChanged: function (e) {
        $("#myList").dxList("instance").option("scrollByContent", e.value);
    }
});
//<!--/@jQuery-->