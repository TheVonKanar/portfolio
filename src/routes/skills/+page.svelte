<script lang="ts">
	import EmptyResult from '$lib/components/common/empty-result/empty-result.svelte';
	import SearchPage from '$lib/components/common/search-page/search-page.svelte';
	import { CardDescription } from '$lib/components/ui/card';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import FancyCard from '$lib/components/ui/card/fancy-card.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import Muted from '$lib/components/ui/typography/muted.svelte';
	import SkillsData, { groupByCategory } from '$lib/data/skills';
	import { href } from '$lib/utils';
	import { mode } from 'mode-watcher';

	let query = $state('');

	function onSearch(value: string) {
		query = value;
	}

	const groups = $derived(groupByCategory(query));
</script>

<SearchPage title={SkillsData.title} {onSearch}>
	{#if groups.length === 0}
		<EmptyResult />
	{:else}
		<div class="mt-4 flex flex-col gap-14">
			{#each groups as group (group.category.slug)}
				<div class="flex flex-col gap-6">
					<div class="flex flex-row items-center gap-2">
						<Separator class="w-[50px]" />
						<Muted>{group.category.name}</Muted>
						<Separator class="flex-1" />
					</div>
					<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
						{#each group.items as item (item.slug)}
							<FancyCard
								bgImg={$mode === 'light' ? item.logo.light : item.logo.dark}
								color={item.color}
							>
								<div class="flex flex-row gap-4">
									<CardContent class="p-4 pr-0">
										<div class="card-icon w-[38px] h-[38px]">
									</CardContent>
									<CardContent class="p-4 pl-0">
										<CardTitle>{item.name}</CardTitle>
										<CardDescription>{item.shortDescription}</CardDescription>
									</CardContent>
								</div>
							</FancyCard>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</SearchPage>

<style>
	.card-icon {
		background-image: var(--bg-img);
		background-repeat: no-repeat;
		background-size: contain;
	}
</style>