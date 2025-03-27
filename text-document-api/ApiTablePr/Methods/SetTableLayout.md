# SetTableLayout

Specifies the algorithm which will be used to lay out the contents of the current table within the document.

## Syntax

```javascript
expression.SetTableLayout(sType);
```

`expression` - A variable that represents a [ApiTablePr](../ApiTablePr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | "autofit" \| "fixed" |  | The type of the table layout in the document. |

## Returns

This method doesn't return any data.

## Example

This example specifies the algorithm which will be used to lay out the contents of the table within the document.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We set the table cells to preserve their size:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
tablePr.SetTableLayout("fixed");
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
let cell = table.GetRow(0).GetCell(0);
cell.GetContent().GetElement(0).AddText("Fixed layout");
doc.Push(table);
```
