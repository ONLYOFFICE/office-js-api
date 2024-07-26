# SetLanguage

Specifies the languages which will be used to check spelling and grammar (if requested) when processingthe contents of the text run.

## Syntax

expression.SetLanguage(sLangId);

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLangId | Required | string |  | The possible value for this parameter is a language identifier as defined byRFC 4646/BCP 47. Example: "en-CA". |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example specifies the languages which will be used to check spelling and grammar (if requested) when processing the contents of the text run.

```javascript
var oDocument = Api.GetDocument();
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetLanguage("en-CA");
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.AddText("This is a text run with the text language set to English (Canada).");
oRun.SetTextPr(oTextPr);
oParagraph.AddElement(oRun);
```
