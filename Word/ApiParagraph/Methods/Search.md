# Search

Searches for a scope of a paragraph object. The search results are a collection of ApiRange objects.

## Syntax

expression.Search(sText, isMatchCase?);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sText | Required | String | Search string. |
| isMatchCase | Optional | Boolean | Case sensitive or not. Default value is "false". |

## Returns

Array<[ApiRange](../../ApiRange/ApiRange.md)>

## Example

This example shows how to make search in paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text. This text was added to the paragraph.");
var aSearch = oParagraph.Search("text");
aSearch[0].SetBold(true);
builder.SaveFile("docx", "Search.docx");
builder.CloseFile();
```