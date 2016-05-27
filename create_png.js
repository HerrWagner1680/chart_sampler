       // Using version 42 of static GOOGLE CHARTS 
        //google.charts.load('42', {packages: ['corechart']});
        //google.charts.setOnLoadCallback(createPNG);
        //google.charts.setOnLoadCallback(drawsamplerChart);

    function makeOptionsGlobal(data, options, chartType) {
      //console.log("make Options Global: data: " + data);
      //console.log("make Options Global: options: " + options);
      //console.log("make Options Global: chartType: " + chartType);
      data_Global = data;
      options_Global = options;
      chart_type_Global = chartType;
    }


    function createPNG() {

      // Starting example default
      if (typeof data_Global === "undefined") { 
          data_Global = google.visualization.arrayToDataTable([
            ['Name', 'Length'],
            ['A', 23],
            ['B ', 16],
            ['C', 10],
            ['D', 31]
          ]);

          options_Global = {
            title: 'Title',
            vAxis: {title: 'Name'},
            hAxis: {title: 'Length'},
                  'width': 500,
                  'height': 400,
          };
      };

    
      //ASSIGNING METHOD NAMES FOR EACH GOOGLE CHART
      var areachart = new google.visualization.AreaChart(document.getElementById('chart_div'));
      var barchart = new google.visualization.BarChart(document.getElementById('chart_div'));
      var stepchart = new google.visualization.SteppedAreaChart(document.getElementById('chart_div'));
      var columnchart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      var linechart = new google.visualization.LineChart(document.getElementById('chart_div'));
      var piechart = new google.visualization.PieChart(document.getElementById('chart_div'));
      var scatterchart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

      // setting default valueif undefined
      if (typeof chart_type_Global === "undefined") { chart_type_Global = columnchart; new_chart_global = columnchart; };

      if (chart_type_Global === "areachart") { new_chart_global = areachart };
      if (chart_type_Global === "barchart") { new_chart_global = barchart };
      if (chart_type_Global === "stepchart") { new_chart_global = stepchart };
      if (chart_type_Global === "columnchart") { new_chart_global = columnchart };
      if (chart_type_Global === "linechart") { new_chart_global = linechart };
      if (chart_type_Global === "piechart") { new_chart_global = piechart };
      if (chart_type_Global === "scatterchart") { new_chart_global = scatterchart };


          // Wait for the chart to finish drawing before calling the getImageURI() method.
          google.visualization.events.addListener(new_chart_global, 'ready', function () {
            chart_div.innerHTML = '<img src="' + new_chart_global.getImageURI() + '">';

            //console.log(chart_div.innerHTML);
            //console.log(chart.getImageURI())

            var yada = $('input[name=chart_title]').val();
            //var shlub_jpg = document.getElementById("the_link_jpg");
            var shlub_png = document.getElementById("the_link_png");
            //shlub_jpg.href = chart.getImageURI();
            shlub_png.href = new_chart_global.getImageURI();
            //shlub_jpg.download = yada + ".jpg"
            shlub_png.download = yada + ".png"
          });

      //chart.draw(data, options);
      new_chart_global.draw(data_Global, options_Global)

      document.getElementById("the_link_png").click()

  };
