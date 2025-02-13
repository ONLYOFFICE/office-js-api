# GetNumbering

Returns the numbering definition.

## Syntax

```javascript
expression.GetNumbering();
```

`expression` - A variable that represents a [ApiNumberingLevel](../ApiNumberingLevel.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiNumbering](../../ApiNumbering/ApiNumbering.md)

## Example

This example shows how to get the numbering definition.

```javascript
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
paragraph.AddText("This is a paragraph without a numbering. ");
paragraph.AddText("It can be inserted between the numbered elements.");
doc.Push(paragraph);
numbering = numLvl.GetNumbering();
let numLvl2 = numbering.GetLevel(numLvl.GetLevelIndex());
paragraph = Api.CreateParagraph();
paragraph.AddText("This is the second element of a parent numbered list which starts with '2'");
paragraph.SetNumbering(numLvl2);
paragraph.SetContextualSpacing(true);
doc.Push(paragraph);
```
