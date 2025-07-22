import { describe, test, expect, vi, beforeAll } from 'vitest';

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ text: "Mocked fact!" }),
  })
);

beforeAll(() => {
  document.body.innerHTML = `
    <button id="fetchBtn">Fetch</button>
    <p id="fact"></p>
  `;
});

import '../src/js/api';

describe('Fact Fetcher', () => {
  test('displays fetched fact on button click', async () => {
    const button = document.getElementById('fetchBtn');
    const factText = document.getElementById('fact');

    button.click();

    
    await new Promise(resolve => setTimeout(resolve));

    expect(factText.textContent).toBe('Mocked fact!');
  });
});
