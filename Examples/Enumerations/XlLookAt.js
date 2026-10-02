// Specify that the whole text match will be searched in the range.

// How do I specify how the searched text is matched?

// Search a whole text from a range.

let searchRange = range.Find({
	What: "200",
	After: oWorksheet.GetRange("B1"),
	LookIn: "xlValues",
	LookAt: "xlWhole",
	SearchOrder: "xlByColumns",
	SearchDirection: "xlNext",
	MatchCase: true
});
