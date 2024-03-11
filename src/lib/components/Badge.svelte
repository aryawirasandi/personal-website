<script lang="ts">
    import type { IBadgeComponent } from "$lib/types/components/Badge";
    export let badge: IBadgeComponent
</script>
<!-- svelte-ignore a11y-missing-attribute -->
<a {...badge} class="border-red-500 p-[12px] border-solid border-[1px] rounded-full hover:text-white hover:bg-red-500">{badge.name}</a>