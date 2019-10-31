let elements = [
    {"name": "Hydrogen",	"symbol": "H",	"atomicNumber": 1,	"mass": 1.00794},
    {"name": "Helium",		"symbol": "He",	"atomicNumber": 2,	"mass": 4.002602},
    {"name": "Lithium",		"symbol": "Li",	"atomicNumber": 3,	"mass": 6.941},
    {"name": "Beryllium",	"symbol": "Be",	"atomicNumber": 4,	"mass": 9.012182},
    {"name": "Boron",		"symbol": "B",	"atomicNumber": 5,	"mass": 10.811},
    {"name": "Carbon",		"symbol": "C",	"atomicNumber": 6,	"mass": 12.0107},
    {"name": "Nitrogen",	"symbol": "N",	"atomicNumber": 7,	"mass": 14.0067},
    {"name": "Oxygen",		"symbol": "O",	"atomicNumber": 8,	"mass": 15.9994},
    {"name": "Fluorine",	"symbol": "F",	"atomicNumber": 9,	"mass": 18.998403},
    {"name": "Neon",		"symbol": "Ne",	"atomicNumber": 10,	"mass": 20.1797},
    {"name": "Sodium",		"symbol": "Na",	"atomicNumber": 11,	"mass": 22.98977},
    {"name": "Magnesium",	"symbol": "Mg",	"atomicNumber": 12,	"mass": 24.305},
    {"name": "Aluminum",	"symbol": "Al",	"atomicNumber": 13,	"mass": 26.981538},
    {"name": "Silicon",		"symbol": "Si",	"atomicNumber": 14,	"mass": 28.0855},
    {"name": "Phosphorus",	"symbol": "P",	"atomicNumber": 15,	"mass": 30.973761},
    {"name": "Sulfur",		"symbol": "S",	"atomicNumber": 16,	"mass": 32.065},
    {"name": "Chlorine",	"symbol": "Cl",	"atomicNumber": 17,	"mass": 35.453},
    {"name": "Argon",		"symbol": "Ar",	"atomicNumber": 18,	"mass": 39.948},
    {"name": "Potassium",	"symbol": "K",	"atomicNumber": 19,	"mass": 39.0983},
    {"name": "Calcium",		"symbol": "Ca",	"atomicNumber": 20,	"mass": 40.078},
    {"name": "Scandium",	"symbol": "Sc",	"atomicNumber": 21,	"mass": 44.95591},
    {"name": "Titanium",	"symbol": "Ti",	"atomicNumber": 22,	"mass": 47.867},
    {"name": "Vanadium",	"symbol": "V",	"atomicNumber": 23,	"mass": 50.9415},
    {"name": "Chromium",	"symbol": "Cr",	"atomicNumber": 24,	"mass": 51.9961},
    {"name": "Manganese",	"symbol": "Mn",	"atomicNumber": 25,	"mass": 54.938049},
    {"name": "Iron",		"symbol": "Fe",	"atomicNumber": 26,	"mass": 55.845},
    {"name": "Cobalt",		"symbol": "Co",	"atomicNumber": 27,	"mass": 58.9332},
    {"name": "Nickel",		"symbol": "Ni",	"atomicNumber": 28,	"mass": 58.6934},
    {"name": "Copper",		"symbol": "Cu",	"atomicNumber": 29,	"mass": 63.546},
    {"name": "Zinc",		"symbol": "Zn",	"atomicNumber": 30,	"mass": 65.409},
    {"name": "Gallium",		"symbol": "Ga",	"atomicNumber": 31,	"mass": 69.723},
    {"name": "Germanium",	"symbol": "Ge",	"atomicNumber": 32,	"mass": 72.64},
    {"name": "Arsenic",		"symbol": "As",	"atomicNumber": 33,	"mass": 74.9216},
    {"name": "Selenium",	"symbol": "Se",	"atomicNumber": 34,	"mass": 78.96},
    {"name": "Bromine",		"symbol": "Br",	"atomicNumber": 35,	"mass": 79.904},
    {"name": "Krypton",		"symbol": "Kr",	"atomicNumber": 36,	"mass": 83.796},
    {"name": "Rubidium",	"symbol": "Rb",	"atomicNumber": 37,	"mass": 85.4678},
    {"name": "Strontium",	"symbol": "Sr",	"atomicNumber": 38,	"mass": 87.62},
    {"name": "Yttrium",		"symbol": "Y",	"atomicNumber": 39,	"mass": 88.90585},
    {"name": "Zirconium",	"symbol": "Zr",	"atomicNumber": 40,	"mass": 91.224},
    {"name": "Niobium",		"symbol": "Nb",	"atomicNumber": 41,	"mass": 92.90638},
    {"name": "Molybdenum",	"symbol": "Mo",	"atomicNumber": 42,	"mass": 95.94},
    {"name": "Technetium",	"symbol": "Tc",	"atomicNumber": 43,	"mass": 98},
    {"name": "Ruthenium",	"symbol": "Ru",	"atomicNumber": 44,	"mass": 101.07},
    {"name": "Rhodium",		"symbol": "Rh",	"atomicNumber": 45,	"mass": 102.9055},
    {"name": "Palladium",	"symbol": "Pd",	"atomicNumber": 46,	"mass": 106.42},
    {"name": "Silver",		"symbol": "Ag",	"atomicNumber": 47,	"mass": 107.8682},
    {"name": "Cadmium",		"symbol": "Cd",	"atomicNumber": 48,	"mass": 112.411},
    {"name": "Indium",		"symbol": "In",	"atomicNumber": 49,	"mass": 114.818},
    {"name": "Tin",			"symbol": "Sn",	"atomicNumber": 50,	"mass": 118.71},
    {"name": "Antimony",	"symbol": "Sb",	"atomicNumber": 51,	"mass": 121.76},
    {"name": "Tellurium",	"symbol": "Te",	"atomicNumber": 52,	"mass": 127.60},
    {"name": "Iodine",		"symbol": "I",	"atomicNumber": 53,	"mass": 126.90447},
    {"name": "Xenon",		"symbol": "Xe",	"atomicNumber": 54,	"mass": 131.293},
    {"name": "Cesium",		"symbol": "Cs",	"atomicNumber": 55,	"mass": 132.90545},
    {"name": "Barium",		"symbol": "Ba",	"atomicNumber": 56,	"mass": 137.327},
    {"name": "Lanthanum",	"symbol": "La",	"atomicNumber": 57,	"mass": 138.9055},
    {"name": "Cerium",		"symbol": "Ce",	"atomicNumber": 58,	"mass": 140.116},
    {"name": "Praseodymium","symbol": "Pr",	"atomicNumber": 59,	"mass": 140.90765},
    {"name": "Neodymium",	"symbol": "Nd",	"atomicNumber": 60,	"mass": 144.24},
    {"name": "Promethium",	"symbol": "Pm",	"atomicNumber": 61,	"mass": 145},
    {"name": "Samarium",	"symbol": "Sm",	"atomicNumber": 62,	"mass": 150.36},
    {"name": "Europium",	"symbol": "Eu",	"atomicNumber": 63,	"mass": 151.964},
    {"name": "Gadolinium",	"symbol": "Gd",	"atomicNumber": 64,	"mass": 157.25},
    {"name": "Terbium",		"symbol": "Tb",	"atomicNumber": 65,	"mass": 158.92534},
    {"name": "Dysprosium",	"symbol": "Dy",	"atomicNumber": 66,	"mass": 162.50},
    {"name": "Holmium",		"symbol": "Ho",	"atomicNumber": 67,	"mass": 164.93032},
    {"name": "Erbium",		"symbol": "Er",	"atomicNumber": 68,	"mass": 167.259},
    {"name": "Thulium",		"symbol": "Tm",	"atomicNumber": 69,	"mass": 168.93421},
    {"name": "Ytterbium",	"symbol": "Yb",	"atomicNumber": 70,	"mass": 173.04},
    {"name": "Lutetium",	"symbol": "Lu",	"atomicNumber": 71,	"mass": 174.967},
    {"name": "Hafnium",		"symbol": "Hf",	"atomicNumber": 72,	"mass": 178.49},
    {"name": "Tantalum",	"symbol": "Ta",	"atomicNumber": 73,	"mass": 180.9479},
    {"name": "Tungsten",	"symbol": "W",	"atomicNumber": 74,	"mass": 183.84},
    {"name": "Rhenium",		"symbol": "Re",	"atomicNumber": 75,	"mass": 186.207},
    {"name": "Osmium",		"symbol": "Os",	"atomicNumber": 76,	"mass": 190.23},
    {"name": "Iridium",		"symbol": "Ir",	"atomicNumber": 77,	"mass": 192.217},
    {"name": "Platinum",	"symbol": "Pt",	"atomicNumber": 78,	"mass": 195.078},
    {"name": "Gold",		"symbol": "Au",	"atomicNumber": 79,	"mass": 196.96655},
    {"name": "Mercury",		"symbol": "Hg",	"atomicNumber": 80,	"mass": 200.59},
    {"name": "Thallium",	"symbol": "Tl",	"atomicNumber": 81,	"mass": 204.3833},
    {"name": "Lead",		"symbol": "Pb",	"atomicNumber": 82,	"mass": 207.2},
    {"name": "Bismuth",		"symbol": "Bi",	"atomicNumber": 83,	"mass": 208.98038},
    {"name": "Polonium",	"symbol": "Po",	"atomicNumber": 84,	"mass": 209},
    {"name": "Astatine",	"symbol": "At",	"atomicNumber": 85,	"mass": 210},
    {"name": "Radon",		"symbol": "Rn",	"atomicNumber": 86,	"mass": 222},
    {"name": "Francium",	"symbol": "Fr",	"atomicNumber": 87,	"mass": 223},
    {"name": "Radium",		"symbol": "Ra",	"atomicNumber": 88,	"mass": 226},
    {"name": "Actinium",	"symbol": "Ac",	"atomicNumber": 89,	"mass": 227},
    {"name": "Thorium",		"symbol": "Th",	"atomicNumber": 90,	"mass": 232.0381},
    {"name": "Protactinium","symbol": "Pa",	"atomicNumber": 91,	"mass": 231.03588},
    {"name": "Uranium",		"symbol": "U",	"atomicNumber": 92,	"mass": 238.02891},
    {"name": "Neptunium",	"symbol": "Np",	"atomicNumber": 93,	"mass": 237},
    {"name": "Plutonium",	"symbol": "Pu",	"atomicNumber": 94,	"mass": 244},
    {"name": "Americium",	"symbol": "Am",	"atomicNumber": 95,	"mass": 243},
    {"name": "Curium",		"symbol": "Cm",	"atomicNumber": 96,	"mass": 247},
    {"name": "Berkelium",	"symbol": "Bk",	"atomicNumber": 97,	"mass": 247},
    {"name": "Californium",	"symbol": "Cf",	"atomicNumber": 98,	"mass": 251},
    {"name": "Einsteinium",	"symbol": "Es",	"atomicNumber": 99,	"mass": 252},
    {"name": "Fermium",		"symbol": "Fm",	"atomicNumber": 100,	"mass": 257},
    {"name": "Mendelevium",	"symbol": "Md",	"atomicNumber": 101,	"mass": 258},
    {"name": "Nobelium",	"symbol": "No",	"atomicNumber": 102,	"mass": 259},
    {"name": "Lawrencium",	"symbol": "Lr",	"atomicNumber": 103,	"mass": 262},
    {"name": "Rutherfordium","symbol": "Rf",	"atomicNumber": 104,	"mass": 261},
    {"name": "Dubnium",		"symbol": "Db",	"atomicNumber": 105,	"mass": 262},
    {"name": "Seaborgium",	"symbol": "Sg",	"atomicNumber": 106,	"mass": 266},
    {"name": "Bohrium",		"symbol": "Bh",	"atomicNumber": 107,	"mass": 264},
    {"name": "Hassium",		"symbol": "Hs",	"atomicNumber": 108,	"mass": 277},
    {"name": "Meitnerium",	"symbol": "Mt",	"atomicNumber": 109,	"mass": 268},
    {"name": "Darmstadtium",	"symbol": "Ds",	"atomicNumber": 110,	"mass": 281},
    {"name": "Roentgenium",	"symbol": "Rg",	"atomicNumber": 111,	"mass": 282},
    {"name": "Copernicium",	"symbol": "Cn",	"atomicNumber": 112,	"mass": 285},
    {"name": "Copernicium",	"symbol": "Nh",	"atomicNumber": 113,	"mass": 286},
    {"name": "Copernicium",	"symbol": "Fl",	"atomicNumber": 114,	"mass": 289},
    {"name": "Copernicium",	"symbol": "Mc",	"atomicNumber": 115,	"mass": 290},
    {"name": "Copernicium",	"symbol": "Lv",	"atomicNumber": 116,	"mass": 293},
    {"name": "Copernicium",	"symbol": "Ts",	"atomicNumber": 117,	"mass": 294},
    {"name": "Copernicium",	"symbol": "Og",	"atomicNumber": 118,	"mass": 294}
    ]

