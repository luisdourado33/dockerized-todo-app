export enum ThemeSchemes {
  Light,
  Dark,
}

export interface ThemeProps {
  current: ThemeSchemes;
  colors: any;
}
