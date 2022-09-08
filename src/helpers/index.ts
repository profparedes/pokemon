export const unslugify = (slug: string): string =>
  slug
    .split('-')
    .map((i) => `${i[0].toLocaleUpperCase()}${i.substring(1)}`)
    .join(' ');
