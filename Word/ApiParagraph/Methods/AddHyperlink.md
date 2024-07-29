# AddHyperlink

Adds a hyperlink to a paragraph.

## Syntax

expression.AddHyperlink(sLink, sScreenTipText);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLink | Required | string |  | The link address. |
| sScreenTipText | Required | string |  | The screen tip text. |

## Returns

ApiHyperlink, null

## Example

This example adds a hyperlink to a paragraph.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("ONLYOFFICE Document Builder");
oParagraph.AddElement(oRun);
oParagraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic", "docbuilder");
```
