import Automat from "./automat";

const tranzitii = {
    's': { 'a': 'p', 'b': 's' },
    'p': { 'a': 'p', 'b': 'q' },
    'q': { 'a': 'r', 'b': 's' },
    'r': { 'a': 'r', 'b': 'r' },
};

const tranzitii2 = {
    's': { 'a': ['p', 'q'], 'b': ['s', 'q'] },
    'p': { 'a': ['p', 's'], 'b': ['q'] },
    'q': { 'a': ['r'], 'b': ['s', 'p', 'r'] },
    'r': { 'a': ['r'], 'b': ['r', 's'] },
};

const tranzitii3 = {
    'q0': { 'a': ['q0', 'q2'], 'b': ['q0'], 'c': ['q1'] },
    'q1': { 'a': ['q1', 'q3'], 'b': ['q2'] },
    'q2': { 'a': ['q3'], 'b': ['q2', 'q3'] },
    'q3': { 'c': ['q4'] }
};

const tranzitii4 = {
    'q0': { 'a': ['q0', 'q2'], 'b': ['q0'], 'c': ['q1'] },
    'q1': { 'a': ['q1', 'q3'], 'b': ['q2'] },
    'q2': { 'a': ['q3'], 'b': ['q2', 'q3'] },
    'q3': { 'a': ['q4'], 'c': ['q4'] }
};

console.log(
    new Automat(
        's',
        'r'.split(''),
        tranzitii2
    ).verificaPasi('aaba'.split(''))
);

console.log(
    'aabcaaba',
    new Automat(
        'q0',
        'q4'.split(' '),
        tranzitii3
    ).verificaPasi('aabcaaba'.split(''))
);

console.log(
    '',
    new Automat(
        'q0',
        'q4'.split(' '),
        tranzitii3
    ).verificaPasi(''.split(''))
);

console.log(
    'abbbac',
    new Automat(
        'q0',
        'q4'.split(' '),
        tranzitii3
    ).verificaPasi('abbbac'.split(''))
);

console.log(
    'abbbac',
    new Automat(
        'q0',
        'q4'.split(' '),
        tranzitii4
    ).verificaPasi('abbbac'.split(''))
);

console.log(
    'aab',
    (new Automat(
        'q0',
        'q4'.split(' '),
        tranzitii3
    ).verificaPasi('aaab'.split('')))
);