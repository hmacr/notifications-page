import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,ts,svelte}'],
  theme: {
    colors: {
      red: 'hsl(1, 90%, 64%)',
      blue: 'hsl(219, 85%, 26%)',
      white: 'hsl(0, 0%, 100%)',
      'very-light-grayish-blue': 'hsl(210, 60%, 98%)',
      'light-grayish-blue-1': 'hsl(211, 68%, 94%)',
      'light-grayish-blue-2': 'hsl(205, 33%, 90%)',
      'grayish-blue': 'hsl(219, 14%, 63%)',
      'dark-grayish-blue': 'hsl(219, 12%, 42%)',
      'very-dark-blue': 'hsl(224, 21%, 14%)',
    },
    fontFamily: {
      'plus-jakarta-sans': [
        'Plus Jakarta Sans',
        ...defaultTheme.fontFamily.sans,
      ],
    },
  },
};
