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

    chart: {
        backgroundColor: 'transparent',
        events: {
            load: function() {
                Highcharts.each(this.series[0].points, function(p) {
                    p.color = "#8edda3"

                });
            }
        }
    },

    navigator: {
        enabled: true,
        liveRedraw: true,
        series: {
            type: 'gantt',
            pointPlacement: 0.5,
            pointPadding: 0.25,
            colorByPoint: false,
            // color = '#c0c5d8'
        },

        // navigator: {
        //     enabled: true,
        //     liveRedraw: true,
        //     series: {
        //         type: 'gantt',
        //         pointPlacement: 0.5,
        //         pointPadding: 0.25,
        //         colorByPoint: false,
        //         color = '#c0c5d8'
        //     },

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
            name: 'Construction of Full Gospel Rd',
            completed: {
                amount: 0.95,
                fill: '#00ab35'
            },

        }, {
            start: Date.UTC(2008, 1, 2),
            end: Date.UTC(2012, 11, 5),
            completed: 0.5,
            name: 'Expansion of Kahawa Health Centre',
            completed: {
                amount: 0.5,
                fill: '#00ab35'
            },
        }, {
            start: Date.UTC(2018, 11, 8),
            end: Date.UTC(2021, 11, 9),
            completed: 0.15,
            name: 'Construction of MCH at Kiwamu Health Centre',
            completed: {
                amount: 0.15,
                fill: '#00ab35'
            },
        }, {
            start: Date.UTC(2011, 11, 9),
            end: Date.UTC(2018, 11, 19),
            completed: {
                amount: 0.3,
                fill: '#00ab35'
            },
            name: 'Youth Empowerment (Purchase of 10 Incubators)'
        }, {
            start: Date.UTC(2009, 11, 10),
            end: Date.UTC(2013, 11, 23),
            completed: 0.53,
            name: 'Completion of Kasarani septic tank in the market ',
            completed: {
                amount: 0.53,
                fill: '#00ab35'
            },
        }, {
            start: Date.UTC(2008, 11, 25, 8),
            end: Date.UTC(2015, 11, 25, 16),
            completed: 0.73,
            name: 'Construction of a cereal depot in Maiella Ward',
            completed: {
                amount: 0.73,
                fill: '#00ab35'
            },
        }, {
            start: Date.UTC(2007, 1, 2, 8),
            end: Date.UTC(2015, 11, 25, 16),
            completed: 0.73,
            name: 'Youth Digital Literacy Program',
            completed: {
                amount: 0.73,
                fill: '#00ab35'
            },
        }, {
            start: Date.UTC(2017, 1, 2, 8),
            end: Date.UTC(2021, 11, 25, 16),
            completed: 0.32,
            name: 'Completion of wells',
            completed: {
                amount: 0.32,
                fill: '#00ab35'
            },
        }]
    }]
});