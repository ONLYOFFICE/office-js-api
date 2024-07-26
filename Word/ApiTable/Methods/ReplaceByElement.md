# ReplaceByElement

Replaces the current table with a new element.

## Syntax

expression.ReplaceByElement(oElement);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oElement | Required | DocumentElement |  | The element to replace the current table with. |

## Returns

boolean

## Example

This example replaces the current table with a paragraph.

```javascript
var oDocument = Api.GetDocument();
var oTable = Api.CreateTable(3, 3);
oDocument.AddElement(0, oTable);
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
oTable.SetStyle(oTableStyle);
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("The table was replaced with the current paragraph.");
oTable.ReplaceByElement(oParagraph);
```
