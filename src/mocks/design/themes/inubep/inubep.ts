const palette = {
  neutral: {
    n900: "#383838",
    n800: "#404040",
    n700: "#4D4D4D",
    n600: "#595959",
    n500: "#666666",
    n400: "#747474",
    n300: "#808080",
    n200: "#8C8C8C",
    n100: "#999999",
    n90: "#BDBDBD",
    n80: "#C4C4C4",
    n70: "#C9C9C9",
    n60: "#D1D1D1",
    n50: "#D9D9D9",
    n40: "#E0E0E0",
    n30: "#E8E8E8",
    n20: "#F0F0F0",
    n10: "#F7F7F7",
    n0: "#FFFFFF",
  },
  neutralAlpha: {
    n900a: "rgba(56, 56, 56, 1)",
    n800a: "rgba(56, 56, 56, 0.95)",
    n700a: "rgba(56, 56, 56, 0.89)",
    n600a: "rgba(56, 56, 56, 0.82)",
    n500a: "rgba(56, 56, 56, 0.77)",
    n400a: "rgba(56, 56, 56, 0.71)",
    n300a: "rgba(56, 56, 56, 0.66)",
    n200a: "rgba(56, 56, 56, 0.60)",
    n100a: "rgba(56, 56, 56, 0.54)",
    n90a: "rgba(56, 56, 56, 0.48)",
    n80a: "rgba(56, 56, 56, 0.42)",
    n70a: "rgba(56, 56, 56, 0.36)",
    n60a: "rgba(56, 56, 56, 0.31)",
    n50a: "rgba(56, 56, 56, 0.25)",
    n40a: "rgba(56, 56, 56, 0.13)",
    n30a: "rgba(56, 56, 56, 0.08)",
    n20a: "rgba(56, 56, 56, 0.04)",
    n10a: "rgba(56, 56, 56, 0.02)",
    n0a: "rgba(56, 56, 56, 0)",
  },
  red: {
    r500: "#BF2600",
    r400: "#DE350B",
    r300: "#FF5630",
    r200: "#FF7452",
    r100: "#FF8F73",
    r75: "#FFBDAD",
    r50: "#FFEBE6",
  },
  yellow: {
    y500: "#D89A00",
    y400: "#FFB600",
    y300: "#FFCC00",
    y200: "#FFE066",
    y100: "#FFEB99",
    y75: "#FFF5CC",
    y50: "#FFFAE6",
  },
  green: {
    g500: "#0C733B",
    g400: "#109C50",
    g300: "#15CC69",
    g200: "#57D992",
    g100: "#79F2C0",
    g75: "#CCFFE4",
    g50: "#E5FFF1",
  },
  blue: {
    b500: "#004480",
    b400: "#0059A7",
    b300: "#1FA7F2",
    b200: "#61AEF2",
    b100: "#91C5F2",
    b75: "#CCE7FF",
    b50: "#E5F3FF",
  },
  teal: {
    t500: "#008DA6",
    t400: "#00A3BF",
    t300: "#00B8D9",
    t200: "#00C7E6",
    t100: "#79E2F2",
    t75: "#B3F5FF",
    t50: "#E6FCFF",
  },
  purple: {
    p500: "#403294",
    p400: "#5243AA",
    p300: "#6554C0",
    p200: "#8777D9",
    p100: "#998DD9",
    p75: "#C0B6F2",
    p50: "#EAE6FF",
  },
};

