# Delete

Removes a content control and its content. If keepContent is true, the content is not deleted.

## Syntax

expression.Delete(keepContent);

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| keepContent | Required | Boolean | Specifies if the content will be deleted or not. |

## Returns

Boolean (returns false if control haven't parent paragraph)

## Example

This example removes a content control and its content.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oInlineLvlSdt.AddText("This is an inline text content control.");
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
oInlineLvlSdt.Delete(false);
oParagraph.AddText("The inline text content control was removed.");
builder.SaveFile("docx", "Delete.docx");
builder.CloseFile();
```