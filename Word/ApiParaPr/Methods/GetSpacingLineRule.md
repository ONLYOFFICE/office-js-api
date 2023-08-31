# GetSpacingLineRule

Returns the paragraph line spacing rule.

## Syntax

expression.GetSpacingLineRule();

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[LineSpacingRule](../../../Enumerations/LineSpacingRule.md)

## Example

This example shows how to get the paragraph line spacing rule.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oParaPr = oParagraph.GetParaPr();
oParaPr.SetSpacingLine(3 * 240, "auto");
oParagraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
oParagraph.AddLineBreak();
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddLineBreak();
var sSpacingLineRule = oParaPr.GetSpacingLineRule();
oParagraph.AddText("Spacing line rule: " + sSpacingLineRule);
builder.SaveFile("docx", "GetSpacingLineRule.docx");
builder.CloseFile();
```