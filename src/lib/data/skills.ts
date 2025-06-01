import type { Skill, SkillCategory } from './types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';
import { omit } from '@riadh-adrani/utils';
import Assets from './assets';
import svelteMd from './md/svelte.md?raw';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Game Engines', slug: 'game-engine' }),
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Tools', slug: 'tool' }),
	defineSkillCategory({ name: 'Languages', slug: 'lang' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => {
	return items.filter((it) => (slugs.length === 0 ? true : slugs.includes(it.slug)));
};

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

const title = 'Skills';

const items = [
	defineSkill({
		category: 'game-engine',
		slug: 'unity',
		name: 'Unity',
		shortDescription: 'Expert',
		logo: Assets.Unity,
		color: 'grey',
	}),
	defineSkill({
		category: 'pro-lang',
		slug: 'csharp',
		name: 'C#',
		shortDescription: 'Expert',
		logo: Assets.Csharp,
		color: 'purple',
	}),
	defineSkill({
		category: 'pro-lang',
		slug: 'rust',
		name: 'Rust',
		shortDescription: 'Intermediate',
		logo: Assets.Rust,
		color: 'orange',
	}),
	defineSkill({
		category: 'pro-lang',
		slug: 'ts',
		name: 'TypeScript',
		shortDescription: 'Intermediate',
		logo: Assets.TypeScript,
		color: 'blue',
	}),
	defineSkill({
		category: 'pro-lang',
		slug: 'js',
		name: 'JavaScript',
		shortDescription: 'Intermediate',
		logo: Assets.JavaScript,
		color: 'yellow',
	}),
	defineSkill({
		category: 'markup-style',
		slug: 'html',
		name: 'HTML',
		shortDescription: 'Intermediate',
		logo: Assets.HTML,
		color: 'orange',
	}),
	defineSkill({
		category: 'markup-style',
		slug: 'css',
		name: 'CSS',
		shortDescription: 'Intermediate',
		logo: Assets.CSS,
		color: 'blue',
	}),
	defineSkill({
		category: 'tool',
		slug: 'rider',
		name: 'Rider',
		shortDescription: 'Expert',
		logo: Assets.Rider,
		color: 'yellow',
	}),
	defineSkill({
		category: 'tool',
		slug: 'vs',
		name: 'Visual Studio',
		shortDescription: 'Expert',
		logo: Assets.VisualStudio,
		color: 'purple',
	}),
	defineSkill({
		category: 'tool',
		slug: 'figma',
		name: 'Figma',
		shortDescription: 'Advanced',
		logo: Assets.Figma,
		color: 'pink',
	}),
	defineSkill({
		category: 'tool',
		slug: 'fork',
		name: 'Fork',
		shortDescription: 'Expert',
		logo: Assets.Fork,
		color: 'lightblue',
	}),
	defineSkill({
		category: 'tool',
		slug: 'gitlab',
		name: 'GitLab',
		shortDescription: 'Advanced',
		logo: Assets.GitLab,
		color: 'orange',
	}),
	defineSkill({
		category: 'tool',
		slug: 'github',
		name: 'GitHub',
		shortDescription: 'Advanced',
		logo: Assets.GitHub,
		color: 'purple',
	}),
	defineSkill({
		category: 'tool',
		slug: 'jira',
		name: 'Jira',
		shortDescription: 'Advanced',
		logo: Assets.Jira,
		color: 'lightblue',
	}),
	defineSkill({
		category: 'tool',
		slug: 'confluence',
		name: 'Confluence',
		shortDescription: 'Advanced',
		logo: Assets.Confluence,
		color: 'lightblue',
	}),
	defineSkill({
		category: 'lang',
		slug: 'french',
		name: 'French',
		shortDescription: 'Native',
		logo: Assets.France,
		color: 'blue',
	}),
	defineSkill({
		category: 'lang',
		slug: 'english',
		name: 'English',
		shortDescription: 'Fluent',
		logo: Assets.UK,
		color: 'red',
	})
] as const;

const SkillsData = {
	title,
	items
};

export default SkillsData;
