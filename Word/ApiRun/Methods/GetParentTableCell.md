# GetParentTableCell

Returns a table cell that contains the current run.

## Syntax

```javascript
expression.GetParentTableCell();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTableCell](../../ApiTableCell/ApiTableCell.md) | null

## Example

This example shows how to get a table cell that contains the run.

```javascript
let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let paragraph = Api.CreateParagraph();
let run = Api.CreateRun();
run.AddText("This is just a sample text.");
paragraph.AddElement(run);
let cell = table.GetCell(0, 0);
table.AddElement(cell, 0, paragraph);
let parentTableCell = run.GetParentTableCell();
parentTableCell.SetShd("clear", 255, 111, 61, false);
```
