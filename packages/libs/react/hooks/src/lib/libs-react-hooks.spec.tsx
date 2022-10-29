import { render } from '@testing-library/react';

import LibsReactHooks from './libs-react-hooks';

describe('LibsReactHooks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibsReactHooks />);
    expect(baseElement).toBeTruthy();
  });
});
