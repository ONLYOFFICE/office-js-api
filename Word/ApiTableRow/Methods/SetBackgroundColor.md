# SetBackgroundColor

Sets the background color to all cells in the current table row.

## Syntax

expression.SetBackgroundColor(r, g, b, bNone);

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| r | Required | byte |  | Red color component value. |
| g | Required | byte |  | Green color component value. |
| b | Required | byte |  | Blue color component value. |
| bNone | Required | boolean |  | Defines that background color will not be set. |

## Returns

boolean

## Example

This example sets the background color to all cells in the table row.

```javascript
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(4, 2);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
var oTableRow = oTable.GetRow(1);
oTableRow.SetBackgroundColor(255, 111, 61, false);
oDocument.Push(oTable);
```
