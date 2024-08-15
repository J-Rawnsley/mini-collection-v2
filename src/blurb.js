// defines a top-level element called "blurb", giving a brief description of the purpose of this site
const Blurb = () => {
	return (
		<div className="main-element">
			<p className="blurb">
				I'm Joe Rawnsley, a self-taught software developer based in Manchester,
				UK. This collection of work is a place for me to share the personal
				projects that document my learning journey. They were built with <b>JavaScript, React, NodeJS, Express, Bootstrap, MongoDB, Mongoose, HTML,
				and CSS.</b> The static apps are deployed on Netlify, and some use Netlify's
				serverless functions. The full-stack apps are deployed on Railway.
				Contact me at joe.rawnsley@gmail.com to report any bugs or ask any
				questions. Landing page built with React - code on{' '}
				<a href="https://github.com/J-Rawnsley/mini-collection-v2">GitHub</a>
			</p>
		</div>
	);
};
export default Blurb;
