# SetTextPr

Sets the text properties to the current run.

## Syntax

```javascript
expression.SetTextPr(oTextPr);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTextPr | Required | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | The text properties that will be set to the current run. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example sets the text properties to the current run.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text with the font size set to 30 and the font weight set to bold.");
paragraph.AddElement(run);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
run.SetTextPr(textPr);
```
