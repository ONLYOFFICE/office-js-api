# FullName

Returns the full name of the currently opened file. **Read-only**

## Syntax

expression.FullName;

`expression` - A variable that represents a [Api](../Api.md) class.

## Returns

String

## Example

This example gets the file name and inserts it into the first paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var sName = Api.FullName;
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("File name: " + sName);
builder.SaveFile("docx", "GetFullName.docx");
builder.CloseFile();
```