import {expectType} from 'tsd-check';
import { Parser, Output } from '.';

const parser = new Parser();

expectType<Parser>(parser);
expectType<Output>(await parser.parseURL(''));
expectType<Output>(await parser.parseString(''));
