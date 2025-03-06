# SetSpacingLine

Sets the paragraph line spacing. If the value of the sLineRule parameter is either \
"atLeast" or "exact", then the value of nLine will be interpreted as twentieths of a point. If \
the value of the sLineRule parameter is "auto", then the value of the \
nLine parameter will be interpreted as 240ths of a line.

## Syntax

```javascript
expression.SetSpacingLine(nLine, sLineRule);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nLine | Required | [twips](../../Enumeration/twips.md) \| [line240](../../Enumeration/line240.md) |  | The line spacing value measured either in twentieths of a point (1/1440 of an inch) or in 240ths of a line. |
| sLineRule | Required | "auto" \| "atLeast" \| "exact" |  | The rule that determines the measuring units of the line spacing. |

## Returns

This method doesn't return any data.

## Example

This example sets the paragraph line spacing.

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
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
```
