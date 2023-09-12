# SetSeriaNumFormat

Sets the specified numeric format to the chart series.

## Syntax

expression.SetSeriaNumFormat(sFormat, nSeria);

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sFormat | Required | [NumFormat](../../../Enumerations/NumFormat.md) &#124; String | Numeric format (can be custom format). |
| nSeria | Required | Number | Series index. |

## Returns

Boolean

## Example

This example sets the specified numeric format to the chart series.

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
oChart.SetSeriaNumFormat("0.00", 0);
oParagraph.AddDrawing(oChart);
builder.SaveFile("docx", "SetSeriaNumFormat.docx");
builder.CloseFile();
```