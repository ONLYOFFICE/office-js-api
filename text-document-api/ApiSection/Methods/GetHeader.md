# GetHeader

Returns the content for the specified header type.

## Syntax

```javascript
expression.GetHeader(sType, isCreate);
```

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [HdrFtrType](../../Enumeration/HdrFtrType.md) |  | Header type to get the content from. |
| isCreate | Optional | boolean | false | Specifies whether to create a new header or not with the specified header type in case\ no header with such a type could be found in the current section. |

## Returns

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md)

## Example

This example shows how to get the content for the specified header type.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a page with a header. ");
paragraph.AddText("See it above.");
let section = doc.GetFinalSection();
let header = section.GetHeader("default", true);
paragraph = header.GetElement(0);
paragraph.AddText("This is a page header");
```
