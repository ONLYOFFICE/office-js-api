# GetParentTable

Returns a parent table that contains the graphic object.

## Syntax

expression.GetParentTable();

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTable](../../ApiTable/ApiTable.md) | null

## Example

This example shows how to get a parent table that contains the graphic object.

```javascript
let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let cell = table.GetCell(1, 1);
cell.AddElement(0, paragraph);
doc.Push(table);
let parentTable = drawing.GetParentTable();
let tableStyle = doc.GetStyle("Bordered");
parentTable.SetStyle(tableStyle);
```
