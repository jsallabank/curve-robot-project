var fs = require('fs');
var COVERAGE_FILE = 'coverage/index.html';
var results = []
var min_statementes = 100;
var min_branches = 100;
var min_functions = 100;
var min_lines = 100;

getCoverageValues().then(
    () => {
        checkCoverageValues().then(
            () => process.exit(),
            (error) => {
                console.log("************************************************");
                console.log(error);
                console.log("************************************************");

                process.exit(1);
            }
        );
    });

function getCoverageValues() {
    return new Promise((resolve, reject) => {
        console.log('Getting coverage values...')
        var arrayFile = fs.readFileSync(COVERAGE_FILE).toString().split('\n');
        var coverageValues = 0;
        if (arrayFile.length <= 0) {
            reject();
        }
        for (i in arrayFile) {
            if (arrayFile[i].includes('strong')) {
                var result = arrayFile[i].trim().replace('<span class="strong">', '').replace('% </span>', '');
                results.push(result);
                console.log(result);
                coverageValues++;
                if (coverageValues === 4) {
                    i = arrayFile.length;
                }
            }
        }
        return resolve();
    })
}

function checkCoverageValues() {
    return new Promise((resolve, reject) => {
        console.log('Checking coverage values...')
        var statements = parseFloat(results[0]);
        var branches = results[1];
        var functions = results[2];
        var lines = results[3];
        var result = checkScores(statements, branches, functions, lines);

        if (result.name) {
            return reject(result.name + ' coverage does not suffice ' + result.score + "%");
        }

        displaySuccess();
        return resolve();
    })
}

function checkScores(statements, branches, functions, lines) {
    var results = {};
    if (statements < min_statementes) {
        results.name = 'statements';
        results.score = statements;
    }
    if (branches < min_branches) {
        results.name = 'branches';
        results.score = branches;
    }
    if (functions < min_functions) {
        results.name = 'functions';
        results.score = functions;
    }
    if (lines < min_lines) {
        results.name = 'lines';
        results.score = lines;
    }
    return results;
}

function displaySuccess() {
    console.log("\n\n************************************************\n");
    console.log('Congratulations! Your test coverage if sufficient');
    console.log("\n************************************************\n\n");
}