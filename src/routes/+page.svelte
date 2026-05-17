<script lang="ts">
	import { APP_NAME } from '$lib/constants';

	import { calculateTdeeForm } from '$lib/remote';

	const sexOptions = [
		{ value: 'male', label: 'Male' },
		{ value: 'female', label: 'Female' }
	];
</script>

<section class="flex h-80 flex-col items-center justify-center gap-2">
	<h1 class="text-8xl font-black">{APP_NAME}</h1>
	<p class="text-xl font-semibold">Calculate your TDEE</p>
</section>

<section class="flex justify-center">
	<form class="flex flex-col items-center justify-center gap-2" {...calculateTdeeForm}>
		<div>
			<label>
				Sex
				<select class="w-full rounded border-2 p-2" {...calculateTdeeForm.fields.sex.as('text')}>
					{#each sexOptions as option, i (i)}
						<option value={option.value}>{option.label}</option>
					{/each}
				</select>
			</label>
			{#each calculateTdeeForm.fields.sex.issues() as issue, i (i)}
				<p class="text-destructive">{issue.message}</p>
			{/each}
		</div>
		<div>
			<label>
				Age
				<input
					class="block rounded border-2 p-2"
					placeholder="Age"
					{...calculateTdeeForm.fields.age.as('number')}
				/>
			</label>
			{#each calculateTdeeForm.fields.age.issues() as issue, i (i)}
				<p class="text-destructive">{issue.message}</p>
			{/each}
		</div>
		<button
			class="cursor-pointer rounded bg-primary px-4 py-2 font-semibold text-primary-foreground"
			type="submit">Calculate</button
		>
	</form>
</section>
