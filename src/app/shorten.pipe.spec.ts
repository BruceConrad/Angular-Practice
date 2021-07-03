import { ShortenPipe } from "./shorten.pipe"

describe("ShortenPipe", () => {
    it("should create an instance", () => {
        const pipe = new ShortenPipe();
        expect(pipe).toBeTruthy();
    })
    
    it("should transform text", () => {
        const pipe = new ShortenPipe();
        const result = pipe.transform('Hello World', 5);
        expect(result).toBe('Hello...');
    })
    
    it("should transform text fail", () => {
        const pipe = new ShortenPipe();
        const result = pipe.transform('Hello World', 5);
        expect(result).not.toBe('Hello..');
    })
})