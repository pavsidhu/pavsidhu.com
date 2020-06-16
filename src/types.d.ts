declare module "focus-visible"

declare module "*.svg" {
  export const ReactComponent: React.FunctionComponent<React.SVGAttributes<
    SVGElement
  >>
  const content: string
  export default content
}

declare module "*.png" {
  const content: string
  export default content
}

declare module "*.jpg" {
  const content: string
  export default content
}

declare module "*.gif" {
  const content: string
  export default content
}

declare module "*.woff2" {
  const content: string
  export default content
}

declare module "*.mp4" {
  const content: string
  export default content
}
