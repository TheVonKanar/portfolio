import { base } from '$app/paths';

const url = (file: string) => `${base}/logos/${file}`;

const asset = (lightFilename: string, darkFilename = lightFilename) => {
	return { light: url(lightFilename), dark: url(darkFilename) };
};

const Assets = {
	Amplitude: asset('amplitude.jpg'),
	Android: asset('android.png'),
	C: asset('c.svg'),
	Cpp: asset('cpp.svg'),
	Csharp: asset('csharp.svg'),
	CSS: asset('css.svg'),
	Figma: asset('figma.svg'),
	France: asset('france.svg'),
	HTML: asset('html.svg'),
	ISART: asset('isart.jpg'),
	JavaScript: asset('js.png'),
	NodeJs: asset('node.png'),
	Persistant: asset('persistant.png', 'persistant-dark.png'),
	Procheo: asset('procheo.jpg'),
	Python: asset('python.png'),
	Rust: asset('rust.svg'),
	Svelte: asset('svelte.svg'),
	Tailwind: asset('tailwind.svg'),
	TypeScript: asset('ts.png'),
	UK: asset('uk.svg'),
	Unity: asset('unity.svg', 'unity-dark.svg'),
	Vite: asset('vite.png'),
	Unknown: asset('no-img.svg'),
};

export default Assets;
