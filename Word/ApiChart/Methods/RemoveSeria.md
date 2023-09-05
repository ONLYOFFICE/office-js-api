# RemoveSeria

Removes the specified series from the current chart.

## Syntax

expression.RemoveSeria(nSeria);

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nSeria | Required | Number | The index of the chart series. |

## Returns

Boolean

## Example

This example shows how to remove the specified series from the current chart.

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
oChart.RemoveSeria(1);
oParagraph.AddLineBreak();
oParagraph.AddText("The Estimated Costs series was removed from the current chart.");
builder.SaveFile("docx", "RemoveSeria.docx");
builder.CloseFile();
```