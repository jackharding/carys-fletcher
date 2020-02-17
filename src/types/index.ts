export interface Image {
	src: string;
	alt: string;
}

export interface WorkNode {
	frontmatter: {
		title: string;
		slug: string;
		cover: string;
		images: Image[];
	};
	html: string;
}

export interface WorkEdge {
	node: WorkNode;
}
