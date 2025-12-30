import * as z from 'zod';

import {
	ACTIVITY_LEVELS,
	MAX_AGE_YEARS,
	MAX_HEIGHT_CM,
	MAX_WEIGHT_KG,
	MIN_AGE_YEARS,
	MIN_HEIGHT_CM,
	MIN_WEIGHT_KG,
	SEXES
} from '$lib/constants';

export const TdeeFormInputSchema = z.object({
	sex: z
		.enum(SEXES)
		.optional()
		.refine((v) => v !== undefined, {
			message: 'Sex is required'
		}),
	age: z
		.number()
		.int()
		.min(MIN_AGE_YEARS, `Age must be at least ${MIN_AGE_YEARS}`)
		.max(MAX_AGE_YEARS, `Age must be at most ${MAX_AGE_YEARS}`)
		.optional()
		.refine((v) => v != undefined, {
			message: 'Age is required'
		}),
	weight: z
		.number()
		.int()
		.min(MIN_WEIGHT_KG, `Weight must be at least ${MIN_WEIGHT_KG}`)
		.max(MAX_WEIGHT_KG, `Weight must be at most ${MAX_WEIGHT_KG}`)
		.optional()
		.refine((v) => v !== undefined, {
			message: 'Weight is required'
		}),
	height: z
		.number()
		.int()
		.min(MIN_HEIGHT_CM, `Height must be at least ${MIN_HEIGHT_CM}`)
		.max(MAX_HEIGHT_CM, `Height must be at most ${MAX_HEIGHT_CM}`)
		.optional()
		.refine((v) => v !== undefined, {
			message: 'Height is required'
		}),
	activityLevel: z
		.enum(ACTIVITY_LEVELS)
		.optional()
		.refine((v) => v !== undefined, {
			message: 'Activity Level is required'
		})
});
