window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", //"light1", "dark1", "dark2"
        title:{
            text: "Alarm impact filter level 0 MTN-N 2020-12-08 12:31:10 +01:00"             
        },
        axisY:{
            interval: 5,
        },
        toolTip:{
            shared: true
        },
        data:[{
            type: "stackedBar100",
            toolTipContent: "{label}<br><b>{name}:</b> {y} (#percent%)",
            color: "#cccccc",
            showInLegend: true, 
            name: "Ok 4514 (1.26%)",
            dataPoints: [
                { y: 5, label: "Microwave" },
                { y: 15, label: "StableNet" }
            ]
            },
            {
                type: "stackedBar100",
                toolTipContent: "<b>{name}:</b> {y} (#percent%)",
                color: "green", 
                showInLegend: true, 
                name: "Ok 346699 (95.58%)",
                dataPoints: [
                    { y: 5, label: "Microwave" },
                    { y: 15, label: "StableNet" }
                ]
            }, 
            {
                type: "stackedBar100",
                toolTipContent: "<b>{name}:</b> {y} (#percent%)",
                showInLegend: true, 
                name: "Error: 14 (0.00%)",
                dataPoints: [
                    { y: 5, label: "Microwave" },
                    { y: 15, label: "StableNet" }
                ]
            }, 
            {
                type: "stackedBar100",
                toolTipContent: "<b>{name}:</b> {y} (#percent%)",
                showInLegend: true, 
                name: "Info: 8 (0.00%)",
                dataPoints: [
                    { y: 5, label: "Microwave" },
                    { y: 15, label: "StableNet" }
                ]
            }, 
            {
                type: "stackedBar100",
                toolTipContent: "<b>{name}:</b> {y} (#percent%)",
                showInLegend: true, 
                name: "Marginal: 735 (0.20%)",
                dataPoints: [
                    { y: 5, label: "Microwave" },
                    { y: 15, label: "StableNet" }
                ]
            }, 
            {
                type: "stackedBar100",
                toolTipContent: "<b>{name}:</b> {y} (#percent%)",
                showInLegend: true, 
                name: "Minor: 3084 (0.85%)",
                dataPoints: [
                    { y: 5, label: "Microwave" },
                    { y: 15, label: "StableNet" }
                ]
            }, 
            {
                type: "stackedBar100",
                toolTipContent: "<b>{name}:</b> {y} (#percent%)",
                color: "red",
                showInLegend: true, 
                name: "Major 3910 (1.09%)",
                dataPoints: [
                    { y: 5, label: "Microwave" },
                    { y: 15, label: "StableNet" }
                ]
        }]
    });
    chart.render();
    
    }              