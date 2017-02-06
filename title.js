/**
 * This is where you will build your solution. This function is called in the test file and the `state`
 * object will be passed through there. If you want to see exactly what is passed in each case, take
 * a look in `title-test.js`
 * @param {object} state - the query object representing a search
 * @returns {string} generated title
 */
function parseTitle(state) {
    var title = '';

    var qS = '+'; // query separator
    var bS = '-'; // brand separator
    var sS = '-'; // store separator
    var bP = ' by '; // brand prefix
    var sP = ' at '; // store prefix

    var generatedQuery = parseSearch(state.query, qS);
    var generatedBrand = parseSearch(state.brand, bS);
    var generatedStore = parseSearch(state.store, sS);

    // search for store vlue inside query value
    if (state.query && state.store) {
        // split the words inside the store value and join them with the query separator
        var store = state.store.split(/[^\w]/).join(qS);
        // create store string to search inside query value and escape it
        // add the query separator either at the end or the beginning of the
        // store value so it will be subsequently removed
        var storeRegEx = escapeRegExp(store + qS) + '|' + escapeRegExp(qS + store);
        storeRegEx = new RegExp(storeRegEx);

        if (storeRegEx.test(state.query)) {
            // remove store value from query value
            generatedQuery = state.query.replace(storeRegEx, '');
            generatedQuery = parseSearch(generatedQuery, qS);
        }
    }

    title += generatedQuery;

    if (title && generatedBrand) {
        title += bP;
    }
    title += generatedBrand;

    if (title && generatedStore) {
        title += sP;
    }
    title += generatedStore;

    return title;
}

/**
 * Escape text to use in regex
 * @param {string} str - text to escape
 * @returns {string} escaped text
 */
function escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}

/**
 * Convert first letter of every word to uppercase and the rest to lowercase
 * @param {string} str - the text to convert
 * @returns {string} converted text
 */
function capitalize(str) {
    return str.replace(/\w*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

/**
 * Parse search text
 * @param {string} str - the text to parse
 * @param {string} spacer - the text to replace with a blank space
 * @returns {string} parsed text
 */
function parseSearch(str, spacer) {
    var search = '';

    if (str) {
        search = str.split(spacer).join(' ');
        search = capitalize(search);
    }

    return search;
}