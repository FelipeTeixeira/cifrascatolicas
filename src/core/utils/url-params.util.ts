export function setURLParams(paramsObject: Record<string, string | string[] | undefined>): string {
    for (const key in paramsObject) {
        if (paramsObject[key] === undefined) {
            delete paramsObject[key];
        }
    }

    return '?' + new URLSearchParams(paramsObject as unknown as string).toString();
}
