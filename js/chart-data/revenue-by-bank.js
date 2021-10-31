$(function() {

    // Create the chart
    $('#revenue-by-bank').highcharts({
        chart: {
            type: 'column',
            backgroundColor: 'transparent'
        },
        lang: {
            thousandsSep: ','
        },
        title: {
            text: null,
            style: {
                color: '#12263f'
            }
        },
        yAxis: {
            gridLineColor: '#95aac9',
            gridLineDashStyle: 'ShortDot',
            gridLineWidth: 0.3,
            min: 0,

            title: {
                text: 'Money In $',
                style: {
                    color: '#12263f'
                }

            },
            stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                    color: '#12263f'
                }
            }
        },
        xAxis: {
            type: 'category'
        },



        legend: {
            enabled: true
        },

        legend: {
            borderWidth: 0,
            backgroundColor: 'transparent',
            // borderColor: 'T',
            // borderWidth: 1,
            itemStyle: {
                color: '#95aac9',
                font: '600 12px "Muli", sans-serif'
            },
            itemHoverStyle: {
                color: '#12263f',
                font: '600 12px "Muli", sans-serif'
            },
        },

        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: false,
                    style: {
                        color: 'white',
                        textShadow: '0 0 2px black, 0 0 2px black'
                    }
                },
                stacking: 'normal'
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                grouping: false,
                pointPadding: 0.2,
                borderWidth: 0,
                dataLabels: {
                    enabled: false
                },
                states: {
                    hover: {
                        enabled: false
                    }
                },
                //            point: {
                //                events: {
                //                    mouseOver: updateStackColor(0.2),
                //                    mouseOut: updateStackColor(0)
                //                }
                //            }

            },
            series: {
                //connectNulls: true

                pointWidth: 15,
                borderWidth: 0,
                borderColor: 'black',
                cursor: 'pointer',
                point: {
                    events: {
                        click: function() {
                            location.href = this.options.url;
                        }
                    }
                }


            },
        },

        tooltip: {
            headerFormat: '<span style="font-size:16px; font-weight:800;">{series.name}</span><br>',
            //		useHTML: true,
            pointFormat: '<span  style="font-size:16px; font-weight:800; color:{point.color}">{point.name}</span>: <b style="color:{point.color}">$ {point.y}</b><br/>',
            formatter: function() {

                var point = this.point,
                    s = '<span style="font-size:14px; font-weight:600;  color:white;">' + this.series.name + '</span><br/><span style="color:white"><span  style="font-size:12px; font-weight:800; color:white;">' + point.name + '</span> :<b> $ ' + Highcharts.numberFormat(point.y, 0, '.', ',') + ' ' + '</span>';
                if (point.drilldown) {
                    s = '<span style="font-size:14px; font-weight:600;  color:white;">' + this.series.name + '</span><br/><p><span  style="font-size:16px; font-weight:800; color:white;">' + point.name + '</span> :<b> $ ' + Highcharts.numberFormat(point.y, 0, '.', ',') + ' (' + Highcharts.numberFormat(this.percentage, 0, '.', ',') + '%)</p><br/>';
                    s += '<p>Click to view <b>' + point.name + '</b> Collections </p>';
                }
                return s;
            },
            crosshairs: true


        },

        series: [{
            //national bank collections by the months
            name: 'Amount remaining',
            color: '#f4b41a', //Blue
            data: [{

                    name: 'Kampala',
                    y: 4133000,
                    url: 'kampala-projects.html',
                }, {
                    name: 'Wakiso',
                    y: 2670500,
                    url: '#',
                }, {
                    name: 'Kibaale',
                    y: 2369120,
                    url: '#',
                }, {

                    name: 'Dokolo',
                    y: 200250,
                    url: '#',
                }, {
                    name: 'Gulu',
                    y: 1200353,
                    url: 'gulu-projects.html',
                }, {
                    name: 'Yumbe',
                    y: 1459312,
                    url: '#',
                }, {

                    name: 'Mbarara',
                    y: 900263,
                    url: '#',
                }, {
                    name: 'Jinja',
                    y: 555263,
                    url: 'jinja-projects.html',
                }, {

                    name: 'Koboko',
                    y: 356263,
                    url: 'koboko-projects.html',
                }, {
                    name: 'Kabale',
                    y: 299263,
                    url: '#',
                }]
                //end of the remaining money
        }, {
            //collections by cooperative bank
            name: 'Amount spent',
            color: '#181F48', // Orange
            data: [{

                    name: 'Kampala',
                    y: 413000,
                    url: 'kampala-projects.html',

                }, {
                    name: 'Wakiso',
                    y: 1000000,
                    url: '#',
                }, {
                    name: 'Kibaale',
                    y: 3400000,
                    url: '#',
                }, {

                    name: 'Dokolo',
                    y: 5330000,
                    url: '#',
                }, {
                    name: 'Gulu',
                    y: 1500000,
                    url: 'gulu-projects.html',
                }, {
                    name: 'Yumbe',
                    y: 900000,
                    url: '#',
                }, {

                    name: 'Mbarara',
                    y: 1900000,
                    url: '#',
                }, {
                    name: 'Jinja',
                    y: 916667,
                    url: 'jinja-projects.html',
                }, {

                    name: 'Koboko',
                    y: 326263,
                    url: 'koboko-projects.html',
                }, {
                    name: 'Kabale',
                    y: 399263,
                    url: '#',
                }]
                //end of amount spent
        }],
        drilldown: {
            activeDataLabelStyle: {
                color: 'white',
                textShadow: '0 0 2px black, 0 0 2px black'
            },
            series: [
                //nbk collections by months and dates
                {
                    id: 'nbk-jan',
                    name: 'Revenue Collected via Mpesa in Jan',
                    data: [
                        ['1st Jan', 4],
                        ['2nd Jan', 2],
                        ['3rd Jan', 1],
                        ['4th Jan', 2],
                        ['5th Jan', 1]
                    ]
                }, {
                    id: 'nbk-feb',
                    name: 'Revenue Collected via Mpesa in Feb',
                    data: [
                        ['1st Feb', 4],
                        ['2nd Feb', 2]
                    ]
                }, {
                    id: 'nbk-mar',
                    name: 'Revenue Collected via Mpesa in March',
                    data: [
                        ['1st Mar', 4],
                        ['2nd Mar', 2],
                        ['3rd Mar', 2]
                    ]
                }, {
                    id: 'nbk-apr',
                    name: 'Revenue Collected via Mpesa in April',
                    data: [
                        ['1st Apr', 4],
                        ['2nd Apr', 2],
                        ['3rd Apr', 1],
                        ['4th Apr', 2],
                        ['5th Apr', 1]
                    ]
                }, {
                    id: 'nbk-may',
                    name: 'Revenue Collected via Mpesa in May',
                    data: [
                        ['1st May', 4],
                        ['2nd May', 2]
                    ]
                }, {
                    id: 'nbk-jun',
                    name: 'Revenue Collected via Mpesa in June',
                    data: [
                        ['1st Jun', 4],
                        ['2nd Jun', 2],
                        ['3rd Jun', 2]
                    ]
                }, {
                    id: 'nbk-jul',
                    name: 'Revenue Collected via Mpesa in July',
                    data: [
                        ['1st Jul', 4],
                        ['2nd Jul', 2],
                        ['3rd Jul', 1],
                        ['4th Jul', 2],
                        ['5th Jul', 1]
                    ]
                }, {
                    id: 'nbk-aug',
                    name: 'Revenue Collected via Mpesa in August',
                    data: [
                        ['1st aug', 4],
                        ['2nd aug', 2]
                    ]
                }, {
                    id: 'nbk-sep',
                    name: 'Revenue Collected via Mpesa in September',
                    data: [
                        ['1st sep', 4],
                        ['2nd sep', 2],
                        ['3rd sep', 2]
                    ]
                }, {
                    id: 'nbk-oct',
                    name: 'Revenue Collected via Mpesa in October',
                    data: [
                        ['1st Oct', 4],
                        ['2nd Oct', 2],
                        ['3rd Oct', 1],
                        ['4th Oct', 2],
                        ['5th Oct', 1]
                    ]
                }, {
                    id: 'nbk-nov',
                    name: 'Revenue Collected via Mpesa in November',
                    data: [
                        ['1st Nov', 4],
                        ['2nd Nov', 2]
                    ]
                }, {
                    id: 'nbk-dec',
                    name: 'Revenue Collected via Mpesa in December',
                    data: [
                        ['1st Dec', 4],
                        ['2nd Dec', 2],
                        ['3rd Dec', 2]
                    ]
                },

                //end of nbk collections by months and dates

                //start of co-op collections by months and dates
                {
                    id: 'co-jan',
                    name: 'Revenue collected Via Card in January',
                    data: [
                        ['1st Jan', 3],
                        ['2nd Jan', 5],
                        ['3rd Jan', 6],
                        ['4th Jan', 2],
                        ['5th Jan', 2]
                    ]
                }, {
                    id: 'co-feb',
                    name: 'Revenue collected Via Card in February',
                    data: [
                        ['1st Feb', 1],
                        ['2nd Feb', 5]
                    ]
                }, {
                    id: 'co-mar',
                    name: 'Revenue collected Via Card in March',
                    data: [
                        ['1st Mar', 2],
                        ['2nd Mar', 3],
                        ['3rd Mar', 2]
                    ]
                }, {
                    id: 'co-apr',
                    name: 'Revenue collected Via Card in April',
                    /*   stack: 1, */
                    data: [
                        ['1st Apr', 2],
                        ['2nd Apr', 3],
                        ['3rd Apr', 1],
                        ['4th Apr', 1],
                        ['5th Apr', 1]
                    ]
                }, {
                    id: 'co-may',
                    name: 'Revenue collected Via Card in May',
                    /*  stack: 1, */
                    data: [
                        ['1st May', 4],
                        ['2nd May', 3]
                    ]
                }, {
                    id: 'co-jun',
                    name: 'Revenue collected Via Card in June',
                    /* stack: 1, */
                    data: [
                        ['1st Jun', 4],
                        ['2nd Jun', 3],
                        ['3rd jun', 3]
                    ]
                }, {
                    id: 'co-jul',
                    name: 'Revenue collected Via Card in July',
                    data: [
                        ['1st Jul', 3],
                        ['2nd Jul', 5],
                        ['3rd Jul', 6],
                        ['4th Jul', 2],
                        ['5th Jul', 2]
                    ]
                }, {
                    id: 'co-aug',
                    name: 'Revenue collected Via Card in August',
                    data: [
                        ['1st Aug', 1],
                        ['2nd Aug', 5]
                    ]
                }, {
                    id: 'co-sep',
                    name: 'Revenue collected Via Card in September',
                    data: [
                        ['1st Sep', 2],
                        ['2nd Sep', 3],
                        ['3rd Sep', 2]
                    ]
                }, {
                    id: 'co-oct',
                    name: 'Revenue collected Via Card in October',
                    /*   stack: 1, */
                    data: [
                        ['1st Oct', 2],
                        ['2nd Oct', 3],
                        ['3rd Oct', 1],
                        ['4th Oct', 1],
                        ['5th Oct', 1]
                    ]
                }, {
                    id: 'co-nov',
                    name: 'Revenue collected Via Card in November',
                    /*  stack: 1, */
                    data: [
                        ['1st Nov', 4],
                        ['2nd Nov', 3]
                    ]
                }, {
                    id: 'co-dec',
                    name: 'Revenue collected Via Card in December',
                    /* stack: 1, */
                    data: [
                        ['1st Dec', 4],
                        ['2nd Dec', 3],
                        ['3rd Dec', 3]
                    ]
                }
            ]
        }
    })

});

