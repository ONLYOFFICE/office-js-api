# Push

Pushes a paragraph or a table to actually add it to the document.<br>Inherited From: [ApiDocumentContent#Push](../../ApiDocumentContent/Methods/Push.md)

## Syntax

expression.Push(oElement);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oElement | Required | [DocumentElement](../../../Enumerations/DocumentElement.md) | The element type which will be pushed to the document. |

## Returns

Boolean (returns "false" if oElement is unsupported)

## Example

This example pushes 5 paragraphs to actually add its to the document.

```javascript
builder.sloseFile();
```