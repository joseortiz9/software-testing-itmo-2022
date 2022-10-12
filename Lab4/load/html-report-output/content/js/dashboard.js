/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 63.22222222222222, "KoPercent": 36.77777777777778};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.3161111111111111, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.4166666666666667, 500, 1500, "Conf#1 Request"], "isController": false}, {"data": [0.285, 500, 1500, "Conf#2 Request"], "isController": false}, {"data": [0.24666666666666667, 500, 1500, "Conf#3 Request"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 900, 331, 36.77777777777778, 1348.6977777777774, 1022, 2548, 1318.0, 1517.9, 1601.0, 2097.7300000000014, 23.31425018780924, 5.259366985726498, 3.5517803020490635], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["Conf#1 Request", 300, 50, 16.666666666666668, 1279.3966666666681, 1045, 1639, 1296.0, 1443.9, 1487.8, 1538.99, 7.924139570511635, 1.7875744538947145, 1.207193137695132], "isController": false}, {"data": ["Conf#2 Request", 300, 129, 43.0, 1361.269999999999, 1023, 2548, 1337.5, 1524.0, 1649.75, 1971.7300000000002, 7.772826199606177, 1.7534402852627218, 1.1841414913462536], "isController": false}, {"data": ["Conf#3 Request", 300, 152, 50.666666666666664, 1405.4266666666667, 1022, 2545, 1418.0, 1567.4, 1710.1, 2223.330000000001, 7.772222078292184, 1.7533040039897407, 1.184049457239825], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 1,440 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 3, 0.9063444108761329, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,500 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 5, 1.5105740181268883, 0.5555555555555556], "isController": false}, {"data": ["The operation lasted too long: It took 1,477 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,972 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,481 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 3, 0.9063444108761329, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,436 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,484 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 8, 2.416918429003021, 0.8888888888888888], "isController": false}, {"data": ["The operation lasted too long: It took 1,433 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,503 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,693 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,585 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 2,099 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,708 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,547 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 3, 0.9063444108761329, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,510 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,487 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,662 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,601 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,443 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,491 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,763 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,645 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 3, 0.9063444108761329, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,689 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,588 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,864 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 4, 1.2084592145015105, 0.4444444444444444], "isController": false}, {"data": ["The operation lasted too long: It took 2,546 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,544 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,568 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,460 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 7, 2.1148036253776437, 0.7777777777777778], "isController": false}, {"data": ["The operation lasted too long: It took 1,494 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,419 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 4, 1.2084592145015105, 0.4444444444444444], "isController": false}, {"data": ["The operation lasted too long: It took 1,509 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 5, 1.5105740181268883, 0.5555555555555556], "isController": false}, {"data": ["The operation lasted too long: It took 1,561 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,523 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 4, 1.2084592145015105, 0.4444444444444444], "isController": false}, {"data": ["The operation lasted too long: It took 1,402 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,413 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,446 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,457 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,467 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 3, 0.9063444108761329, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,456 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,471 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,725 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,412 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,409 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,513 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,524 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,507 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 3, 0.9063444108761329, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,641 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,514 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,536 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,529 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,711 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,498 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,437 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,415 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,612 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,454 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,480 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 4, 1.2084592145015105, 0.4444444444444444], "isController": false}, {"data": ["The operation lasted too long: It took 1,476 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 3, 0.9063444108761329, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,432 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,562 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 2,157 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,639 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,643 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,505 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,538 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 3, 0.9063444108761329, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,527 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,452 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,441 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 3, 0.9063444108761329, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,496 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 3, 0.9063444108761329, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,428 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,439 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 3, 0.9063444108761329, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,485 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 4, 1.2084592145015105, 0.4444444444444444], "isController": false}, {"data": ["The operation lasted too long: It took 1,474 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 5, 1.5105740181268883, 0.5555555555555556], "isController": false}, {"data": ["The operation lasted too long: It took 1,463 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,520 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 4, 1.2084592145015105, 0.4444444444444444], "isController": false}, {"data": ["The operation lasted too long: It took 2,548 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,518 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,522 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,499 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 7, 2.1148036253776437, 0.7777777777777778], "isController": false}, {"data": ["The operation lasted too long: It took 1,414 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,946 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,458 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,455 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,462 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 4, 1.2084592145015105, 0.4444444444444444], "isController": false}, {"data": ["The operation lasted too long: It took 1,411 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,640 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,448 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,508 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 3, 0.9063444108761329, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,472 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 3, 0.9063444108761329, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,465 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,515 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,741 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,825 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 2,127 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,650 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,613 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,483 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,501 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 3, 0.9063444108761329, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,512 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 10, 3.0211480362537766, 1.1111111111111112], "isController": false}, {"data": ["The operation lasted too long: It took 1,545 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,815 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,424 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 3, 0.9063444108761329, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,489 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 7, 2.1148036253776437, 0.7777777777777778], "isController": false}, {"data": ["The operation lasted too long: It took 1,478 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 4, 1.2084592145015105, 0.4444444444444444], "isController": false}, {"data": ["The operation lasted too long: It took 1,468 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,479 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,493 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,445 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 3, 0.9063444108761329, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,434 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,502 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 8, 2.416918429003021, 0.8888888888888888], "isController": false}, {"data": ["The operation lasted too long: It took 1,535 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 4, 1.2084592145015105, 0.4444444444444444], "isController": false}, {"data": ["The operation lasted too long: It took 2,544 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,403 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,425 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,488 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 8, 2.416918429003021, 0.8888888888888888], "isController": false}, {"data": ["The operation lasted too long: It took 1,492 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,495 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 3, 0.9063444108761329, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,447 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,451 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 5, 1.5105740181268883, 0.5555555555555556], "isController": false}, {"data": ["The operation lasted too long: It took 1,470 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,466 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 4, 1.2084592145015105, 0.4444444444444444], "isController": false}, {"data": ["The operation lasted too long: It took 1,469 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,422 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,444 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 4, 1.2084592145015105, 0.4444444444444444], "isController": false}, {"data": ["The operation lasted too long: It took 1,688 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 2,545 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,521 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,589 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,526 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,504 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 3, 0.9063444108761329, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,418 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 3, 0.9063444108761329, 0.3333333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,692 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,475 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,449 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,497 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,431 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,442 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 6, 1.8126888217522659, 0.6666666666666666], "isController": false}, {"data": ["The operation lasted too long: It took 1,453 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,464 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 4, 1.2084592145015105, 0.4444444444444444], "isController": false}, {"data": ["The operation lasted too long: It took 1,829 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,543 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,506 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,945 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,629 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,539 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 1,405 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}, {"data": ["The operation lasted too long: It took 1,517 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, 0.6042296072507553, 0.2222222222222222], "isController": false}, {"data": ["The operation lasted too long: It took 2,224 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 1, 0.3021148036253776, 0.1111111111111111], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 900, 331, "The operation lasted too long: It took 1,512 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 10, "The operation lasted too long: It took 1,484 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 8, "The operation lasted too long: It took 1,502 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 8, "The operation lasted too long: It took 1,488 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 8, "The operation lasted too long: It took 1,460 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 7], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["Conf#1 Request", 300, 50, "The operation lasted too long: It took 1,484 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, "The operation lasted too long: It took 1,462 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, "The operation lasted too long: It took 1,476 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, "The operation lasted too long: It took 1,449 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2, "The operation lasted too long: It took 1,419 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 2], "isController": false}, {"data": ["Conf#2 Request", 300, 129, "The operation lasted too long: It took 1,512 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 7, "The operation lasted too long: It took 1,484 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 5, "The operation lasted too long: It took 1,489 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 4, "The operation lasted too long: It took 1,451 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 4, "The operation lasted too long: It took 1,442 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 4], "isController": false}, {"data": ["Conf#3 Request", 300, 152, "The operation lasted too long: It took 1,460 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 7, "The operation lasted too long: It took 1,502 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 7, "The operation lasted too long: It took 1,499 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 5, "The operation lasted too long: It took 1,488 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 4, "The operation lasted too long: It took 1,474 milliseconds, but should not have lasted longer than 1,400 milliseconds.", 4], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
