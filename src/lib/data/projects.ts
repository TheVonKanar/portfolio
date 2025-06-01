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
		logo: Assets.Unknown,
		name: 'Unannounced Game',
		period: {
			from: new Date(2024, 9)
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
			'Fantasy turn-based strategy game (4X) set in the Endless Universe',
		links: [
			{ to: 'https://store.steampowered.com/app/3407390/ENDLESS_Legend_2/', label: 'Steam' },
		],
		logo: Assets.EndlessLegend2,
		name: 'Endless Legend 2',
		period: {
			from: new Date(2023, 9), to: new Date(2024, 9)
		},
		skills: getSkills('unity', 'csharp', 'figma'),
		type: 'Strategy Game'
	},
	{
		slug: 'endless-dungeon',
		color: 'gold',
		description:
			'TBD',
		shortDescription:
			'Blend of roguelite, tactical action, and tower defense set in the Endless Universe',
		links: [
			{ to: 'https://endlessdungeon.game/', label: 'Website' },
			{ to: 'https://store.steampowered.com/app/1485590/ENDLESS_Dungeon/', label: 'Steam' }],
		logo: Assets.EndlessDungeon,
		name: 'Endless Dungeon',
		period: {
			from: new Date(2019, 1), to: new Date(2023, 1)
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
	}
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
