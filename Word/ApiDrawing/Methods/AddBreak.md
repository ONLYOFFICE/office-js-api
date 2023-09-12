# AddBreak

Inserts a break at the specified location in the main document.

## Syntax

expression.AddBreak(breakType, position);

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| breakType | Required | Number | The break type: page break (0) or line break (1). |
| position | Required | String | The position where the page or line break will be inserted ("before" or "after" the current drawing). |

## Returns

Boolean (returns false if drawing object haven't parent run or params are invalid)

## Example

This example inserts a break at the specified location in the main document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
oDrawing.InsertParagraph("Added a line break after this paragraph.", "before", false);
oDrawing.AddBreak(1, "before");
builder.SaveFile("docx", "AddBreak.docx");
builder.CloseFile();
```