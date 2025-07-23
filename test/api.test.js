import { describe, test, expect, beforeEach, vi } from 'vitest';

beforeEach(() => {
  document.body.innerHTML = `
    <section id="consejitosSection">
      <p id="fact">Sorpréndete</p>
      <button id="fetchBtn" class="buttonC">Consejito</button>
      <button id="favoriteBtn">Guardar ⭐</button>
    </section>
  `;
});

test('should fetch a tip and display it in #fact', async () => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ text: 'Test tip here' }),
    })
  );

  
  await import('../src/js/api');

  
  const button = document.getElementById('fetchBtn');
  button.click();

  
  await new Promise(resolve => setTimeout(resolve, 0));

  
  const fact = document.getElementById('fact');
  
  expect(fact.textContent).toBe('Test tip here');
});
