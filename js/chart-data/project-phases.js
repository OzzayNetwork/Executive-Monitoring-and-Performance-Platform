// Make monochrome colors
var pieColors = (function() {
    var colors = [],
        base = Highcharts.getOptions().colors[0],
        i;

    for (i = 0; i < 10; i += 1) {
        // Start out with a darkened base color (negative brighten), and end
        // up with a much brighter color
        colors.push(Highcharts.color(base).brighten((i - 3) / 7).get());
    }
    return colors;
}());

// Build the chart
Highcharts.chart('project-phase', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backgroundColor: 'transparent'
    },



    title: {
        text: null
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
            // innerSize: '100%',
            allowPointSelect: true,
            cursor: 'pointer',
            // colors: pieColors,
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                distance: -50,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 4
                }
            },
            showInLegend: true,
            // showInLegend: true
        }
    },
    series: [{
        name: 'Project Phase',
        data: [{
                name: 'Planning',
                y: 60,
                url: 'planning-phase.html',
            },
            {
                name: 'Design',
                y: 9,
                url: 'design-phase.html',
            },
            {
                name: 'Development/Implementation',
                y: 13,
                url: 'development-phase.html',
            },
            {
                name: 'Testing/Handover',
                y: 7,
                url: 'testing-phase.html',
            },
            {
                name: 'Monitoring',
                y: 11,
                url: 'monitoring-phase.html',
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
                fontSize: '1em'
            }
        }
    }],


});