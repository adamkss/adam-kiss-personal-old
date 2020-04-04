export const Classnames = (...rest) => {
    return rest.reduce((prev, current) => {
        if (current)
            return prev + ` ${current}`;
        return prev;
    }, '');
}