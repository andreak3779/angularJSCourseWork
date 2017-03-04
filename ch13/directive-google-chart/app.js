angular.module('googleChartApp',[])
.controller('MainCtrl',[function(){
    var self=this;
    self.pieChartData = [
        {label:'First',value: 20},
        {label:'Second', value: 44},
        {labe:'Third', value: 85}
    ];
    self.pieChartConfig = {
        title:'One Two Three Chart',
        firstColumnHeader: 'Counter',
        secondColumnHeader: 'Actual Value'
    };

    self.changeData = function() {
        self.pieChartData[1].value = 25;
    };
}])