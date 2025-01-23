# SetSpacingLine

Sets the paragraph line spacing. If the value of the sLineRule parameter is either 
"atLeast" or "exact", then the value of nLine will be interpreted as twentieths of a point. If 
the value of the sLineRule parameter is "auto", then the value of the 
nLine parameter will be interpreted as 240ths of a line.

## Syntax

expression.SetSpacingLine(nLine, sLineRule);

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nLine | Required | [twips](../../Enumeration/twips.md) | [line240](../../Enumeration/line240.md) |  | The line spacing value measured either in twentieths of a point (1/1440 of an inch) or in 240ths of a line. |
| sLineRule | Required | "auto" | "atLeast" | "exact" |  | The rule that determines the measuring units of the line spacing. |

## Returns

This method doesn't return any data.

## Example

This example sets the paragraph line spacing.

```javascript
let doc = Api.GetDocument();
let myStyle1 = doc.CreateStyle("My document style #1");
let paraPr = myStyle1.GetParaPr();
paraPr.SetSpacingLine(3 * 240, "auto");
let myStyle2 = doc.CreateStyle("My document style #2");
paraPr = myStyle2.GetParaPr();
paraPr.SetSpacingLine(200, "exact");
let myStyle3 = doc.CreateStyle("My document style #3");
paraPr = myStyle3.GetParaPr();
paraPr.SetSpacingLine(400, "atLeast");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle1);
paragraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph = Api.CreateParagraph();
paragraph.SetStyle(myStyle2);
paragraph.AddText("Paragraph 2. Spacing: exact 10 points.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.SetStyle(myStyle3);
paragraph.AddText("Paragraph 3. Spacing: atLeast 20 points.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
doc.Push(paragraph);
```
