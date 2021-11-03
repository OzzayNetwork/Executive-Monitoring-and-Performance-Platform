Highcharts.chart('project-status', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        backgroundColor: 'transparent'
    },
    title: {
        text: 'Projects Schedule <br>Statuses',
        align: 'center',
        verticalAlign: 'middle',
        y: 70
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },

    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },

    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            showInLegend: true,

            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y:.1f}%'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '110%'
        }
    },
    series: [{
        type: 'pie',
        name: 'Projects Comparison By Timeline',
        innerSize: '50%',
        data: [

            {
                name: 'Projects On Schedule',
                y: 14,
                color: '#03824d',
                dataLabels: {
                    enabled: false
                }
            },
            {
                name: 'Projects Behind Shedule',
                y: 6,
                fill: '#ff0c39',
                color: '#ff0c39',
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
});