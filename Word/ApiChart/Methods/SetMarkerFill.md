# SetMarkerFill

Sets the fill to the marker in the specified chart series.

## Syntax

expression.SetMarkerFill(oFill, nSeries, nMarker, bAllMarkers?);

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oFill | Required | [ApiFill](../../ApiFill/ApiFill.md) | The fill type used to fill the marker. |
| nSeries | Required | Number | The index of the chart series. |
| nMarker | Required | Number | The index of the marker in the specified chart series. |
| bAllMarkers | Optional | Boolean | Specifies if the fill will be applied to all markers in the specified chart series. Default value is "false". |

## Returns

Boolean

## Example

This example sets the fill to the marker in the specified chart series.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oChart = Api.CreateChart("scatter", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oParagraph.AddDrawing(oChart);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oChart.SetSeriesFill(oFill, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oChart.SetSeriesFill(oFill, 1, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(128, 128, 128));
oChart.SetMarkerFill(oFill, 1, 0, true);
var oStroke = Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(128, 128, 128)));
oChart.SetMarkerOutLine(oStroke, 1, 0, true);
builder.SaveFile("docx", "SetMarkerFill.docx");
builder.CloseFile();
```