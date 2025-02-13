# GetParentTableCell

Returns a parent table cell that contains the graphic object.

## Syntax

```javascript
expression.GetParentTableCell();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTableCell](../../ApiTableCell/ApiTableCell.md) | null

## Example

This example showh how to get a parent table cell that contains the graphic object.

```javascript
let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let table = Api.CreateTable(3, 3);
let tableStyle = doc.GetStyle("Bordered");
table.SetStyle(tableStyle);
table.SetWidth("percent", 100);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
let cell = table.GetCell(1, 1);
cell.GetContent().GetElement(0).AddDrawing(drawing);
doc.Push(table);
let parentCell = drawing.GetParentTableCell();
let cellContent = parentCell.GetContent().GetElement(0);
cellContent.AddLineBreak();
cellContent.AddText("This is a parent cell");
```
