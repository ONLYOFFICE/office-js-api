# SetRestart

Specifies a one-based index which determines when a numbering level should restart to its starting value. A numbering level restarts when an instance of the specified numbering level which is higher (earlier than this level) is used in the given document contents. By default this value is true.

## Syntax

```javascript
expression.SetRestart(isRestart);
```

`expression` - A variable that represents a [ApiNumberingLevel](../ApiNumberingLevel.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isRestart | Required | boolean |  | The true value means that a numbering level will be restarted to its starting value. |

## Returns

boolean

## Example

This example specifies a one-based index which determines when a numbering level should restart to its starting value.

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
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the second element of a parent numbered list which starts with '2'");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.SetNumbering(numLvl1);
paragraph.AddText("This is the third element of a child numbered list which starts with 'c'");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.SetNumbering(numLvl1);
paragraph.AddText("This is the fourth element of a child numbered list which starts with 'd'");
doc.Push(paragraph);
```
