const LIST_ITEM_PREFIX = "    ";

export function equals(a: any): (b: any) => boolean {
    return (b: any) => a === b;
}

export function compose<X, I, Y>(outer: (x: I) => Y, inner: (x: X) => I): (x: X) => Y {
    return (x: X) => outer(inner(x));
}

export function fromMaybeUndefined<T>(fallback: T, x?: T): T {
    return x === undefined ? fallback : x;
}

export function formattedList(items: string[]): string {
    return items.map(item => LIST_ITEM_PREFIX + item).join("\n");
}
