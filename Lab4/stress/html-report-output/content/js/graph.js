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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 931.0, "minX": 0.0, "maxY": 6927.0, "series": [{"data": [[0.0, 931.0], [0.1, 931.0], [0.2, 931.0], [0.3, 931.0], [0.4, 1846.0], [0.5, 1846.0], [0.6, 1846.0], [0.7, 1846.0], [0.8, 2387.0], [0.9, 2387.0], [1.0, 2387.0], [1.1, 2387.0], [1.2, 2387.0], [1.3, 2395.0], [1.4, 2395.0], [1.5, 2395.0], [1.6, 2403.0], [1.7, 2403.0], [1.8, 2403.0], [1.9, 2403.0], [2.0, 2411.0], [2.1, 2411.0], [2.2, 2411.0], [2.3, 2411.0], [2.4, 2419.0], [2.5, 2419.0], [2.6, 2419.0], [2.7, 2419.0], [2.8, 2427.0], [2.9, 2427.0], [3.0, 2427.0], [3.1, 2427.0], [3.2, 2435.0], [3.3, 2435.0], [3.4, 2435.0], [3.5, 2435.0], [3.6, 2443.0], [3.7, 2443.0], [3.8, 2443.0], [3.9, 2443.0], [4.0, 2451.0], [4.1, 2451.0], [4.2, 2451.0], [4.3, 2451.0], [4.4, 2459.0], [4.5, 2459.0], [4.6, 2459.0], [4.7, 2459.0], [4.8, 2467.0], [4.9, 2467.0], [5.0, 2467.0], [5.1, 2467.0], [5.2, 2476.0], [5.3, 2476.0], [5.4, 2476.0], [5.5, 2476.0], [5.6, 2476.0], [5.7, 2484.0], [5.8, 2484.0], [5.9, 2484.0], [6.0, 2484.0], [6.1, 2492.0], [6.2, 2492.0], [6.3, 2492.0], [6.4, 2492.0], [6.5, 2499.0], [6.6, 2499.0], [6.7, 2499.0], [6.8, 2499.0], [6.9, 2511.0], [7.0, 2511.0], [7.1, 2511.0], [7.2, 2511.0], [7.3, 2518.0], [7.4, 2518.0], [7.5, 2518.0], [7.6, 2518.0], [7.7, 2523.0], [7.8, 2523.0], [7.9, 2523.0], [8.0, 2523.0], [8.1, 2533.0], [8.2, 2533.0], [8.3, 2533.0], [8.4, 2533.0], [8.5, 2537.0], [8.6, 2537.0], [8.7, 2537.0], [8.8, 2537.0], [8.9, 2545.0], [9.0, 2545.0], [9.1, 2545.0], [9.2, 2545.0], [9.3, 2556.0], [9.4, 2556.0], [9.5, 2556.0], [9.6, 2556.0], [9.7, 2561.0], [9.8, 2561.0], [9.9, 2561.0], [10.0, 2561.0], [10.1, 2572.0], [10.2, 2572.0], [10.3, 2572.0], [10.4, 2572.0], [10.5, 2577.0], [10.6, 2577.0], [10.7, 2577.0], [10.8, 2577.0], [10.9, 2585.0], [11.0, 2585.0], [11.1, 2585.0], [11.2, 2585.0], [11.3, 2594.0], [11.4, 2594.0], [11.5, 2594.0], [11.6, 2594.0], [11.7, 2601.0], [11.8, 2601.0], [11.9, 2601.0], [12.0, 2601.0], [12.1, 2608.0], [12.2, 2608.0], [12.3, 2608.0], [12.4, 2608.0], [12.5, 2616.0], [12.6, 2616.0], [12.7, 2616.0], [12.8, 2616.0], [12.9, 2624.0], [13.0, 2624.0], [13.1, 2624.0], [13.2, 2624.0], [13.3, 2632.0], [13.4, 2632.0], [13.5, 2632.0], [13.6, 2632.0], [13.7, 2640.0], [13.8, 2640.0], [13.9, 2640.0], [14.0, 2640.0], [14.1, 2651.0], [14.2, 2651.0], [14.3, 2651.0], [14.4, 2651.0], [14.5, 2656.0], [14.6, 2656.0], [14.7, 2656.0], [14.8, 2656.0], [14.9, 2662.0], [15.0, 2662.0], [15.1, 2662.0], [15.2, 2662.0], [15.3, 2672.0], [15.4, 2672.0], [15.5, 2672.0], [15.6, 2672.0], [15.7, 2678.0], [15.8, 2678.0], [15.9, 2678.0], [16.0, 2678.0], [16.1, 2687.0], [16.2, 2687.0], [16.3, 2687.0], [16.4, 2687.0], [16.5, 2694.0], [16.6, 2694.0], [16.7, 2694.0], [16.8, 2694.0], [16.9, 2705.0], [17.0, 2705.0], [17.1, 2705.0], [17.2, 2705.0], [17.3, 2715.0], [17.4, 2715.0], [17.5, 2715.0], [17.6, 2718.0], [17.7, 2718.0], [17.8, 2718.0], [17.9, 2718.0], [18.0, 2726.0], [18.1, 2726.0], [18.2, 2726.0], [18.3, 2726.0], [18.4, 2734.0], [18.5, 2734.0], [18.6, 2734.0], [18.7, 2734.0], [18.8, 2742.0], [18.9, 2742.0], [19.0, 2742.0], [19.1, 2742.0], [19.2, 2750.0], [19.3, 2750.0], [19.4, 2750.0], [19.5, 2750.0], [19.6, 2761.0], [19.7, 2761.0], [19.8, 2761.0], [19.9, 2761.0], [20.0, 2767.0], [20.1, 2767.0], [20.2, 2767.0], [20.3, 2767.0], [20.4, 2775.0], [20.5, 2775.0], [20.6, 2775.0], [20.7, 2775.0], [20.8, 2783.0], [20.9, 2783.0], [21.0, 2783.0], [21.1, 2783.0], [21.2, 2790.0], [21.3, 2790.0], [21.4, 2790.0], [21.5, 2790.0], [21.6, 2802.0], [21.7, 2802.0], [21.8, 2802.0], [21.9, 2802.0], [22.0, 2805.0], [22.1, 2805.0], [22.2, 2805.0], [22.3, 2805.0], [22.4, 2813.0], [22.5, 2813.0], [22.6, 2813.0], [22.7, 2813.0], [22.8, 2821.0], [22.9, 2821.0], [23.0, 2821.0], [23.1, 2821.0], [23.2, 2829.0], [23.3, 2829.0], [23.4, 2829.0], [23.5, 2829.0], [23.6, 2837.0], [23.7, 2837.0], [23.8, 2837.0], [23.9, 2837.0], [24.0, 2845.0], [24.1, 2845.0], [24.2, 2845.0], [24.3, 2845.0], [24.4, 2853.0], [24.5, 2853.0], [24.6, 2853.0], [24.7, 2853.0], [24.8, 2861.0], [24.9, 2861.0], [25.0, 2861.0], [25.1, 2861.0], [25.2, 2869.0], [25.3, 2869.0], [25.4, 2869.0], [25.5, 2869.0], [25.6, 2878.0], [25.7, 2878.0], [25.8, 2878.0], [25.9, 2878.0], [26.0, 2886.0], [26.1, 2886.0], [26.2, 2886.0], [26.3, 2886.0], [26.4, 2893.0], [26.5, 2893.0], [26.6, 2893.0], [26.7, 2893.0], [26.8, 2901.0], [26.9, 2901.0], [27.0, 2901.0], [27.1, 2901.0], [27.2, 2909.0], [27.3, 2909.0], [27.4, 2909.0], [27.5, 2909.0], [27.6, 2920.0], [27.7, 2920.0], [27.8, 2920.0], [27.9, 2920.0], [28.0, 2925.0], [28.1, 2925.0], [28.2, 2925.0], [28.3, 2925.0], [28.4, 2932.0], [28.5, 2932.0], [28.6, 2932.0], [28.7, 2932.0], [28.8, 2940.0], [28.9, 2940.0], [29.0, 2940.0], [29.1, 2940.0], [29.2, 2952.0], [29.3, 2952.0], [29.4, 2952.0], [29.5, 2952.0], [29.6, 2957.0], [29.7, 2957.0], [29.8, 2957.0], [29.9, 2957.0], [30.0, 2969.0], [30.1, 2969.0], [30.2, 2969.0], [30.3, 2969.0], [30.4, 2971.0], [30.5, 2971.0], [30.6, 2971.0], [30.7, 2971.0], [30.8, 2981.0], [30.9, 2981.0], [31.0, 2981.0], [31.1, 2981.0], [31.2, 2987.0], [31.3, 2987.0], [31.4, 2987.0], [31.5, 2987.0], [31.6, 2995.0], [31.7, 2995.0], [31.8, 2995.0], [31.9, 2995.0], [32.0, 3003.0], [32.1, 3003.0], [32.2, 3003.0], [32.3, 3003.0], [32.4, 3013.0], [32.5, 3013.0], [32.6, 3013.0], [32.7, 3013.0], [32.8, 3023.0], [32.9, 3023.0], [33.0, 3023.0], [33.1, 3023.0], [33.2, 5619.0], [33.3, 5619.0], [33.4, 5619.0], [33.5, 5619.0], [33.6, 5628.0], [33.7, 5628.0], [33.8, 5628.0], [33.9, 5628.0], [34.0, 5636.0], [34.1, 5636.0], [34.2, 5636.0], [34.3, 5636.0], [34.4, 5649.0], [34.5, 5649.0], [34.6, 5649.0], [34.7, 5649.0], [34.8, 5651.0], [34.9, 5651.0], [35.0, 5651.0], [35.1, 5651.0], [35.2, 5663.0], [35.3, 5663.0], [35.4, 5663.0], [35.5, 5663.0], [35.6, 5668.0], [35.7, 5668.0], [35.8, 5668.0], [35.9, 5668.0], [36.0, 5676.0], [36.1, 5676.0], [36.2, 5676.0], [36.3, 5676.0], [36.4, 5683.0], [36.5, 5683.0], [36.6, 5683.0], [36.7, 5683.0], [36.8, 5691.0], [36.9, 5691.0], [37.0, 5691.0], [37.1, 5691.0], [37.2, 5699.0], [37.3, 5699.0], [37.4, 5699.0], [37.5, 5699.0], [37.6, 5711.0], [37.7, 5711.0], [37.8, 5711.0], [37.9, 5711.0], [38.0, 5716.0], [38.1, 5716.0], [38.2, 5716.0], [38.3, 5716.0], [38.4, 5723.0], [38.5, 5723.0], [38.6, 5723.0], [38.7, 5723.0], [38.8, 5735.0], [38.9, 5735.0], [39.0, 5735.0], [39.1, 5735.0], [39.2, 5747.0], [39.3, 5747.0], [39.4, 5747.0], [39.5, 5747.0], [39.6, 5747.0], [39.7, 5747.0], [39.8, 5747.0], [39.9, 5747.0], [40.0, 5763.0], [40.1, 5763.0], [40.2, 5763.0], [40.3, 5763.0], [40.4, 5771.0], [40.5, 5771.0], [40.6, 5771.0], [40.7, 5771.0], [40.8, 5778.0], [40.9, 5778.0], [41.0, 5778.0], [41.1, 5778.0], [41.2, 5785.0], [41.3, 5785.0], [41.4, 5785.0], [41.5, 5785.0], [41.6, 5792.0], [41.7, 5792.0], [41.8, 5792.0], [41.9, 5792.0], [42.0, 5801.0], [42.1, 5801.0], [42.2, 5801.0], [42.3, 5801.0], [42.4, 5809.0], [42.5, 5809.0], [42.6, 5809.0], [42.7, 5809.0], [42.8, 5816.0], [42.9, 5816.0], [43.0, 5816.0], [43.1, 5816.0], [43.2, 5826.0], [43.3, 5826.0], [43.4, 5826.0], [43.5, 5826.0], [43.6, 5834.0], [43.7, 5834.0], [43.8, 5834.0], [43.9, 5834.0], [44.0, 5840.0], [44.1, 5840.0], [44.2, 5840.0], [44.3, 5840.0], [44.4, 5847.0], [44.5, 5847.0], [44.6, 5847.0], [44.7, 5847.0], [44.8, 5860.0], [44.9, 5860.0], [45.0, 5860.0], [45.1, 5860.0], [45.2, 5865.0], [45.3, 5865.0], [45.4, 5865.0], [45.5, 5865.0], [45.6, 5871.0], [45.7, 5871.0], [45.8, 5871.0], [45.9, 5871.0], [46.0, 5878.0], [46.1, 5878.0], [46.2, 5878.0], [46.3, 5878.0], [46.4, 5886.0], [46.5, 5886.0], [46.6, 5886.0], [46.7, 5886.0], [46.8, 5899.0], [46.9, 5899.0], [47.0, 5899.0], [47.1, 5899.0], [47.2, 5902.0], [47.3, 5902.0], [47.4, 5902.0], [47.5, 5902.0], [47.6, 5910.0], [47.7, 5910.0], [47.8, 5910.0], [47.9, 5910.0], [48.0, 5915.0], [48.1, 5915.0], [48.2, 5915.0], [48.3, 5915.0], [48.4, 5921.0], [48.5, 5921.0], [48.6, 5921.0], [48.7, 5921.0], [48.8, 5934.0], [48.9, 5934.0], [49.0, 5934.0], [49.1, 5934.0], [49.2, 5938.0], [49.3, 5938.0], [49.4, 5938.0], [49.5, 5938.0], [49.6, 5950.0], [49.7, 5950.0], [49.8, 5950.0], [49.9, 5950.0], [50.0, 5958.0], [50.1, 5958.0], [50.2, 5958.0], [50.3, 5958.0], [50.4, 5961.0], [50.5, 5961.0], [50.6, 5961.0], [50.7, 5961.0], [50.8, 5975.0], [50.9, 5975.0], [51.0, 5975.0], [51.1, 5975.0], [51.2, 5982.0], [51.3, 5982.0], [51.4, 5982.0], [51.5, 5982.0], [51.6, 5989.0], [51.7, 5989.0], [51.8, 5989.0], [51.9, 5989.0], [52.0, 5998.0], [52.1, 5998.0], [52.2, 5998.0], [52.3, 5998.0], [52.4, 6006.0], [52.5, 6006.0], [52.6, 6006.0], [52.7, 6006.0], [52.8, 6014.0], [52.9, 6014.0], [53.0, 6014.0], [53.1, 6014.0], [53.2, 6025.0], [53.3, 6025.0], [53.4, 6025.0], [53.5, 6025.0], [53.6, 6030.0], [53.7, 6030.0], [53.8, 6030.0], [53.9, 6030.0], [54.0, 6037.0], [54.1, 6037.0], [54.2, 6037.0], [54.3, 6037.0], [54.4, 6041.0], [54.5, 6041.0], [54.6, 6041.0], [54.7, 6041.0], [54.8, 6050.0], [54.9, 6050.0], [55.0, 6050.0], [55.1, 6050.0], [55.2, 6067.0], [55.3, 6067.0], [55.4, 6067.0], [55.5, 6067.0], [55.6, 6076.0], [55.7, 6076.0], [55.8, 6076.0], [55.9, 6076.0], [56.0, 6083.0], [56.1, 6083.0], [56.2, 6083.0], [56.3, 6083.0], [56.4, 6086.0], [56.5, 6086.0], [56.6, 6086.0], [56.7, 6086.0], [56.8, 6088.0], [56.9, 6088.0], [57.0, 6088.0], [57.1, 6088.0], [57.2, 6097.0], [57.3, 6097.0], [57.4, 6097.0], [57.5, 6097.0], [57.6, 6107.0], [57.7, 6107.0], [57.8, 6107.0], [57.9, 6107.0], [58.0, 6113.0], [58.1, 6113.0], [58.2, 6113.0], [58.3, 6113.0], [58.4, 6120.0], [58.5, 6120.0], [58.6, 6120.0], [58.7, 6120.0], [58.8, 6131.0], [58.9, 6131.0], [59.0, 6131.0], [59.1, 6131.0], [59.2, 6136.0], [59.3, 6136.0], [59.4, 6136.0], [59.5, 6136.0], [59.6, 6145.0], [59.7, 6145.0], [59.8, 6145.0], [59.9, 6145.0], [60.0, 6152.0], [60.1, 6152.0], [60.2, 6152.0], [60.3, 6152.0], [60.4, 6160.0], [60.5, 6160.0], [60.6, 6160.0], [60.7, 6160.0], [60.8, 6170.0], [60.9, 6170.0], [61.0, 6170.0], [61.1, 6170.0], [61.2, 6177.0], [61.3, 6177.0], [61.4, 6177.0], [61.5, 6177.0], [61.6, 6190.0], [61.7, 6190.0], [61.8, 6190.0], [61.9, 6190.0], [62.0, 6199.0], [62.1, 6199.0], [62.2, 6199.0], [62.3, 6199.0], [62.4, 6200.0], [62.5, 6200.0], [62.6, 6200.0], [62.7, 6200.0], [62.8, 6211.0], [62.9, 6211.0], [63.0, 6211.0], [63.1, 6211.0], [63.2, 6220.0], [63.3, 6220.0], [63.4, 6220.0], [63.5, 6220.0], [63.6, 6226.0], [63.7, 6226.0], [63.8, 6226.0], [63.9, 6226.0], [64.0, 6238.0], [64.1, 6238.0], [64.2, 6238.0], [64.3, 6238.0], [64.4, 6242.0], [64.5, 6242.0], [64.6, 6242.0], [64.7, 6242.0], [64.8, 6250.0], [64.9, 6250.0], [65.0, 6250.0], [65.1, 6250.0], [65.2, 6258.0], [65.3, 6258.0], [65.4, 6258.0], [65.5, 6258.0], [65.6, 6266.0], [65.7, 6266.0], [65.8, 6266.0], [65.9, 6266.0], [66.0, 6275.0], [66.1, 6275.0], [66.2, 6275.0], [66.3, 6275.0], [66.4, 6283.0], [66.5, 6283.0], [66.6, 6283.0], [66.7, 6283.0], [66.8, 6294.0], [66.9, 6294.0], [67.0, 6294.0], [67.1, 6294.0], [67.2, 6297.0], [67.3, 6297.0], [67.4, 6297.0], [67.5, 6297.0], [67.6, 6303.0], [67.7, 6303.0], [67.8, 6303.0], [67.9, 6303.0], [68.0, 6314.0], [68.1, 6314.0], [68.2, 6314.0], [68.3, 6314.0], [68.4, 6320.0], [68.5, 6320.0], [68.6, 6320.0], [68.7, 6320.0], [68.8, 6332.0], [68.9, 6332.0], [69.0, 6332.0], [69.1, 6332.0], [69.2, 6335.0], [69.3, 6335.0], [69.4, 6335.0], [69.5, 6335.0], [69.6, 6343.0], [69.7, 6343.0], [69.8, 6343.0], [69.9, 6343.0], [70.0, 6351.0], [70.1, 6351.0], [70.2, 6351.0], [70.3, 6351.0], [70.4, 6359.0], [70.5, 6359.0], [70.6, 6359.0], [70.7, 6359.0], [70.8, 6366.0], [70.9, 6366.0], [71.0, 6366.0], [71.1, 6366.0], [71.2, 6374.0], [71.3, 6374.0], [71.4, 6374.0], [71.5, 6374.0], [71.6, 6383.0], [71.7, 6383.0], [71.8, 6383.0], [71.9, 6383.0], [72.0, 6391.0], [72.1, 6391.0], [72.2, 6391.0], [72.3, 6391.0], [72.4, 6399.0], [72.5, 6399.0], [72.6, 6399.0], [72.7, 6399.0], [72.8, 6407.0], [72.9, 6407.0], [73.0, 6407.0], [73.1, 6407.0], [73.2, 6415.0], [73.3, 6415.0], [73.4, 6415.0], [73.5, 6415.0], [73.6, 6423.0], [73.7, 6423.0], [73.8, 6423.0], [73.9, 6423.0], [74.0, 6431.0], [74.1, 6431.0], [74.2, 6431.0], [74.3, 6431.0], [74.4, 6439.0], [74.5, 6439.0], [74.6, 6439.0], [74.7, 6439.0], [74.8, 6449.0], [74.9, 6449.0], [75.0, 6449.0], [75.1, 6449.0], [75.2, 6455.0], [75.3, 6455.0], [75.4, 6455.0], [75.5, 6455.0], [75.6, 6464.0], [75.7, 6464.0], [75.8, 6464.0], [75.9, 6464.0], [76.0, 6471.0], [76.1, 6471.0], [76.2, 6471.0], [76.3, 6471.0], [76.4, 6478.0], [76.5, 6478.0], [76.6, 6478.0], [76.7, 6478.0], [76.8, 6478.0], [76.9, 6489.0], [77.0, 6489.0], [77.1, 6489.0], [77.2, 6489.0], [77.3, 6494.0], [77.4, 6494.0], [77.5, 6494.0], [77.6, 6494.0], [77.7, 6502.0], [77.8, 6502.0], [77.9, 6502.0], [78.0, 6502.0], [78.1, 6510.0], [78.2, 6510.0], [78.3, 6510.0], [78.4, 6510.0], [78.5, 6518.0], [78.6, 6518.0], [78.7, 6518.0], [78.8, 6518.0], [78.9, 6524.0], [79.0, 6524.0], [79.1, 6524.0], [79.2, 6524.0], [79.3, 6534.0], [79.4, 6534.0], [79.5, 6534.0], [79.6, 6534.0], [79.7, 6541.0], [79.8, 6541.0], [79.9, 6541.0], [80.0, 6541.0], [80.1, 6550.0], [80.2, 6550.0], [80.3, 6550.0], [80.4, 6550.0], [80.5, 6561.0], [80.6, 6561.0], [80.7, 6561.0], [80.8, 6561.0], [80.9, 6565.0], [81.0, 6565.0], [81.1, 6565.0], [81.2, 6565.0], [81.3, 6573.0], [81.4, 6573.0], [81.5, 6573.0], [81.6, 6573.0], [81.7, 6582.0], [81.8, 6582.0], [81.9, 6582.0], [82.0, 6582.0], [82.1, 6592.0], [82.2, 6592.0], [82.3, 6592.0], [82.4, 6592.0], [82.5, 6598.0], [82.6, 6598.0], [82.7, 6598.0], [82.8, 6598.0], [82.9, 6605.0], [83.0, 6605.0], [83.1, 6605.0], [83.2, 6605.0], [83.3, 6613.0], [83.4, 6613.0], [83.5, 6613.0], [83.6, 6613.0], [83.7, 6621.0], [83.8, 6621.0], [83.9, 6621.0], [84.0, 6621.0], [84.1, 6629.0], [84.2, 6629.0], [84.3, 6629.0], [84.4, 6629.0], [84.5, 6635.0], [84.6, 6635.0], [84.7, 6635.0], [84.8, 6635.0], [84.9, 6643.0], [85.0, 6643.0], [85.1, 6643.0], [85.2, 6643.0], [85.3, 6650.0], [85.4, 6650.0], [85.5, 6650.0], [85.6, 6650.0], [85.7, 6657.0], [85.8, 6657.0], [85.9, 6657.0], [86.0, 6657.0], [86.1, 6663.0], [86.2, 6663.0], [86.3, 6663.0], [86.4, 6663.0], [86.5, 6673.0], [86.6, 6673.0], [86.7, 6673.0], [86.8, 6673.0], [86.9, 6685.0], [87.0, 6685.0], [87.1, 6685.0], [87.2, 6685.0], [87.3, 6689.0], [87.4, 6689.0], [87.5, 6689.0], [87.6, 6689.0], [87.7, 6697.0], [87.8, 6697.0], [87.9, 6697.0], [88.0, 6697.0], [88.1, 6705.0], [88.2, 6705.0], [88.3, 6705.0], [88.4, 6705.0], [88.5, 6714.0], [88.6, 6714.0], [88.7, 6714.0], [88.8, 6714.0], [88.9, 6722.0], [89.0, 6722.0], [89.1, 6722.0], [89.2, 6722.0], [89.3, 6730.0], [89.4, 6730.0], [89.5, 6730.0], [89.6, 6730.0], [89.7, 6737.0], [89.8, 6737.0], [89.9, 6737.0], [90.0, 6737.0], [90.1, 6746.0], [90.2, 6746.0], [90.3, 6746.0], [90.4, 6746.0], [90.5, 6754.0], [90.6, 6754.0], [90.7, 6754.0], [90.8, 6754.0], [90.9, 6762.0], [91.0, 6762.0], [91.1, 6762.0], [91.2, 6762.0], [91.3, 6770.0], [91.4, 6770.0], [91.5, 6770.0], [91.6, 6770.0], [91.7, 6778.0], [91.8, 6778.0], [91.9, 6778.0], [92.0, 6778.0], [92.1, 6786.0], [92.2, 6786.0], [92.3, 6786.0], [92.4, 6786.0], [92.5, 6793.0], [92.6, 6793.0], [92.7, 6793.0], [92.8, 6793.0], [92.9, 6800.0], [93.0, 6800.0], [93.1, 6800.0], [93.2, 6800.0], [93.3, 6808.0], [93.4, 6808.0], [93.5, 6808.0], [93.6, 6808.0], [93.7, 6816.0], [93.8, 6816.0], [93.9, 6816.0], [94.0, 6816.0], [94.1, 6826.0], [94.2, 6826.0], [94.3, 6826.0], [94.4, 6826.0], [94.5, 6832.0], [94.6, 6832.0], [94.7, 6832.0], [94.8, 6832.0], [94.9, 6840.0], [95.0, 6840.0], [95.1, 6840.0], [95.2, 6840.0], [95.3, 6848.0], [95.4, 6848.0], [95.5, 6848.0], [95.6, 6848.0], [95.7, 6856.0], [95.8, 6856.0], [95.9, 6856.0], [96.0, 6856.0], [96.1, 6867.0], [96.2, 6867.0], [96.3, 6867.0], [96.4, 6867.0], [96.5, 6872.0], [96.6, 6872.0], [96.7, 6872.0], [96.8, 6872.0], [96.9, 6879.0], [97.0, 6879.0], [97.1, 6879.0], [97.2, 6879.0], [97.3, 6879.0], [97.4, 6879.0], [97.5, 6879.0], [97.6, 6879.0], [97.7, 6887.0], [97.8, 6887.0], [97.9, 6887.0], [98.0, 6887.0], [98.1, 6895.0], [98.2, 6895.0], [98.3, 6895.0], [98.4, 6895.0], [98.5, 6903.0], [98.6, 6903.0], [98.7, 6903.0], [98.8, 6903.0], [98.9, 6911.0], [99.0, 6911.0], [99.1, 6911.0], [99.2, 6911.0], [99.3, 6919.0], [99.4, 6919.0], [99.5, 6919.0], [99.6, 6919.0], [99.7, 6927.0], [99.8, 6927.0], [99.9, 6927.0], [100.0, 6927.0]], "isOverall": false, "label": "Conf#1 Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 900.0, "maxY": 14.0, "series": [{"data": [[2300.0, 2.0], [2400.0, 13.0], [2500.0, 12.0], [2600.0, 13.0], [2800.0, 13.0], [2700.0, 12.0], [2900.0, 13.0], [3000.0, 3.0], [900.0, 1.0], [5600.0, 11.0], [5800.0, 13.0], [5700.0, 11.0], [6100.0, 12.0], [5900.0, 13.0], [6000.0, 13.0], [6300.0, 13.0], [6200.0, 13.0], [6600.0, 13.0], [6500.0, 13.0], [6400.0, 12.0], [6800.0, 14.0], [6900.0, 4.0], [6700.0, 12.0], [1800.0, 1.0]], "isOverall": false, "label": "Conf#1 Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 218.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 218.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 31.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 143.44800000000004, "minX": 1.66556208E12, "maxY": 143.44800000000004, "series": [{"data": [[1.66556208E12, 143.44800000000004]], "isOverall": false, "label": "Conf#1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66556208E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 931.0, "minX": 45.0, "maxY": 6907.0, "series": [{"data": [[45.0, 5691.0], [47.0, 5676.0], [48.0, 5747.0], [49.0, 5691.0], [51.0, 5619.0], [50.0, 5735.0], [53.0, 5636.0], [52.0, 5651.0], [54.0, 5628.0], [57.0, 5668.0], [59.0, 5747.0], [60.0, 5713.5], [63.0, 5717.0], [62.0, 5801.0], [67.0, 5748.0], [66.0, 5763.0], [65.0, 5723.0], [69.0, 5830.6], [68.0, 5810.4], [81.0, 5977.0952380952385], [107.0, 6340.25], [106.0, 6320.0], [105.0, 6308.5], [104.0, 6150.235294117649], [111.0, 6423.0], [110.0, 6415.0], [109.0, 6403.0], [108.0, 6374.6], [114.0, 6482.875], [113.0, 6439.0], [112.0, 6440.0], [116.0, 931.0], [123.0, 6541.0], [121.0, 6525.333333333333], [126.0, 6590.666666666667], [125.0, 6573.0], [124.0, 6558.666666666667], [128.0, 6617.0], [151.0, 6785.666666666667], [150.0, 6766.0], [148.0, 6704.538461538461], [147.0, 6639.0], [159.0, 6868.5], [158.0, 6848.0], [157.0, 6840.0], [156.0, 6832.0], [154.0, 6821.0], [153.0, 6808.0], [152.0, 6800.0], [167.0, 6879.0], [166.0, 6907.0], [160.0, 6663.0], [181.0, 2459.3333333333335], [180.0, 2419.0], [179.0, 2403.0], [177.0, 2387.0], [190.0, 2517.3333333333335], [189.0, 2499.0], [195.0, 2589.25], [194.0, 2572.0], [192.0, 2546.4], [223.0, 2715.0], [221.0, 2687.2], [220.0, 2662.0], [219.0, 2653.5], [218.0, 2636.0], [217.0, 2624.0], [216.0, 2612.0], [231.0, 1846.0], [228.0, 2775.0], [226.0, 2742.6], [224.0, 2718.0], [239.0, 2885.6666666666665], [238.0, 2865.0], [236.0, 2845.0], [235.0, 2829.0], [233.0, 2813.0], [232.0, 2796.0], [246.0, 2962.25], [244.0, 2940.0], [242.0, 2921.5], [241.0, 2901.0], [248.0, 3000.3333333333335]], "isOverall": false, "label": "Conf#1 Request", "isController": false}, {"data": [[143.4400000000001, 5082.427999999998]], "isOverall": false, "label": "Conf#1 Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 248.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 650.0, "minX": 1.66556208E12, "maxY": 963.5333333333333, "series": [{"data": [[1.66556208E12, 963.5333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66556208E12, 650.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66556208E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 5082.427999999998, "minX": 1.66556208E12, "maxY": 5082.427999999998, "series": [{"data": [[1.66556208E12, 5082.427999999998]], "isOverall": false, "label": "Conf#1 Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66556208E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 5081.827999999995, "minX": 1.66556208E12, "maxY": 5081.827999999995, "series": [{"data": [[1.66556208E12, 5081.827999999995]], "isOverall": false, "label": "Conf#1 Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66556208E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.3200000000000002, "minX": 1.66556208E12, "maxY": 0.3200000000000002, "series": [{"data": [[1.66556208E12, 0.3200000000000002]], "isOverall": false, "label": "Conf#1 Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66556208E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 931.0, "minX": 1.66556208E12, "maxY": 6927.0, "series": [{"data": [[1.66556208E12, 6927.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66556208E12, 6770.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66556208E12, 6917.4]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66556208E12, 6856.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.66556208E12, 931.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66556208E12, 6083.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66556208E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 1388.5, "minX": 1.0, "maxY": 6403.0, "series": [{"data": [[1.0, 1388.5], [81.0, 2705.0], [167.0, 6403.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[167.0, 5747.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 167.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 1388.5, "minX": 1.0, "maxY": 6403.0, "series": [{"data": [[1.0, 1388.5], [81.0, 2705.0], [167.0, 6403.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[167.0, 5739.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 167.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 4.166666666666667, "minX": 1.66556208E12, "maxY": 4.166666666666667, "series": [{"data": [[1.66556208E12, 4.166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66556208E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.66556208E12, "maxY": 3.65, "series": [{"data": [[1.66556208E12, 3.65]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.66556208E12, 0.5166666666666667]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66556208E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.66556208E12, "maxY": 3.65, "series": [{"data": [[1.66556208E12, 3.65]], "isOverall": false, "label": "Conf#1 Request-success", "isController": false}, {"data": [[1.66556208E12, 0.5166666666666667]], "isOverall": false, "label": "Conf#1 Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66556208E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.5166666666666667, "minX": 1.66556208E12, "maxY": 3.65, "series": [{"data": [[1.66556208E12, 3.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.66556208E12, 0.5166666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66556208E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

