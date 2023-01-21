type Mods = Record<string, boolean | string>;
// Record - это специальный тайпскриптовый класс/тип, который обозначает что в качестве ключа будет использоваться string, а в качестве значения boolean или string

export function classNames(
    cls: string, // главный класс
    mods: Mods = {}, // объект с модами, где ключ - название класса, а значение boolean флаг (если true, то флаг добавляется)
    additional: string[] = [], // массив дополнительных классов
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}
