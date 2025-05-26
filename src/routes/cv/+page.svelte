<script>
	import TitledPage from '$lib/components/common/titled-page/titled-page.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import CVData from '$lib/data/cv';
</script>

<TitledPage title={CVData.title}>
	<a href={CVData.cv} class="mx-auto">
		<Button>Download</Button>
	</a>
	<iframe src={CVData.cv} class="h-full w-full" title={CVData.title}></iframe>
</TitledPage>
