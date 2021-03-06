const i = 'immersive';
const f = 'full';
const s = 'stretch';
const w = 'wide';

export default {
    '1a': {
        1: [i],
        2: [i],
        3: [i],
        4: [i]
    },
    '1b': {
        1: [f],
        2: [f],
        3: [f],
        4: [f]
    },
    '2a': {
        1: [s, '2u'],
        2: [s, '2u'],
        3: [w, '2u'],
        4: [s, '2u']
    },
    '3a': {
        1: [w, '1u', '1u'],
        2: [w, '1u', '1u'],
        3: [w, '1u', '1u'],
        4: [w, '2u', '2u']
    },
    '8a': {
        1: [w, '2u', '1u', '2u', '2u', '1u', '1u', '1u'],
        2: [w, '2u', '1u', '3u', '2u', '1u', '2u', '1u'],
        3: [w, '3u', '2u', '3u', '2u', '1u', '2u', '1u'],
        4: [w, '3u', '3u', '3u', '2u', '1u', '2u', '2u']
    },
    '8b': {
        1: ['1u', '1u', '1u', '1u', '1u', '1u', '1u', '1u'],
        2: ['2u', '2u', '1u', '1u', '1u', '1u', '2u', '2u'],
        3: ['2u', '2u', '1u', '1u', '1u', '1u', '2u', '2u'],
        4: ['2u', '2u', '2u', '2u', '2u', '2u', '2u', '2u']
    }
};