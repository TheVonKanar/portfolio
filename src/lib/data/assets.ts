import { base } from '$app/paths';

const url = (file: string) => `${base}/logos/${file}`;

const asset = (lightFilename: string, darkFilename = lightFilename) => {
	return { light: url(lightFilename), dark: url(darkFilename) };
};

const Assets = {
	Amplitude: asset('amplitude.jpg'),
	Android: asset('android.png'),
	C: asset('c.svg'),
	Confluence: asset('confluence.svg'),
	Cpp: asset('cpp.svg'),
	Csharp: asset('csharp.svg'),
	CSS: asset('css.svg'),
	EndlessDungeon: asset('endless-dungeon.jpg'),
	EndlessLegend: asset('no-img.svg'),
	EndlessLegend2: asset('endless-legend-2.png'),
	EndlessSpace2: asset('no-img.svg'),
	Figma: asset('figma.svg'),
	Fork: asset('fork.png'),
	France: asset('france.svg'),
	Git: asset('git.svg'),
	GitHub: asset('github.svg'),
	GitLab: asset('gitlab.svg'),
	HTML: asset('html.svg'),
	Humankind: asset('no-img.svg'),
	ISART: asset('isart.jpg'),
	JavaScript: asset('js.svg'),
	Jira: asset('jira.svg'),
	Pico8: asset('pico-8.png'),
	NodeJs: asset('node.svg'),
	Obsidian: asset('obsidian.png'),
	Persistant: asset('persistant.png', 'persistant-dark.png'),
	Procheo: asset('procheo.jpg'),
	Python: asset('python.svg'),
	Rider: asset('rider.svg'),
	Rust: asset('rust.svg'),
	Svelte: asset('svelte.svg'),
	SVN: asset('svn.svg'),
	Tailwind: asset('tailwind.svg'),
	TypeScript: asset('ts.svg'),
	UK: asset('uk.svg'),
	UnannouncedGame: asset('unannounced-game.svg', 'unannounced-game-dark.svg'),
	Unity: asset('unity.svg', 'unity-dark.svg'),
	Vite: asset('vite.png'),
	VisualStudio: asset('vs.svg'),
	Unknown: asset('no-img.svg'),
};

export default Assets;
