module.exports = {
    theme: {
        extend: {
            fontFamily: {
                serif: ['Lora', 'Bitter', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                navy: '#22223B', // new navy
                accent: '#4A4E69', // soft blue accent
                light: '#F2E9E4', // light gray
                blue: {
                    400: '#9A8C98', // accent blue
                    700: '#4A4E69', // deep blue
                },
                white: '#fff',
                gray: {
                    100: '#F2E9E4',
                    900: '#22223B',
                },
            },
            maxWidth: {
                'screen-xl': '1200px',
            },
            spacing: {
                18: '4.5rem',
            },
        },
    },
}