# ToJSON

Converts the ApiTextPr object into the JSON object.

## Syntax

```javascript
expression.ToJSON(bWriteStyles);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteStyles | Required | boolean |  | Specifies if the used styles will be written to the JSON object or not. |

## Returns

JSON

## Example

This example converts the ApiTextPr object into the JSON object.

```javascript editor-docx
let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetFontFamily("Comic Sans MS");
let json = textPr.ToJSON(true);
let textPrFromJSON = Api.FromJSON(json);
textPrFromJSON.SetFontSize(30);
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the font size set to 15 points using the text properties.");
paragraph.SetTextPr(textPrFromJSON);
```
