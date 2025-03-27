# DocumentEditingRestrictions

The document editing restrictions:\
-**none** - no editing restrictions,\
-**comments** - allows editing comments,\
-**forms** - allows editing form fields,\
-**readOnly** - does not allow editing.

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
