# GetAllComments

Returns all the comments from the document.

## Syntax

```javascript
expression.GetAllComments();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[comment](../../Enumeration/comment.md)[]

## Example

```javascript
window.Asc.plugin.executeMethod ("GetAllComments", null, function (comments) {
    Comments = comments;
    addComments (comments);
});
```
