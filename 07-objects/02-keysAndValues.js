//Objet.keys() and Object.values()

//object.keys( )is a method that returns an arry of a given object's own property name.
//Object.values() is a method that returns an array of given objets own enumerrable property values

let spaceJam = {
    toonSquad: {
      human: 'Michael Jordan',
      rabbit1: 'Bugs Bunny',
      rabbit2: 'Lola Bunny',
      duck: 'Daffy Duck',
      tDevil: 'Tasmanian Devil',
      bird: 'Tweety',
      cat: 'Sylvester',
      pig: 'Porky Pig'
    },
    monstars: {
      0: 'Bupkus',
      1: 'Bang',
      2: 'Nawt',
      3: 'Pound',
      4: 'Blanko'
    },
    nbaPlayers: {
      phoenixSuns: 'Charles Barkley',
      newJerseyNets: 'Shawn Bradley',
      newYorkNicks: 'Patrick Ewing',
      charlotteHornets1: 'Larry Johnson',
      charlotteHornets2: 'Muggsy Bogues'
    }
  }

  console.log(Object.keys(spaceJam.toonSquad).toString());
  console.log(object.keys(spaceJam.toonSquad.duck));

  console.log(object.values(spaceJam.toonSquad))

  //Square bracket notation

  let garden = {
      vegtable: 'zucchini',
      flower: 'sun flowers',
      fruit: 'apples',
      water: true,
      sun: true,
      size: 10,
  };

  //console.log(garden.vegtable)

  //let x = 'vegtable';
  //console.log(garden.x, garden[x]);

  //let baking = {};
  //baking['zucchini'] = 'better make some bread'; // creating a key
  //console.log(baking[garden['vegtable']])

  let key = 'water'
  Object.keys(garden).forEach(g => {
    //  console.log(g)
    if (key === g){
        console.log(garden[key]);
    }
  })
  