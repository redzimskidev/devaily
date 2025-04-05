import { describe, it, expect } from 'vitest';
import { GET } from './route';

describe('Hello API Route', () => {
  it('should return correct response', async () => {
    const request = new Request('http://localhost:3000/api/hello');

    const response = await GET(request);

    expect(response).toBeInstanceOf(Response);

    const text = await response.text();
    expect(text).toBe('Hello, from API!');
    expect(response.status).toBe(200);
  });
});
