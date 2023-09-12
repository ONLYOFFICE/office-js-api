# Delete

Removes a content control and its content. If keepContent is true, the content is not deleted.

## Syntax

expression.Delete(keepContent);

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| keepContent | Required | Boolean | Specifies if the content will be deleted or not. |

## Returns

Boolean (returns false if content control haven't parent)

## Example

This example deletes a content control and its content.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
oDocument.AddElement(0, oBlockLvlSdt);
oBlockLvlSdt.Delete(false);
builder.SaveFile("docx", "AddText.docx");
builder.CloseFile();
```