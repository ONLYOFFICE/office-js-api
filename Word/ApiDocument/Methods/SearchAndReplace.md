# SearchAndReplace

Finds and replaces the text.

## Syntax

expression.SearchAndReplace(oProperties);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oProperties | Required | [SearchAndReplaceProps](../../../Enumerations/SearchAndReplaceProps.md) | The properties to find and replace. |

## Returns

This method doesn't return any data.

## Example

This example shows how to make search and replace.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is the first sample text. The serial number of this sample text was replaced here.");
oDocument.SearchAndReplace({"searchString": "first", "replaceString": "second"});
builder.SaveFile("docx", "SearchAndReplace.docx");
builder.CloseFile();
```