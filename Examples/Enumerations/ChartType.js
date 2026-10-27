// Create the "3DColumnClustered" chart.

// Specify the "ChartType" property of the ApiChart object.

// The resulting chart will have a "3DColumnClustered" type.

var chart = Api.CreateChart("3DColumnClustered", [[200, 240, 280],[250, 260, 280]], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);