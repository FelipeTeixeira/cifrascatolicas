export function setURLParams(paramsObject: Record<string, string>): string {
    return '?' +  new URLSearchParams(paramsObject).toString()
}
