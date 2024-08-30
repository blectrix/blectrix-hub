export type ThemeColors =  "Violet" | "Zinc" | "Rose" | "Orange" | "Green" | "Blue" 

export interface ThemeColorStateParams {
    themeColor: ThemeColors
    setThemeColor: React.Dispatch<React.SetStateAction<ThemeColors>>
}