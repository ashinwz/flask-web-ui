'use strict';
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function() {
        floatchart1()
    }, 100);
});
function floatchart1() {
    (function () {
        var msg = function () {
            var tmp = null;
            $.ajax({
                'async': false,
                'type': "GET",
                'global': false,
                'dataType': 'text',
                'url': "/values",
                'success': function (data) {
                    tmp = data;
                }
            });
            return tmp;
        }();

        var obj = JSON.parse(msg);
        console.log(obj.data.x);

        var options = {
            chart: {
                height: 230,
                type: 'line',
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 2,
                curve: 'smooth'
            },
            series: [{
                name: 'Arts',
                data: obj.data.x
            }, {
                name: 'Commerce',
                data: obj.data.y
            }],
            legend: {
                position: 'top',
            },
            xaxis: {
                type: 'datetime',
                categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000'],
                axisBorder: {
                    show: false,
                },
                label: {
                    style: {
                        color: '#ccc'
                    }
                },
            },
            yaxis: {
                show: true,
                min: 10,
                max: 70,
                labels: {
                    style: {
                        color: '#ccc'
                    }
                }
            },
            colors: ['#73b4ff', '#59e0c5'],
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    gradientToColors: ['#4099ff', '#2ed8b6'],
                    shadeIntensity: 0.5,
                    type: 'horizontal',
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100]
                },
            },
            markers: {
                size: 5,
                colors: ['#4099ff', '#2ed8b6'],
                opacity: 0.9,
                strokeWidth: 2,
                hover: {
                    size: 7,
                }
            },
            grid: {
                borderColor: '#cccccc3b',
            }
        };
        var chart = new ApexCharts(document.querySelector("#unique-visitor-chart-feature"), options);
        chart.render();
    })();

    (function () {
        var msg = function () {
            var tmp = null;
            $.ajax({
                'async': false,
                'type': "GET",
                'global': false,
                'dataType': 'text',
                'url': "/users",
                'success': function (data) {
                    tmp = data;
                }
            });
            return tmp;
        }();

        var obj = JSON.parse(msg);

        var options = {
            chart: {
                height: 150,
                type: 'donut',
            },
            dataLabels: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '75%'
                    }
                }
            },
            labels: ['New', 'Limit'],
            series: [obj.data.x, obj.data.y],
            legend: {
                show: false
            },
            tooltip: {
                theme: 'datk'
            },
            grid: {
                padding: {
                    top: 20,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
            },
            colors: ["#4680ff", "#2ed8b6"],
            fill: {
                opacity: [1, 1]
            },
            stroke: {
                width: 0,
            }
        }
        var chart = new ApexCharts(document.querySelector("#customer-chart-f"), options);
        chart.render();
    })();
}