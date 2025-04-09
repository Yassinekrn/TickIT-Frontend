import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

// Define your orange primary and “soho” surface palettes
const MyAuraPreset = definePreset(Aura, {
  semantic: {
    primary: {
      // map all shade steps to orange
      50: '{orange.50}',
      100: '{orange.100}',
      200: '{orange.200}',
      300: '{orange.300}',
      400: '{orange.400}',
      500: '{orange.500}',
      600: '{orange.600}',
      700: '{orange.700}',
      800: '{orange.800}',
      900: '{orange.900}',
      950: '{orange.950}',
    },
    surface: {
      // pick your “soho” hex across shades (adjust as desired)
      50: '#f5f0e5',
      100: '#f2e9d8',
      200: '#ebdbc4',
      300: '#e1c9ae',
      400: '#d7b598',
      500: '#cc9f84',
      600: '#c28e6f',
      700: '#b57c5a',
      800: '#a56b47',
      900: '#955a36',
      950: '#8a4f2e',
    },
  },
});

export default MyAuraPreset;
