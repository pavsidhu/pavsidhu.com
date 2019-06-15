declare module "*.svg" {
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

declare module "*.otf" {
  const content: string
  export default content
}

interface IProject {
  id: number
  name: string
  description: string
  fullDescription: string[]
  link: string
  theme: {
    background: string
  }
  render: (project: IProject) => JSX.Element
}
