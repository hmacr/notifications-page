<script lang="ts">
	import { onDestroy } from "svelte";
	import { markAllRead } from "../lib/store";

	export let profilePic: string;
	export let name: string;
	export let content: string;
	export let link: string = "undefined";
	export let timeSince: string;
	export let isNew: boolean = false;
	export let additionalContent: string = "undefined";
	export let additionalImg: string = "undefined";

	$: bgColor = isNew ? 'bg-very-light-grayish-blue': '';

	const unsubscribe = markAllRead.subscribe((markAsRead) => {
		if (markAsRead) {
			isNew = false;
		}
	});

	onDestroy(unsubscribe);
</script>

<div class="flex items-start {bgColor} p-4 rounded-xl">
	<!-- Image -->
	<div class="w-1/5 md:w-[10%]">
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src={profilePic} alt="profile-image" class="w-2/3 mx-auto">
	</div>
	<!-- Content -->
	<div class="w-4/5 md:w-[90%]">
		<div class="flex justify-between">
			<div class="flex flex-col w-[300px] md:w-[850px]">
				<p class="text-dark-grayish-blue">
					<span class="font-extrabold text-very-dark-blue hover:text-blue hover:cursor-pointer transition-colors">{name}</span> {content}
					{#if link !== "undefined"}
						<a href="#" class="font-extrabold ml-1 hover:text-blue hover:cursor-pointer transition-colors">{link}</a>
					{/if}
					{#if isNew}
						<span class="relative -top-[1px] left-1 w-2 h-2 bg-red inline-block rounded-full"></span>
					{/if}
				</p>
				<p class="text-grayish-blue mt-1">{timeSince}</p>
			</div>
			{#if additionalImg !== "undefined"}
				<div class="w-[70px] ml-4">
					<img src={additionalImg} alt="img" class="w-[50px] h-[50px]">
				</div>
			{/if}
		</div>
		{#if additionalContent !== "undefined"}
			<p class="mt-3 p-4 text-dark-grayish-blue border border-light-grayish-blue-2 rounded-md hover:bg-very-light-grayish-blue hover:cursor-pointer transition-colors">
				{additionalContent}
			</p>
		{/if}
	</div>
</div>