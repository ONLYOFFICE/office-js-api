# GetTextPr

Returns the merged text properties of the entire range.

## Syntax

expression.GetTextPr();

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example get the text properties from the Range.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Welcome to ONLYOFFICE Document Builder");

// Get the text properties of the first range
let range1 = doc.GetRange(0, 31);
let textPr = range1.GetTextPr();

// Modify the text properties (e.g., set italic)
textPr.SetItalic(true);

// Apply the modified text properties to another range
let range2 = doc.GetRange(32, 63);
range2.SetTextPr(textPr);

// Add a new paragraph to confirm the changes
let newParagraph = Api.CreateParagraph();
newParagraph.AddText("This text is in italic as per the modified text properties.");
doc.Push(newParagraph);

```
