import { getUrl } from '.';

describe('getUrl', () => {
  it('빈 문자열을 넣으면 기본 url을 리턴함', () => {
    expect(getUrl('')).toBe('');
  });

  it('올바른 key를 넣으면 url을 리턴함', () => {
    expect(getUrl('HOME')).toBe('/home/');
    expect(getUrl('SEARCH')).toBe('/search/');
  });
});
