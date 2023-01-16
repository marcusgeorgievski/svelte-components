<script>
    import { cmpSelection } from '/src/Store'
    let selection = 'cards'
    const unsubscribe = cmpSelection.subscribe(value => {
        selection = value;
    });
    $: console.log(selection)
</script>
<!---------------------------------------------------------------------------------------->

<h1 class="text-4xl font-bold pt-12 border-b inline-block">
    {selection}
</h1>

<!-- Content - grid or flex -->
<div> 

    <!-- Dynamically display components -->

</div>
<!---------------------------------------------------------------------------------------->
<style>
</style>