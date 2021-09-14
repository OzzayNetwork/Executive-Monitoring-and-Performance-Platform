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
                name: 'ESTABLISHING INSTANT COFFEE PLANT IN UGANDA',
                id: 'project1'
            },
            {
                name: 'Project Planning',
                id: 'inspect_building',
                completed: 1,
                parent: 'project1',
                start: Date.UTC(2007, 11, 1),
                end: Date.UTC(2008, 6, 12),
                owner: 'John Doe'
            }, {
                name: 'Project design',
                id: 'inspect_building',
                completed: 1,
                parent: 'project1',
                start: Date.UTC(2008, 6, 12),
                end: Date.UTC(2009, 12, 12),
                owner: 'Jane Doe'
            }, {
                name: 'Project Development',
                id: 'inspect_building',
                completed: 1,
                parent: 'project1',
                start: Date.UTC(2009, 12, 12),
                end: Date.UTC(2011, 1, 25),
                owner: 'Brian Kimotho'
            }, {
                name: 'Project Development',
                id: 'inspect_building',
                completed: 1,
                parent: 'project1',
                start: Date.UTC(2009, 12, 12),
                end: Date.UTC(2012, 1, 25),
                owner: 'Jane Doe'
            }, {
                name: 'Testing/handover',
                id: 'inspect_building',
                completed: 1,
                parent: 'project1',
                start: Date.UTC(2012, 1, 25),
                end: Date.UTC(2014, 6, 2),
                owner: 'John Doe'
            }, {
                name: 'Monitoring',
                id: 'inspect_building',
                completed: 0.3,
                parent: 'project1',
                start: Date.UTC(2014, 6, 2),
                end: Date.UTC(2018, 1, 2),
                owner: 'Jimmy'
            }, {
                start: Date.UTC(2008, 1, 2),
                end: Date.UTC(2012, 11, 5),
                completed: 0.5,
                name: 'LUWEERO FRUIT PROCESSING PROJECT'
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
                name: 'SETTING UP A MODERN SLAUGHTERHOUSE IN UGANDA  '
            }, {
                start: Date.UTC(2008, 11, 25, 8),
                end: Date.UTC(2015, 11, 25, 16),
                completed: 0.73,
                name: 'PEARL RICE LIMITED'
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
            }
        ]
    }]
});