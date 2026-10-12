// Create the "bar3D" chart using a legacy chart type name.

// Specify the "ChartType" property of the ApiChart object using a legacy chart type name.

// The resulting chart will have a "bar3D" type.

var chart = Api.CreateChart("bar3D", [[200, 240, 280],[250, 260, 280]], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
