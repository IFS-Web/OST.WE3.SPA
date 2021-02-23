/**
 *  Counter Service Facilities & API
 */
let teamCounter = 0;
const teamNamesArray = ['Bulls', 'Tigers'];
const teamCountsArray = [0, 0];

function getTeamName(teamNr) {
	return new Promise((resolve, reject) => {
		if (teamNamesArray[teamNr] !== undefined) {
			resolve(teamNamesArray[teamNr]);
		} else {
			reject(new Error("Invalid team number specified"));
		}
	});
}

function getCounterByTeamNr(teamNr) {
	return new Promise((resolve, reject) => {
		if (teamCountsArray[teamNr] !== undefined) {
			resolve(teamCountsArray[teamNr]);
		} else {
			reject(new Error("Invalid team number specified"));
		}
	});
}

function incTeamCounter(teamNr) {
	return new Promise((resolve, reject) => {
		if (teamCountsArray[teamNr] !== undefined) {
			teamCountsArray[teamNr] = teamCountsArray[teamNr] + 1;
			resolve(teamCountsArray[teamNr]);
		} else {
			reject(new Error("Invalid team number specified"));
		}
	});
}

function getNextTeamNr() {
	return new Promise((resolve, reject) => {
		teamCounter++;
		resolve(teamCounter % teamCountsArray.length);
	});
}

export const counterService =  {getTeamName, getCounterByTeamNr, incTeamCounter, getNextTeamNr};


