import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { z } from "zod";

import { Button } from "@/components/ui/button";

const situations = [
  "Returning after a career break",
  "Planning to restart soon",
  "Currently job searching",
  "Looking to change careers",
  "Need AI career guidance",
  "Other",
];

const supportAreas = [
  "Resume Review",
  "LinkedIn Optimization",
  "Interview Preparation",
  "AI Career Guidance",
  "Career Strategy Session",
  "COS Returnship Program\u2122",
];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  whatsapp: z
    .string()
    .trim()
    .min(7, "Please enter a valid WhatsApp number")
    .max(20)
    .regex(/^[0-9+()\-\s]+$/, "Please enter a valid WhatsApp number"),
  situation: z.string().min(1, "Please select your current career situation"),
  support: z.array(z.string()).min(1, "Please select at least one area of support"),
  message: z.string().trim().max(1000).optional(),
});

const fieldClass =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30";

export function EnquiryForm() {
  const [support, setSupport] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function toggleSupport(area: string) {
    setSupport((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area],
    );
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const result = schema.safeParse({
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      whatsapp: String(data.get("whatsapp") ?? ""),
      situation: String(data.get("situation") ?? ""),
      support,
      message: String(data.get("message") ?? ""),
    });

    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="surface-card flex flex-col items-center gap-4 p-10 text-center">
        <CheckCircle2 className="size-10 text-gold" aria-hidden="true" />
        <h3 className="font-display text-2xl text-primary">Thank you for reaching out to COS.</h3>
        <p className="max-w-md text-sm text-muted-foreground">
          Your enquiry has been received. We&rsquo;ll review your information and get back to you
          soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="surface-card space-y-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Full Name
          </label>
          <input id="name" name="name" className={fieldClass} maxLength={100} autoComplete="name" />
          {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={fieldClass}
            maxLength={255}
            autoComplete="email"
          />
          {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="whatsapp" className="mb-2 block text-sm font-medium">
            WhatsApp Number
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            className={fieldClass}
            maxLength={20}
            autoComplete="tel"
          />
          {errors.whatsapp && <p className="mt-1.5 text-xs text-destructive">{errors.whatsapp}</p>}
        </div>
        <div>
          <label htmlFor="situation" className="mb-2 block text-sm font-medium">
            Current Career Situation
          </label>
          <select id="situation" name="situation" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select an option
            </option>
            {situations.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.situation && (
            <p className="mt-1.5 text-xs text-destructive">{errors.situation}</p>
          )}
        </div>
      </div>

      <fieldset>
        <legend className="mb-3 text-sm font-medium">Area of Support Needed</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {supportAreas.map((area) => {
            const active = support.includes(area);
            return (
              <label
                key={area}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition ${
                  active
                    ? "border-primary bg-secondary text-primary"
                    : "border-input bg-card text-foreground/80 hover:border-primary/40"
                }`}
              >
                <input
                  type="checkbox"
                  className="size-4 accent-[var(--primary)]"
                  checked={active}
                  onChange={() => toggleSupport(area)}
                />
                {area}
              </label>
            );
          })}
        </div>
        {errors.support && <p className="mt-1.5 text-xs text-destructive">{errors.support}</p>}
      </fieldset>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message / Tell us about your career comeback
        </label>
        <textarea id="message" name="message" rows={4} maxLength={1000} className={fieldClass} />
      </div>

      <Button type="submit" variant="hero" size="xl" className="w-full">
        Start My Comeback
      </Button>
    </form>
  );
}