export function PeriodicTable() {
    var map = new Map();

    for (var i = 0; i < elements.length; i++) {
        var e = elements[i];
        map.set(e.symbol, e);
    }

    this.get = function (symbol) {
        return map.get(symbol);
    };

    Object.defineProperty(this, 'size', {
        value: map.size,
        writable: false,
        enumerable: false,
        configurable: false
    });
}

let table = new PeriodicTable()

function Compound(f) {
    var formula = f || '',
        molarMass = 0.0,
        elements = [];
    var strippedFormula = formula.replace(/[\.\-\+\s=_]/g, '');

    validatePattern(strippedFormula);

    var symbolQuantities = parse(strippedFormula);
    elements = consolidateSymbols(symbolQuantities);
    molarMass = calculateMass(elements);
    molarMass = Math.round(molarMass * 1000000) / 1000000

    Object.defineProperties(this, {
        'formula': {
            value: formula,
            writable: false,
            enumerable: true,
            configurable: false
        },
        'molarMass': {
            value: molarMass,
            writable: false,
            enumerable: true,
            configurable: false
        },
        'elements': {
            get: function () { return elements.slice(); },
            enumerable: true,
            configurable: false
        }
    });
}

function validatePattern(formula) {
    var validityMatrix = {
        S: { U: true,                   O: true,          E: true },
        U: { U: true, L: true, N: true, O: true, C: true, E: true },
        L: { U: true, L: true, N: true, O: true, C: true, E: true },
        N: { U: true,          N: true, O: true, C: true, E: true },
        O: { U: true,                   O: true,                  },
        C: { U: true,          N: true, O: true, C: true, E: true },
        E: {                                                      }
    };
    var currentClass = 'S', nextCharClass = '?';
    var charArray = formula.split('');

    if (charArray.length > 0) {
        for (var i = 0; i < charArray.length; i++) {
            nextCharClass = regexCode(charArray[i]);

            // this can probably be done in the parsing loop
            if (validityMatrix[currentClass][nextCharClass]) {
                currentClass = nextCharClass;
            }
            else if (nextCharClass === '?') {
                throw new Error('Invalid character in a chemical formula: ' + charArray[i]);
            }
            else {
                var baseMessage = 'Not a valid chemical formula: ';

                if(currentClass === 'S') {
                  baseMessage += 'Cannot begin with ' + nameOfCharClass(nextCharClass);
                }
                else {
                  baseMessage += nameOfCharClass(currentClass) + ' followed by ' + nameOfCharClass(nextCharClass);
                }

                throw new Error(baseMessage);
            }
        }

        if (!validityMatrix[currentClass]['E']) {
            throw new Error('Not a valid chemical formula: ended with ' + nameOfCharClass(currentClass));
        }

        var leftParenCount  = charArray.reduce(function (count, current) { return current === '(' ? count + 1 : count; }, 0);
        var rightParenCount = charArray.reduce(function (count, current) { return current === ')' ? count + 1 : count; }, 0);

        if (leftParenCount !== rightParenCount) {
            throw new Error('Unbalanced parentheses: ' + formula);
        }
    }
}

