# SetLanguage

Specifies the languages which will be used to check spelling and grammar (if requested) when processing
the contents of the text run.

## Syntax

```javascript
expression.SetLanguage(sLangId);
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLangId | Required | string |  | The possible value for this parameter is a language identifier as defined by RFC 4646/BCP 47. Example: "en-CA". |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example specifies the languages which will be used to check spelling and grammar (if requested) when processing the contents of the text run.

```javascript editor-docx
let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetLanguage("en-CA");
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.AddText("This is a text run with the text language set to English (Canada).");
run.SetTextPr(textPr);
paragraph.AddElement(run);
```
