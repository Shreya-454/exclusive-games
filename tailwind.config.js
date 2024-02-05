/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'anton': "Anton",
        'inter': "Inter",
      },
      backgroundImage:{
        'green-blue':'linear-gradient(307deg, #51C8EF -13.72%, #7AF57A 102.02%)',
        'light-gradient':'linear-gradient(306.99deg, rgba(81, 200, 239, 0.04) -13.72%, rgba(122, 245, 122, 0.04) 102.02%)',
        'shadows':'radial-gradient(48.51% 51.68% at 50.39% 55.02%, #B8B8B8 0%, #BCBCBC 23%, #C9C9C9 47%, #DEDEDE 72%, #FCFCFC 98%, #FFFFFF 100%)',
        'ellipse':'linear-gradient(306.99deg, #51C8EF -13.72%, #7AF57A 102.02%)',
        'background': 'linear-gradient(306.99deg, rgba(81, 200, 239, 0.06) -13.72%, rgba(122, 245, 122, 0.06) 102.02%)',



      },
      animation:{
        'spin-slow':'spin 6s linear infinity'
      },


      backgroundSize:{
        'size':"100% 100%"
      }
    },
  },
  plugins: [],
};
// /** @type {import('tailwindcss').Config} */

// module.exports = withMT({
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         'anton': "Anton",
//         'inter': "Inter",
//       },
//       backgroundImage:{
//         'green-blue':'linear-gradient(307deg, #51C8EF -13.72%, #7AF57A 102.02%)',
//         'light-gradient':'linear-gradient(306.99deg, rgba(81, 200, 239, 0.04) -13.72%, rgba(122, 245, 122, 0.04) 102.02%)',
//         'light-green':'linear-gradient(306.99deg, rgba(81, 200, 239, 0.06) -13.72%, rgba(122, 245, 122, 0.06) 102.02%)',
//       },


//       backgroundSize:{
//         'size':"100% 100%"
//       }
//     },
//   },
//   plugins: [],
// });

