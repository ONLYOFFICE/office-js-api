# GetRange

Returns a Range object that represents the document part contained in the specified range.

## Syntax

expression.GetRange(Start?, End?);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| Start | Optional | Number | Start character index in the current range. Default value is "0". |
| End | Optional | Number | End character index in the current range (if <= 0, then the range is taken to the end). Default value is "-1". |

## Returns

[ApiRange](../ApiRange.md)

## Example

This example shows how to get a Range object that represents the document part contained in the specified range.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
var oRange1 = oDocument.GetRange(0, 24);
oRange1.SetBold(true);
var oRange2 = oRange1.GetRange(0, 9);
oRange2.SetItalic(true);
builder.SaveFile("docx", "GetRange.docx");
builder.CloseFile();
```