# GetAllTables

Returns an array of all tables from the current document content.

## Syntax

```javascript
expression.GetAllTables();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParagraph[]](../../ApiParagraph/ApiParagraph.md)

## Example

This example showh how to get an array of all tables from the document content.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
let docContent = shape.GetDocContent();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
docContent.Push(table);
let tables = docContent.GetAllTables();
paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text in the first cell.");
let cell = tables[0].GetCell(0, 0);
tables[0].AddElement(cell, 0, paragraph);
```
