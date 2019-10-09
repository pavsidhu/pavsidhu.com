export default interface Project {
  id: number
  name: string
  description: string
  fullDescription: string[]
  link: string
  theme: {
    background: string
  }
  render: (project: Project) => JSX.Element
}
