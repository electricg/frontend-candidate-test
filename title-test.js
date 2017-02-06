var assert = chai.assert;

describe('Title Creator', function() {
    it('Given a query of "dress", the title should be "Dress"', function() {
        var state = {
            query: 'dress',
            brand: null,
            store: null,
            category: null
        };
        var title = parseTitle(state);
        assert.equal(title, 'Dress');
    });

    it('Given a query of "black+dress", the title should be "Black Dress"', function() {
        var state = {
            query: 'black+dress',
            brand: null,
            store: null,
            category: null
        };
        var title = parseTitle(state);
        assert.equal(title, 'Black Dress')
    });

    it('Given a brand of "alexander-wang", the title should be "Alexander Wang"', function() {
        var state = {
            query: null,
            brand: 'alexander-wang',
            store: null,
            category: null
        };
        var title = parseTitle(state);
        assert.equal(title, 'Alexander Wang')
    });

    it('Given a query of "black+dress" and a store of "alexander-wang", the title should be "Black Dress at Alexander Wang"', function() {
        var state = {
            query: 'black+dress',
            brand: null,
            store: 'alexander-wang',
            category: null
        };
        var title = parseTitle(state);
        assert.equal(title, 'Black Dress at Alexander Wang')
    });

    it('Given a query of "black+dress" and a brand of "free-people", the title should be "Black Dress by Free People"', function() {
        var state = {
            query: 'black+dress',
            brand: 'free-people',
            store: null,
            category: null
        };
        var title = parseTitle(state);
        assert.equal(title, 'Black Dress by Free People')
    });

    it('Given a query of "black+dress" and a store of "nordstrom", the title should be "Black Dress at Nordstrom"', function() {
        var state = {
            query: 'black+dress',
            brand: null,
            store: 'nordstrom',
            category: null
        };
        var title = parseTitle(state);
        assert.equal(title, 'Black Dress at Nordstrom')
    });

    it('Given a query of "black+dress", a brand of "alexander-wang" and a store of "nordstrom", the title should be "Black Dress by Alexander Wang at Nordstrom"', function() {
        var state = {
            query: 'black+dress',
            brand: 'alexander-wang',
            store: 'nordstrom',
            category: null
        };
        var title = parseTitle(state);
        assert.equal(title, 'Black Dress by Alexander Wang at Nordstrom')
    });

    // Bonus tests - uncomment if you want to give them a try
    it('Given a query of "nordstrom+dress" and a store of "nordstrom", the title should be "Dress at Nordstrom"', function() {
        var state = {
            query: 'nordstrom+dress',
            brand: null,
            store: 'nordstrom',
            category: null
        };
        var title = parseTitle(state);
        assert.equal(title, 'Dress at Nordstrom')
    });

    it('Given a store of "alice+olivia", the title should be "Alice+Olivia"', function() {
        var state = {
            query: null,
            brand: null,
            store: 'alice+olivia',
            category: null
        };
        var title = parseTitle(state);
        assert.equal(title, 'Alice+Olivia')
    });
});

describe('My additional tests for Title Creator', function() {
    it('Given a store of "alexander-wang", the title should be "Alexander Wang"', function() {
        var state = {
            query: null,
            brand: null,
            store: 'alexander-wang',
            category: null
        };
        var title = parseTitle(state);
        assert.equal(title, 'Alexander Wang')
    });

    it('Given a query of "alice+olivia+dress" and a store of "alice+olivia", the title should be "Dress at Alice+Olivia"', function() {
        var state = {
            query: 'alice+olivia+dress',
            brand: null,
            store: 'alice+olivia',
            category: null
        };
        var title = parseTitle(state);
        assert.equal(title, 'Dress at Alice+Olivia')
    });

    it('Given a query of "black+alice+olivia+dress" and a store of "alice+olivia", the title should be "Black Dress at Alice+Olivia"', function() {
        var state = {
            query: 'black+alice+olivia+dress',
            brand: null,
            store: 'alice+olivia',
            category: null
        };
        var title = parseTitle(state);
        assert.equal(title, 'Black Dress at Alice+Olivia')
    });

    it('Given a query of "alexander+wang+dress" and a store of "alexander-wang", the title should be "Dress at Alexander Wang"', function() {
        var state = {
            query: 'alexander+wang+dress',
            brand: null,
            store: 'alexander-wang',
            category: null
        };
        var title = parseTitle(state);
        assert.equal(title, 'Dress at Alexander Wang')
    });

    it('Given a brand of "alice+olivia", the title should be "Alice+Olivia"', function() {
        var state = {
            query: null,
            brand: 'alice+olivia',
            store: null,
            category: null
        };
        var title = parseTitle(state);
        assert.equal(title, 'Alice+Olivia')
    });
});
