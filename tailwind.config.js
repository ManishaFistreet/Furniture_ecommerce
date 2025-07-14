/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
  darkMode: 'class',
  corePlugins: {
    preflight: false, // Disable Tailwind's base styles
  },
  important: true,
  safelist: [
    'bg-red-500',         // Example of safelisting a class                                  
    'text-white',        // Example of safelisting a class 
    'hover:bg-blue-500', // Example of safelisting a class
    'dark:bg-gray-800',  // Example of safelisting a class for dark
    'dark:text-gray-200', // Example of safelisting a class for dark mode
    'dark:hover:bg-gray-700', // Example of safelisting a class for dark
  ],
  theme: {
    extend: {
      fontFamily: {
        'font-1': ['Inter', 'sans-serif'],
      },
      colors: {
        brand: "#527FA4",        // Muted Blue (Primary)
        accent: "#BD9A52",       // Warm Gold (Accent)
        dark: "#2F2F2F",         // Charcoal for text/headings
        light: "#F4F1EB",        // Soft Ivory for backgrounds
        subtle: "#EDEAE4",       // Light sand-beige (secondary bg)
        wood: "#8E735B",         // Warm wood tone
        border: "#D9D5CE",       // Soft edge/border tone
        steel: "#B0B9BF",        // Gray for UI elements
        navy: "#263238",         // Deep readable text
      },
      fontFamily: {
        heading: ["'Poppins'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 10px rgba(0, 0, 0, 0.06)",
      },
      borderRadius: {
        xl: "1rem",
        '2xl': "1.5rem",
      },
      fontSize: {
        '2xs': '0.625rem', // Example font size
        '3xs': '0.5rem', // Example font size
        '4xs': '0.375rem', // Example font size
      },
      spacing: {
        '72': '18rem', // Example spacing         
        '84': '21rem', // Example spacing
        '96': '24rem', // Example spacing
      },
      transitionProperty: {
        'width': 'width', // Example transition property
        'height': 'height', // Example transition property
        'color': 'color', // Example transition property
        'background': 'background-color', // Example transition property    
        'shadow': 'box-shadow', // Example transition property
      },
      transitionDuration: {
        '75': '75ms', // Example transition duration
        '100': '100ms', // Example transition duration        
        '150': '150ms', // Example transition duration
        '200': '200ms', // Example transition duration
        '300': '300ms', // Example transition duration
        '500': '500ms', // Example transition duration
        '700': '700ms', // Example transition duration
        '1000': '1000ms', // Example transition duration      
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 0.2, 1)', // Example timing function
        ' ease-in': 'cubic-bezier(0.4, 0, 1, 1)', // Example timing function
        'ease-out': 'cubic-bezier(0.2, 0, 0, 0.4, 1)', // Example timing function
        'linear': 'linear', // Example timing function
      },
      transitionDelay: {
        '75': '75ms', // Example transition delay
        '100': '100ms', // Example transition delay       
        '150': '150ms', // Example transition delay
        '200': '200ms', // Example transition delay
        '300': '300ms', // Example transition delay
        '500': '500ms', // Example transition delay
        '700': '700ms', // Example transition delay
        '1000': '1000ms', // Example transition delay   
      },
      screens: {
        'xs': '480px', // Example extra small screen
        'sm': '640px', // Example small screen    
        'md': '768px', // Example medium screen
        'lg': '1024px', // Example large screen
        'xl': '1280px', // Example extra large screen
        '2xl': '1536px', // Example 2x large screen
        '3xl': '1920px', // Example 3x large screen
        '4xl': '2560px', // Example 4x large screen
        '5xl': '3840px', // Example 5x large screen
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(1rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      }
    },
    variants: {
      extend: {
        backgroundColor: ['hover', 'focus', 'active', 'disabled'], // Example variant
        textColor: ['hover', 'focus', 'active', 'disabled'], // Example variant
        borderColor: ['hover', 'focus', 'active', 'disabled'], // Example variant
        boxShadow: ['hover', 'focus', 'active'], // Example variant
        opacity: ['hover', 'focus', 'active', 'disabled'], // Example variant
        cursor: ['hover', 'focus', 'disabled'], // Example variant
        transitionProperty: ['responsive', 'hover', 'focus'], // Example variant
        transitionDuration: ['responsive', 'hover', 'focus'], // Example variant
        transitionTimingFunction: ['responsive', 'hover', 'focus'], // Example variant
        transitionDelay: ['responsive', 'hover', 'focus'], // Example variant
        display: ['responsive', 'group-hover'], // Example variant
        visibility: ['responsive', 'group-hover'], // Example variant
        flexDirection: ['responsive', 'group-hover'], // Example variant          
        alignItems: ['responsive', 'group-hover'], // Example variant
        justifyContent: ['responsive', 'group-hover'], // Example variant
        flexWrap: ['responsive', 'group-hover'], // Example variant
        gap: ['responsive', 'group-hover'], // Example variant
        padding: ['responsive', 'group-hover'], // Example variant
        margin: ['responsive', 'group-hover'], // Example variant
        width: ['responsive', 'group-hover'], // Example variant
        height: ['responsive', 'group-hover'], // Example variant
        minWidth: ['responsive', 'group-hover'], // Example variant
        minHeight: ['responsive', 'group-hover'], // Example variant
        maxWidth: ['responsive', 'group-hover'], // Example variant
        maxHeight: ['responsive', 'group-hover'], // Example variant
        borderRadius: ['responsive', 'group-hover'], // Example variant
        borderWidth: ['responsive', 'group-hover'], // Example variant
        borderStyle: ['responsive', 'group-hover'], // Example variant
        borderColor: ['responsive', 'group-hover'], // Example variant
        backgroundColor: ['responsive', 'group-hover'], // Example variant
        textColor: ['responsive', 'group-hover'], // Example variant
        fontSize: ['responsive', 'group-hover'], // Example variant
        fontWeight: ['responsive', 'group-hover'], // Example variant
        fontFamily: ['responsive', 'group-hover'], // Example variant
        lineHeight: ['responsive', 'group-hover'], // Example variant
        letterSpacing: ['responsive', 'group-hover'], // Example variant
        textDecoration: ['responsive', 'group-hover'], // Example variant
        textTransform: ['responsive', 'group-hover'], // Example variant      
        listStyleType: ['responsive', 'group-hover'], // Example variant
        listStylePosition: ['responsive', 'group-hover'], // Example variant
        cursor: ['responsive', 'group-hover'], // Example variant
        outline: ['responsive', 'group-hover'], // Example variant
        outlineOffset: ['responsive', 'group-hover'], // Example variant
        outlineColor: ['responsive', 'group-hover'], // Example variant
        boxShadow: ['responsive', 'group-hover'], // Example variant
        opacity: ['responsive', 'group-hover'], // Example variant
        visibility: ['responsive', 'group-hover'], // Example variant
        zIndex: ['responsive', 'group-hover'], // Example variant
        transitionProperty: ['responsive', 'hover', 'focus'], // Example variant
        transitionDuration: ['responsive', 'hover', 'focus'], // Example variant        
        transitionTimingFunction: ['responsive', 'hover', 'focus'], // Example variant
        transitionDelay: ['responsive', 'hover', 'focus'], // Example variant
        willChange: ['responsive', 'hover', 'focus'], // Example variant
        aspectRatio: ['responsive', 'hover', 'focus'], // Example variant
        gridTemplateColumns: ['responsive', 'group-hover'], // Example variant      
      }
    },
  },
}