export const registerUsage = (base: Record<string, number>, value: number) => {
    const _base = {...base}

    _base[value] = _base[value] + 1 || 1

    return _base
}
