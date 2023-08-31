# SetSpacingLine

Sets the paragraph line spacing. If the value of the sLineRule parameter is either "atLeast" or "exact", then the value of nLine will be interpreted as twentieths of a point. If the value of the sLineRule parameter is "auto", then the value of the nLine parameter will be interpreted as 240ths of a line.
<br>Inherited From: [ApiParaPr#SetSpacingLine](../../ApiParaPr/Methods/SetSpacingLine.md)

## Syntax

expression.SetSpacingLine(nLine, sLineRule);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nLine | Required | [twips](../../../Enumerations/twips.md) &#124; [line240](../../../Enumerations/line240.md) | The line spacing value measured either in twentieths of a point (1/1440 of an inch) or in 240ths of a line. |
| sLineRule | Required | [LineRule](../../../Enumerations/LineRule.md) | The rule that determines the measuring units of the line spacing. |

## Returns

This method doesn't return any data.

## Example

This example sets the paragraph line spacing.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.SetSpacingLine(3 * 240, "auto");
oParagraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
oParagraph.AddLineBreak();
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
oParagraph = Api.CreateParagraph();
oParagraph.SetSpacingLine(200, "exact");
oParagraph.AddText("Paragraph 2. Spacing: exact 10 points.");
oParagraph.AddLineBreak();
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.SetSpacingLine(400, "atLeast");
oParagraph.AddText("Paragraph 3. Spacing: atLeast 20 points.");
oParagraph.AddLineBreak();
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetSpacingLine.docx");
builder.CloseFile();
```