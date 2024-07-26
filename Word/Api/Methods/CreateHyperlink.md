# CreateHyperlink

Creates a new hyperlink text block to be inserted to the current paragraph or table.

## Syntax

expression.CreateHyperlink(sLink, sDisplay, sScreenTipText);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLink | Required | string |  | The hyperlink address. |
| sDisplay | Required | string |  | The text to display the hyperlink. |
| sScreenTipText | Required | string |  | The screen tip text. |

## Returns

[ApiHyperlink](../../ApiHyperlink/ApiHyperlink.md)

## Example

This example creates hyperlink and pastes it into the document.

```javascript
var oDocument = Api.GetDocument();
var oHyperlink = Api.CreateHyperlink("https://api.onlyoffice.com/", "ONLYOFFICE Document Builder", "ONLYOFFICE for developers");
var sType = oHyperlink.GetClassType();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oHyperlink, 0);
oParagraph.AddLineBreak();
oParagraph.AddText("Class type of the created object: " + sType);
```
