# SetMajorHorizontalGridlines

Specifies the visual properties for the major horizontal gridlines.

## Syntax

expression.SetMajorHorizontalGridlines(oStroke);

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oStroke | Optional | [ApiStroke](../../ApiStroke/ApiStroke.md) &#124; null | The stroke used to create the element shadow. Default value is "null". |

## Returns

This method doesn't return any data.

## Example

This example specifies the visual properties for the major horizontal gridlines.

```javascript
builder.CreateFile("docx");
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
var oStroke = Api.CreateStroke(1 * 15000, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
oChart.SetMajorHorizontalGridlines(oStroke);
oChart.SetTitle("Financial Overview", 13);
oParagraph.AddDrawing(oChart);
builder.SaveFile("docx", "SetMajorHorizontalGridlines.docx");
builder.CloseFile();
```