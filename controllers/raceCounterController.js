import {counterService} from '../services/counterService';

async function getCounter(req, res, next) {
    try {
        res.json(await getCounterResult(await getTeamFromSessoin(req.session)));
    } catch (err) {
        next(err);
    }
}

async function up(req, res, next) {
    try {
		const teamNr = await getTeamFromSessoin(req.session);
		await counterService.incTeamCounter(teamNr);
		res.json(await getCounterResult(teamNr));
    } catch (err) {
        next(err);
    }
}

async function getCounterResult(teamNr) {
	return getDto(
		await counterService.getTeamName(teamNr),
		await counterService.getCounterByTeamNr(teamNr));
}

function getDto(team, count) {
	return {team, count};
}

async function getTeamFromSessoin(session) {
	if (session) {
		if (session.raceTeamNr === undefined) {
			session.raceTeamNr = await counterService.getNextTeamNr();
		}
		return session.raceTeamNr;
	}
	return -1; // no session available
}

export const raceCounterController = { getCounter, up };
