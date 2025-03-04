# HdrFtrType

Header and footer types which can be applied to the document sections.**"default"** - a header or footer which can be applied to any default page.**"title"** - a header or footer which is applied to the title page.**"even"** - a header or footer which can be applied to even pages to distinguish them from the odd ones (which will be considered default).

## Type

Enumeration

## Values

- "default"
- "title"
- "even"


## Example

This example removes the header of the 'title' type from the final document section.

```javascript editor-docx
let docContent = finalSection.RemoveHeader("title");
```
