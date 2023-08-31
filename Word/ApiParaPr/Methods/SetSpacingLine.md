# SetSpacingLine

Sets the paragraph line spacing. If the value of the sLineRule parameter is either "atLeast" or "exact", then the value of nLine will be interpreted as twentieths of a point. If the value of the sLineRule parameter is "auto", then the value of the nLine parameter will be interpreted as 240ths of a line.

## Syntax

expression.SetSpacingLine(nLine, sLineRule);

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

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
var oMyStyle1 = oDocument.CreateStyle("My document style #1");
var oParaPr = oMyStyle1.GetParaPr();
oParaPr.SetSpacingLine(3 * 240, "auto");
var oMyStyle2 = oDocument.CreateStyle("My document style #2");
oParaPr = oMyStyle2.GetParaPr();
oParaPr.SetSpacingLine(200, "exact");
var oMyStyle3 = oDocument.CreateStyle("My document style #3");
oParaPr = oMyStyle3.GetParaPr();
oParaPr.SetSpacingLine(400, "atLeast");
var oParagraph = oDocument.GetElement(0);
oParagraph.SetStyle(oMyStyle1);
oParagraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
oParagraph.AddLineBreak();
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
oParagraph = Api.CreateParagraph();
oParagraph.SetStyle(oMyStyle2);
oParagraph.AddText("Paragraph 2. Spacing: exact 10 points.");
oParagraph.AddLineBreak();
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.SetStyle(oMyStyle3);
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