export function trimString(str, num) {
    return str?.length > num 
        ? str.substring(0, num) + '...' 
        : str;
}