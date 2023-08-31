# GetNumbering

Returns the numbering definition.

## Syntax

expression.GetNumbering();

`expression` - A variable that represents a [ApiNumberingLevel](../ApiNumberingLevel.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiNumbering](../../ApiNumbering/ApiNumbering.md)

## Example

This example shows how to get the numbering definition.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oNumbering = oDocument.CreateNumbering("numbered");
var oNumLvl = oNumbering.GetLevel(0);
var oNumLvl1 = oNumbering.GetLevel(1);
oNumLvl1.SetRestart(false);
var oParagraph = oDocument.GetElement(0);
oParagraph.SetNumbering(oNumLvl);
oParagraph.AddText("This is the first element of a parent numbered list which starts with '1'");
oParagraph = Api.CreateParagraph();
oParagraph.SetNumbering(oNumLvl1);
oParagraph.AddText("This is the first element of a child numbered list which starts with 'a'");
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.SetNumbering(oNumLvl1);
oParagraph.AddText("This is the second element of a child numbered list which starts with 'b'");
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph without a numbering. ");
oParagraph.AddText("It can be inserted between the numbered elements.");
oDocument.Push(oParagraph);
oNumbering = oNumLvl.GetNumbering();
var oNumLvl2 = oNumbering.GetLevel(oNumLvl.GetLevelIndex());
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is the second element of a parent numbered list which starts with '2'");
oParagraph.SetNumbering(oNumLvl2);
oParagraph.SetContextualSpacing(true);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetNumbering.docx");
builder.CloseFile();
```