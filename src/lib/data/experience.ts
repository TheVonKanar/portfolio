import { Link } from '$lib/components/ui/pagination';
import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'game-developer-amplitude',
		company: 'Amplitude Studios',
		description: 'UI, Tools and Gameplay programming, in-house UI Framework development',
		contract: ContractType.FullTime,
		type: 'Game Development',
		location: 'Paris, France',
		period: { from: new Date(2015, 7), to: new Date() },
		skills: getSkills('unity', 'csharp'),
		name: 'Game Developer',
		color: 'gold',
		links: [],
		logo: Assets.Amplitude,
		shortDescription: 'UI, Tools and Gameplay programming, in-house UI Framework development'
	},
	{
		slug: 'software-developer-persistant',
		company: 'Persistant Studios',
		description: 'Mobile applications (Unity/C#), Serious games (JS/HTML/CSS)',
		contract: ContractType.PartTime,
		type: 'Software Development',
		location: 'Paris, France',
		period: { from: new Date(2014, 0), to: new Date(2015, 6) },
		skills: getSkills('unity', 'csharp', 'ts', 'js', 'html', 'css'),
		name: 'Software Developer',
		color: 'lightblue',
		links: [],
		logo: Assets.Persistant,
		shortDescription: 'Mobile applications (Unity/C#), Serious games (JS/HTML/CSS)'
	},
	{
		slug: 'frontend-developer-procheo',
		company: 'Prochéo',
		description: 'Web integration (HTML/CSS), Plugin development (JS), Tablet development (Android & iOS webviews)',
		contract: ContractType.Internship,
		type: 'Web Development',
		location: 'Paris, France',
		period: { from: new Date(2013, 1), to: new Date(2013, 7) },
		skills: getSkills('unity', 'csharp', 'ts', 'js', 'html', 'css'),
		name: 'Frontend Developer',
		color: 'red',
		links: [],
		logo: Assets.Procheo,
		shortDescription: 'Web integration (HTML/CSS), Plugin development (JS), Tablet development (Android & iOS webviews)'
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
