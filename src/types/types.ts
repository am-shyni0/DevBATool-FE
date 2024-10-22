export interface MainTab {
  name: string;
  to: string;
  slug: string;
  sub: SubTab[];
  icon: (size: { size: number }) => JSX.Element;
}

export interface SubTab {
  name: string;
  to: string;
  slug: string;
}
