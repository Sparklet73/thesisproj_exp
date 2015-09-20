$(document).ready(function () {
    $(function () {
        $('#timeChart').highcharts({
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'Tweets per day'
            },
            subtitle: {
                text: 'Click and drag in the plot area to zoom in. <br> Click the point to add tag.'
            },
            credits: {
                enabled: false
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'Number of tweets'
                },
                min: 0
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                },
                series: {
                    cursor: 'pointer',
                    point: {
                        events: {
                            click: function () {
                                d = Highcharts.dateFormat('%Y-%m-%d', this.x);
//                                $('#TagsArea').append($("<option></option>").attr("value", "option" + d).text(d));
                                $('#TagsArea').multiSelect('addOption', {value: "Time|" + d, text: d, index: 0, nested: 'Time'});
//                                $('#TagsArea').multiSelect('refresh');
                            }
                        }
                    }
                }
            },
            series: [{
                    type: 'area',
                    name: '# of tweets',
                    data: [[Date.UTC(2014,07,05),376],[Date.UTC(2014,07,06),473],[Date.UTC(2014,07,07),421],[Date.UTC(2014,07,08),514],[Date.UTC(2014,07,09),305],[Date.UTC(2014,07,10),382],[Date.UTC(2014,07,11),393],[Date.UTC(2014,07,12),523],[Date.UTC(2014,07,13),503],[Date.UTC(2014,07,14),419],[Date.UTC(2014,07,15),357],[Date.UTC(2014,07,16),291],[Date.UTC(2014,07,17),290],[Date.UTC(2014,07,18),438],[Date.UTC(2014,07,19),442],[Date.UTC(2014,07,20),410],[Date.UTC(2014,07,21),329],[Date.UTC(2014,07,22),430],[Date.UTC(2014,07,23),269],[Date.UTC(2014,07,24),220],[Date.UTC(2014,07,25),358],[Date.UTC(2014,07,26),593],[Date.UTC(2014,07,27),420],[Date.UTC(2014,07,28),411],[Date.UTC(2014,07,29),440],[Date.UTC(2014,07,30),438],[Date.UTC(2014,07,31),428],[Date.UTC(2014,08,01),436],[Date.UTC(2014,08,02),438],[Date.UTC(2014,08,03),445],[Date.UTC(2014,08,04),420],[Date.UTC(2014,08,05),384],[Date.UTC(2014,08,06),293],[Date.UTC(2014,08,07),413],[Date.UTC(2014,08,08),405],[Date.UTC(2014,08,09),557],[Date.UTC(2014,08,10),555],[Date.UTC(2014,08,11),654],[Date.UTC(2014,08,12),755],[Date.UTC(2014,08,13),543],[Date.UTC(2014,08,14),825],[Date.UTC(2014,08,15),693],[Date.UTC(2014,08,16),773],[Date.UTC(2014,08,17),879],[Date.UTC(2014,08,18),1023],[Date.UTC(2014,08,19),833],[Date.UTC(2014,08,20),660],[Date.UTC(2014,08,21),602],[Date.UTC(2014,08,22),615],[Date.UTC(2014,08,23),834],[Date.UTC(2014,08,24),718],[Date.UTC(2014,08,25),694],[Date.UTC(2014,08,26),624],[Date.UTC(2014,08,27),649],[Date.UTC(2014,08,28),969],[Date.UTC(2014,08,29),1023],[Date.UTC(2014,08,30),892],[Date.UTC(2014,09,01),763],[Date.UTC(2014,09,02),602],[Date.UTC(2014,09,03),971],[Date.UTC(2014,09,04),884],[Date.UTC(2014,09,05),802],[Date.UTC(2014,09,06),1033],[Date.UTC(2014,09,07),1246],[Date.UTC(2014,09,08),1185],[Date.UTC(2014,09,09),1038],[Date.UTC(2014,09,10),631],[Date.UTC(2014,09,11),626],[Date.UTC(2014,09,12),708],[Date.UTC(2014,09,13),815],[Date.UTC(2014,09,14),810],[Date.UTC(2014,09,15),755],[Date.UTC(2014,09,16),784],[Date.UTC(2014,09,17),703],[Date.UTC(2014,09,18),563],[Date.UTC(2014,09,19),611],[Date.UTC(2014,09,20),623],[Date.UTC(2014,09,21),663],[Date.UTC(2014,09,22),826],[Date.UTC(2014,09,23),1010],[Date.UTC(2014,09,24),1033],[Date.UTC(2014,09,25),696],[Date.UTC(2014,09,26),629],[Date.UTC(2014,09,27),956],[Date.UTC(2014,09,28),962],[Date.UTC(2014,09,29),939],[Date.UTC(2014,09,30),1039],[Date.UTC(2014,09,31),1059],[Date.UTC(2014,10,01),775],[Date.UTC(2014,10,02),963],[Date.UTC(2014,10,03),782],[Date.UTC(2014,10,04),1049],[Date.UTC(2014,10,05),1290],[Date.UTC(2014,10,06),1019],[Date.UTC(2014,10,07),2358],[Date.UTC(2014,10,08),2065],[Date.UTC(2014,10,09),1298],[Date.UTC(2014,10,10),1737],[Date.UTC(2014,10,11),1749],[Date.UTC(2014,10,12),1836],[Date.UTC(2014,10,13),1403],[Date.UTC(2014,10,14),1219],[Date.UTC(2014,10,15),1256],[Date.UTC(2014,10,16),1655],[Date.UTC(2014,10,17),1960],[Date.UTC(2014,10,18),1899],[Date.UTC(2014,10,19),1748],[Date.UTC(2014,10,20),1697],[Date.UTC(2014,10,21),1729],[Date.UTC(2014,10,22),2109],[Date.UTC(2014,10,23),1859],[Date.UTC(2014,10,24),2167],[Date.UTC(2014,10,25),1819],[Date.UTC(2014,10,26),2644],[Date.UTC(2014,10,27),2499],[Date.UTC(2014,10,28),3382],[Date.UTC(2014,10,29),10608],[Date.UTC(2014,10,30),7930],[Date.UTC(2014,11,01),4002],[Date.UTC(2014,11,02),3128],[Date.UTC(2014,11,03),2040],[Date.UTC(2014,11,04),1722],[Date.UTC(2014,11,05),1335],[Date.UTC(2014,11,06),1029],[Date.UTC(2014,11,07),894],[Date.UTC(2014,11,08),1075],[Date.UTC(2014,11,09),1051],[Date.UTC(2014,11,10),879],[Date.UTC(2014,11,11),732],[Date.UTC(2014,11,12),1021],[Date.UTC(2014,11,13),559],[Date.UTC(2014,11,14),668],[Date.UTC(2014,11,15),701],[Date.UTC(2014,11,16),599],[Date.UTC(2014,11,17),191]]
                            //javascript's month begins from zero.
                }]
        });
    });
});