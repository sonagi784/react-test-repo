const linkInfo: { [key: string]: string } = {
  HOME: '/home/',
  SEARCH: '/search/',
};

export const getUrl = (key: keyof typeof linkInfo): string => {
  return linkInfo[key] ? linkInfo[key] : '';
};
