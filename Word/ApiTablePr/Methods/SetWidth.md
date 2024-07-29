# SetWidth

Sets the preferred width to the current table.💡 Tables are created with the {@link ApiTable#SetWidth} method properties set by default, which always override the {@link ApiTablePr#SetWidth} method properties. That is why there is no use to try and apply {@link ApiTablePr#SetWidth}. We recommend you to use the  {@link ApiTablePr#SetWidth} method instead.

## Syntax

expression.SetWidth(sType, nValue);

`expression` - A variable that represents a [ApiTablePr](../ApiTablePr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [TableWidth](../../Enumeration/TableWidth.md) |  | Type of the width value from one of the available width values types. |
| nValue | Optional | number |  | The table width value measured in positive integers. |

## Returns

This method doesn't return any data.

## Example

This example sets the preferred width to the table.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We set the table cells to preserve their size:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTablePr = oTableStyle.GetTablePr();
var oTable = Api.CreateTable(3, 3);
oTablePr.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
```
