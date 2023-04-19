import { render, screen } from '@testing-library/react';

import HeaderNav from './index';

describe('HeaderNav', () => {
  describe('Render method', () => {
    it('should have 3 menu items', () => {
      render(<HeaderNav />);
      const menuItemList = screen.getAllByRole('listitem');
      expect(menuItemList).toHaveLength(2);
    });

    it('should have image with alt text "settings"', () => {
      render(<HeaderNav />);
      const settingsImage = screen.getByAltText('settings');
      expect(settingsImage).toBeInTheDocument();
    });

    it("should be able to support back button with link to '/test'", () => {
      render(<HeaderNav back="/" />);
      const backButton = screen.getByRole('link');
      expect(backButton).toHaveAttribute('href', '/test');
    });
  });
});
