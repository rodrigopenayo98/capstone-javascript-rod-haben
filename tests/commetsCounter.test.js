import { fetchShowComments } from '../src/modules/apiComments.js';

const mockFetch = jest.fn(() => Promise.resolve({
  ok: true,
  json: () => Promise.resolve([{ comment: 'Example comment' }]),
}));

global.fetch = mockFetch;

describe('fetchShowComments', () => {
  afterEach(() => {
    mockFetch.mockClear();
  });

  it('should fetch comments for a show successfully', async () => {
    const showId = 'example-show-id';

    const comments = await fetchShowComments(showId);

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RfJpwLbuNZkYmafYdHPm/comments?item_id=${showId}`,
    );
    expect(comments).toEqual([{ comment: 'Example comment' }]);
  });

  it('should handle error in the request', async () => {
    mockFetch.mockImplementationOnce(() => Promise.reject(new Error('Request failed')));

    const showId = 'example-show-id';

    const comments = await fetchShowComments(showId);

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(comments).toEqual([]);
  });
});