function nameOfCharClass(char) {
    switch(char) {
      case 'S': return 'start';
      case 'U': return 'uppercase';
      case 'L': return 'lowercase';
      case 'N': return 'number';
      case 'O': return 'open parenthases';
      case 'C': return 'close parenthases';
      case 'E': return 'end';
      default: return 'unknown';
    }
}

function regexCode(char) {
    if (char.match(/^[A-Z]$/))
        return 'U';
    else if (char.match(/^[a-z]$/))
        return 'L';
    else if (char.match(/^[0-9]$/))
        return 'N';
    else if (char === '(' || char === '[')
        return 'O';
    else if (char === ')' || char === ']')
        return 'C';
    else
        return '?';
}

function parse(formula) {
    var symbolsCollection = {};
    var charArray = formula.split('');
    var currentSymbol = '';
    var currentQuantity = '';
    var ch = '';
    var charClass = '';
    var i = 0;

    while (i < charArray.length) {
        ch = charArray[i];
        charClass = regexCode(ch);

        if (charClass === 'N') {
            currentQuantity += ch;
        }
        else if (charClass === 'U') {
            symbolsCollection = addElementToList(symbolsCollection, currentSymbol, currentQuantity);
            currentSymbol = ch;
            currentQuantity = '';
        }
        else if (charClass === 'L') {
            currentSymbol += ch;
        }
        else if (charClass === 'O') {
            var oParen = i;
            var cParen = findMatchingParentheses(formula, i);
            i = cParen + 1;

            var groupQuantity = '';
            while (i < charArray.length && charArray[i].match(/[0-9]/)) {
                groupQuantity += charArray[i];
                i += 1;
            }

            var nestedSymbols = parse(formula.substr(oParen + 1, cParen - (oParen + 1)));
            symbolsCollection = addCompoundToList(symbolsCollection, nestedSymbols, groupQuantity);
            i -= 1;
        }

        i += 1;
    }

    symbolsCollection = addElementToList(symbolsCollection, currentSymbol, currentQuantity);

    return symbolsCollection;
}

