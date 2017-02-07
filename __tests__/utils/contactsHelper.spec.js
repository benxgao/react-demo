import fetch from 'isomorphic-fetch';
import { fetchContacts } from '../../src/utils/contactsHelper';

describe('contactsHelper', () => {
  describe('fetchContacts()', () => {
    it('should return data when fetch successfully', () => {
      const url = 'success';
      const dispatchMock = jest.fn(action => action);
      const actionMock = jest.fn(body => body);

      return fetchContacts(fetch, url, dispatchMock, actionMock).then((result) => {
        expect(result).toEqual({ iFetchKey: 'iFetchVal' });
      });
    });

    it('should return data when fetch successfully', () => {
      const url = 'failure';
      const dispatchMock = jest.fn(action => action);
      const actionMock = jest.fn(body => body);

      return fetchContacts(fetch, url, dispatchMock, actionMock).catch((error) => {
        expect(error).toBe('failed to fetch data');
      });
    });
  });
});
