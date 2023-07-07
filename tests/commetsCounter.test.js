import { fetchShowComments } from "../src/modules/apiComments.js"

describe('fetchShowComments', () => {
  test('should return an array of comments when valid showId is provided', async () => {
    const showId = '123';
    const comments = await fetchShowComments(showId);

    expect(Array.isArray(comments)).toBe(true);
    expect(comments.length).toBeGreaterThanOrEqual(0);
  });

  test('should return an empty array when invalid showId is provided', async () => {
    const showId = 'invalid'; 
    const comments = await fetchShowComments(showId);

    expect(Array.isArray(comments)).toBe(true);
    expect(comments.length).toBe(0);
  });

  test('should return an empty array when an error occurs', async () => {
    const showId = '123';
    jest.spyOn(global, 'fetch').mockImplementationOnce(() => {
      throw new Error('Network error');
    });
    const comments = await fetchShowComments(showId);
    expect(Array.isArray(comments)).toBe(true);
    expect(comments.length).toBe(0);
  });
});
