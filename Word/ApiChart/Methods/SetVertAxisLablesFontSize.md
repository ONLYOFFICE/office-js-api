# SetVertAxisLablesFontSize

Specifies font size for labels of the vertical axis.

## Syntax

expression.SetVertAxisLablesFontSize(nFontSize);

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nFontSize | Required | [pt](../../Enumeration/pt.md) |  | The text size value measured in points. |

## Returns

This method doesn't return any data.

## Example

This example specifies font size for the labels of the vertical axis.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oChart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oChart.SetSeriesFill(oFill, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oChart.SetSeriesFill(oFill, 1, false);
oChart.SetVerAxisTitle("USD In Hundred Thousands", 10);
oChart.SetHorAxisTitle("Year", 11);
oChart.SetVertAxisLablesFontSize(8);
oChart.SetTitle("Financial Overview", 13);
oParagraph.AddDrawing(oChart);
```
