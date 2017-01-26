google.charts.load("current", {packages:["timeline"]});
google.charts.setOnLoadCallback(drawChart);
var today = new Date();

function drawChart() {
  var container = document.getElementById('timeline-container');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();
  dataTable.addColumn({ type: 'string', id: 'Module' })
  dataTable.addColumn({ type: 'string', id: 'Projet' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });
  dataTable.addRows([
    [ '\0'                                 ,  'Maintenant'                            ,  new Date(), new Date() ],
    [ 'B4 - Système Unix - Mémoire'        ,  'Malloc'                                ,  new Date(2017, 0, 23), new Date(2017, 1, 12) ],
    [ 'B4 - C++'                           ,  'NanoTekSpice'                          ,  new Date(2017, 0, 23), new Date(2017, 2, 5)  ],
    [ 'B4 - Écrits professionnels'         ,  'Mission délicate: recadrer un collègue',  new Date(2017, 0, 30), new Date(2017, 1, 12) ],
    [ 'B4 - Prog Elem Appliquee / Projet'  ,  'Trade'                                 ,  new Date(2017, 0, 30), new Date(2017, 5, 11) ],
    [ 'B4 - Écrits professionnels'         ,  'Diaporama pour décrocher 1M$'          ,  new Date(2017, 1, 20), new Date(2017, 2, 5)  ],
    [ 'B4 - Sécurité Web'                  ,  'SHODAN Call For Paper'                 ,  new Date(2017, 1, 12), new Date(2017, 4, 3)  ],
    [ 'B4 - Système Unix - Mémoire'        ,  'nm/objdump'                            ,  new Date(2017, 1, 13), new Date(2017, 1, 26) ],
    [ 'B4 - Sécurité Web'                  ,  'SHODAN'                                ,  new Date(2017, 1, 13), new Date(2017, 2, 12) ],
    [ 'B4 - Système Unix - Concurrence'    ,  'Philosophes'                           ,  new Date(2017, 2, 6) , new Date(2017, 2, 19) ],
    [ 'B4 - Écrits professionnels'         ,  'Rédiger un bilan d\'expérience'        ,  new Date(2017, 2, 6) , new Date(2017, 2, 26) ],
    [ 'B4 - C++'                           ,  'Arcade'                                ,  new Date(2017, 2, 6) , new Date(2017, 3, 9)  ],
    [ 'B4 - Système Unix - Concurrence'    ,  'LemIPC'                                ,  new Date(2017, 2, 20), new Date(2017, 3, 2)  ],
    [ 'B4 - Système Unix - Instrumentation',  'strace'                                ,  new Date(2017, 3, 3) , new Date(2017, 3, 16) ],
    [ 'B4 - C++ II'                        ,  'The Plazza'                            ,  new Date(2017, 3, 10), new Date(2017, 3, 30) ],
    [ 'B4 - Système Unix - Instrumentation',  'ftrace'                                ,  new Date(2017, 3, 17), new Date(2017, 4, 7)  ],
    [ 'B4 - C++ II'                        ,  'Indie Studio'                          ,  new Date(2017, 4, 1) , new Date(2017, 5, 11) ],
    [ 'B4 - Systeme Unix - Réseau'         ,  'MyFTP'                                 ,  new Date(2017, 4, 8) , new Date(2017, 4, 21) ],
    [ 'B4 - Administration Système'        ,  'Projet My NAS'                         ,  new Date(2017, 4, 15), new Date(2017, 5, 18) ],
    [ 'B4 - Systeme Unix - Réseau'         ,  'MyIRC'                                 ,  new Date(2017, 4, 22), new Date(2017, 5, 11) ],
    [ 'B4 - Systeme Unix - Réseau'         ,  'Zappy'                                 ,  new Date(2017, 4, 29), new Date(2017, 6, 2)  ],
  ]);


  chart.draw(dataTable);

  nowLine('timeline-container');

  google.visualization.events.addListener(chart, 'onmouseover', function(obj){
    if(obj.row == 0){
      $('.google-visualization-tooltip').css('display', 'none');
    }
    nowLine('timeline-container');
  })

  google.visualization.events.addListener(chart, 'onmouseout', function(obj){
    nowLine('timeline-container');
  })
}

function nowLine(div) {

    //get the height of the timeline div
    var height;
    $('#' + div + ' rect').each(function(index) {
        var x = parseFloat($(this).attr('x'));
        var y = parseFloat($(this).attr('y'));

        if (x == 0 && y == 0) {
            height = parseFloat($(this).attr('height'))
        }
    })

    var nowWord = $('#' + div + ' text:contains("Maintenant")');

    nowWord.prev().first().attr('height', height + 'px').attr('width', '1px').attr('y', '0');
    // add this line to remove the display:none style on the vertical line
    $('#' + div + '  text:contains("Maintenant")').each(function(idx, value) {
        if (idx == 0) {
            $(value).parent().find("rect").first().removeAttr("style");
        } else if (idx == 1) {
            $(value).parent().find("rect").first().attr("style", "display:none;");
        }

    });
}
