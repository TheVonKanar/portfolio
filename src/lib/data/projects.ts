import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';

const items: Array<Project> = [
	{
		slug: 'unannounced-game',
		color: 'lightblue',
		description:
			'### Contribution\n' +
			'I worked on **REDACTED** during pre-production and production as part of the UI Programming Team. My major contributions includes major reworks and improvements of our internal Frameworks (both UI and Gameplay), the creation of an in-engine design system, the integration of wireframe and final screens, and the development of a debugging overlay tool. Occasionaly did some gameplay and tools programming.',
		shortDescription:
			'New Amplitude Studios game, yet to be revealed!',
		links: [
			{ to: 'https://www.amplitude-studios.com/', label: 'Website' },
		],
		logo: Assets.UnannouncedGame,
		name: 'Unannounced Game',
		period: {
			from: new Date(2024, 6)
		},
		skills: getSkills('unity', 'csharp', 'figma'),
		type: 'Video Game'
	},
	{
		slug: 'endless-legend-2',
		color: 'red',
		description:
			'### Description\n' + 
			'Endless Legend 2 is a fantasy turn-based strategy game set in the Endless Universe. Lead unique factions, dominate world-changing tidefalls, write your legend and unveil the secrets of a dreamlike ocean-planet on the verge of extinction.\n' +
			'### Contribution\n' +
			'I worked on Endless Legend 2 during production as part of the UI Programming Team. My major contributions includes improvements of our internal UI Framework, the creation of an in-engine design system, the integration of wireframe and final screens, and the development of a debugging overlay tool. Occasionaly did some gameplay and tools programming.',
		shortDescription:
			'A turn-based fantasy strategy game (4X) set in the Endless Universe',
		links: [
			{ to: 'https://store.steampowered.com/app/3407390/ENDLESS_Legend_2/', label: 'Steam' },
		],
		logo: Assets.EndlessLegend2,
		name: 'Endless Legend 2',
		period: {
			from: new Date(2023, 8), to: new Date(2024, 6)
		},
		skills: getSkills('unity', 'csharp', 'figma'),
		type: 'Strategy Game',
		screenshots: [
			{
				src:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3407390/77aac6e62704b6de4b694d3863d8385226729aab/ss_77aac6e62704b6de4b694d3863d8385226729aab.1920x1080.jpg?t=1749415368"
			},
			{
				src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3407390/bc5098357a752fb60ae51a19b6add699295156c1/ss_bc5098357a752fb60ae51a19b6add699295156c1.1920x1080.jpg?t=1749415368"
			},
			{
				src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3407390/fad955098969a9c49431d6e19b033b5db270c3a7/ss_fad955098969a9c49431d6e19b033b5db270c3a7.1920x1080.jpg?t=1749415368"
			},
			{
				src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3407390/d64992db99497ba748843e33f6bc0ed64cf4686b/ss_d64992db99497ba748843e33f6bc0ed64cf4686b.1920x1080.jpg?t=1749415368"
			}
		]
	},
	{
		slug: 'make-me-8',
		color: 'pink',
		description:
			'### Description\n' + 
			'Make Me 8 is a small game centered around phonetic variants of the theme "Make Me Laugh". Choose carefully between 4 words each round to earn points!\n' +
			'### Contribution\n' +
			'I worked on this solo during the Global Game Jam 2024, in Rennes. It was my first real try a doing games using pico-8, and it was a blast!',
		shortDescription:
			'My GGJ 2024 participation, a small pico-8 game about word play!',
		links: [
			{ to: 'https://thevonkanar.itch.io/make-me-8', label: 'itch.io' },
			{ to: 'https://github.com/TheVonKanar/make-me-8', label: 'GitHub' },
		],
		logo: Assets.Pico8,
		name: 'Make Me 8',
		period: {
			from: new Date(2024, 0, 26), to: new Date(2024, 0, 28)
		},
		skills: getSkills('pico-8'),
		type: 'Word Game',
		screenshots: [
			{
				src: "https://ggjv4.s3.us-west-1.amazonaws.com/files/styles/sidebar_full/s3/games/2024/71783/featured/makeme.p8_1.png?VersionId=XcAPPvUJlHMJW8YjconfgYcU79rXpqwZ&itok=DHKx2cBL"
			}
		]
	},
	{
		slug: 'endless-dungeon',
		color: 'gold',
		description:
			'TBD',
		shortDescription:
			'Blend of roguelite, tactical action, and tower defense game set in the Endless Universe',
		links: [
			{ to: 'https://endlessdungeon.game/', label: 'Website' },
			{ to: 'https://store.steampowered.com/app/1485590/ENDLESS_Dungeon/', label: 'Steam' }],
		logo: Assets.EndlessDungeon,
		name: 'Endless Dungeon',
		period: {
			from: new Date(2019, 6), to: new Date(2022, 8)
		},
		skills: getSkills('unity', 'csharp', 'figma'),
		type: 'Roguelite Action Game',
		screenshots: [
			{
				src: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1485590/ss_dadabe2ab9369e8cc263cb9d2341f3e53c0e0c3d.1920x1080.jpg?t=1748510886'
			},
			{		
				src: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1485590/ss_7182114b3235fee8eb7840b6e98bcd922e25575e.1920x1080.jpg?t=1748510886'
			},
			{		
				src: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1485590/ss_7278211eef1df4f0a56249fd3981f558901f37ee.1920x1080.jpg?t=1748510886'
			},
			{		
				src: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1485590/ss_ee6ba07bf50b61e354a910e2185187802cd925e9.1920x1080.jpg?t=1748510886'
			},
			{		
				src: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1485590/ss_98d3bb7c4346f8a09073dc34e1375111c13fd705.1920x1080.jpg?t=1748510886'
			},
		]
	},
	{
		slug: 'humankind',
		color: 'white',
		description:
			'### Description\n' + 
			'HUMANKIND is a historical strategy game, where you’ll be re-writing the entire narrative of human history and combining cultures to create a civilization that’s as unique as you are.\n' +
			'### Contribution\n' +
			'I worked on Humankind only for a few months during the peak of production when they needed some help integrating the last parts of the UI.',
		shortDescription:
			'Turn-based Historical strategy game (4X)',
		links: [
			{ to: 'https://humankind.game/', label: 'Website' },
			{ to: 'https://store.steampowered.com/app/1124300/HUMANKIND/', label: 'Steam' },
		],
		logo: Assets.Humankind,
		name: 'Humankind',
		period: {
			from: new Date(2019, 3), to: new Date(2019, 6)
		},
		skills: getSkills('unity', 'csharp'),
		type: 'Strategy Game',
		screenshots: [
			{
				src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1124300/ss_ada8d1a3fcf57994cfad1c237264c13fe37c23f3.1920x1080.jpg?t=1737652199"
			},
			{
				src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1124300/ss_6cdeee8093d7732974959f94111cf9461e2d752b.1920x1080.jpg?t=1737652199"
			},
			{
				src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1124300/ss_54ea5a275b7780b72efc7197425f9ff70c6bb15a.1920x1080.jpg?t=1737652199"
			},
			{
				src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1124300/ss_abb2a8b2f5934f7d10c9683ff48e4a2e971cfaa2.1920x1080.jpg?t=1737652199"
			}
		]
	},
	{
		slug: 'endless-space-2',
		color: 'lightblue',
		description:
			'### Description\n' + 
			'ENDLESS™ Space 2 is a Strategic Space Opera set in a mysterious universe. Your story unfolds in a galaxy that was first colonized by God-like beings known as the “ENDLESS™”, who rose and fell eons ago. All that remains of them are mystical ruins, powerful artifacts, and a strange, near-magical substance known as Dust.\n' +
			'### Contribution\n' +
			'I worked on Endless Space 2 for most of the production and almost all of its live service. As part of the UI Programming team, I integrated a lot of the UI of the game, and helped improve our old in-house framework we were using at the time.',
		shortDescription:
			'A turn-based Space Opera strategy game (4X) set in the Endless Universe',
		links: [
			{ to: 'https://www.endless-space.com/', label: 'Website' },
			{ to: 'https://store.steampowered.com/app/392110/ENDLESS_Space_2/', label: 'Steam' },
		],
		logo: Assets.EndlessSpace2,
		name: 'Endless Space 2',
		period: {
			from: new Date(2016, 1), to: new Date(2019, 3)
		},
		skills: getSkills('unity', 'csharp'),
		type: 'Strategy Game',
		screenshots: [
			{
				src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/392110/ss_91916bce22411f9a2a6be5b88513850cce54c74e.1920x1080.jpg?t=1728046125"
			},
			{
				src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/392110/ss_90343936aa9a7194adda5c0eabf37c38b365b2e7.1920x1080.jpg?t=1728046125"
			},
			{
				src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/392110/ss_92993a0d6df637d2bf516d78c98d124a752f3870.1920x1080.jpg?t=1728046125"
			},
			{
				src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/392110/ss_daf6b11ef3c7995932165ce79c4481cc5a47b3e8.1920x1080.jpg?t=1728046125"
			},
			{
				src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/392110/ss_e56ae420c2c5e80397e2f595412c97ae27b43adb.1920x1080.jpg?t=1728046125"
			},
			{
				src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/392110/ss_6a4d548c474bb7788f3c0eda9fa7831e9f41b0fb.1920x1080.jpg?t=1728046125"
			},
			{
				src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/392110/ss_448d0cbdcf0385d412ed07cc5a4b22b25cd6c664.1920x1080.jpg?t=1728046125"
			},
			{
				src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/392110/ss_448d0cbdcf0385d412ed07cc5a4b22b25cd6c664.1920x1080.jpg?t=1728046125"
			}
		]
	},
	{
		slug: 'endless-legend',
		color: 'red',
		description:
			'### Description\n' + 
			'ENDLESS™ Legend is a 4X turn-based fantasy strategy game. Control every aspect of your civilization as you struggle to save your homeworld Auriga. Create your own Legend!\n' +
			'### Contribution\n' +
			'I worked on Endless Legend as both a Gameplay Programmer and a UI Programmer during the live service for the game, mainly during the Shifters DLC.',
		shortDescription:
			'A turn-based fantasy strategy game (4X) set in the Endless Universe',
		links: [
			{ to: 'https://store.steampowered.com/app/289130/ENDLESS_Legend/', label: 'Steam' },
		],
		logo: Assets.EndlessLegend,
		name: 'Endless Legend',
		period: {
			from: new Date(2015, 7), to: new Date(2016, 1)
		},
		skills: getSkills('unity', 'csharp'),
		type: 'Strategy Game',
		screenshots: [
			{
				src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/451050/ss_0c6d612e603972dc9fb419342188dfe794d41d22.1920x1080.jpg?t=1712760629"
			},
			{
				src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/451050/ss_4f1234f33f38ebb372a7731f9471787e8b3b8bc5.1920x1080.jpg?t=1712760629"
			},
			{
				src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/289130/ss_ec8df411b2dd4000c57936e640a9d3d9b9c91c57.1920x1080.jpg?t=1728045983"
			},
			{
				src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/289130/ss_bfbd8c33435de3ee8444a6e2e04d15a3534bf45e.1920x1080.jpg?t=1728045983"
			},
			{
				src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/289130/ss_b95e6eb04b7bf6580991f7a0a6c969e1dd0b0a05.1920x1080.jpg?t=1728045983"
			},
			{
				src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/289130/ss_17e540400c4fc14aba8591a43bc08882dd6f63d5.1920x1080.jpg?t=1728045983"
			}
		]
	}
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
