export const STYLES = `@tailwind base;
@tailwind components;
@tailwind utilities;
 
@layer components {
  .heading-1 {
    @apply scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl
  }

  .heading-2 {
    @apply scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0
  }

  .heading-3 {
    @apply scroll-m-20 text-2xl font-semibold tracking-tight
  }

  .heading-4 {
    @apply scroll-m-20 text-xl font-semibold tracking-tight
  }

  .paragraph {
    @apply leading-7 [&:not(:first-child)]:mt-6
  }

  .blockquote {
    @apply mt-6 border-l-2 pl-6 italic
  }

  .ilcode {
    @apply relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold
  } 
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;

    --toggle: 0 0% 100%;

    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --ring: 215 20.2% 65.1%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;

    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;

    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;

    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;

    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;

    --toggle: 217.2 32.6% 28.5%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;

    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;

    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: ;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 85.7% 97.3%;

    --ring: 217.2 32.6% 17.5%;
  }
}
 
@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}`;

export const STYLES_W_PROSE = `@tailwind base;
@tailwind components;
@tailwind utilities;
 
@layer components {
  .heading-1 {
    @apply scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl
  }

  .heading-2 {
    @apply scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0
  }

  .heading-3 {
    @apply scroll-m-20 text-2xl font-semibold tracking-tight
  }

  .heading-4 {
    @apply scroll-m-20 text-xl font-semibold tracking-tight
  }

  .paragraph {
    @apply leading-7 [&:not(:first-child)]:mt-6
  }

  .blockquote {
    @apply mt-6 border-l-2 pl-6 italic
  }

  .ilcode {
    @apply relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold
  } 
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;

    --toggle: 0 0% 100%;

    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --ring: 215 20.2% 65.1%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;

    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;

    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;

    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;

    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;

    --toggle: 217.2 32.6% 28.5%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;

    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;

    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: ;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 85.7% 97.3%;

    --ring: 217.2 32.6% 17.5%;
  }
}
 
@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}`;

export const UTILS = `import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`;

export const TAILWIND_CONFIG = `/** @type {import('tailwindcss').Config} */
const path = require("path");
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    path.join(path.dirname(require.resolve("maison-components")), "**/*.js")

	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        toggle: "hsl(var(--toggle))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}`;

export const HOOK = `
import * as z from "zod";
import {
  DeepPartial,
  useForm,
  UseFormProps,
  UseFormReturn,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormTypes<T extends z.ZodObject<any, "strip", z.ZodTypeAny>> = {
  schema: T;
  defaultValues?: DeepPartial<z.infer<T>>;
  otherProps?: Exclude<UseFormProps<z.infer<T>>, "defaultValues" | "resolver">;
};

export const useHookForm = <T extends z.ZodObject<any, "strip", z.ZodTypeAny>>({
  schema,
  defaultValues,
  otherProps,
}: FormTypes<T>): UseFormReturn<z.infer<T>> => {
  const form = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DeepPartial<z.infer<T>>,
    ...otherProps,
  });

  return form;
};`;