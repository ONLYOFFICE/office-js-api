# AddElement

Adds an element to the current paragraph.

## Syntax

expression.AddElement(oElement, nPos?);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oElement | Required | [ParagraphContent](../../../Enumerations/ParagraphContent.md) | The document element which will be added at the current position. Returns false if the oElement type is not supported by a paragraph. |
| nPos | Optional | Number | The position where the current element will be added. If this value is not specified, then the element will be added at the end of the current paragraph. Default value is "null". |

## Returns

Boolean

## Example

This example adds a Run to the paragraph.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text run. Nothing special.");
oParagraph.AddElement(oRun);
builder.SaveFile("xlsx", "AddElement.xlsx");
builder.CloseFile();
```