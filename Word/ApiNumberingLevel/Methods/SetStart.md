# SetStart

Specifies the starting value for the numbering used by the parent numbering level within a given numbering level definition. By default this value is 1.

## Syntax

```javascript
expression.SetStart(nStart);
```

`expression` - A variable that represents a [ApiNumberingLevel](../ApiNumberingLevel.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nStart | Required | number |  | The starting value for the numbering used by the parent numbering level. |

## Returns

This method doesn't return any data.

## Example

This example specifies the starting value for the numbering used by the parent numbering level within a given numbering level definition.

```javascript editor-docx
let doc = Api.GetDocument();
let numbering = doc.CreateNumbering("numbered");
let numLvl = numbering.GetLevel(0);
let numLvl1 = numbering.GetLevel(1);
numLvl1.SetStart(5);
let paragraph = doc.GetElement(0);
paragraph.SetNumbering(numLvl);
paragraph.AddText("This is the first element of a parent numbered list which starts with '1'");
paragraph = Api.CreateParagraph();
paragraph.SetNumbering(numLvl1);
paragraph.AddText("This is the first element of a child numbered list which starts with 'e'");
doc.Push(paragraph);
```
