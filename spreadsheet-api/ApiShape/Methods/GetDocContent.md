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
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetDocContent();
content.RemoveAllElements();
let paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("We removed all elements from the shape and added a new paragraph inside it.");
content.Push(paragraph);
```
