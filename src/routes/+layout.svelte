<script>
    import "../app.css";
    import 'iconify-icon'
    import Header from "$lib/layout/Header.svelte";
    import Links from "../lib/layout/Links.svelte";
    import DropdownA from "../components/dropdowns/dropdownA.svelte";
</script>
<!---------------------------------------------------------------------------------------->

<svelte:head>
    <title>+ Svelte Components</title>
</svelte:head>

<main class="min-h-screen bg-slate-900 p-8 text-white relative">
    <Links/>

    <Header/>

    <div class="flex justify-center">
        <DropdownA/>
    </div>

    <div class="content text-center">
        <slot/>
    </div>
</main>

<!---------------------------------------------------------------------------------------->
