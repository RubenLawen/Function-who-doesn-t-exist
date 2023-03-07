declare interface String {
    isPalin(): boolean;
    letterCount(): number;
    betterLetterCount(): { [key: string]: number };
}

declare interface Number {
    multiplicationTable(limit: number = 10): number[];
}

declare interface Array<T> {
    middle(): T;
}