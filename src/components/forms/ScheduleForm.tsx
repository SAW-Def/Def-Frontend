"use client";

import { useActionState, useId } from "react";
import { useFormStatus } from "react-dom";
import { ButtonControl } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { submitCallRequest, type CallRequestState } from "@/app/schedule-a-call/actions";

const fieldClass =
  "text-caption placeholder:text-ink w-full rounded-[var(--radius-field)] border border-ink bg-transparent px-[clamp(20px,1.3284vw+15.018px,38px)] py-[clamp(13px,0.6531vw+10.551px,21.85px)] outline-none transition-colors focus:border-brand";

type FieldProps = {
  name: string;
  label: string;
  type?: string;
  error?: string;
  defaultValue?: string;
  autoComplete?: string;
  inputMode?: "text" | "tel" | "email";
};

function Field({ name, label, type = "text", error, defaultValue, autoComplete, inputMode }: FieldProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const isPicker = type === "date" || type === "time";

  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={isPicker && !defaultValue ? "text" : type}
        defaultValue={defaultValue}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder={label}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        onFocus={
          isPicker
            ? (event) => {
                event.currentTarget.type = type;
              }
            : undefined
        }
        onBlur={
          isPicker
            ? (event) => {
                if (!event.currentTarget.value) event.currentTarget.type = "text";
              }
            : undefined
        }
        className={cn(fieldClass, error && "border-brand")}
      />
      {error ? (
        <p id={errorId} className="text-body-sm text-brand mt-2 px-[1.4em] font-bold">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <ButtonControl type="submit" size="lg" disabled={pending}>
      {pending ? "Sending…" : "Submit"}
    </ButtonControl>
  );
}

const initialState: CallRequestState = { status: "idle" };

export function ScheduleForm() {
  const [state, formAction] = useActionState(submitCallRequest, initialState);
  const consentId = useId();

  return (
    <form
      action={formAction}
      noValidate
      className="bg-sand rounded-[var(--radius-card)] px-[clamp(20px,2.6273vw+10.148px,55.6px)] pt-[clamp(26px,1.6827vw+19.69px,48.8px)] pb-[clamp(24px,0.8339vw+20.873px,35.3px)]"
    >
      <div className="grid gap-[clamp(14px,0.2952vw+12.893px,18px)] sm:grid-cols-2">
        <Field name="fullName" label="Full Name*" autoComplete="name" error={state.errors?.fullName} defaultValue={state.values?.fullName} />
        <Field
          name="companyName"
          label="Company Name*"
          autoComplete="organization"
          error={state.errors?.companyName} defaultValue={state.values?.companyName}
        />
        <Field
          name="phone"
          label="Phone Number*"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          error={state.errors?.phone} defaultValue={state.values?.phone}
        />
        <Field
          name="email"
          label="Email*"
          type="email"
          inputMode="email"
          autoComplete="email"
          error={state.errors?.email} defaultValue={state.values?.email}
        />
        <Field name="preferredDate" label="Preferred Date*" type="date" error={state.errors?.preferredDate} defaultValue={state.values?.preferredDate} />
        <Field name="preferredTime" label="Preferred Time*" type="time" error={state.errors?.preferredTime} defaultValue={state.values?.preferredTime} />
      </div>

      <div className="mt-[clamp(16px,0.3764vw+14.589px,21.1px)]">
        <label htmlFor={`${consentId}-message`} className="sr-only">
          Message
        </label>
        <textarea
          id={`${consentId}-message`}
          name="message"
          rows={3}
          defaultValue={state.values?.message}
          placeholder="Message"
          className={cn(fieldClass, "min-h-[clamp(120px,5.0185vw+101.181px,188px)] resize-y")}
        />
      </div>

      <div className="mt-[clamp(16px,0.1255vw+15.53px,17.7px)] flex flex-col gap-[clamp(20px,1.476vw+14.465px,40px)] sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1">
          <div className="flex items-start gap-[clamp(12px,0.738vw+9.232px,22px)]">
            <input
              id={consentId}
              name="consent"
              type="checkbox"
              defaultChecked={state.values?.consent === "on"}
              aria-describedby={state.errors?.consent ? `${consentId}-error` : undefined}
              className="accent-brand border-ink mt-[0.2em] h-[clamp(17px,0.2952vw+15.893px,21px)] w-[clamp(17px,0.2952vw+15.893px,21px)] shrink-0 rounded-none border"
            />
            <label htmlFor={consentId} className="text-body max-w-[46em] leading-[1.15]">
              We respect your time and your data. Your information is handled securely and will never be shared. We’ll
              respond within two business days.
            </label>
          </div>
          {state.errors?.consent ? (
            <p id={`${consentId}-error`} className="text-body-sm text-brand mt-2 font-bold">
              {state.errors.consent}
            </p>
          ) : null}
        </div>

        <div className="sm:pt-[0.2em]">
          <SubmitButton />
        </div>
      </div>

      {state.status !== "idle" && state.message ? (
        <p
          role="status"
          aria-live="polite"
          className={cn(
            "text-body mt-[clamp(16px,0.5904vw+13.786px,24px)] font-bold",
            state.status === "success" ? "text-ink" : "text-brand",
          )}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
