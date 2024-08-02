# SetDisplayedText

Sets the hyperlink display text.

## Syntax

expression.SetDisplayedText(sDisplay);

`expression` - A variable that represents a [ApiHyperlink](../ApiHyperlink.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sDisplay | Required | string |  | The text to display the hyperlink. |

## Returns

boolean

## Example

This example sets the hyperlink display text.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("ONLYOFFICE Document Builder");
oParagraph.AddElement(oRun);
var oHyperlink = oParagraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
oHyperlink.SetDisplayedText("Api ONLYOFFICE DocBuilder");
```
