<script>
    import { darkTheme } from '../../Store'

    let theme

    const unsubscribe = darkTheme.subscribe(value => {
        theme = value;
    });

    const setTheme = (theme) => darkTheme.set(!theme)
    
    $: console.log('THEME: ',theme)
</script>

<div class="absolute right-4 top-4 flex gap-2 items-center">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div 
    on:click={() => setTheme(theme)}
    class="cursor-pointer">
        <iconify-icon class="flex text-4xl" icon="ph:{theme?'sun':'moon'}-thin"></iconify-icon>
    </div>

    <a href="https://github.com/marcusgeorgievski">
        <iconify-icon class="flex text-5xl" icon="mdi:github"></iconify-icon>
    </a>
</div>