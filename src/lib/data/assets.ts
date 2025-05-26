import { base } from '$app/paths';

const url = (file: string) => `${base}/logos/${file}`;

const asset = (lightFilename: string, darkFilename = lightFilename) => {
	return { light: url(lightFilename), dark: url(darkFilename) };
};

const Assets = {
	Android: asset('android.png'),
	C: asset('c.svg'),
	Cpp: asset('cpp.svg'),
	Csharp: asset('csharp.svg'),
	CSS: asset('css.svg'),
	HTML: asset('html.svg'),
	JavaScript: asset('js.png'),
	NodeJs: asset('node.png'),
	Python: asset('python.png'),
	Rust: asset('rust.svg'),
	Svelte: asset('svelte.svg'),
	Tailwind: asset('tailwind.svg'),
	TypeScript: asset('ts.png'),
	Unity: asset('unity.svg', 'unity-dark.svg'),
	Vite: asset('vite.png'),
	Unknown: asset('no-img.svg'),
};

export default Assets;
