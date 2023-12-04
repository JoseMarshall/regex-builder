/**
 * reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
 *
 */
class RegexBuilder {
  private _regex: string = ``;

  constructor() {}

  build() {
    return new RegExp(this._regex);
  }

  /**
   *  startOfInput(): Adds a caret (^) to the beginning of the regular expression to match the start of the input.
   */
  startOfInput() {
    this._regex += '^';
    return this;
  }

  /**
   *
   * endOfInput(): Adds a dollar sign ($) to the end of the regular expression to match the end of the input.
   */
  endOfInput() {
    this._regex += '$';
    return this;
  }

  /**
   * TODO:
   * anyCharacter:
        anyCharacter(): Adds a dot (.) to match any single character.

    digit:
        digit(): Adds \d to match any digit (0-9).

    nonDigit:
        nonDigit(): Adds \D to match any non-digit.

    wordCharacter:
        wordCharacter(): Adds \w to match any word character (alphanumeric + underscore).

    nonWordCharacter:
        nonWordCharacter(): Adds \W to match any non-word character.

    whitespace:
        whitespace(): Adds \s to match any whitespace character.

    nonWhitespace:
        nonWhitespace(): Adds \S to match any non-whitespace character.

    exact:
        exact(str): Adds the exact string str to the regular expression.

    anyOf:
        anyOf(chars): Adds a character class [chars] to match any single character from the specified set.

    range:
        range(start, end): Adds a character range [start-end] to match any single character within the specified range.

    optional:
        optional(): Makes the preceding element optional (adds a ?).

    zeroOrMore:
        zeroOrMore(): Matches zero or more occurrences of the preceding element (adds a *).

    oneOrMore:
        oneOrMore(): Matches one or more occurrences of the preceding element (adds a +).

    group:
        group(callback): Adds a capturing group to the regular expression. The callback function is called with the current instance of the RegexBuilder for nested constructions.

    or:
        or(builder): Adds an alternation (|) for the given builder.
   */
}

export * from './types';
export default RegexBuilder;
