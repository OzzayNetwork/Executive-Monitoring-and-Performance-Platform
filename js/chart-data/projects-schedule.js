Highcharts.chart('project-status', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        backgroundColor: 'transparent'
    },
    title: {
        text: null,
        align: 'center',
        verticalAlign: 'middle',
        y: 70,
        style: {
            width: '100px',
            fontSize: '1em',
            color: 'black'
        }
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
            // showInLegend: true,

            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y:.1f}%'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '80%'
        }
    },
    series: [{
        type: 'pie',
        name: 'Projects',
        innerSize: '50%',
        data: [

            {
                name: 'On Schedule',
                y: 14,
                color: '#19244b',
                dataLabels: {
                    enabled: true
                },
                url: 'On time-projects.html',
            },
            {
                name: 'Behind Schedule',
                y: 6,
                fill: '#ff0c39',
                color: '#9099b0',
                dataLabels: {
                    enabled: true
                },
                url: 'behind-schedule.html',
            }
        ],

        cursor: 'pointer',
        point: {
            events: {
                click: function() {
                    location.href = this.options.url;
                }
            }
        },

        dataLabels: {
            distance: 5,
            format: '{point.name}<br>{point.percentage:.1f} %',
            connectorWidth: 0,
            style: {
                width: '40px',
                fontSize: '0.8em',
                color: 'black',
                extShadow: false,
                textOutline: false,
                font: '600 "Muli", sans-serif'
            }
        },

        dataLabels: {
            type: 'pie',
            name: 'Percentage Of Projects',
            enabled: true,
            distance: 30,
            format: '{point.name}<br><span style="font-size:1.3em">{point.percentage:.1f}</span> %',
            style: {
                width: '60px',
                fontSize: '0.8em',
                color: 'black',
                extShadow: false,
                textOutline: false,
                font: '600 "Muli", sans-serif'
            }
        },



        point: {

            events: {
                click: function() {
                    location.href = this.options.url;
                }
            }
        }
    }]
});