$(function() {

    $('#revenue-by-bank-debited').highcharts({
        chart: {
            type: 'column',
            backgroundColor: 'transparent'
        },
        lang: {
            thousandsSep: ','
        },
        title: {
            text: null,
            style: {
                color: '#12263f'
            }
        },
        yAxis: {
            gridLineColor: '#95aac9',
            gridLineDashStyle: 'ShortDot',
            gridLineWidth: 0.3,
            min: 0,

            title: {
                text: 'Money In $',
                style: {
                    color: '#12263f'
                }

            },
            stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                    color: '#12263f'
                }
            }
        },
        xAxis: {
            type: 'category'
        },



        legend: {
            enabled: true
        },

        legend: {
            borderWidth: 0,
            backgroundColor: 'transparent',
            // borderColor: 'T',
            // borderWidth: 1,
            itemStyle: {
                color: '#95aac9',
                font: '600 12px "Muli", sans-serif'
            },
            itemHoverStyle: {
                color: '#12263f',
                font: '600 12px "Muli", sans-serif'
            },
        },

        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: false,
                    style: {
                        color: 'white',
                        textShadow: '0 0 2px black, 0 0 2px black'
                    }
                },
                stacking: 'normal'
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                grouping: false,
                pointPadding: 0.2,
                borderWidth: 0,
                dataLabels: {
                    enabled: false
                },
                states: {
                    hover: {
                        enabled: false
                    }
                },
                //            point: {
                //                events: {
                //                    mouseOver: updateStackColor(0.2),
                //                    mouseOut: updateStackColor(0)
                //                }
                //            }

            },
            series: {
                //connectNulls: true

                pointWidth: 15,
                borderWidth: 0,
                borderColor: 'black',


            },
        },

        tooltip: {
            headerFormat: '<span style="font-size:16px; font-weight:800;">{series.name}</span><br>',
            //		useHTML: true,
            pointFormat: '<span  style="font-size:16px; font-weight:800; color:{point.color}">{point.name}</span>: <b style="color:{point.color}">$ {point.y}</b><br/>',
            formatter: function() {

                var point = this.point,
                    s = '<span style="font-size:14px; font-weight:600;  color:' + point.color + ';">' + this.series.name + '</span><br/><span style="color:' + point.color + '"><span  style="font-size:16px; font-weight:800; color:' + point.color + ';">' + point.name + '</span> :<b> $ ' + Highcharts.numberFormat(point.y, 0, '.', ',') + ' ' + '</span>';
                if (point.drilldown) {
                    s = '<span style="font-size:14px; font-weight:600;  color:' + point.color + ';">' + this.series.name + '</span><br/><p><span  style="font-size:16px; font-weight:800; color:' + point.color + ';">' + point.name + '</span> :<b> $ ' + Highcharts.numberFormat(point.y, 0, '.', ',') + ' (' + Highcharts.numberFormat(this.percentage, 0, '.', ',') + '%)</p><br/>';
                    s += '<p>Click to view <b>' + point.name + '</b> Collections </p>';
                }
                return s;
            },
            crosshairs: true


        },

        series: [{
            //collections by cooperative bank
            name: 'Card',
            color: '#181F48', // Orange
            data: [{
                    name: 'Jan',
                    y: 1,
                    drilldown: 'co-jan',
                }, {
                    name: 'Feb',
                    y: 5,
                    drilldown: 'co-feb',
                }, {
                    name: 'Mar',
                    y: 2,
                    drilldown: 'co-mar',
                }, {
                    name: 'Apr',
                    y: 1,
                    drilldown: 'co-apr',
                }, {
                    name: 'May',
                    y: 5,
                    drilldown: 'co-may',
                }, {
                    name: 'Jun',
                    y: 2,
                    drilldown: 'co-jun',
                }, {
                    name: 'Jul',
                    y: 1,
                    drilldown: 'co-jul',
                }, {
                    name: 'Aug',
                    y: 5,
                    drilldown: 'co-aug',
                }, {
                    name: 'Sep',
                    y: 2,
                    drilldown: 'co-sep',
                }, {
                    name: 'Oct',
                    y: 1,
                    drilldown: 'co-oct',
                }, {
                    name: 'Nov',
                    y: 5,
                    drilldown: 'co-nov',
                }, {
                    name: 'Dec',
                    y: 2,
                    drilldown: 'co-dec',
                }]
                //end of NBK collections
        }],
        drilldown: {
            activeDataLabelStyle: {
                color: 'white',
                textShadow: '0 0 2px black, 0 0 2px black'
            },
            series: [
                //nbk collections by months and dates
                {
                    id: 'nbk-jan',
                    name: 'Revenue Collected via Mpesa in January',
                    data: [
                        ['1st Jan', 4],
                        ['2nd Jan', 2],
                        ['3rd Jan', 1],
                        ['4th Jan', 2],
                        ['5th Jan', 1]
                    ]
                }, {
                    id: 'nbk-feb',
                    name: 'Revenue Collected via Mpesa in February',
                    data: [
                        ['1st Feb', 4],
                        ['2nd Feb', 2]
                    ]
                }, {
                    id: 'nbk-mar',
                    name: 'Revenue Collected via Mpesa in March',
                    data: [
                        ['1st Mar', 4],
                        ['2nd Mar', 2],
                        ['3rd Mar', 2]
                    ]
                }, {
                    id: 'nbk-apr',
                    name: 'Revenue Collected via Mpesa in April',
                    data: [
                        ['1st Apr', 4],
                        ['2nd Apr', 2],
                        ['3rd Apr', 1],
                        ['4th Apr', 2],
                        ['5th Apr', 1]
                    ]
                }, {
                    id: 'nbk-may',
                    name: 'Revenue Collected via Mpesa in May',
                    data: [
                        ['1st May', 4],
                        ['2nd May', 2]
                    ]
                }, {
                    id: 'nbk-jun',
                    name: 'Revenue Collected via Mpesa in June',
                    data: [
                        ['1st Jun', 4],
                        ['2nd Jun', 2],
                        ['3rd Jun', 2]
                    ]
                }, {
                    id: 'nbk-jul',
                    name: 'Revenue Collected via Mpesa in July',
                    data: [
                        ['1st Jul', 4],
                        ['2nd Jul', 2],
                        ['3rd Jul', 1],
                        ['4th Jul', 2],
                        ['5th Jul', 1]
                    ]
                }, {
                    id: 'nbk-aug',
                    name: 'Revenue Collected via Mpesa in August',
                    data: [
                        ['1st aug', 4],
                        ['2nd aug', 2]
                    ]
                }, {
                    id: 'nbk-sep',
                    name: 'Revenue Collected via Mpesa in September',
                    data: [
                        ['1st sep', 4],
                        ['2nd sep', 2],
                        ['3rd sep', 2]
                    ]
                }, {
                    id: 'nbk-oct',
                    name: 'Revenue Collected via Mpesa in October',
                    data: [
                        ['1st Oct', 4],
                        ['2nd Oct', 2],
                        ['3rd Oct', 1],
                        ['4th Oct', 2],
                        ['5th Oct', 1]
                    ]
                }, {
                    id: 'nbk-nov',
                    name: 'Revenue Collected via Mpesa in November',
                    data: [
                        ['1st Nov', 4],
                        ['2nd Nov', 2]
                    ]
                }, {
                    id: 'nbk-dec',
                    name: 'Revenue Collected via Mpesa in December',
                    data: [
                        ['1st Dec', 4],
                        ['2nd Dec', 2],
                        ['3rd Dec', 2]
                    ]
                },

                //end of nbk collections by months and dates

                //start of co-op collections by months and dates
                {
                    id: 'co-jan',
                    name: 'Revenue collected Via Card in January',
                    data: [
                        ['1st Jan', 3],
                        ['2nd Jan', 5],
                        ['3rd Jan', 6],
                        ['4th Jan', 2],
                        ['5th Jan', 2]
                    ]
                }, {
                    id: 'co-feb',
                    name: 'Revenue collected Via Card in February',
                    data: [
                        ['1st Feb', 1],
                        ['2nd Feb', 5]
                    ]
                }, {
                    id: 'co-mar',
                    name: 'Revenue collected Via Card in March',
                    data: [
                        ['1st Mar', 2],
                        ['2nd Mar', 3],
                        ['3rd Mar', 2]
                    ]
                }, {
                    id: 'co-apr',
                    name: 'Revenue collected Via Card in April',
                    /*   stack: 1, */
                    data: [
                        ['1st Apr', 2],
                        ['2nd Apr', 3],
                        ['3rd Apr', 1],
                        ['4th Apr', 1],
                        ['5th Apr', 1]
                    ]
                }, {
                    id: 'co-may',
                    name: 'Revenue collected Via Card in May',
                    /*  stack: 1, */
                    data: [
                        ['1st May', 4],
                        ['2nd May', 3]
                    ]
                }, {
                    id: 'co-jun',
                    name: 'Revenue collected Via Card in June',
                    /* stack: 1, */
                    data: [
                        ['1st Jun', 4],
                        ['2nd Jun', 3],
                        ['3rd jun', 3]
                    ]
                }, {
                    id: 'co-jul',
                    name: 'Revenue collected Via Card in July',
                    data: [
                        ['1st Jul', 3],
                        ['2nd Jul', 5],
                        ['3rd Jul', 6],
                        ['4th Jul', 2],
                        ['5th Jul', 2]
                    ]
                }, {
                    id: 'co-aug',
                    name: 'Revenue collected Via Card in August',
                    data: [
                        ['1st Aug', 1],
                        ['2nd Aug', 5]
                    ]
                }, {
                    id: 'co-sep',
                    name: 'Revenue collected Via Card in September',
                    data: [
                        ['1st Sep', 2],
                        ['2nd Sep', 3],
                        ['3rd Sep', 2]
                    ]
                }, {
                    id: 'co-oct',
                    name: 'Revenue collected Via Card in October',
                    /*   stack: 1, */
                    data: [
                        ['1st Oct', 2],
                        ['2nd Oct', 3],
                        ['3rd Oct', 1],
                        ['4th Oct', 1],
                        ['5th Oct', 1]
                    ]
                }, {
                    id: 'co-nov',
                    name: 'Revenue collected Via Card in November',
                    /*  stack: 1, */
                    data: [
                        ['1st Nov', 4],
                        ['2nd Nov', 3]
                    ]
                }, {
                    id: 'co-dec',
                    name: 'Revenue collected Via Card in December',
                    /* stack: 1, */
                    data: [
                        ['1st Dec', 4],
                        ['2nd Dec', 3],
                        ['3rd Dec', 3]
                    ]
                }
            ]
        }
    })


});

