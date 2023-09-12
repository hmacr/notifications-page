<script lang="ts">
	import { markAllRead } from "../lib/store";

	export let totalNewNotif: number;

	function handleMarkAllRead(e: Event) {
		markAllRead.set(true);
		totalNewNotif = 0;
	}
</script>

<div class="flex justify-start items-end gap-2 mb-4">
	<p class="font-extrabold text-2xl text-very-dark-blue">Notifications</p>
	<p class="bg-blue text-white py-1 px-3 rounded-lg text-xl font-extrabold">{totalNewNotif}</p>
	<button class="font-medium text-dark-grayish-blue ml-auto hover:text-blue transition-colors" on:click={handleMarkAllRead}>Mark all as read</button>
</div>