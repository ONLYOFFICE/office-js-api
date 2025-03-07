# GetLevelIndex

Returns the level index.

## Syntax

```javascript
expression.GetLevelIndex();
```

`expression` - A variable that represents a [ApiNumberingLevel](../ApiNumberingLevel.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get the level index.

```javascript editor-docx
let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("numbered");
let numLvl = numbering.GetLevel(0);
let numLvl1 = numbering.GetLevel(1);
numLvl1.SetRestart(false);
let paragraph = doc.GetElement(0);
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the first element of a parent numbered list which starts with '1'");
paragraph = Api.CreateParagraph();
paragraph.SetNumbering(numLvl1);
paragraph.AddText("This is the first element of a child numbered list which starts with 'a'");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.SetNumbering(numLvl1);
paragraph.AddText("This is the second element of a child numbered list which starts with 'b'");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
let levelIndex = numLvl.GetLevelIndex();
paragraph.AddText("Level index for the parent numbered list = " + levelIndex);
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
levelIndex = numLvl1.GetLevelIndex();
paragraph.AddText("Level index for the element of a child numbered list  = " + levelIndex);
doc.Push(paragraph);
```
