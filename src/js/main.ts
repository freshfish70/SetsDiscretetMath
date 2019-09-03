import { SetOperationEasy } from './setoperations.js'

const U: Array<number> = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5, 6, 7, 8]

const setOperationEasy = new SetOperationEasy(U)
const S = [1, 3, 4, 7, 7, 7, 7, 7]
console.log('S INPUT: ' + S)
const Sset = setOperationEasy.arrayToSet(S)
console.log('S OUTPUT: ' + Array.from(Sset))
console.log('')

const T = [2, 5, 7]
console.log('T INPUT: ' + T)
const Tset = setOperationEasy.arrayToSet(T)
console.log('T OUTPUT: ' + Array.from(Tset))
console.log('')

console.log('R INPUT: S=' + Array.from(Sset) + ', T=' + Array.from(Tset))
const R = setOperationEasy.difference(Sset, Tset)
console.log('R OUTPUT: ' + Array.from(R))
console.log('')

console.log('P INPUT: S=' + Array.from(Sset) + ', T=' + Array.from(Tset))
const P = setOperationEasy.union(Sset, Tset)
console.log('P OUTPUT: ' + Array.from(P))
console.log('')

console.log('Q INPUT: S=' + Array.from(Sset) + ', T=' + Array.from(Tset))
const Q = setOperationEasy.intersection(Sset, Tset)
console.log('Q OUTPUT: ' + Array.from(Q))
console.log('')

console.log('V INPUT: Q=' + Array.from(Q))
const V = setOperationEasy.complement(Q)
console.log('V OUTPUT: ' + Array.from(V))
console.log('')

console.log('Cardinality of: T')
console.log(`Input: T=${Array.from(Tset)}`)
console.log(`Output: ${setOperationEasy.cardinality(Tset)}`)
console.log('')

console.log('Is 5 element of T')
console.log(`Input: T=${Array.from(Tset)} & 5`)
console.log(`Output: ${setOperationEasy.isElementOf(Tset, 5)}`)
console.log('')

console.log('Is 8 element of T')
console.log(`Input: T=${Array.from(Tset)} & 8`)
console.log(`Output: ${setOperationEasy.isElementOf(Tset, 8)}`)
console.log('')

console.log('T part of S')
console.log(`Input: ${Array.from(Tset)} & ${Array.from(Sset)}`)
console.log(`Output: ${setOperationEasy.isPartOf(Tset, Sset)}`)
console.log('')

console.log('S part of P')
console.log(`Input: S=${Array.from(Sset)} & P=${Array.from(P)}`)
console.log(`Output: ${setOperationEasy.isPartOf(Sset, P)}`)
console.log('')

console.log('Mutual exclusion of S & T')
console.log(`Input: S=${Array.from(Sset)} & T=${Array.from(Tset)}`)
console.log(`Output: ${setOperationEasy.isMututalExclusive(Sset, Tset)}`)
console.log('')

console.log('Mutual exclusion of R & T')
console.log(`Input: R=${Array.from(R)} & T=${Array.from(Tset)}`)
console.log(`Output: ${setOperationEasy.isMututalExclusive(R, Tset)}`)
console.log('')
