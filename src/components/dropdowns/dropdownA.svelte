<script>
    import { cmpTypes, cmpSelection } from '/src/Store'
    let open = false
    let options = cmpTypes
    let selection = 'cards'
    
    // Store functions
    const unsubscribe = cmpSelection.subscribe(value => {
        selection = value;
    });
    const setSelection = (selection) => cmpSelection.set(selection)

    // Handle selection
    const handleSelection = (selected) => {
        selection = selected
        setSelection(selection)
        open = false
    }
</script>
<!---------------------------------------------------------------------------------------->

<div 
class="flex flex-col inline-block gap-2 relative">


    <!-- Button -->
    <button 
    on:click={()=> open = !open}
    class="border rounded py-1 w-56 hover:bg-slate-500 flex items-center justify-center"
    >
        Select Component
        <iconify-icon class="pl-2 flex" icon="ph:caret-{open?'up':'down'}-thin"></iconify-icon>
    </button>

    <!-- Dropwdown -->
    <div 
    class="p-2 border rounded border-white {open || 'hidden'} absolute w-full 
    top-10 bg-black/75">
        <!-- Dynamically output dropdown options -->
        <ul class="w-full flex flex-col justify-center items-center gap-1 text-center">
            {#each options as option}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <li on:click={()=>handleSelection(option.type)} 
                class="w-full hover:bg-slate-500 py-2 rounded cursor-pointer capitalize
                font-bold">
                    <span class="mr-2">{option.emoji}</span> 
                    <span >{option.type}</span>
                </li>
            {/each}
        </ul>
    </div>

</div>

<!---------------------------------------------------------------------------------------->
