import {describe, expect, test} from '@jest/globals';
import { verifyingAllienDictionary } from './1-AllienDictionary';

describe('Allient dictionary test', () => {
  test('Allien Dictionary first', () => {
    const words1 = ["habito", "hacer", "lectura", "sonreir"];
    const order1 = "hlabcdfgijkmnopqrstuvwxyz";
    expect(verifyingAllienDictionary(words1, order1)).toBe(true);
  });
  test('Allien Dictionary second', () => {
    const words2 = ["habito", "hacer", "sonreir", "lectura"];
    const order2 = "hlabcdfgijkmnopqrstuvwxyz";

    expect(verifyingAllienDictionary(words2, order2)).toBe(false);    
    
  });
  test('Allien Dictionary third', () => {
    const words3 = ["conocer", "cono"];
    const order3 = "abcdefghijkmnopqrstuvwxyz";

    expect(verifyingAllienDictionary(words3, order3)).toBe(false);    
  })
});