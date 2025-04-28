# AddPictureContentControl

Adds a new picture content control to the document.

## Syntax

```javascript
expression.AddPictureContentControl();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## Example

This example shows how to add a picture content control to a document:

```javascript editor-docx
let doc = Api.GetDocument();
doc.AddPictureContentControl();
```
