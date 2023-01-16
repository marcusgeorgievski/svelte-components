<script>
    import { cmpSelection } from '/src/Store'
    let selection = 'cards'
    const unsubscribe = cmpSelection.subscribe(value => {
        selection = value;
    });
    $: console.log(selection)
</script>
<!---------------------------------------------------------------------------------------->

<h1 class="text-4xl font-bold pt-12 border-b inline-block mb-12">
    {selection}
</h1>

<!-- Components - grid or flex -->
<div> 

    <!-- Dynamically display components -->
    <p class="text-xl">⚠️ Code base change in progress</p>

</div>
<!---------------------------------------------------------------------------------------->
<style>
</style>