import { Theme } from "@/types";
import {
    createContext,
    FC,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
} from "react";

type ThemeContextType = {
    setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType>({
    setTheme: () => {},
});

export const ThemeProvider: FC<
    PropsWithChildren<{
        defaultTheme: Theme;
        storageKey: string;
    }>
> = ({ children, storageKey, defaultTheme }) => {
    const [theme, setThemeState] = useState<Theme>(defaultTheme);

    const applyThemeClass = (theme: Theme) => {
        document.documentElement.classList.remove("dark", "light");
        document.documentElement.classList.add(theme);
    };

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem(storageKey, newTheme);
    };

    const getSystemTheme = () =>
        window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";

    useEffect(() => {
        const storedTheme =
            (localStorage.getItem(storageKey) as Theme) || defaultTheme;
        setTheme(storedTheme);

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const handleChange = (e: MediaQueryListEvent) => {
            if (theme === "system") {
                applyThemeClass(e.matches ? "dark" : "light");
            }
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [defaultTheme, storageKey, theme]);

    useEffect(() => {
        applyThemeClass(theme === "system" ? getSystemTheme() : theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
};
