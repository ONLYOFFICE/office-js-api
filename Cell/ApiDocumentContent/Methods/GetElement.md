# GetElement

Returns an element by its position in the document.

## Syntax

```javascript
expression.GetElement(nPos);
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | The element position that will be taken from the document. |

## Returns

[DocumentElement](../../Enumeration/DocumentElement.md)

## Example

This example shows how to get an element by its position in the document content.

```javascript editor-xlsx
// How to get an element of the document content knowing its index position.

// Get a document element then change its position and content.

var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 200 * 36000, 60 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oParaPr = oParagraph.GetParaPr();
oParaPr.SetJc("center");
oParagraph.AddText("This is a paragraph with the text in it aligned by the center. ");
oParagraph.AddText("The justification is specified in the paragraph style. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
```
