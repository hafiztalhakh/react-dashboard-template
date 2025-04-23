// color design tokens export
export const tokensDark = {
  grey: {
    0: "#ffffff",
    10: "#f9fafb",
    50: "#f3f4f6",
    100: "#e5e7eb", // Gray-200
    200: "#d1d5db", // Gray-300
    300: "#9ca3af",
    400: "#6b7280",
    500: "#4b5563", // Text Secondary
    600: "#374151",
    700: "#1f2937",
    800: "#111827", // Text Primary
    900: "#0f172a",
    1000: "#000000",
  },
  primary: {
    100: "#e5e7eb", // Primary
    200: "#d1d5db",
    300: "#9ca3af",
    400: "#6b7280",
    500: "#4b5563",
    600: "#374151",
    700: "#1f2937",
    800: "#111827",
    900: "#0f172a",
  },
  secondary: {
    100: "#d1d5db", // Secondary
    200: "#9ca3af",
    300: "#6b7280",
    400: "#4b5563",
    500: "#374151",
    600: "#2563eb", // Accent
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
  },
  success: {
    500: "#16a34a", // Green-600
  },
  error: {
    500: "#b91c1c", // Red-700
  },
};

// function that reverses the color palette
// function reverseTokens(tokens) {
//   const reversedTokens = {};
//   Object.entries(tokens).forEach(([key, val]) => {
//     const keys = Object.keys(val);
//     const values = Object.values(val);
//     const length = keys.length;
//     const reversedObj = {};
//     for (let i = 0; i < length; i++) {
//       reversedObj[keys[i]] = values[length - i - 1];
//     }
//     reversedTokens[key] = reversedObj;
//   });
//   return reversedTokens;
// }
// export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    // palette: {
    // mode: mode,
    //   ...(mode === "dark"
    //     ? {
    //         primary: {
    //           ...tokensDark.primary,
    //           main: tokensDark.primary[100],
    //           light: tokensDark.primary[200],
    //         },
    //         secondary: {
    //           ...tokensDark.secondary,
    //           main: tokensDark.secondary[600],
    //         },
    //         neutral: {
    //           ...tokensDark.grey,
    //           main: tokensDark.grey[500],
    //         },
    //         background: {
    //           default: tokensDark.grey[800],
    //           alt: tokensDark.grey[700],
    //         },
    //         success: {
    //           main: tokensDark.success[500],
    //         },
    //         error: {
    //           main: tokensDark.error[500],
    //         },
    //       }
    //     : {
    //         primary: {
    //           ...tokensLight.primary,
    //           main: tokensDark.primary[100],
    //           light: tokensDark.primary[200],
    //         },
    //         secondary: {
    //           ...tokensLight.secondary,
    //           main: tokensDark.secondary[600],
    //           light: tokensLight.secondary[700],
    //         },
    //         neutral: {
    //           ...tokensLight.grey,
    //           main: tokensDark.grey[500],
    //         },
    //         background: {
    //           default: tokensDark.grey[0],
    //           alt: tokensDark.grey[50],
    //         },
    //         success: {
    //           main: tokensDark.success[500],
    //         },
    //         error: {
    //           main: tokensDark.error[500],
    //         },
    //       }),
    // },
    palette: palette(mode),
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: { fontSize: 40 },
      h2: { fontSize: 32 },
      h3: { fontSize: 24 },
      h4: { fontSize: 20 },
      h5: { fontSize: 16 },
      h6: { fontSize: 14 },
    },
  };
};

// theme/palette.js

export const palette = (mode) => ({
  mode,
  ...(mode === "light"
    ? {
        // Light mode palette
        primary: {
          main: "#2563EB", // Blue 600
          light: "#60A5FA", // Blue 400
          dark: "#1E40AF", // Blue 800
          contrastText: "#FFFFFF",
        },
        secondary: {
          main: "#10B981", // Emerald 500
          light: "#6EE7B7", // Emerald 300
          dark: "#047857", // Emerald 700
          contrastText: "#FFFFFF",
        },
        error: {
          main: "#EF4444", // Red 500
          light: "#FCA5A5", // Red 300
          dark: "#B91C1C", // Red 700
          contrastText: "#FFFFFF",
        },
        warning: {
          main: "#F59E0B", // Amber 500
          light: "#FCD34D", // Amber 300
          dark: "#B45309", // Amber 700
          contrastText: "#FFFFFF",
        },
        info: {
          main: "#3B82F6", // Blue 500
          light: "#93C5FD", // Blue 300
          dark: "#1D4ED8", // Blue 700
          contrastText: "#FFFFFF",
        },
        success: {
          main: "#22C55E", // Green 500
          light: "#86EFAC", // Green 300
          dark: "#15803D", // Green 700
          contrastText: "#FFFFFF",
        },
        grey: {
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        background: {
          default: "#F9FAFB",
          paper: "#FFFFFF",
        },
        text: {
          primary: "#111827",
          secondary: "#6B7280",
        },
      }
    : {
        // Dark mode palette
        primary: {
          main: "#60A5FA",
          light: "#93C5FD",
          dark: "#3B82F6",
          contrastText: "#0F172A",
        },
        secondary: {
          main: "#34D399",
          light: "#6EE7B7",
          dark: "#10B981",
          contrastText: "#0F172A",
        },
        error: {
          main: "#F87171",
          light: "#FCA5A5",
          dark: "#EF4444",
          contrastText: "#0F172A",
        },
        warning: {
          main: "#FBBF24",
          light: "#FCD34D",
          dark: "#F59E0B",
          contrastText: "#0F172A",
        },
        info: {
          main: "#60A5FA",
          light: "#BFDBFE",
          dark: "#3B82F6",
          contrastText: "#0F172A",
        },
        success: {
          main: "#4ADE80",
          light: "#86EFAC",
          dark: "#22C55E",
          contrastText: "#0F172A",
        },
        grey: {
          100: "#1F2937",
          200: "#374151",
          300: "#4B5563",
          400: "#6B7280",
          500: "#9CA3AF",
          600: "#D1D5DB",
          700: "#E5E7EB",
          800: "#F3F4F6",
          900: "#F9FAFB",
        },
        background: {
          default: "#111827",
          paper: "#1F2937",
        },
        text: {
          primary: "#F9FAFB",
          secondary: "#D1D5DB",
        },
      }),
});
