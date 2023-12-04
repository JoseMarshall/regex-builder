import RegexBuilder from '../lib';

const builder = new RegexBuilder();

const regex = builder.startOfInput().endOfInput().build();

console.log(regex);
