# SetScreenTipText

Sets the screen tip text of the hyperlink.

## Syntax

expression.SetScreenTipText(sScreenTipText);

`expression` - A variable that represents a [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sScreenTipText | Required | string |  | The screen tip text of the hyperlink. |

## Returns

boolean

## Example

This example sets the screen tip text of the hyperlink.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("ONLYOFFICE Document Builder");
oParagraph.AddElement(oRun);
var oHyperlink = oParagraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
oHyperlink.SetScreenTipText("ONLYOFFICE for developers");
var sScreenTipText = oHyperlink.GetScreenTipText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Screen tip text: " + sScreenTipText);
oDocument.Push(oParagraph);
```
