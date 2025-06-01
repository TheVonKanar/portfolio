import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [
	{
		degree: "Game Design & Programming",
		description: 'The course was initially done in 3 years, and it taught me the basics of indie game development across a great variety of technologies, from early Javascript game frameworks, to Flash and finally Unity. Aside from programming, we learned the basics of Game Art, Game Design and sound design, in order to be able to develop games by ourselves or in small teams.<br/>I graduated as the top of my class, with what we call "mention bien" in French.',
		location: 'Paris, France',
		logo: Assets.ISART,
		name: '',
		organization: 'ISART Digital',
		period: { from: new Date(2012, 8, 1), to: new Date(2015, 8, 1) },
		shortDescription: "Level 7 RNCP - Master's Degree",
		slug: 'dummy-education-item',
		subjects: ['Unity', 'C#', 'JS', 'HTML', 'CSS', 'English', 'Gameplay Programming', 'Game Design' ]
	}
];

const EducationData = { title, items };

export default EducationData;
