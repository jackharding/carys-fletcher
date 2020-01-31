export interface WorkNode {
  frontmatter: {
    title: string;
    cover: string;
  }
  html: string;
}

export interface WorkEdge {
  node: WorkNode;
}