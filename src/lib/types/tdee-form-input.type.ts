import * as z from 'zod';

import { TdeeFormInputSchema } from '$lib/schemas';

export type TdeeFormInput = z.infer<typeof TdeeFormInputSchema>;
