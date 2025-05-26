import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: BaseData.fullName,
	description:
		'Senior Game Developer, experienced in UI and Tools programming and currently looking to work on small-scope games!',
	links: [
		{ label: 'GitHub', href: 'https://github.com/TheVonKanar', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/thibault-eynard-37128144/', icon: 'i-carbon-logo-linkedin' },
		{ label: 'Email', href: 'mailto:thibault.eynard@pm.me', icon: 'i-carbon-at' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
