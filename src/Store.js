import { writable } from "svelte/store";

export let darkTheme = writable(false);

export let cmpSelection = writable('cards')

export const cmpTypes = [
    {type: 'cards', emoji: '🃏'},
    {type: 'navs', emoji: '🏠'},
    {type: 'buttons', emoji: '🔵'},
    {type: 'dropdowns', emoji: '👇'},
    {type: 'others', emoji: '🗿'}
]

