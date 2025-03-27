# SetJc

Specifies the alignment of the current table with respect to the text margins in the current section.

## Syntax

```javascript
expression.SetJc(sJcType);
```

`expression` - A variable that represents a [ApiTablePr](../ApiTablePr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sJcType | Required | "left" \| "right" \| "center" |  | The alignment type used for the current table placement. |

## Returns

This method doesn't return any data.

## Example

This example specifies the alignment of the table with respect to the text margins in the current section.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("The table is aligned at the center of the page horizontally:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
tablePr.SetJc("center");
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 50);
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
doc.Push(table);
```
