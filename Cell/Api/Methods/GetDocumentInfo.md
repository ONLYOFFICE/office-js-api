# GetDocumentInfo

Returns the document information:\n-**Application** - the application the document has been created with.\n-**CreatedRaw** - the date and time when the file was created.\n-**Created** - the parsed date and time when the file was created.\n-**LastModifiedRaw** - the date and time when the file was last modified.\n-**LastModified** - the parsed date and time when the file was last modified.\n-**LastModifiedBy** - the name of the user who has made the latest change to the document.\n-**Autrors** - the persons who has created the file.\n-**Title** - this property allows you to simplify your documents classification.\n-**Tags** - this property allows you to simplify your documents classification.\n-**Subject** - this property allows you to simplify your documents classification.\n-**Comment** - this property allows you to simplify your documents classification.

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
let docInfo = Api.GetDocumentInfo();
let range = Api.GetActiveSheet().GetRange('A1');
range.SetValue('This document has been created with: ' + docInfo.Application);
```
