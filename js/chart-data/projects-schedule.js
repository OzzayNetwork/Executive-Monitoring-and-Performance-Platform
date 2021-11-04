$(function() {
    $('#project-status').highcharts({

        chart: {

            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: 'transparent',
            type: 'pie',
            options3d: {
                enabled: false,
                alpha: 0
            }
        },

        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },

        colors: ['#081969', '#0e2569', '#1e3b81', '#284893', '#30509b'],
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                innerSize: 130,
                depth: 45
            },

            pie: {
                /* dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                }, */
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
                size: '100%'
            }
        },
        series: [{
            type: 'pie',
            innerSize: '50%',
            name: 'Delivered amount',
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
                    color: 'black',
                    formatter: function() {
                        return this.point.name
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
            size: '110%',
            innerSize: '50%',
            dataLabels: {
                enabled: true,
                color: 'Black',
                connectorWidth: 1,
                distance: 5,
                connectorColor: '#000000',
                formatter: function() {
                    return this.point.name
                },
                style: {
                    width: '60px',
                    fontSize: '0.8em',
                    color: 'black',
                    textShadow: false,
                    textOutline: false,
                    font: '600 "Muli", sans-serif'
                }

            }
        }, {
            name: 'Delivered amount',
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
            size: '110%',
            innerSize: '50%',
            dataLabels: {
                formatter: function() {
                    return Math.round(this.percentage) + ' %';
                },
                color: 'white',
                distance: -30,
                style: {
                    width: '40px',
                    fontSize: '1.2em',
                    textShadow: false,
                    textOutline: false,
                    font: '600 "Muli", sans-serif'
                }
            }
        }]
    });
});