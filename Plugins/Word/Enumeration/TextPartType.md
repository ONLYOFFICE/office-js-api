# TextPartType

Specifies if the whole text or only its part will be returned or replaced:
**entirely** - replaces/returns the whole text,
**beforeCursor** - replaces/returns only the part of the text before the cursor,
**afterCursor** - replaces/returns only the part of the text after the cursor.

## Type

Enumeration

## Values

- "entirely"
- "beforeCursor"
- "afterCursor"


## Example

```javascript
window.Asc.plugin.executeMethod ("GetCurrentWord", ["entirely"], function (res) {
    console.log (res)
});
```
