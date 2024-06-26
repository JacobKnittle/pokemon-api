const express = require('express');
const app = express();
const PORT = 8000;

const pokemon = {
	bulbasaur: {
		name: 'bulbasaur',
		url: 'https://pokeapi.co/api/v2/pokemon/1/',
	},
	ivysaur: {
		name: 'ivysaur',
		url: 'https://pokeapi.co/api/v2/pokemon/2/',
	},
	venusaur: {
		name: 'venusaur',
		url: 'https://pokeapi.co/api/v2/pokemon/3/',
	},
	charmander: {
		name: 'charmander',
		url: 'https://pokeapi.co/api/v2/pokemon/4/',
	},
	charmeleon: {
		name: 'charmeleon',
		url: 'https://pokeapi.co/api/v2/pokemon/5/',
	},
	charizard: {
		name: 'charizard',
		url: 'https://pokeapi.co/api/v2/pokemon/6/',
	},
	squirtle: {
		name: 'squirtle',
		url: 'https://pokeapi.co/api/v2/pokemon/7/',
	},
	wartortle: {
		name: 'wartortle',
		url: 'https://pokeapi.co/api/v2/pokemon/8/',
	},
	blastoise: {
		name: 'blastoise',
		url: 'https://pokeapi.co/api/v2/pokemon/9/',
	},
	caterpie: {
		name: 'caterpie',
		url: 'https://pokeapi.co/api/v2/pokemon/10/',
	},
	metapod: {
		name: 'metapod',
		url: 'https://pokeapi.co/api/v2/pokemon/11/',
	},
	butterfree: {
		name: 'butterfree',
		url: 'https://pokeapi.co/api/v2/pokemon/12/',
	},
	weedle: {
		name: 'weedle',
		url: 'https://pokeapi.co/api/v2/pokemon/13/',
	},
	kakuna: {
		name: 'kakuna',
		url: 'https://pokeapi.co/api/v2/pokemon/14/',
	},
	beedrill: {
		name: 'beedrill',
		url: 'https://pokeapi.co/api/v2/pokemon/15/',
	},
	pidgey: {
		name: 'pidgey',
		url: 'https://pokeapi.co/api/v2/pokemon/16/',
	},
	pidgeotto: {
		name: 'pidgeotto',
		url: 'https://pokeapi.co/api/v2/pokemon/17/',
	},
	pidgeot: {
		name: 'pidgeot',
		url: 'https://pokeapi.co/api/v2/pokemon/18/',
	},
	rattata: {
		name: 'rattata',
		url: 'https://pokeapi.co/api/v2/pokemon/19/',
	},
	raticate: {
		name: 'raticate',
		url: 'https://pokeapi.co/api/v2/pokemon/20/',
	},
	spearow: {
		name: 'spearow',
		url: 'https://pokeapi.co/api/v2/pokemon/21/',
	},
	fearow: {
		name: 'fearow',
		url: 'https://pokeapi.co/api/v2/pokemon/22/',
	},
	ekans: {
		name: 'ekans',
		url: 'https://pokeapi.co/api/v2/pokemon/23/',
	},
	arbok: {
		name: 'arbok',
		url: 'https://pokeapi.co/api/v2/pokemon/24/',
	},
	pikachu: {
		name: 'pikachu',
		url: 'https://pokeapi.co/api/v2/pokemon/25/',
	},
	raichu: {
		name: 'raichu',
		url: 'https://pokeapi.co/api/v2/pokemon/26/',
	},
	sandshrew: {
		name: 'sandshrew',
		url: 'https://pokeapi.co/api/v2/pokemon/27/',
	},
	sandslash: {
		name: 'sandslash',
		url: 'https://pokeapi.co/api/v2/pokemon/28/',
	},
	nidoranF: {
		name: 'nidoran-f',
		url: 'https://pokeapi.co/api/v2/pokemon/29/',
	},
	nidorina: {
		name: 'nidorina',
		url: 'https://pokeapi.co/api/v2/pokemon/30/',
	},
	nidoqueen: {
		name: 'nidoqueen',
		url: 'https://pokeapi.co/api/v2/pokemon/31/',
	},
	nidoranM: {
		name: 'nidoran-m',
		url: 'https://pokeapi.co/api/v2/pokemon/32/',
	},
	nidorino: {
		name: 'nidorino',
		url: 'https://pokeapi.co/api/v2/pokemon/33/',
	},
	nidoking: {
		name: 'nidoking',
		url: 'https://pokeapi.co/api/v2/pokemon/34/',
	},
	clefairy: {
		name: 'clefairy',
		url: 'https://pokeapi.co/api/v2/pokemon/35/',
	},
	clefable: {
		name: 'clefable',
		url: 'https://pokeapi.co/api/v2/pokemon/36/',
	},
	vulpix: {
		name: 'vulpix',
		url: 'https://pokeapi.co/api/v2/pokemon/37/',
	},
	ninetales: {
		name: 'ninetales',
		url: 'https://pokeapi.co/api/v2/pokemon/38/',
	},
	jigglypuff: {
		name: 'jigglypuff',
		url: 'https://pokeapi.co/api/v2/pokemon/39/',
	},
	wigglytuff: {
		name: 'wigglytuff',
		url: 'https://pokeapi.co/api/v2/pokemon/40/',
	},
	zubat: {
		name: 'zubat',
		url: 'https://pokeapi.co/api/v2/pokemon/41/',
	},
	golbat: {
		name: 'golbat',
		url: 'https://pokeapi.co/api/v2/pokemon/42/',
	},
	oddish: {
		name: 'oddish',
		url: 'https://pokeapi.co/api/v2/pokemon/43/',
	},
	gloom: {
		name: 'gloom',
		url: 'https://pokeapi.co/api/v2/pokemon/44/',
	},
	vileplume: {
		name: 'vileplume',
		url: 'https://pokeapi.co/api/v2/pokemon/45/',
	},
	paras: {
		name: 'paras',
		url: 'https://pokeapi.co/api/v2/pokemon/46/',
	},
	parasect: {
		name: 'parasect',
		url: 'https://pokeapi.co/api/v2/pokemon/47/',
	},
	venonat: {
		name: 'venonat',
		url: 'https://pokeapi.co/api/v2/pokemon/48/',
	},
	venomoth: {
		name: 'venomoth',
		url: 'https://pokeapi.co/api/v2/pokemon/49/',
	},
	diglett: {
		name: 'diglett',
		url: 'https://pokeapi.co/api/v2/pokemon/50/',
	},
	dugtrio: {
		name: 'dugtrio',
		url: 'https://pokeapi.co/api/v2/pokemon/51/',
	},
	meowth: {
		name: 'meowth',
		url: 'https://pokeapi.co/api/v2/pokemon/52/',
	},
	persian: {
		name: 'persian',
		url: 'https://pokeapi.co/api/v2/pokemon/53/',
	},
	psyduck: {
		name: 'psyduck',
		url: 'https://pokeapi.co/api/v2/pokemon/54/',
	},
	golduck: {
		name: 'golduck',
		url: 'https://pokeapi.co/api/v2/pokemon/55/',
	},
	mankey: {
		name: 'mankey',
		url: 'https://pokeapi.co/api/v2/pokemon/56/',
	},
	primeape: {
		name: 'primeape',
		url: 'https://pokeapi.co/api/v2/pokemon/57/',
	},
	growlithe: {
		name: 'growlithe',
		url: 'https://pokeapi.co/api/v2/pokemon/58/',
	},
	arcanine: {
		name: 'arcanine',
		url: 'https://pokeapi.co/api/v2/pokemon/59/',
	},
	poliwag: {
		name: 'poliwag',
		url: 'https://pokeapi.co/api/v2/pokemon/60/',
	},
	poliwhirl: {
		name: 'poliwhirl',
		url: 'https://pokeapi.co/api/v2/pokemon/61/',
	},
	poliwrath: {
		name: 'poliwrath',
		url: 'https://pokeapi.co/api/v2/pokemon/62/',
	},
	abra: {
		name: 'abra',
		url: 'https://pokeapi.co/api/v2/pokemon/63/',
	},
	kadabra: {
		name: 'kadabra',
		url: 'https://pokeapi.co/api/v2/pokemon/64/',
	},
	alakazam: {
		name: 'alakazam',
		url: 'https://pokeapi.co/api/v2/pokemon/65/',
	},
	machop: {
		name: 'machop',
		url: 'https://pokeapi.co/api/v2/pokemon/66/',
	},
	machoke: {
		name: 'machoke',
		url: 'https://pokeapi.co/api/v2/pokemon/67/',
	},
	machamp: {
		name: 'machamp',
		url: 'https://pokeapi.co/api/v2/pokemon/68/',
	},
	bellsprout: {
		name: 'bellsprout',
		url: 'https://pokeapi.co/api/v2/pokemon/69/',
	},
	weepinbell: {
		name: 'weepinbell',
		url: 'https://pokeapi.co/api/v2/pokemon/70/',
	},
	victreebel: {
		name: 'victreebel',
		url: 'https://pokeapi.co/api/v2/pokemon/71/',
	},
	tentacool: {
		name: 'tentacool',
		url: 'https://pokeapi.co/api/v2/pokemon/72/',
	},
	tentacruel: {
		name: 'tentacruel',
		url: 'https://pokeapi.co/api/v2/pokemon/73/',
	},
	geodude: {
		name: 'geodude',
		url: 'https://pokeapi.co/api/v2/pokemon/74/',
	},
	graveler: {
		name: 'graveler',
		url: 'https://pokeapi.co/api/v2/pokemon/75/',
	},
	golem: {
		name: 'golem',
		url: 'https://pokeapi.co/api/v2/pokemon/76/',
	},
	ponyta: {
		name: 'ponyta',
		url: 'https://pokeapi.co/api/v2/pokemon/77/',
	},
	rapidash: {
		name: 'rapidash',
		url: 'https://pokeapi.co/api/v2/pokemon/78/',
	},
	slowpoke: {
		name: 'slowpoke',
		url: 'https://pokeapi.co/api/v2/pokemon/79/',
	},
	slowbro: {
		name: 'slowbro',
		url: 'https://pokeapi.co/api/v2/pokemon/80/',
	},
	magnemite: {
		name: 'magnemite',
		url: 'https://pokeapi.co/api/v2/pokemon/81/',
	},
	magneton: {
		name: 'magneton',
		url: 'https://pokeapi.co/api/v2/pokemon/82/',
	},
	farfetchd: {
		name: 'farfetchd',
		url: 'https://pokeapi.co/api/v2/pokemon/83/',
	},
	doduo: {
		name: 'doduo',
		url: 'https://pokeapi.co/api/v2/pokemon/84/',
	},
	dodrio: {
		name: 'dodrio',
		url: 'https://pokeapi.co/api/v2/pokemon/85/',
	},
	seel: {
		name: 'seel',
		url: 'https://pokeapi.co/api/v2/pokemon/86/',
	},
	dewgong: {
		name: 'dewgong',
		url: 'https://pokeapi.co/api/v2/pokemon/87/',
	},
	grimer: {
		name: 'grimer',
		url: 'https://pokeapi.co/api/v2/pokemon/88/',
	},
	muk: {
		name: 'muk',
		url: 'https://pokeapi.co/api/v2/pokemon/89/',
	},
	shellder: {
		name: 'shellder',
		url: 'https://pokeapi.co/api/v2/pokemon/90/',
	},
	cloyster: {
		name: 'cloyster',
		url: 'https://pokeapi.co/api/v2/pokemon/91/',
	},
	gastly: {
		name: 'gastly',
		url: 'https://pokeapi.co/api/v2/pokemon/92/',
	},
	haunter: {
		name: 'haunter',
		url: 'https://pokeapi.co/api/v2/pokemon/93/',
	},
	gengar: {
		name: 'gengar',
		url: 'https://pokeapi.co/api/v2/pokemon/94/',
	},
	onix: {
		name: 'onix',
		url: 'https://pokeapi.co/api/v2/pokemon/95/',
	},
	drowzee: {
		name: 'drowzee',
		url: 'https://pokeapi.co/api/v2/pokemon/96/',
	},
	hypno: {
		name: 'hypno',
		url: 'https://pokeapi.co/api/v2/pokemon/97/',
	},
	krabby: {
		name: 'krabby',
		url: 'https://pokeapi.co/api/v2/pokemon/98/',
	},
	kingler: {
		name: 'kingler',
		url: 'https://pokeapi.co/api/v2/pokemon/99/',
	},
	voltorb: {
		name: 'voltorb',
		url: 'https://pokeapi.co/api/v2/pokemon/100/',
	},
	electrode: {
		name: 'electrode',
		url: 'https://pokeapi.co/api/v2/pokemon/101/',
	},
	exeggcute: {
		name: 'exeggcute',
		url: 'https://pokeapi.co/api/v2/pokemon/102/',
	},
	exeggutor: {
		name: 'exeggutor',
		url: 'https://pokeapi.co/api/v2/pokemon/103/',
	},
	cubone: {
		name: 'cubone',
		url: 'https://pokeapi.co/api/v2/pokemon/104/',
	},
	marowak: {
		name: 'marowak',
		url: 'https://pokeapi.co/api/v2/pokemon/105/',
	},
	hitmonlee: {
		name: 'hitmonlee',
		url: 'https://pokeapi.co/api/v2/pokemon/106/',
	},
	hitmonchan: {
		name: 'hitmonchan',
		url: 'https://pokeapi.co/api/v2/pokemon/107/',
	},
	lickitung: {
		name: 'lickitung',
		url: 'https://pokeapi.co/api/v2/pokemon/108/',
	},
	koffing: {
		name: 'koffing',
		url: 'https://pokeapi.co/api/v2/pokemon/109/',
	},
	weezing: {
		name: 'weezing',
		url: 'https://pokeapi.co/api/v2/pokemon/110/',
	},
	rhyhorn: {
		name: 'rhyhorn',
		url: 'https://pokeapi.co/api/v2/pokemon/111/',
	},
	rhydon: {
		name: 'rhydon',
		url: 'https://pokeapi.co/api/v2/pokemon/112/',
	},
	chansey: {
		name: 'chansey',
		url: 'https://pokeapi.co/api/v2/pokemon/113/',
	},
	tangela: {
		name: 'tangela',
		url: 'https://pokeapi.co/api/v2/pokemon/114/',
	},
	kangaskhan: {
		name: 'kangaskhan',
		url: 'https://pokeapi.co/api/v2/pokemon/115/',
	},
	horsea: {
		name: 'horsea',
		url: 'https://pokeapi.co/api/v2/pokemon/116/',
	},
	seadra: {
		name: 'seadra',
		url: 'https://pokeapi.co/api/v2/pokemon/117/',
	},
	goldeen: {
		name: 'goldeen',
		url: 'https://pokeapi.co/api/v2/pokemon/118/',
	},
	seaking: {
		name: 'seaking',
		url: 'https://pokeapi.co/api/v2/pokemon/119/',
	},
	staryu: {
		name: 'staryu',
		url: 'https://pokeapi.co/api/v2/pokemon/120/',
	},
	starmie: {
		name: 'starmie',
		url: 'https://pokeapi.co/api/v2/pokemon/121/',
	},
	mrMime: {
		name: 'mr-mime',
		url: 'https://pokeapi.co/api/v2/pokemon/122/',
	},
	scyther: {
		name: 'scyther',
		url: 'https://pokeapi.co/api/v2/pokemon/123/',
	},
	jynx: {
		name: 'jynx',
		url: 'https://pokeapi.co/api/v2/pokemon/124/',
	},
	electabuzz: {
		name: 'electabuzz',
		url: 'https://pokeapi.co/api/v2/pokemon/125/',
	},
	magmar: {
		name: 'magmar',
		url: 'https://pokeapi.co/api/v2/pokemon/126/',
	},
	pinsir: {
		name: 'pinsir',
		url: 'https://pokeapi.co/api/v2/pokemon/127/',
	},
	tauros: {
		name: 'tauros',
		url: 'https://pokeapi.co/api/v2/pokemon/128/',
	},
	magikarp: {
		name: 'magikarp',
		url: 'https://pokeapi.co/api/v2/pokemon/129/',
	},
	gyarados: {
		name: 'gyarados',
		url: 'https://pokeapi.co/api/v2/pokemon/130/',
	},
	lapras: {
		name: 'lapras',
		url: 'https://pokeapi.co/api/v2/pokemon/131/',
	},
	ditto: {
		name: 'ditto',
		url: 'https://pokeapi.co/api/v2/pokemon/132/',
	},
	eevee: {
		name: 'eevee',
		url: 'https://pokeapi.co/api/v2/pokemon/133/',
	},
	vaporeon: {
		name: 'vaporeon',
		url: 'https://pokeapi.co/api/v2/pokemon/134/',
	},
	jolteon: {
		name: 'jolteon',
		url: 'https://pokeapi.co/api/v2/pokemon/135/',
	},
	flareon: {
		name: 'flareon',
		url: 'https://pokeapi.co/api/v2/pokemon/136/',
	},
	porygon: {
		name: 'porygon',
		url: 'https://pokeapi.co/api/v2/pokemon/137/',
	},
	omanyte: {
		name: 'omanyte',
		url: 'https://pokeapi.co/api/v2/pokemon/138/',
	},
	omastar: {
		name: 'omastar',
		url: 'https://pokeapi.co/api/v2/pokemon/139/',
	},
	kabuto: {
		name: 'kabuto',
		url: 'https://pokeapi.co/api/v2/pokemon/140/',
	},
	kabutops: {
		name: 'kabutops',
		url: 'https://pokeapi.co/api/v2/pokemon/141/',
	},
	aerodactyl: {
		name: 'aerodactyl',
		url: 'https://pokeapi.co/api/v2/pokemon/142/',
	},
	snorlax: {
		name: 'snorlax',
		url: 'https://pokeapi.co/api/v2/pokemon/143/',
	},
	articuno: {
		name: 'articuno',
		url: 'https://pokeapi.co/api/v2/pokemon/144/',
	},
	zapdos: {
		name: 'zapdos',
		url: 'https://pokeapi.co/api/v2/pokemon/145/',
	},
	moltres: {
		name: 'moltres',
		url: 'https://pokeapi.co/api/v2/pokemon/146/',
	},
	dratini: {
		name: 'dratini',
		url: 'https://pokeapi.co/api/v2/pokemon/147/',
	},
	dragonair: {
		name: 'dragonair',
		url: 'https://pokeapi.co/api/v2/pokemon/148/',
	},
	dragonite: {
		name: 'dragonite',
		url: 'https://pokeapi.co/api/v2/pokemon/149/',
	},
	mewtwo: {
		name: 'mewtwo',
		url: 'https://pokeapi.co/api/v2/pokemon/150/',
	},
	mew: {
		name: 'mew',
		url: 'https://pokeapi.co/api/v2/pokemon/151/',
	},
};

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('/api/:pokemonName', (req, res) => {
	//stores query parameter after the :
	const pokemonName = req.params.pokemonName.toLowerCase();
	// if the rapper exists respond with that rapper in json
	if (pokemon[pokemonName].name) {
		res.json([pokemon[pokemonName].name, pokemon[pokemonName].url]);
	} else {
		//default json response of dylan
		res.json('Unknown Pokemon');
	}
});

app.listen(process.env.PORT || PORT, () => {
	console.log(`The server is running on ${PORT}`);
});
