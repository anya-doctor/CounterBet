const db = require("./db.js");

async function register_bet(username, bet)
{
	console.log(username, bet);
	if (!username)
		return {error: 1, msg: 'Not connected'};
	//TODO: refuse bet if match is live
	//if (...)
		//return {error: 1, msg: 'Match already started'};

	let res = await db.addBet(username, bet);
	console.log(res)
	if (res.result.ok)
		return {msg: 'Success'};
	return {error: 2, msg: 'Unknow error. Try again'};
}

module.exports = {
	register_bet
};
