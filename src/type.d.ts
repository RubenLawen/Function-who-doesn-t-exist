declare interface String {
    isPalin(): boolean;
    letterCount(): number;
    betterLetterCount(): { [key: string]: number };
    remove(exp: string): string;
}

declare interface Number {
    multiplicationTable(limit: number = 10): number[];
    random(min: number = 1, max: number = 2147483647): number;
}

declare interface Array<T> {
    middle(): T;
    shuffle(): T[];
    random(): T;
}