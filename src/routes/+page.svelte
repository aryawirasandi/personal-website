<script lang="ts">
	import Badge from '$lib/components/Badge.svelte';
	import { navs as badges } from '$lib/data/navs';
</script>

<svelte:head>
	<title>Arya Personal Page</title>
    <meta name="description" content="Hello, Welcome to Arya Wirasandi Personal Page!">
</svelte:head>

<div class="min-h-screen flex justify-center flex-col">
    <h1 class="text-center text-4xl gap-5">Hello 
        <span class="inline-block animate-sayHiHand">
        👋
    </span>, Welcome to</h1>
    <p class="text-center text-2xl mt-2">Arya Wirasandi personal website!</p>
    <div class="flex justify-center gap-[20px] mt-[20px]">
        {#each badges as badge}
            {#if badge.id !== "home"}
				<Badge {badge} />
			{/if}
        {/each}
    </div>
</div>

