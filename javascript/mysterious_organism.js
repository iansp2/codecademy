// DNA length constant to avoid magic numbers
const DNA_LENGTH = 15;

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * dnaBases.length)];
}

// Returns a random single strand of DNA containing a configurable number of bases
const mockUpStrand = (length = DNA_LENGTH) => {
  const newStrand = [];
  for (let i = 0; i < length; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
}

const pAequorFactory = (specimenNumber, dnaBases) => {
  const pAequor = {
    specimenNumber, // Use descriptive variable name
    dna: dnaBases,

    mutate() {
      const randomIdx = Math.floor(Math.random() * this.dna.length);
      const baseToChange = this.dna[randomIdx];
      let newBase;

      // Exclude the current base from possible mutation options
      do {
        newBase = returnRandBase();
      } while (newBase === baseToChange);

      this.dna[randomIdx] = newBase;
    },

    compareDNA(otherOrganism) {
      let matchingBaseCount = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherOrganism.dna[i]) {
          matchingBaseCount++;
        }
      }
      const percentCommon = Math.round((matchingBaseCount / this.dna.length) * 100);

      return percentCommon;
    },

    willLikelySurvive() {
      let cAndGCount = 0;
      // Loop once through DNA to count both 'C' and 'G'
      this.dna.forEach(base => {
        if (base === 'C' || base === 'G') {
          cAndGCount++;
        }
      });
      return cAndGCount / this.dna.length >= 0.6;
    },

    complementStrand() {
      const complementStrand = this.dna.map(base => {
        switch (base) {
          case 'A': return 'T';
          case 'T': return 'A';
          case 'C': return 'G';
          case 'G': return 'C';
        }
      });
      return complementStrand;
    }
  };

  return pAequor;
};

const createSpecimen = (numOrganisms) => {
  const specimenArray = [];
  for (let i = 0; i < numOrganisms; i++) {
    specimenArray.push(pAequorFactory(i, mockUpStrand()));
  }
  return specimenArray;
};

const findMostRelated = (specimenArray) => {
  let bestMatch = { organisms: [], match: 0 };

  for (let i = 0; i < specimenArray.length; i++) {
    for (let j = i + 1; j < specimenArray.length; j++) {
      const currentMatch = specimenArray[i].compareDNA(specimenArray[j]);
      if (currentMatch > bestMatch.match) {
        bestMatch = { organisms: [i, j], match: currentMatch };
      }
    }
  }

  return bestMatch;
};

// Let's create some species and see what they can do
const naturalEnv = createSpecimen(30);
const specimen1 = naturalEnv[1];
specimen1.mutate();
console.log(`Specimen 1 will likely survive: ${specimen1.willLikelySurvive()}`);
const complement1 = specimen1.complementStrand();
console.log(`This specimen DNA:\n${specimen1.dna.join('')}\nComplement DNA:\n${complement1.join('')}`);

console.log('Best match:', findMostRelated(naturalEnv));