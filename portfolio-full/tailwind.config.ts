// import { type Config } from "tailwindcss";

// export default {
//   content: ["./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// } satisfies Config;

import withMT from '@material-tailwind/react/utils/withMT'

export default withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    avatar: {
      sizes: {
        test: {
          width: "w-[250px]",
          height: "h-[250px]",
          borderRadius: "rounded-full",
        },
      }
    }
  },
  plugins: [],
});