# GetContentControl

Returns the currently selected content control, or, if an ID is provided, returns the content control with the specified ID.

## Syntax

```javascript
expression.GetContentControl(Id);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Id | Optional | string |  | The ID of the content control to retrieve. If omitted, the method returns the content control currently selected in the document. |

## Returns

[ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) \| null

## Example

This example shows how to get a content control by ID

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("This is a block-level content control.");
let blockSdt = Api.CreateBlockLvlSdt(paragraph);
doc.AddElement(0, blockSdt);
let contentControl = doc.GetContentControl(blockSdt.GetInternalId());
if (contentControl) {
    blockSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
}
```