import { palette } from "./palette";

export type AppTheme = {
  mode: "light" | "dark";
  colors: {
    background: {
      gradient: [string, string, string];
    };
    text: {
      primary: string;
      secondary: string;
      muted: string;
      inverse: string;
      link: string;
    };
    surface: {
      glass: string;
      footer: string;
    };
    border: {
      hairline: string;
      outline: string;
    };
    brand: {
      primary: string;
    };
    button: {
      primaryBg: string;
      primaryText: string;
      outlineText: string;
      outlineBorder: string;
    };
    icon: {
      headerBadgeBg: string;
    };
  };
  typography: {
    title: {
      size: number;
      weight: "900" | "800" | "700" | "600";
      lineHeight: number;
    };
    headerTitle: {
      size: number;
      weight: "800" | "700";
    };
    headerSubtitle: {
      size: number;
      weight: "600" | "500";
    };
    body: {
      size: number;
      weight: "500" | "600";
    };
    button: {
      size: number;
      weight: "700";
    };
  };
  radii: {
    card: number;
    button: number;
    badge: number;
    icon: number;
  };
  spacing: {
    screenX: number;
  };
};

export const lightTheme: AppTheme = {
  mode: "light",
  colors: {
    background: {
      gradient: ["#e0e7ff", "#f8fafc", "#ffd1e6"]
    },
    text: {
      primary: palette.slate[900],
      secondary: palette.slate[700],
      muted: palette.slate[500],
      inverse: "#ffffff",
      link: palette.blue[600]
    },
    surface: {
      glass: "rgba(255,255,255,0.6)",
      footer: "rgba(255,255,255,0.85)"
    },
    border: {
      hairline: palette.border.light,
      outline: "#cbd5f5"
    },
    brand: {
      primary: palette.blue[600]
    },
    button: {
      primaryBg: palette.blue[600],
      primaryText: "#ffffff",
      outlineText: palette.blue[600],
      outlineBorder: "#cbd5f5"
    },
    icon: {
      headerBadgeBg: palette.blue[600]
    }
  },
  typography: {
    title: {
      size: 42,
      weight: "900",
      lineHeight: 46
    },
    headerTitle: {
      size: 17,
      weight: "800"
    },
    headerSubtitle: {
      size: 11,
      weight: "600"
    },
    body: {
      size: 17,
      weight: "500"
    },
    button: {
      size: 17,
      weight: "700"
    }
  },
  radii: {
    card: 28,
    button: 20,
    badge: 20,
    icon: 18
  },
  spacing: {
    screenX: 24
  }
};

export const darkTheme: AppTheme = {
  mode: "dark",
  colors: {
    background: {
      gradient: ["#0b1220", "#180b2a", "#2b0b17"]
    },
    text: {
      primary: "#e5e7eb",
      secondary: "#cbd5e1",
      muted: "#94a3b8",
      inverse: "#0b1220",
      link: "#93c5fd"
    },
    surface: {
      glass: "rgba(255,255,255,0.08)",
      footer: "rgba(15,23,42,0.85)"
    },
    border: {
      hairline: palette.border.dark,
      outline: "rgba(148,163,184,0.35)"
    },
    brand: {
      primary: "#93c5fd"
    },
    button: {
      primaryBg: "#60a5fa",
      primaryText: "#0b1220",
      outlineText: "#e5e7eb",
      outlineBorder: "rgba(148,163,184,0.35)"
    },
    icon: {
      headerBadgeBg: "#60a5fa"
    }
  },
  typography: {
    title: {
      size: 42,
      weight: "900",
      lineHeight: 46
    },
    headerTitle: {
      size: 17,
      weight: "800"
    },
    headerSubtitle: {
      size: 11,
      weight: "600"
    },
    body: {
      size: 17,
      weight: "500"
    },
    button: {
      size: 17,
      weight: "700"
    }
  },
  radii: {
    card: 28,
    button: 20,
    badge: 20,
    icon: 18
  },
  spacing: {
    screenX: 24
  }
};
