# GetDocContent

Returns the shape inner contents where a paragraph or text runs can be inserted.

## Syntax

```javascript
expression.GetDocContent();
```

`expression` - A variable that represents a [ApiShape](../ApiShape.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md)

## Example

This example shows how to get the shape inner contents where a paragraph or text runs can be inserted.

```javascript editor-xlsx
// How to get content of ApiShape.

// Get content of ApiShape, remove all its elements and add a new paragraph to it.

var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetDocContent();
oDocContent.RemoveAllElements();
var oParagraph = Api.CreateParagraph();
oParagraph.SetJc("left");
oParagraph.AddText("We removed all elements from the shape and added a new paragraph inside it.");
oDocContent.Push(oParagraph);
```
