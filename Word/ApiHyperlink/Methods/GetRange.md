# GetRange

Returns a Range object that represents the document part contained in the specified hyperlink.

## Syntax

expression.GetRange(Start, End);

`expression` - A variable that represents a [ApiHyperlink](../ApiHyperlink.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| Start | Required | Number | Start character index in the current element. |
| End | Required | Number | End character index in the current element. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

This example shows how to get a Range object that represents the document part contained in the specified hyperlink.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Api Document Builder");
var oHyperlink = oParagraph.AddHyperlink("https://api.onlyoffice.com/docbuilder/basic");
var oRange = oHyperlink.GetRange(0, 2);
oRange.SetBold(true);
builder.SaveFile("docx", "GetRange .docx");
builder.CloseFile();
```