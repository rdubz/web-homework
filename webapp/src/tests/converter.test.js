import Converter from './utils/converter'

test('convert 92 to Roman Numberals equal XCII', () => {
  expect(Converter.ToRomanNumerals(92)).toBe('XCII');
});

test('convert 11 to Roman Numberals equal XI', () => {
    expect(Converter.ToRomanNumerals(11)).toBe('XI');
});

test('convert 108 to Roman Numberals equal CVIII', () => {
    expect(Converter.ToRomanNumerals(108)).toBe('CVIII');
});

test('convert 317 to Roman Numberals equal CCCXVII', () => {
    expect(Converter.ToRomanNumerals(317)).toBe('CCCXVII');
});

test('convert 46 to Roman Numberals equal XLVI', () => {
    expect(Converter.ToRomanNumerals(46)).toBe('XLVI');
});

test('convert 523 to Roman Numberals equal DXXIII', () => {
    expect(Converter.ToRomanNumerals(523)).toBe('DXXIII');
});

test('convert 94 to Roman Numberals equal XCIV', () => {
    expect(Converter.ToRomanNumerals(94)).toBe('XCIV');
});