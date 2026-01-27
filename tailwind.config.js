module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'vipeink': {
                    bg: '#0B0D10',
                    secondary: '#0d0f13',
                    border: '#1a1d23',
                    text: {
                        primary: '#E6E6E6',
                        secondary: '#A0A0A0'
                    },
                    accent: {
                        DEFAULT: '#C7362F',
                        hover: '#a82e28'
                    },
                    status: {
                        success: '#4ade80',
                        warning: '#fbbf24'
                    }
                }
            },
            fontFamily: {
                mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
            }
        },
    },
    plugins: [],
}