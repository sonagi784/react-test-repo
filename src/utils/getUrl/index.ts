const linkInfo: { [type: string]: string } = {
  HOME: '/home/',
  SEARCH: '/search/',
};

export const getUrl = (type?: keyof typeof linkInfo | null | undefined): string => {
  if (!type) {
    return '';
  }

  return linkInfo[type] ? linkInfo[type] : 'error';
};
