declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.mp4" {
  const src: string;
  export default src;
}
