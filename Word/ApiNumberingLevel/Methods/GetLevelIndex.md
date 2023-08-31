# GetLevelIndex

Returns the level index.

## Syntax

expression.GetLevelIndex();

`expression` - A variable that represents a [ApiNumberingLevel](../ApiNumberingLevel.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get the level index.

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
var nLevelIndex = oNumLvl.GetLevelIndex();
oParagraph.AddText("Level index for the parent numbered list = " + nLevelIndex);
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
nLevelIndex = oNumLvl1.GetLevelIndex();
oParagraph.AddText("Level index for the element of a child numbered list  = " + nLevelIndex);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetLevelIndex.docx");
builder.CloseFile();
```