function findMatchingParentheses(str, index) {
    var openCount = 0;
    while (index < str.length) {
        if (str[index] === ')' || str[index] === ']') {
            if (openCount === 1) {
                break;
            }
            else {
                openCount -= 1;
            }
        }
        else if (str[index] === '(' || str[index] === '[') {
            openCount += 1;
        }

        index += 1
    }

    return index;
}

function addElementToList (list, symbol, quantityStr) {
    if (symbol) {
        var quantity = parseInt(quantityStr || '1');
        if (list[symbol]) {
            list[symbol] = list[symbol] + quantity;
        }
        else {
            list[symbol] = quantity;
        }
    }

    return list;
}

function addCompoundToList (list, symbols, quantityStr) {
    var quantity = parseInt(quantityStr || '1');
    for(var symbol in symbols) {
        if (list[symbol]) {
            list[symbol] = list[symbol] + (quantity * symbols[symbol]);
        }
        else {
            list[symbol] = symbols[symbol] * quantity;
        }
    }

    return list;
}

function consolidateSymbols(symbolQuantities) {
    var elements = [];

    for(var s in symbolQuantities) {
        var e = table.get(s);
        if (e) {
            elements.push({
                element: e,
                quantity: symbolQuantities[s]
            });
        }
        else {
            elements.push({
                element: {
                    name: '',
                    symbol: s,
                    atomicNumber: 0,
                    mass: 0.0
                },
                quantity: symbolQuantities[s]
          });
        }
    }

    elements.sort(function compareCompound(a, b) {
        return a.element.atomicNumber - b.element.atomicNumber;
    });

    return elements;
}

function calculateMass(elements) {
    var totalMass = 0.0;

    for(var i = 0; i < elements.length; i++) {
        var e = elements[i];
        totalMass += e.element.mass * e.quantity;
    }

    return totalMass;
}

export function molarMass(formula,options) {
    options = options || {};
    
    var c = new Compound(formula);
    return options.returnCompound ? c : c.molarMass;
}

