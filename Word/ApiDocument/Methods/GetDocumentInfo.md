# GetDocumentInfo

Returns the document information:
**Application** - the application the document was created with.
**CreatedRaw** - the date and time when the file was created.
**Created** - the parsed date and time when the file was created.
**LastModifiedRaw** - the date and time when the file was last modified.
**LastModified** - the parsed date and time when the file was last modified.
**LastModifiedBy** - the name of the user who made the latest change to the document.
**Authors** - the persons who created the file.
**Title** - the document title (this property allows you to simplify your documents classification).
**Tags** - the document tags (this property allows you to simplify your documents classification).
**Subject** - the document subject (this property allows you to simplify your documents classification).
**Comment** - the comment to the document (this property allows you to simplify your documents classification).

## Syntax

```javascript
expression.GetDocumentInfo();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

object

## Example

This example shows how to get the document info represented as an object and paste the application name into the last paragraph.

```javascript
let doc = Api.GetDocument();
let docInfo = doc.GetDocumentInfo();
let paragraph = Api.CreateParagraph();
paragraph.AddText('This document has been created with: ' + docInfo.Application);
doc.Push(paragraph);
```
