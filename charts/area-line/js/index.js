$(function () {
  function random_numbers() {
    for (var a = [],i = 0; i < 100; ++i) a[i] = i;

    var tmp, current, top = a.length;

    if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = a[current];
      a[current] = a[top];
      a[top] = tmp;
    }
    return a;
  }
  
  Highcharts.setOptions({
    colors: ['#9fdbea','#f47961','#7ed321','#60be7b',]
  });
    var chart = new Highcharts.Chart({
      chart: {
          backgroundColor: '',
          type: 'areaspline',
          zoomType: 'x',
          renderTo: 'areaChart'
      },
    title: { text: null },
    legend: { enabled: false },

    xAxis: {
      type: 'datetime',
      align: 'Right',
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      labels: {
        style:{
          
          color: '#bfbfbf',
          fontSize: '10px'
        }
      },
      min: 0.2,
      max: 11,
      plotLines: [{
        color: 'red',
        dashStyle: 'solid',
        value: '3',
        width: '1'
      }]
    },

    yAxis: {
      title: {
        text: null
      },
      labels: {
        padding:0,
        enabled: false,
        style:{
          color: '#bfbfbf',
          fontSize: '7px',

        }
      },
      width: '10px'
    },

    tooltip: {
      shared: true
    },

    credits: {
      enabled: false
    },

    plotOptions: {
      areaspline: {
        fillOpacity: 0.8
      },
      series: {
        marker: { enabled: false },
        lineWidth: 0
      }
    },

    series: [{
      name: '发财概率',
      data: random_numbers()
    }, {
      name: '及格概率',
      data: random_numbers()
    }, {
      name: '踩狗屎概率',
      data: random_numbers()
    }]
  });
});