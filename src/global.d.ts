type CSSModuleClasses = { readonly [key: string]: string };
declare module '*.module.pcss' {
  const classes: CSSModuleClasses;
  export default classes;
}

declare module '*.pcss' {
  const css: string;
  export default css;
}
