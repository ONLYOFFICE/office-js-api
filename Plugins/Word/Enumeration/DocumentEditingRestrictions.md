# DocumentEditingRestrictions

The document editing restrictions:\n-**none** - no editing restrictions,\n-**comments** - allows editing comments,\n-**forms** - allows editing form fields,\n-**readOnly** - does not allow editing.

## Type

Enumeration

## Values

- 'none'
- 'comments'
- 'forms'
- 'readOnly'


## Example

```javascript
let documentEditingRestrictions = "readOnly";
window.Asc.plugin.executeMethod("SetEditingRestrictions", [documentEditingRestrictions]);
```