const inubetheme = {
  assisted: {
    title: {
      appearance: "dark",
    },
    description: {
      appearance: "gray",
    },
    track: {
      color: palette.neutral.n30,
    },
    bar: {
      color: palette.blue.b400,
    },
    background: {
      color: palette.neutral.n10,
    },
    button: {
      appearance: "primary",
    },
    step: {
      color: palette.blue.b400,
    },
  },
  blanket: {
    background: {
      color: palette.neutralAlpha.n100a,
    },
  },
  header: {
    background: {
      color: "inubep.palette.neutral.n0",
    },
    content: {
      appearance: "gray",
    },
  },
  progressBar: {
    primary: {
      animation: { color: palette.blue.b50 },
      background: { color: palette.blue.b400 },
      border: { color: palette.neutral.n40 },
      track: { color: palette.neutral.n10 },
    },
    success: {
      animation: { color: palette.green.g50 },
      background: { color: palette.green.g400 },
      border: { color: palette.neutral.n40 },
      track: { color: palette.neutral.n10 },
    },
    warning: {
      animation: { color: palette.yellow.y50 },
      background: { color: palette.yellow.y400 },
      border: { color: palette.neutral.n40 },
      track: { color: palette.neutral.n10 },
    },
    danger: {
      animation: { color: palette.red.r50 },
      background: { color: palette.red.r400 },
      border: { color: palette.neutral.n40 },
      track: { color: palette.neutral.n10 },
    },
    help: {
      animation: { color: palette.purple.p50 },
      background: { color: palette.purple.p400 },
      border: { color: palette.neutral.n40 },
      track: { color: palette.neutral.n10 },
    },
    dark: {
      animation: { color: palette.neutral.n200 },
      background: { color: palette.neutral.n900 },
      border: { color: palette.neutral.n40 },
      track: { color: palette.neutral.n10 },
    },
    gray: {
      animation: { color: palette.neutral.n20 },
      background: { color: palette.neutral.n50 },
      border: { color: palette.neutral.n40 },
      track: { color: palette.neutral.n10 },
    },
    light: {
      animation: { color: palette.neutral.n0 },
      background: { color: palette.neutral.n10 },
      border: { color: palette.neutral.n40 },
      track: { color: palette.neutral.n50 },
    },
  },
  input: {
    border: {
      color: {
        regular: palette.neutral.n40,
        disabled: palette.neutral.n40,
        focus: palette.blue.b300,
        invalid: palette.red.r400,
      },
    },
    background: {
      color: {
        regular: palette.neutral.n0,
        disabled: palette.neutral.n10,
      },
    },
    content: {
      color: {
        regular: palette.neutral.n900,
        disabled: palette.neutral.n70,
      },
    },
    placeholder: {
      color: {
        regular: palette.neutral.n300,
      },
    },
    message: {
      color: {
        regular: palette.red.r400,
      },
    },
    required: {
      color: {
        regular: palette.red.r400,
        disabled: palette.neutral.n70,
      },
    },
    optionList: {
      appearance: {
        regular: "dark",
        expanded: "primary",
      },
      background: {
        expanded: palette.neutral.n0,
        selected: palette.neutral.n30,
      },
    },
  },
  optionsperiod: {
    border: {
      color: {
        regular: palette.neutral.n0,
        focus: palette.blue.b300,
      },
    },
    background: {
      color: {
        regular: palette.neutral.n0,
        selected: palette.neutral.n30,
      },
    },
    content: {
      color: {
        regular: palette.neutral.n900,
        disabled: palette.neutral.n70,
      },
    },
    optionList: {
      appearance: {
        regular: "dark",
        expanded: "primary",
      },
      background: {
        selected: palette.neutral.n30,
      },
    },
  },
  text: {
    primary: {
      content: {
        color: {
          regular: palette.blue.b400,
          disabled: palette.neutral.n70,
          hover: palette.blue.b300,
        },
      },
    },
    success: {
      content: {
        color: {
          regular: palette.green.g400,
          disabled: palette.neutral.n70,
          hover: palette.green.g300,
        },
      },
    },
    warning: {
      content: {
        color: {
          regular: palette.yellow.y400,
          disabled: palette.neutral.n70,
          hover: palette.yellow.y300,
        },
      },
    },
    danger: {
      content: {
        color: {
          regular: palette.red.r400,
          disabled: palette.neutral.n70,
          hover: palette.red.r300,
        },
      },
    },
    help: {
      content: {
        color: {
          regular: palette.purple.p400,
          disabled: palette.neutral.n70,
          hover: palette.purple.p300,
        },
      },
    },
    dark: {
      content: {
        color: {
          regular: palette.neutral.n900,
          disabled: palette.neutral.n70,
          hover: palette.neutral.n500,
        },
      },
    },
    gray: {
      content: {
        color: {
          regular: palette.neutral.n300,
          disabled: palette.neutral.n70,
          hover: palette.neutral.n100,
        },
      },
    },
    light: {
      content: {
        color: {
          regular: palette.neutral.n10,
          disabled: palette.neutral.n70,
          hover: palette.neutral.n0,
        },
      },
    },
  },
};
export { inubetheme };
