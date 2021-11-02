Highcharts.ganttChart('project-timelines', {

    title: {
        text: null
    },

    yAxis: {
        uniqueNames: true
    },
    chart: {
        backgroundColor: 'transparent'
    },

    navigator: {
        enabled: true,
        liveRedraw: true,
        series: {
            type: 'gantt',
            pointPlacement: 0.5,
            pointPadding: 0.25
        },
        yAxis: {
            gridLineColor: '#95aac9',
            gridLineDashStyle: 'ShortDot',
            gridLineWidth: 0.3,
            min: 0,
            max: 3,
            reversed: true,
            categories: []
        }
    },
    scrollbar: {
        enabled: true
    },
    rangeSelector: {
        enabled: true,
        // selected: 0
    },

    series: [{
        name: 'Project Timelines',
        data: [{
            start: Date.UTC(2007, 11, 1),
            end: Date.UTC(2018, 1, 2),
            completed: 0.95,
            name: 'Establishing Instant Coffee Plant In Uganda'

        }, {
            start: Date.UTC(2008, 1, 2),
            end: Date.UTC(2012, 11, 5),
            completed: 0.5,
            name: 'Luweero Fruit Processing Project'
        }, {
            start: Date.UTC(2018, 11, 8),
            end: Date.UTC(2021, 11, 9),
            completed: 0.15,
            name: 'Maize Milling Project'
        }, {
            start: Date.UTC(2011, 11, 9),
            end: Date.UTC(2018, 11, 19),
            completed: {
                amount: 0.3,
                fill: '#fa0'
            },
            name: 'Multi Fruit Juice Factory'
        }, {
            start: Date.UTC(2009, 11, 10),
            end: Date.UTC(2013, 11, 23),
            completed: 0.53,
            name: 'Setting Up A Modern Slaughterhouse In Uganda '
        }, {
            start: Date.UTC(2008, 11, 25, 8),
            end: Date.UTC(2015, 11, 25, 16),
            completed: 0.73,
            name: 'Pearl Rice Limited'
        }, {
            start: Date.UTC(2007, 1, 2, 8),
            end: Date.UTC(2015, 11, 25, 16),
            completed: 0.73,
            name: 'Dairy Value Chain Enhancement for Increased Market Access'
        }, {
            start: Date.UTC(2017, 1, 2, 8),
            end: Date.UTC(2021, 11, 25, 16),
            completed: 0.32,
            name: 'Youth Empowerment through Dairy Value Addition'
        }]
    }]
});