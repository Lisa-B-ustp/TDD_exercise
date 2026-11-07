const table_string = 
    `Date; exercises
    01.11.; pushups, pullups, crunches
    03.11.; deadlifts, pushups
    06.11.; pushups, crunches, running
    08.11.; crawling, pullups
    `

    function divideString(longString) {
        return longString
            .split(/\r?\n/)
            .map(line => line.trim())
            .filter(line => line.length > 0);
    }

    function test_divideString() {
        const test_String = 
        `bla
        blub`;
        const result = divideString(test_String);
        if (!Array.isArray(result)) {
            console.log("ERROR: Return is not an Array");
            return;
        } else if (result.length !== 2) {
            console.log("ERROR: Länge passt nicht");
        } else if (result[0] !== "bla") {
            console.log("ERROR: erster Eintrag ist nicht bla");
        } else if (result[1] !== "blub") {
            console.log("ERROR: zweites Entry nicht blub");
        }
        console.log("kein Fehler");
    }
test_divideString();