# GetDocumentInfo

Returns the document information:* **Application** - the application the document has been created with.* **CreatedRaw** - the date and time when the file was created.* **Created** - the parsed date and time when the file was created.* **LastModifiedRaw** - the date and time when the file was last modified.* **LastModified** - the parsed date and time when the file was last modified.* **LastModifiedBy** - the name of the user who has made the latest change to the document.* **Authors** - the persons who has created the file.* **Title** - this property allows you to simplify your documents classification.* **Tags** - this property allows you to simplify your documents classification.* **Subject** - this property allows you to simplify your documents classification.* **Comment** - this property allows you to simplify your documents classification.

## Syntax

expression.GetDocumentInfo();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

object

## Example

This example shows how to get the document info represented as an object and paste the application name into the last paragraph.

```javascript
const oDocument = Api.GetDocument();
const oDocInfo = oDocument.GetDocumentInfo();
const oParagraph = Api.CreateParagraph();
oParagraph.AddText('This document has been created with: ' + oDocInfo.Application)
oDocument.Push(oParagraph);
```
