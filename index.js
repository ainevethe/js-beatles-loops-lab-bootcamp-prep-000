function theBeatlesPlay(musician, instrument) {
  var pairing = [];

  for (var i = 0; i < musician.length; [i++]) {
    pairing.push(musician[i] + ' plays ' + instrument[i]);
  }
  return pairing;
}


function johnLennonFacts(factoid) {
  var facts = [];
  var count = 0;
  while (count < factoid.length) {
    facts.push(factoid[count] + "!!!");
    count++;
  }
  return facts;
}
