export default tokens;

declare interface DesignToken {
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

declare const tokens: {
  "typography": {
    "Colossus": {
      "Bold": DesignToken,
      "Regular": DesignToken
    },
    "Display": {
      "Bold": DesignToken,
      "Regular": DesignToken
    },
    "Hero": {
      "Bold": DesignToken,
      "Regular": DesignToken
    },
    "Uber": {
      "Bold": DesignToken,
      "Regular": DesignToken
    },
    "Headline 1": {
      "Bold": DesignToken,
      "Regular": DesignToken
    },
    "Headline 2": {
      "Bold": DesignToken,
      "Regular": DesignToken
    },
    "Headline 3": {
      "Bold": DesignToken,
      "Regular": DesignToken
    },
    "Headline 4": {
      "Bold": DesignToken,
      "Regular": DesignToken
    },
    "Headline 5": {
      "Bold": DesignToken,
      "Regular": DesignToken
    },
    "Lead": {
      "Bold": DesignToken,
      "Regular": DesignToken
    },
    "Body": {
      "Bold": DesignToken,
      "Regular": DesignToken
    },
    "Small": {
      "Bold": DesignToken,
      "Regular": DesignToken
    },
    "Caption": {
      "Bold": DesignToken,
      "Regular": DesignToken
    },
    "XSmall": {
      "Bold": DesignToken,
      "Regular": DesignToken
    },
    "Tiny": {
      "Bold": DesignToken,
      "Regular": DesignToken
    },
    "Button": {
      "Normal": {
        "Bold": DesignToken,
        "Regular": DesignToken
      },
      "Large": {
        "Bold": DesignToken,
        "Regular": DesignToken
      },
      "XLarge": {
        "Bold": DesignToken,
        "Regular": DesignToken
      }
    },
    "Input": {
      "Normal": {
        "Bold": DesignToken,
        "Regular": DesignToken
      },
      "Large": {
        "Bold": DesignToken,
        "Regular": DesignToken
      }
    }
  },
  "textCase": {
    "none": DesignToken,
    "captions": DesignToken,
    "buttons": DesignToken,
    "headlines": DesignToken
  },
  "textDecoration": {
    "none": DesignToken,
    "buttons": DesignToken,
    "captions": DesignToken
  },
  "documentation": {
    "headlines": {
      "bold": {
        "large": DesignToken,
        "small": DesignToken
      },
      "regular": {
        "large": DesignToken,
        "small": DesignToken
      },
      "xl": DesignToken
    },
    "body": {
      "bold": {
        "large": DesignToken,
        "small": DesignToken
      },
      "regular": {
        "large": DesignToken,
        "small": DesignToken
      },
      "xl": DesignToken
    }
  },
  "theme": {
    "fg": {
      "opacity": {
        "1": DesignToken,
        "5": DesignToken,
        "10": DesignToken,
        "20": DesignToken,
        "30": DesignToken,
        "40": DesignToken,
        "50": DesignToken,
        "60": DesignToken,
        "70": DesignToken,
        "80": DesignToken,
        "90": DesignToken
      },
      "on-dark": DesignToken,
      "default": DesignToken,
      "on-accent": DesignToken,
      "muted": DesignToken,
      "subtle": DesignToken,
      "on-disabled": DesignToken,
      "disabled": DesignToken
    },
    "overlay": {
      "bg": DesignToken
    },
    "shadow": {
      "base": DesignToken,
      "blur": DesignToken,
      "color": DesignToken,
      "focus": DesignToken,
      "opacity": {
        "base": DesignToken,
        "blur": DesignToken
      }
    },
    "bg": {
      "surface": DesignToken,
      "subtle": DesignToken,
      "muted": DesignToken,
      "canvas": DesignToken
    },
    "accent": {
      "disabled": DesignToken,
      "default": DesignToken,
      "subtle": DesignToken,
      "muted": DesignToken,
      "emphasis": DesignToken
    },
    "warning": {
      "default": DesignToken,
      "subtle": DesignToken,
      "muted": DesignToken,
      "emphasis": DesignToken,
      "on-warning": DesignToken
    },
    "info": {
      "default": DesignToken,
      "subtle": DesignToken,
      "muted": DesignToken,
      "emphasis": DesignToken,
      "on-info": DesignToken
    },
    "error": {
      "default": DesignToken,
      "subtle": DesignToken,
      "muted": DesignToken,
      "emphasis": DesignToken,
      "on-error": DesignToken
    },
    "success": {
      "default": DesignToken,
      "subtle": DesignToken,
      "muted": DesignToken,
      "emphasis": DesignToken,
      "on-success": DesignToken
    },
    "input": {
      "background": DesignToken,
      "text": DesignToken,
      "placeholder": DesignToken,
      "border": {
        "default": DesignToken,
        "disabled": DesignToken
      },
      "fg": {
        "disabled": DesignToken
      }
    },
    "border": {
      "default": DesignToken
    }
  },
  "shadows": {
    "theme": {
      "20": DesignToken,
      "40": DesignToken,
      "60": DesignToken,
      "80": DesignToken,
      "100": DesignToken
    },
    "focus": {
      "20": DesignToken
    },
    "blur": {
      "20": DesignToken,
      "40": DesignToken,
      "60": DesignToken,
      "80": DesignToken,
      "100": DesignToken,
      "base": DesignToken
    },
    "spread": {
      "10": DesignToken,
      "20": DesignToken,
      "base": DesignToken
    },
    "y": {
      "20": DesignToken,
      "40": DesignToken,
      "60": DesignToken,
      "80": DesignToken,
      "100": DesignToken,
      "base": DesignToken
    }
  },
  "fontFamilies": {
    "headlines": DesignToken,
    "body": DesignToken
  },
  "fontWeights": {
    "headlines": {
      "bold": DesignToken,
      "regular": DesignToken
    },
    "body": {
      "bold": DesignToken,
      "regular": DesignToken
    }
  },
  "radii": {
    "base": DesignToken,
    "xs": DesignToken,
    "sm": DesignToken,
    "md": DesignToken,
    "lg": DesignToken,
    "xl": DesignToken,
    "2xl": DesignToken,
    "rounded": DesignToken
  },
  "spacing": {
    "base": DesignToken,
    "xxs": DesignToken,
    "xs": DesignToken,
    "sm": DesignToken,
    "md": DesignToken,
    "lg": DesignToken,
    "xl": DesignToken,
    "2xl": DesignToken,
    "3xl": DesignToken,
    "4xl": DesignToken
  },
  "lineHeights": {
    "headlines": {
      "xl": DesignToken,
      "lg": DesignToken,
      "default": DesignToken,
      "sm": DesignToken
    },
    "body": {
      "relaxed": DesignToken,
      "default": DesignToken
    }
  },
  "fontSize": {
    "base": DesignToken,
    "scale": DesignToken,
    "xxs": DesignToken,
    "xs": DesignToken,
    "sm": DesignToken,
    "md": DesignToken,
    "lg": DesignToken,
    "xl": DesignToken,
    "2xl": DesignToken,
    "3xl": DesignToken,
    "4xl": DesignToken,
    "5xl": DesignToken,
    "6xl": DesignToken,
    "7xl": DesignToken,
    "8xl": DesignToken,
    "9xl": DesignToken,
    "10xl": DesignToken
  },
  "letterSpacing": {
    "body": DesignToken,
    "headlines": DesignToken,
    "buttons": DesignToken,
    "captions": DesignToken
  },
  "paragraphSpacing": {
    "default": DesignToken
  },
  "sizing": {
    "xs": DesignToken,
    "sm": DesignToken,
    "md": DesignToken,
    "lg": DesignToken,
    "xl": DesignToken
  },
  "colors": {
    "black": DesignToken,
    "white": DesignToken,
    "blue": {
      "50": DesignToken,
      "100": DesignToken,
      "200": DesignToken,
      "300": DesignToken,
      "400": DesignToken,
      "500": DesignToken,
      "600": DesignToken,
      "700": DesignToken,
      "800": DesignToken,
      "900": DesignToken,
      "950": DesignToken
    },
    "purple": {
      "50": DesignToken,
      "100": DesignToken,
      "200": DesignToken,
      "300": DesignToken,
      "400": DesignToken,
      "500": DesignToken,
      "600": DesignToken,
      "700": DesignToken,
      "800": DesignToken,
      "900": DesignToken,
      "950": DesignToken
    },
    "mint": {
      "50": DesignToken,
      "100": DesignToken,
      "200": DesignToken,
      "300": DesignToken,
      "400": DesignToken,
      "500": DesignToken,
      "600": DesignToken,
      "700": DesignToken,
      "800": DesignToken,
      "900": DesignToken,
      "950": DesignToken
    },
    "green": {
      "50": DesignToken,
      "100": DesignToken,
      "200": DesignToken,
      "300": DesignToken,
      "400": DesignToken,
      "500": DesignToken,
      "600": DesignToken,
      "700": DesignToken,
      "800": DesignToken,
      "900": DesignToken,
      "950": DesignToken
    },
    "yellow": {
      "50": DesignToken,
      "100": DesignToken,
      "200": DesignToken,
      "300": DesignToken,
      "400": DesignToken,
      "500": DesignToken,
      "600": DesignToken,
      "700": DesignToken,
      "800": DesignToken,
      "900": DesignToken,
      "950": DesignToken
    },
    "red": {
      "50": DesignToken,
      "100": DesignToken,
      "200": DesignToken,
      "300": DesignToken,
      "400": DesignToken,
      "500": DesignToken,
      "600": DesignToken,
      "700": DesignToken,
      "800": DesignToken,
      "900": DesignToken,
      "950": DesignToken
    },
    "grey": {
      "50": DesignToken,
      "100": DesignToken,
      "200": DesignToken,
      "300": DesignToken,
      "400": DesignToken,
      "500": DesignToken,
      "600": DesignToken,
      "700": DesignToken,
      "800": DesignToken,
      "900": DesignToken,
      "950": DesignToken
    },
    "slate": {
      "50": DesignToken,
      "100": DesignToken,
      "200": DesignToken,
      "300": DesignToken,
      "400": DesignToken,
      "500": DesignToken,
      "600": DesignToken,
      "700": DesignToken,
      "800": DesignToken,
      "900": DesignToken,
      "950": DesignToken
    }
  },
  "gradient": {
    "Warm Flame": {
      "Left to Right": DesignToken,
      "Top to Bottom": DesignToken
    },
    "Night Fade": {
      "Left to Right": DesignToken,
      "Top to Bottom": DesignToken
    },
    "Juicy Peach": {
      "Left to Right": DesignToken,
      "Top to Bottom": DesignToken
    },
    "Sunny Morning": {
      "Left to Right": DesignToken,
      "Top to Bottom": DesignToken
    },
    "Winter Neva": {
      "Left to Right": DesignToken,
      "Top to Bottom": DesignToken
    },
    "Loupe Fiesta": {
      "Left to Right": DesignToken,
      "Top to Bottom": DesignToken
    },
    "Soft Grass": {
      "Left to Right": DesignToken,
      "Top to Bottom": DesignToken
    },
    "Ripe Malinka": {
      "Left to Right": DesignToken,
      "Top to Bottom": DesignToken
    },
    "New York": {
      "Left to Right": DesignToken,
      "Top to Bottom": DesignToken
    },
    "Plum Plate": {
      "Left to Right": DesignToken,
      "Top to Bottom": DesignToken
    },
    "Light Mist": {
      "Left to Right": DesignToken,
      "Top to Bottom": DesignToken
    },
    "Miami Shore": {
      "Left to Right": DesignToken,
      "Top to Bottom": DesignToken
    },
    "Vanusa": {
      "Left to Right": DesignToken,
      "Top to Bottom": DesignToken
    },
    "Ocean View": {
      "Left to Right": DesignToken,
      "Top to Bottom": DesignToken
    },
    "Sandy Bleue": {
      "Left to Right": DesignToken,
      "Top to Bottom": DesignToken
    },
    "Quepal": {
      "Left to Right": DesignToken,
      "Top to Bottom": DesignToken
    },
    "Sublime Light": {
      "Left to Right": DesignToken,
      "Top to Bottom": DesignToken
    },
    "Lawrencium": {
      "Left to Right": DesignToken,
      "Top to Bottom": DesignToken
    },
    "Happy People": {
      "Left to Right": DesignToken,
      "Top to Bottom": DesignToken
    },
    "Delicate": {
      "Left to Right": DesignToken,
      "Top to Bottom": DesignToken
    },
    "Orange Fun": {
      "Left to Right": DesignToken,
      "Top to Bottom": DesignToken
    },
    "Purpink": {
      "Left to Right": DesignToken,
      "Top to Bottom": DesignToken
    },
    "Dull Days": {
      "Left to Right": DesignToken,
      "Top to Bottom": DesignToken
    },
    "Scooter": {
      "Left to Right": DesignToken,
      "Top to Bottom": DesignToken
    },
    "Overlay": {
      "Dark Bottom Shade": DesignToken,
      "Darkop Shade": DesignToken,
      "Light Bottom Shade": DesignToken,
      "Lightop Shade": DesignToken
    }
  }
}