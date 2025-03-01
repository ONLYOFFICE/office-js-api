# GetDocumentInfo

Returns the document information:
**Application** - the application the document has been created with.
**CreatedRaw** - the date and time when the file was created.
**Created** - the parsed date and time when the file was created.
**LastModifiedRaw** - the date and time when the file was last modified.
**LastModified** - the parsed date and time when the file was last modified.
**LastModifiedBy** - the name of the user who has made the latest change to the document.
**Autrors** - the persons who has created the file.
**Title** - this property allows you to simplify your documents classification.
**Tags** - this property allows you to simplify your documents classification.
**Subject** - this property allows you to simplify your documents classification.
**Comment** - this property allows you to simplify your documents classification.

## Syntax

```javascript
expression.GetDocumentInfo();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

object

## Example

This example shows how to get the document info represented as an object and paste the application name into "A1" cell.

```javascript editor-xlsx
// How to get document info and iys application name.

// Get application name using document info.

const oDocInfo = Api.GetDocumentInfo();
const oRange = Api.GetActiveSheet().GetRange('A1');
oRange.SetValue('This document has been created with: ' + oDocInfo.Application)
```
