declare module "*.svg" {}
declare module "*.png" {}
declare module "*.gif" {}
declare module "*.otf" {}

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
