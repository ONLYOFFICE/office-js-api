# Save

Saves changes to the specified document.

## Syntax

expression.Save();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example saves changes to the specified document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This sample text is saved to the document.");
Api.Save();
builder.SaveFile("docx", "Save.docx");
builder.CloseFile();
```