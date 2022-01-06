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
                center: ['50%', '95%'],
                size: '100%'
            }
        },
        series: [{
            type: 'pie',
            innerSize: '50%',
            name: 'Projects',
            data: [

                {
                    name: 'On Schedule',
                    y: 14,
                    color: '#00881b',
                    dataLabels: {
                        enabled: true
                    },
                    url: 'On time-projects.html',
                },
                {
                    name: 'Behind Schedule',
                    y: 16,
                    fill: '#56d17c',
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
            size: '150%',
            innerSize: '50%',
            dataLabels: {
                enabled: true,
                color: 'Black',
                connectorWidth: 1,
                distance: 10,
                connectorColor: '#000000',
                // alignTo: 'connectors',
                alignTo: 'plotEdges',

                // connectorShape: function(labelPosition, connectorPosition, options) {

                //     var connectorPadding = options.connectorPadding,
                //         touchingSliceAt = connectorPosition.touchingSliceAt,
                //         series = this.series,
                //         plotWidth = series.chart.plotWidth,
                //         plotLeft = series.chart.plotLeft,
                //         alignment = labelPosition.alignment,
                //         stepDistance = 70, // in px - distance betwenn the step and vertical plot border
                //         stepX = alignment === 'top' ? plotLeft + plotWidth - stepDistance : plotLeft + stepDistance;

                //     return ['M',
                //         labelPosition.x + (alignment === 'left' ? 1 : -1) *
                //         connectorPadding,
                //         labelPosition.y,
                //         'L',
                //         stepX,
                //         labelPosition.y,
                //         'L',
                //         stepX,
                //         touchingSliceAt.y,
                //         'L',
                //         touchingSliceAt.x,
                //         touchingSliceAt.y
                //     ];

                // },

                formatter: function() {
                    return this.point.name
                },
                style: {
                    width: '60px',
                    fontSize: '0.85em',
                    color: 'black',
                    textShadow: false,
                    // textOutline: false,
                    font: '600 "Muli", sans-serif'
                }

            }
        }, {
            name: 'Projects',
            data: [

                {
                    name: 'On Schedule',
                    y: 14,
                    color: '#00881b',
                    dataLabels: {
                        enabled: true
                    },
                    url: 'ontime-projects.html',
                },
                {
                    name: 'Behind Schedule',
                    y: 16,
                    fill: '#56d17c',
                    color: '#bcebc7',
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
            size: '150%',
            innerSize: '50%',
            dataLabels: {
                formatter: function() {
                    return Math.round(this.percentage) + ' %';
                },
                color: 'white',
                distance: -50,
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