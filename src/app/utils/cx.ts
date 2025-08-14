// src/app/utils/cx.ts
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ['display-xs','display-sm','display-md','display-lg','display-xl','display-2xl'],
    },
  },
});

export const cx = twMerge;
// Dummy untuk bantu IntelliSense mengurutkan kelas jika perlu
export function sortCx<T extends Record<string, any>>(classes: T): T { return classes; }