$(function() {

    $('#revenue-by-bank-credited').highcharts({
        chart: {
            type: 'column',
            backgroundColor: 'transparent'
        },
        lang: {
            thousandsSep: ','
        },
        title: {
            text: null,
            style: {
                color: '#12263f'
            }
        },
        yAxis: {
            gridLineColor: '#95aac9',
            gridLineDashStyle: 'ShortDot',
            gridLineWidth: 0.3,
            min: 0,

            title: {
                text: 'Money In $',
                style: {
                    color: '#12263f'
                }

            },
            stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold',
                    color: '#12263f'
                }
            }
        },
        xAxis: {
            type: 'category'
        },



        legend: {
            enabled: true
        },

        legend: {
            borderWidth: 0,
            backgroundColor: 'transparent',
            // borderColor: 'T',
            // borderWidth: 1,
            itemStyle: {
                color: '#95aac9',
                font: '600 12px "Muli", sans-serif'
            },
            itemHoverStyle: {
                color: '#12263f',
                font: '600 12px "Muli", sans-serif'
            },
        },

        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: false,
                    style: {
                        color: 'white',
                        textShadow: '0 0 2px black, 0 0 2px black'
                    }
                },
                stacking: 'normal'
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                grouping: false,
                pointPadding: 0.2,
                borderWidth: 0,
                dataLabels: {
                    enabled: false
                },
                states: {
                    hover: {
                        enabled: false
                    }
                },
                //            point: {
                //                events: {
                //                    mouseOver: updateStackColor(0.2),
                //                    mouseOut: updateStackColor(0)
                //                }
                //            }

            },
            series: {
                //connectNulls: true

                pointWidth: 15,
                borderWidth: 0,
                borderColor: 'black',


            },
        },

        tooltip: {
            headerFormat: '<span style="font-size:16px; font-weight:800;">{series.name}</span><br>',
            //		useHTML: true,
            pointFormat: '<span  style="font-size:16px; font-weight:800; color:{point.color}">{point.name}</span>: <b style="color:{point.color}">$ {point.y}</b><br/>',
            formatter: function() {

                var point = this.point,
                    s = '<span style="font-size:14px; font-weight:600;  color:' + point.color + ';">' + this.series.name + '</span><br/><span style="color:' + point.color + '"><span  style="font-size:16px; font-weight:800; color:' + point.color + ';">' + point.name + '</span> :<b> $ ' + Highcharts.numberFormat(point.y, 0, '.', ',') + ' ' + '</span>';
                if (point.drilldown) {
                    s = '<span style="font-size:14px; font-weight:600;  color:' + point.color + ';">' + this.series.name + '</span><br/><p><span  style="font-size:16px; font-weight:800; color:' + point.color + ';">' + point.name + '</span> :<b> $ ' + Highcharts.numberFormat(point.y, 0, '.', ',') + ' (' + Highcharts.numberFormat(this.percentage, 0, '.', ',') + '%)</p><br/>';
                    s += '<p>Click to view <b>' + point.name + '</b> Collections </p>';
                }
                return s;
            },
            crosshairs: true


        },

        series: [{
            //national bank collections by the months
            name: 'Mpesa',
            color: '#97A0BD', //Blue
            data: [{

                    name: 'Jan',
                    y: 5,
                    drilldown: 'nbk-jan',
                }, {
                    name: 'Feb',
                    y: 2,
                    drilldown: 'nbk-feb',
                }, {
                    name: 'Mar',
                    y: 4,
                    drilldown: 'nbk-mar',
                }, {

                    name: 'Apr',
                    y: 5,
                    drilldown: 'nbk-apr',
                }, {
                    name: 'May',
                    y: 2,
                    drilldown: 'nbk-may',
                }, {
                    name: 'Jun',
                    y: 4,
                    drilldown: 'nbk-jun',
                }, {

                    name: 'Jul',
                    y: 5,
                    drilldown: 'nbk-jul',
                }, {
                    name: 'Aug',
                    y: 2,
                    drilldown: 'nbk-aug',
                }, {
                    name: 'Sep',
                    y: 4,
                    drilldown: 'nbk-sep',
                }, {

                    name: 'Oct',
                    y: 5,
                    drilldown: 'nbk-oct',
                }, {
                    name: 'Nov',
                    y: 2,
                    drilldown: 'nbk-nov',
                }, {
                    name: 'Dec',
                    y: 4,
                    drilldown: 'nbk-dec',
                }]
                //end of national bank collections
        }],
        drilldown: {
            activeDataLabelStyle: {
                color: 'white',
                textShadow: '0 0 2px black, 0 0 2px black'
            },
            series: [
                //nbk collections by months and dates
                {
                    id: 'nbk-jan',
                    name: 'Revenue Collected via Mpesa in January',
                    data: [
                        ['1st Jan', 4],
                        ['2nd Jan', 2],
                        ['3rd Jan', 1],
                        ['4th Jan', 2],
                        ['5th Jan', 1]
                    ]
                }, {
                    id: 'nbk-feb',
                    name: 'Revenue Collected via Mpesa in February',
                    data: [
                        ['1st Feb', 4],
                        ['2nd Feb', 2]
                    ]
                }, {
                    id: 'nbk-mar',
                    name: 'Revenue Collected via Mpesa in March',
                    data: [
                        ['1st Mar', 4],
                        ['2nd Mar', 2],
                        ['3rd Mar', 2]
                    ]
                }, {
                    id: 'nbk-apr',
                    name: 'Revenue Collected via Mpesa in April',
                    data: [
                        ['1st Apr', 4],
                        ['2nd Apr', 2],
                        ['3rd Apr', 1],
                        ['4th Apr', 2],
                        ['5th Apr', 1]
                    ]
                }, {
                    id: 'nbk-may',
                    name: 'Revenue Collected via Mpesa in May',
                    data: [
                        ['1st May', 4],
                        ['2nd May', 2]
                    ]
                }, {
                    id: 'nbk-jun',
                    name: 'Revenue Collected via Mpesa in June',
                    data: [
                        ['1st Jun', 4],
                        ['2nd Jun', 2],
                        ['3rd Jun', 2]
                    ]
                }, {
                    id: 'nbk-jul',
                    name: 'Revenue Collected via Mpesa in July',
                    data: [
                        ['1st Jul', 4],
                        ['2nd Jul', 2],
                        ['3rd Jul', 1],
                        ['4th Jul', 2],
                        ['5th Jul', 1]
                    ]
                }, {
                    id: 'nbk-aug',
                    name: 'Revenue Collected via Mpesa in August',
                    data: [
                        ['1st aug', 4],
                        ['2nd aug', 2]
                    ]
                }, {
                    id: 'nbk-sep',
                    name: 'Revenue Collected via Mpesa in September',
                    data: [
                        ['1st sep', 4],
                        ['2nd sep', 2],
                        ['3rd sep', 2]
                    ]
                }, {
                    id: 'nbk-oct',
                    name: 'Revenue Collected via Mpesa in October',
                    data: [
                        ['1st Oct', 4],
                        ['2nd Oct', 2],
                        ['3rd Oct', 1],
                        ['4th Oct', 2],
                        ['5th Oct', 1]
                    ]
                }, {
                    id: 'nbk-nov',
                    name: 'Revenue Collected via Mpesa in November',
                    data: [
                        ['1st Nov', 4],
                        ['2nd Nov', 2]
                    ]
                }, {
                    id: 'nbk-dec',
                    name: 'Revenue Collected via Mpesa in December',
                    data: [
                        ['1st Dec', 4],
                        ['2nd Dec', 2],
                        ['3rd Dec', 2]
                    ]
                },

                //end of nbk collections by months and dates

                //start of co-op collections by months and dates
                {
                    id: 'co-jan',
                    name: 'Revenue collected Via Card in January',
                    data: [
                        ['1st Jan', 3],
                        ['2nd Jan', 5],
                        ['3rd Jan', 6],
                        ['4th Jan', 2],
                        ['5th Jan', 2]
                    ]
                }, {
                    id: 'co-feb',
                    name: 'Revenue collected Via Card in February',
                    data: [
                        ['1st Feb', 1],
                        ['2nd Feb', 5]
                    ]
                }, {
                    id: 'co-mar',
                    name: 'Revenue collected Via Card in March',
                    data: [
                        ['1st Mar', 2],
                        ['2nd Mar', 3],
                        ['3rd Mar', 2]
                    ]
                }, {
                    id: 'co-apr',
                    name: 'Revenue collected Via Card in April',
                    /*   stack: 1, */
                    data: [
                        ['1st Apr', 2],
                        ['2nd Apr', 3],
                        ['3rd Apr', 1],
                        ['4th Apr', 1],
                        ['5th Apr', 1]
                    ]
                }, {
                    id: 'co-may',
                    name: 'Revenue collected Via Card in May',
                    /*  stack: 1, */
                    data: [
                        ['1st May', 4],
                        ['2nd May', 3]
                    ]
                }, {
                    id: 'co-jun',
                    name: 'Revenue collected Via Card in June',
                    /* stack: 1, */
                    data: [
                        ['1st Jun', 4],
                        ['2nd Jun', 3],
                        ['3rd jun', 3]
                    ]
                }, {
                    id: 'co-jul',
                    name: 'Revenue collected Via Card in July',
                    data: [
                        ['1st Jul', 3],
                        ['2nd Jul', 5],
                        ['3rd Jul', 6],
                        ['4th Jul', 2],
                        ['5th Jul', 2]
                    ]
                }, {
                    id: 'co-aug',
                    name: 'Revenue collected Via Card in August',
                    data: [
                        ['1st Aug', 1],
                        ['2nd Aug', 5]
                    ]
                }, {
                    id: 'co-sep',
                    name: 'Revenue collected Via Card in September',
                    data: [
                        ['1st Sep', 2],
                        ['2nd Sep', 3],
                        ['3rd Sep', 2]
                    ]
                }, {
                    id: 'co-oct',
                    name: 'Revenue collected Via Card in October',
                    /*   stack: 1, */
                    data: [
                        ['1st Oct', 2],
                        ['2nd Oct', 3],
                        ['3rd Oct', 1],
                        ['4th Oct', 1],
                        ['5th Oct', 1]
                    ]
                }, {
                    id: 'co-nov',
                    name: 'Revenue collected Via Card in November',
                    /*  stack: 1, */
                    data: [
                        ['1st Nov', 4],
                        ['2nd Nov', 3]
                    ]
                }, {
                    id: 'co-dec',
                    name: 'Revenue collected Via Card in December',
                    /* stack: 1, */
                    data: [
                        ['1st Dec', 4],
                        ['2nd Dec', 3],
                        ['3rd Dec', 3]
                    ]
                }
            ]
        }
    })
});