# GetFullName

Returns the full name of the currently opened file.

## Syntax

expression.GetFullName();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example gets a document name and inserts it into the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var sName = Api.GetFullName();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("File name: " + sName);
builder.SaveFile("docx", "GetFullName.docx");
builder.CloseFile();
```