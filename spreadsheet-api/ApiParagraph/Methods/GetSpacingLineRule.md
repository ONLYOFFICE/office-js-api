# GetSpacingLineRule

Returns the paragraph line spacing rule.

## Syntax

```javascript
expression.GetSpacingLineRule();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"auto" \| "atLeast" \| "exact" \| undefined

## Example

This example shows how to get the paragraph line spacing rule.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetSpacingLine(3 * 240, "auto");
paragraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
let spacingRule = paraPr.GetSpacingLineRule();
paragraph = Api.CreateParagraph();
paragraph.AddText("Spacing line rule : " + spacingRule);
content.Push(paragraph);
```
