       // Using version 42 of static GOOGLE CHARTS 
        google.charts.load('42', {packages: ['corechart']});
        google.charts.setOnLoadCallback(createPNG);
        //google.charts.setOnLoadCallback(drawsamplerChart);



    function createPNG() {

      // var data = google.visualization.arrayToDataTable([
      //   ['Element', 'Density', { role: 'style' }],
      //   ['Copper', 8.94, '#b87333', ],
      //   ['Silver', 10.49, 'silver'],
      //   ['Gold', 19.30, 'gold'],
      //   ['Platinum', 21.45, 'color: #e5e4e2' ]
      // ]);
      var data = google.visualization.arrayToDataTable([
          ['Name', 'Length'],
          ['A', 23],
          ['B ', 16],
          ['C', 10],
          ['D', 31]
      ]);

      var options = {
          title: 'Title',
          vAxis: {title: 'Name'},
          hAxis: {title: 'Length'},
                'width': 500,
                'height': 400,
      };


      //console.log("bigarray " + bigArrayForExport);
      //console.log("option data " + optionDataPNG );
      //var data = google.visualization.arrayToDataTable([bigArrayForExport]);
      //var options = {optionDataPNG};

      // var options = {
      //   title: "Density of Precious Metals, in g/cm^3",
      //   bar: {groupWidth: '95%'},
      //   legend: 'none',
      // };
      //var chartTitle = $('input[name=chart_title]').val();

      var chart_div = document.getElementById('chart_div');
      var chart = new google.visualization.ColumnChart(chart_div);

      // Wait for the chart to finish drawing before calling the getImageURI() method.
      google.visualization.events.addListener(chart, 'ready', function () {
        chart_div.innerHTML = '<img src="' + chart.getImageURI() + '">';
        //console.log(chart_div.innerHTML);
        //console.log(chart.getImageURI())

        var yada = $('input[name=chart_title]').val();
        //var shlub_jpg = document.getElementById("the_link_jpg");
        var shlub_png = document.getElementById("the_link_png");
        //shlub_jpg.href = chart.getImageURI();
        shlub_png.href = chart.getImageURI();
        //shlub_jpg.download = yada + ".jpg"
        shlub_png.download = yada + ".png"
      });

      chart.draw(data, options);

      document.getElementById("the_link_png").click()
      // var a_elem = document.createElement('a');
      // a_elem.href = chart.getImageURI();
      // a_elem.download = yada + ".png";
      // document.body.appendChild(a_elem);
      // a_elem.click();
      // document.body.removeChild(a_elem);

  };
