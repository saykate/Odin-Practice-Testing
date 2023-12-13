import { caesarCipher } from "./caesarCipher";

test("test for caesarCipher", () => {
    expect(caesarCipher("this is a test", 3)).toBe("wklv lv d whvw");
    expect(caesarCipher("test, this is!!!", 3)).toBe("whvw, wklv lv!!!");
})