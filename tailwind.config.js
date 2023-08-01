/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/*.{html,js}","./client/**/**/*.{html,js}"],
  theme: {
    extend: {
      lineHeight: {
        "lh-140": "140%",
        "lh-150": "150%",
        "lh-160": "160%"
        },
        spacing: {
          "spacing-8": "4rem",
          "spacing-12": "calc(4rem + 2rem)",
          "spacing-16": "calc(4rem + 4rem)",
          "spacing-20": "calc(4rem + 5rem)",
          "spacing-24": "calc(4rem + 6rem)",
          "spacing-28": "calc(4rem + 7rem)",
          "spacing-32": "calc(4rem + 8rem)",
          "spacing-36": "calc(4rem + 9rem)",
          "spacing-40": "calc(4rem + 10rem)",
          "spacing-44": "calc(4rem + 11rem)",
          "spacing-48": "calc(4rem + 12rem)",
          "spacing-52": "calc(4rem + 13rem)",
          "spacing-56": "calc(4rem + 14rem)",
          "spacing-60": "calc(4rem + 15rem)",
          "spacing-64": "calc(4rem + 16rem)",
          baseSpacing: "4rem"
        },
        colors: {
          white: "#ffffff",
          primary: "#373f67",
          secondary: "#5a85ee",
          tertiary: "#719cf7",
          negative: "#e11900",
          contentPrimary: "black",
          contentSecondary: "#919191",
          contentTertiary: "#9DA1B4"
        },
        scale: {
          "scale1": "1.333"
        },
        fontSize: {
          "Default": "14px",
          "heading-Small": "calc(14px / 1.333)",
          "heading-Medium": "14px",
          "heading-Large": "calc(14px * 1.333)",
          "heading-Xl": "calc(14px * 1.333 * 1.333)",
          "heading-XXL": "calc(14px * 1.333 * 1.333 * 1.333)",
          "heading-XXXL": "calc(14px * 1.333 * 1.333 * 1.333 * 1.333)",
          "label-Small": "calc(14px / 1.333)",
          "label-Medium": "14px",
          "label-Large": "calc(14px * 1.333)",
          "label-Xl": "calc(14px * 1.333 * 1.333)",
          "label-Xxl": "calc(14px * 1.333 * 1.333 * 1.333)",
          "paragraph-Small": "calc(14px / 1.333)",
          "paragraph-Medium": "14px",
          "paragraph-Large": "calc(14px * 1.333)",
          "paragraph-Xl": "calc(14px * 1.333 * 1.333)"
        },
          fontFamily: {
            pretendard: "Pretendard",
          },
          fontWeight: {
            bold: "700",
            semiBold: "600",
            regular: "400",
          },
          backgroundSize: {
            "50": "50%",
            "100": "100%",
            "150": "150%",
            "200": "200%",
          },
      },
  },
  plugins: [

  ],
}
