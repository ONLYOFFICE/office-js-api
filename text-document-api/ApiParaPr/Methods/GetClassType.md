# GetClassType

Returns a type of the ApiParaPr class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"paraPr"

## Example

This example gets a class type and inserts it into the document.

```javascript editor-docx
let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetLeftBorder("single", 24, 0, 255, 111, 61);
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the first paragraph. ");
paragraph.AddText("The paragraph properties styled above set a border at its left side.");
let classType = paraPr.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);
```
