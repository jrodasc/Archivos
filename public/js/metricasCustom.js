$(document).ready(function(){

    /*----------------------------------------*/
    /*             Grafica de Pay             */
    /*----------------------------------------*/
    var getAgeCanvas = $('#ageChart').get(0).getContext('2d');

    var ageChart = new Chart(getAgeCanvas);

    var chartAgeData = {
        datasets: [
            { 
                data: [10, 20, 30] 
            }
        ], 
        labels: [
            'Red',
            'Yellow',
            'Blue'
        ]
    };

    var pieOptions = {
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke: true,
        //String - The colour of each segment stroke
        segmentStrokeColor: "#fff",
        //Number - The width of each segment stroke
        segmentStrokeWidth: 2,
        //Number - The percentage of the chart that we cut out of the middle
        percentageInnerCutout: 0, // This is 0 for Pie charts
        //Number - Amount of animation steps
        animationSteps: 100,
        //String - Animation easing effect
        animationEasing: "easeOutBounce",
        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate: true,
        //Number - Set time of animation
        animationDuration: 600,
        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale: false,
        //Boolean - whether to make the chart responsive to window resizing
        responsive: true,
        // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
        maintainAspectRatio: true,
        //String - A legend template
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
    };
    //Create pie or douhnut chart, you can switch between pie and douhnut using the method below.
    ageChart.Pie(chartAgeData, pieOptions);
    
});