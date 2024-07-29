# SetStyle

Sets a style to the current table.

## Syntax

expression.SetStyle(oStyle);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStyle | Required | [ApiStyle](../../ApiStyle/ApiStyle.md) |  | The style which will be applied to the current table. |

## Returns

boolean

## Example

This example sets a style to the table.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a table and apply one of the existing styles to it:");
var oTableStyle = oDocument.GetStyle("Bordered");
var oTable = Api.CreateTable(2, 2);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
```
