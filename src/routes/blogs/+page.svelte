<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import { goto } from "$app/navigation";
	import { onMount } from "svelte";
    onMount(() => {
        goto("/")
    })
</script>
<div class="mx-10 mt-5">
    <h1 class="underline text-4xl">Personal Blogs!</h1>
    <div class="md:w-[50%] mx-auto mt-10">
        <a href="/">
            <Card>
                <div class="p-5">
                    test
                </div>
            </Card>
        </a>
    </div>
</div>

