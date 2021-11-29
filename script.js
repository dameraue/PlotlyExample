
    data = [{
    type: 'scatterpolar',
    r: [9, 8, 8, 7, 28, 39],
    r2:[5,28,11,7,9,32],
    theta: ['mein Account','Angebotstransparenz','Hilfe im Krankheitsfall', 'Prävention/Vorsorge', 'Gesundheitsfragen', 'Durchblick: Pflege'],
    fill: 'toself'
  }]
  
  layout = {
    polar: {
      radialaxis: {
        visible: true,
        range: [0, 50]
      }
    },
    showlegend: false
  }
  
  Plotly.newPlot("myDiv", data, layout)

  