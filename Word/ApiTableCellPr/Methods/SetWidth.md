# SetWidth

Sets the preferred width to the current table cell.

## Syntax

```javascript
expression.SetWidth(sType, nValue);
```

`expression` - A variable that represents a [ApiTableCellPr](../ApiTableCellPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [TableWidth](../../Enumeration/TableWidth.md) |  | Type of the width value from one of the available width values types. |
| nValue | Optional | number |  | The table cell width value measured in positive integers. |

## Returns

boolean

## Example

This example sets the preferred width to the current table cell.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("All cells are at least 2 inches wide:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetWidth("twips", 2880);
table.SetStyle(tableStyle);
doc.Push(table);
```
