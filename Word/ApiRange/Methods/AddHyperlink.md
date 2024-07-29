# AddHyperlink

Adds a hyperlink to the specified range.

## Syntax

expression.AddHyperlink(sLink, sScreenTipText);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLink | Required | string |  | The link address. |
| sScreenTipText | Required | string |  | The screen tip text. |

## Returns

ApiHyperlink, null

## Example

This example adds a hyperlink to the specified range.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange = oDocument.GetRange(0, 9);
oRange.AddHyperlink("https://www.onlyoffice.com/", "Main portal");
```
