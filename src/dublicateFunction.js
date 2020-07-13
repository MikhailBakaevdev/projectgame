function duplicateElements(array, times) {
    return array.reduce((res, current) => {
        return res.concat(Array(times).fill(current));
    }, [])
}