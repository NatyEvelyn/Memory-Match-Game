import createCard from './App.js';

describe('createCard', () => {
  it('should render without crashing', () => {
    const section = createCard();
    expect(section instanceof HTMLElement).toBe(true);
  });
});


