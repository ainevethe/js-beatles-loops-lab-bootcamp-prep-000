function theBeatlesPlay(musician, instrument) {
  var pairing = [];

  for (var i = 0; i < musician.length; [i++]) {
    pairing.push(musician[i] + ' plays ' + instrument[i]);
  }
  return pairing;
};


function johnLennonFacts(factoid) {
  var facts = [];
  var i = 0;
  while ( i < factoid.length) {
    facts.push(factoid[i] + "!!!");
    factoid += 1;
  }
  return facts;
}
