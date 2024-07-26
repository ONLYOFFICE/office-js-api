# GetParentContentControl

Returns a content control that contains the current table.

## Syntax

expression.GetParentContentControl();

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

ApiBlockLvlSdt, null

## Example

This example shows how to get a content control that contains the table.

```javascript
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oBlockLvlSdt.AddElement(oTable, 0);
oDocument.AddElement(0, oBlockLvlSdt);
var oParentContentControl = oTable.GetParentContentControl();
oParentContentControl.SetAlias("№1");
```
