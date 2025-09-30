// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

const xValues = []
const yValues = []
for(let i = 0; i < 51; i++) {
  xValues.push(i)
  yValues.push(1)
}

// Area Chart Example
new Chart("playerGraph", {
type: "line",
data: {
    labels: xValues,
    datasets: [{
    data: yValues,
    borderColor: "purple",
    fill: false,
    pointRadius: 0.01,
    cubicInterpolationMode: 'monotone',
    stepped: false
    }]
},
options: {
    scales: {
        x: {
            ticks: {
                display: false
            },
            grid: {
                display: false
            },
            border: {
                display: false
            },
            reverse: true
        },
        y: {
            ticks: {
                display: false
            },
            grid: {
                display: false
            },
            border: {
                display: false
            },
            reverse: true
        }
    },
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            callbacks: {
                label: function(context) {
                    let label = context.dataset.label || '';
                    if (label) {
                        label += ': ';
                    }
                    label += context.parsed.y;
                    label = 'Rank: ' + label; 
                    return label;
                },
                title: function(tooltipItems, data) {
                    const xValue = tooltipItems[0].parsed.x;
                    if (xValue == 0) {
                        return 'Now'
                    }
                    if (xValue == 1) {
                        return 'Yesterday'
                    }
                    return xValue + ' days ago';
                }
            },
            intersect: false
        }
    },
    animation: {
        duration: 0
    }
}
});
