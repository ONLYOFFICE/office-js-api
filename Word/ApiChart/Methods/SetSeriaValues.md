# SetSeriaValues

Sets values to the specified chart series.

## Syntax

expression.SetSeriaValues(aValues, nSeria);

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aValues | Required | Array.&lt;number&gt; |  | The array of the data which will be set to the specified chart series. |
| nSeria | Required | number |  | The index of the chart series. |

## Returns

boolean

## Example

This example sets values to the specified chart series.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oChart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oParagraph.AddDrawing(oChart);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oChart.SetSeriesFill(oFill, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oChart.SetSeriesFill(oFill, 1, false);
oChart.SetSeriaValues([260, 270, 300], 1);
oChart.SetShowPointDataLabel(1, 0, false, false, true, false);
oChart.SetShowPointDataLabel(1, 1, false, false, true, false);
oChart.SetShowPointDataLabel(1, 2, false, false, true, false);
```
