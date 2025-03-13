// This example specify that the whole text match will be searched in the range.

// How to search a text using search data.

// Find a text from a range specifying data.

let searchRange = range.Find( { What: "200", After: oWorksheet.GetRange("B1"), LookIn: "xlValues", LookAt: "xlWhole",	SearchOrder: "xlByColumns", SearchDirection: "xlNext", MatchCase: true } );