# SetLegendFill

Sets the fill to the chart legend.

## Syntax

expression.SetLegendFill(oFill);

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oFill | Required | [ApiFill](../../ApiFill/ApiFill.md) | The fill type used to fill the legend. |

## Returns

Boolean

## Example

This example sets the fill to the chart legend.

```javascript
builder.CreateFile("docx");
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
oFill = Api.CreateSolidFill(Api.CreateRGBColor(128, 128, 128));
oChart.SetLegendFill(oFill);
builder.SaveFile("docx", "SetLegendFill.docx");
builder.CloseFile();
```