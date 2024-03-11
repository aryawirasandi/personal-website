<script lang="ts">
    export let extendClass: string | undefined = undefined;
</script>
<div class={'bg-white shadow-md' + ' ' + extendClass || ""}>
    <slot/>
</div>