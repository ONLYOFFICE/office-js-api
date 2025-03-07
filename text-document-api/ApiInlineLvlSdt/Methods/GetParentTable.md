# GetParentTable

Returns a table that contains the current content control.

## Syntax

```javascript
expression.GetParentTable();
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTable](../../ApiTable/ApiTable.md) \| null

## Example

This example shows how to get a table that contains the content control.

```javascript editor-docx
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control.");
let paragraph = Api.CreateParagraph();
paragraph.AddElement(inlineLvlSdt, 0);
let cell = table.GetRow(0).GetCell(0);
cell.AddElement(0, paragraph);
let parentTable = inlineLvlSdt.GetParentTable();
cell = parentTable.GetRow(2).GetCell(0);
parentTable.RemoveRow(cell);
```
