# SetAxieNumFormat

Sets the specified numeric format to the axis values.

## Syntax

expression.SetAxieNumFormat(sFormat, sAxiePos);

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sFormat | Required | NumFormat &#124; String | Numeric format (can be custom format). |
| sAxiePos | Required | [AxisPos](../../../Enumerations/AxisPos.md) | Axis position. |

## Returns

Boolean

## Example

This example sets the specified numeric format to the axis values.

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
oChart.SetAxieNumFormat("0.00", "left");
oParagraph.AddDrawing(oChart);
builder.SaveFile("docx", "SetAxieNumFormat.docx");
builder.CloseFile();
```