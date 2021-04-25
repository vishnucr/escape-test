export const config = {
    displayFn: (item: any) =>  item.name, //to support flexible text displaying for each item
    displayKey: 'name', //if objects array passed which key to be displayed defaults to description
    search: true, //true/false for the search functionlity defaults to false,
    height: 'auto', //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    placeholder: 'Select City', // text to be displayed when no item is selected defaults to Select,
    limitTo: 10, // number thats limits the no of options displayed in the UI (if zero, options will not be limited)
    moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: 'No results found!', // text to be displayed when no items are found while searching
    searchPlaceholder: 'Search', // label thats displayed in search input,
    searchOnKey: 'name', // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
    clearOnSelection: true, // clears search criteria when an option is selected if set to true, default is false
    inputDirection: 'ltr', // the direction of the search input can be rtl or ltr(default)
  };