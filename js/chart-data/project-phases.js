$(function() {
    var asset_allocation_pie_chart = new Highcharts.Chart({
        chart: {
            renderTo: 'project-phase',
            plotShadow: false,
            type: 'pie',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            backgroundColor: 'transparent'
        },
        title: {
            text: null,

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

            cursor: 'pointer',
            series: {
                cursor: 'pointer',
                point: {
                    events: {
                        click: function() {
                            location.href = this.options.url;
                        }
                    }
                }
            },

            pie: {
                allowPointSelect: true,
                cursor: 'pointer',

                size: '110%',
                cursor: 'pointer',
                data: [{
                        name: 'Planning',
                        y: 60,
                        url: 'planning-phase.html',
                        color: '#00205a'
                    },

                    {
                        name: 'Design',
                        y: 9,
                        url: 'design-phase.html',
                        color: '#00457f'
                    },
                    {
                        name: 'Implementation',
                        y: 13,
                        url: 'development-phase.html',
                        color: '#0069a3'
                    },
                    {
                        name: 'Testing',
                        y: 7,
                        url: 'testing-phase.html',
                        color: '#058dc7'
                    },
                    {
                        name: 'Monitoring',
                        y: 11,
                        url: 'monitoring-phase.html',
                        color: '#29b1eb'
                    }
                ]
            }
        },

        series: [{

                type: 'pie',
                name: 'Percentage Of Projects',

                dataLabels: {
                    verticalAlign: 'top',
                    enabled: true,
                    color: 'white',
                    connectorWidth: 1,
                    distance: -30,
                    connectorColor: '#000000',
                    formatter: function() {
                        return Math.round(this.percentage) + ' %';
                    },
                    style: {
                        width: '40px',
                        fontSize: '1.2em',
                        textShadow: false,
                        textOutline: false,
                        font: '600 "Muli", sans-serif'
                    }
                }
            },
            {
                type: 'pie',
                name: 'Percentage Of Projects',
                dataLabels: {
                    enabled: true,
                    color: 'Black',
                    connectorWidth: 1,
                    distance: 30,
                    connectorColor: '#000000',
                    formatter: function() {
                        return this.point.name
                    },
                    style: {
                        width: '40px',
                        fontSize: '1em',
                        textShadow: false,
                        textOutline: false,
                        font: '600 "Muli", sans-serif'
                    },

                }
            }
        ],

        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        }
    });

});