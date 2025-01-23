import { assert } from 'https://unpkg.com/chai/chai.js';
import * as ctx from '../js/week-01.js';


describe("Variables:", function () {
    describe("firstName", function () {
        it("should be a valid string", function () {
            assert.typeOf(ctx.firstName, 'string');
        });
    });
    describe("age", function () {
        it("should be a valid number", function () {
            assert(Number.isInteger(ctx.age));
            assert.isNumber(ctx.age);
        });
    });
    describe("whyImTakingThisCourse", function () {
        it("should be a valid string", function () {
            assert.typeOf(ctx.whyImTakingThisCourse, 'string');
        });
    });
});
