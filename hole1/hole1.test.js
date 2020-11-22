import * as fs from "fs";
import * as path from 'path';

describe('Hole 1', () => {
    it('matches', () => {
        const actual = fs.readFileSync(path.resolve(__dirname, 'hole.json')).toString();
        const expected = fs.readFileSync(path.resolve(__dirname, 'target.json')).toString();
        expect(actual).toEqual('target.json');
    });
});
