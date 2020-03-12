import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';

interface ImageProps {
	fileName: string;
	alt: string;
	objectFit?: 'cover' | 'contain';
	style: object;
}

const Image: React.FC<ImageProps> = (props) => (
	<StaticQuery
		query={graphql`
			query {
				images: allFile {
					edges {
						node {
							relativePath
							name
							childImageSharp {
								fluid(maxWidth: 1800) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		`}
		render={({ images }) => {
			const image = images.edges.find((n) => {
				return n.node.relativePath.includes(props.fileName);
			});

			console.log(image)

			if (!image) {
				return null;
			}

			return (
				<Img
					alt={props.alt}
					fluid={image.node.childImageSharp.fluid}
					objectFit={props.objectFit}
					style={props.style}
				/>
			);
		}}
	/>
);

Image.defaultProps = {
	objectFit: 'cover',
};

export default Image;
