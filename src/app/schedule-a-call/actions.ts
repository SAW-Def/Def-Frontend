"use server";

import { z } from "zod";

const DELIVERY_FAILED =
  "We couldn’t send your request just now. Please email us and we’ll pick it up straight away.";

const callRequestSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  companyName: z.string().trim().min(2, "Please enter your company name."),
  phone: z
    .string()
    .trim()
    .min(6, "Please enter a phone number we can reach you on.")
    .regex(/^[+\d][\d\s()./-]{5,}$/, "Please enter a valid phone number."),
  email: z.email("Please enter a valid email address."),
  preferredDate: z.string().trim().min(1, "Please choose a preferred date."),
  preferredTime: z.string().trim().min(1, "Please choose a preferred time."),
  message: z.string().trim().max(2000, "Please keep your message under 2000 characters.").optional(),
  consent: z.literal("on", { error: "Please confirm before sending your request." }),
});

type CallRequestFields = keyof z.infer<typeof callRequestSchema>;

export type CallRequestState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<CallRequestFields, string>>;
  /** Echoed back so the form repopulates when a submission is rejected. */
  values?: Partial<Record<CallRequestFields, string>>;
};

export async function submitCallRequest(
  _previous: CallRequestState,
  formData: FormData,
): Promise<CallRequestState> {
  const submitted = Object.fromEntries(formData) as CallRequestState["values"];
  const parsed = callRequestSchema.safeParse(submitted);

  if (!parsed.success) {
    const errors: CallRequestState["errors"] = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as CallRequestFields;
      errors[field] ??= issue.message;
    }
    return { status: "error", message: "Please check the highlighted fields.", errors, values: submitted };
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;

  if (!endpoint) {
    console.error("CONTACT_FORM_ENDPOINT is not set — the call request was not delivered.");
    return { status: "error", message: DELIVERY_FAILED, values: submitted };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...parsed.data, submittedAt: new Date().toISOString() }),
    });

    if (!response.ok) throw new Error(`Delivery failed with status ${response.status}`);
  } catch (error) {
    console.error("Call request delivery failed", error);
    return { status: "error", message: DELIVERY_FAILED, values: submitted };
  }

  return {
    status: "success",
    message: "Thank you — your request is with us. We’ll respond within two business days.",
  };
}
