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
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var sName = Api.FullName;
oWorksheet.GetRange("B1").SetValue("File name: " + sName);
builder.SaveFile("xlsx", "FullName.xlsx");
builder.CloseFile();
```