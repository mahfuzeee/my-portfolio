"use client";

import { useRef, useState, type FormEvent, type ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "loading" | "success" | "error";
type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("loading");

    try {
      if (!formRef.current) {
        throw new Error("Contact form reference is not available");
      }

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        setStatus("error");
        return;
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10 text-success mb-4">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <polyline points="20,6 9,17 4,12" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-text-primary">
          Message Sent!
        </h3>
        <p className="mt-2 text-text-secondary">
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
        <Button
          onClick={() => setStatus("idle")}
          variant="secondary"
          className="mt-6"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-5"
      noValidate
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-text-secondary mb-2"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            disabled={status === "loading"}
            className={cn(
              "w-full rounded-lg border bg-secondary px-4 py-2.5 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors disabled:opacity-50",
              errors.name ? "border-red-500/50" : "border-border",
            )}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-text-secondary mb-2"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            disabled={status === "loading"}
            className={cn(
              "w-full rounded-lg border bg-secondary px-4 py-2.5 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors disabled:opacity-50",
              errors.email ? "border-red-500/50" : "border-border",
            )}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-text-secondary mb-2"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          disabled={status === "loading"}
          className={cn(
            "w-full rounded-lg border bg-secondary px-4 py-2.5 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors disabled:opacity-50",
            errors.subject ? "border-red-500/50" : "border-border",
          )}
          placeholder="Job opportunity / Project inquiry"
        />
        {errors.subject && (
          <p className="mt-1.5 text-xs text-red-400">{errors.subject}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-text-secondary mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          disabled={status === "loading"}
          className={cn(
            "w-full rounded-lg border bg-secondary px-4 py-2.5 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors disabled:opacity-50 resize-none",
            errors.message ? "border-red-500/50" : "border-border",
          )}
          placeholder="Tell me about your project or opportunity..."
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
        )}
      </div>

      {status === "error" && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-4 text-sm text-red-400">
          Something went wrong. Please try again or email me directly.
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
