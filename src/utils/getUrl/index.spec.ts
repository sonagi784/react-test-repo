import { getUrl } from '.';

describe('getUrl', () => {
  it('리스트에 있는 key를 넣으면 해당하는 url을 리턴함', () => {
    expect(getUrl('HOME')).toContain('home');
    expect(getUrl('SEARCH')).toContain('search');
  });

  it('리스트에 없는 key를 넣으면 error url 리턴함', () => {
    expect(getUrl('__NOLIST_KEY__')).toContain('error');
  });

  it('null 체크 테스트', () => {
    expect(getUrl()).toBe('');
    expect(getUrl(undefined)).toBe('');
    expect(getUrl(null)).toBe('');
    expect(getUrl('')).toBe('');
  });
});
