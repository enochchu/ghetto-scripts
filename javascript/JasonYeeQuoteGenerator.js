class JasonYeeQuoteGenerator {
	constructor() {
		var instance = this;

		instance.firstWord = [];
		instance.lastWord = [];

		instance.collectiveData = [];

		instance.data = [
			"I love these posts! Blast from the past.",
			"Such real talk right here!",
			"The food was on point! Going back for damn sure.",
			"Oh boy",
			"No matter how far or how long it takes to see the fam from outta town. Straight old school.",
			"Talk about old school",
			"It's that time again! Who's your pick?",
			"Awwww snap can't wait to try out a modern remake of one of my OG spots!",
			"Not surprised whatsoever lol",
			"Time sure does fly by when you're having fun. This happened six years ago today?",
			"Win or lose, team of the decade.",
			"This is hella sick",
			"This is hella bomb",
			"This is hella dope",
			"Oh boy this brings back memories",
			"The food always hits the spot",
			"Gotta start somewhere",
			"Who wants to go?",
			"Back to the old school 616 days.",
			"You already know what this is",
			"Really thankful for all the homies",
			"This past weekend has been a blur.",
			"I would not change it for the world",
			"Shout out to everyone who came out with me",
			"In town this weekend, holla at me if you are free",
			"Sup with today? I hope that's okay with you",
			"Aiite coo. Just making sure I always got your back",
			"Coo. Even better. Just like old times",
			"Hit me up.",
			"What we doing this week yo?",
			"Let me know when you are in town.",
			"Thanks for everyone who took time out of their schecdule to hang out with me this past weekend.",
			"I am very greatful to have such wonderful friends who stuck by me after all these years and still continued to be amazing people in my life.",
			"Cheers to amazing time of fun filled laughs and memories.",
			"Can't wait to come back to create new good times.",
			"My family.",
			"Back in the LBC. Who's down to chill this weekend",
			"Back to the LBC, who's around to hang?",
			"What a joke. Lol",
			"Can't wait for the new Star Trek movie",
			"Oh dang",
			"Oh crap",
			"Oh snap",
			"Simply amazing",
			"Make it happen!",
			"I'm ready. Are you?",
			"Old school memories",
			"Welcome back old friend",
			"Miss these days like crazy. Can't believe it's been so long",
			"Holy smokes",
			"Had to reshare this old school jam. Probably one of my favorite songs of all time."
		];
	}

	modelData() {
		var instance = this;

		var data = instance.data;

		for (var i = 0; i < data.length; i++) {
			instance._modelData(data[i])
		}
	}

	print() {
		var instance = this;

		var quote = "";

		var startingWords = instance.firstWord[Math.floor(Math.random() * instance.firstWord.length)];

		quote = quote.concat(startingWords);

		var buildingQuote = true;

		while(buildingQuote) {
			// TOOD Messy and ghetto
			try {
				var splitQuote = quote.split(" ");

				var firstWord = splitQuote[splitQuote.length - 1];

				var collectiveDataByKeyword = instance._fetchCollectiveDataByKeyword(firstWord);

				var secondWord = collectiveDataByKeyword[Math.floor(Math.random() * collectiveDataByKeyword.length)][firstWord];

				quote = quote.concat(" " + secondWord);

				console.log(quote);
			}

			catch(e) {
				buildingQuote = false;
			}
		}

		quote = quote.trim();

		return quote;
	}

	_fetchCollectiveDataByKeyword(quote) {
		var instance = this;
		var data = [];

		for (var i = 0; i < instance.collectiveData.length; i++) {
			var keys = Object.keys(instance.collectiveData[i]);

			if (keys.indexOf(quote) == 0) {
				data.push(instance.collectiveData[i]);
			}
		}

		return data;
	}

	_modelData(quote) {
		var instance = this;

		var parts = quote.split(" ");

		instance.firstWord.push(parts[0]);
		instance.lastWord.push(parts[parts.length - 1]);

		for (var i = 0; i < parts.length - 1; i++) {
			if (i != parts.length) {
				var data = {};

				data[parts[i]] = parts[i + 1];

				instance.collectiveData.push(data);
			}
		}
	}
}

var JasonYee = new JasonYeeQuoteGenerator();
JasonYee.modelData();
JasonYee.print();