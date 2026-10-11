"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, UploadCloud } from "lucide-react";

const projectTypes = [
  "HVAC",
  "Cleanroom",
  "Equipment Installation",
  "Maintenance",
  "Automation",
  "Instrumentation",
  "Pharmaceutical Utilities",
  "Engineering Study",
  "Other",
];

const inputClass =
  "w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-black placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition";

const labelClass = "mb-1.5 block text-sm font-medium text-black";

interface FormData {
  name: string;
  company: string;
  jobTitle: string;
  email: string;
  phone: string;
  country: string;
  projectType: string;
  description: string;
  startDate: string;
  files: File[];
}

const initialData: FormData = {
  name: "",
  company: "",
  jobTitle: "",
  email: "",
  phone: "",
  country: "",
  projectType: "",
  description: "",
  startDate: "",
  files: [],
};

function validate(data: FormData): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!data.description.trim()) errors.description = "Please describe your project.";
  return errors;
}

export default function ProjectRequestForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const setField = (field: keyof FormData, value: string) => {
    setData((d) => ({ ...d, [field]: value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  };

  const onFilesChange = (files: FileList | null) => {
    if (!files) return;
    const allowed = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-excel",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/png",
    ];
    const valid = Array.from(files).filter((f) =>
      allowed.includes(f.type),
    );
    setData((d) => ({ ...d, files: valid }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-lg border border-primary/30 bg-secondary p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary" />
        <h3 className="mt-4 text-xl font-semibold text-black">
          Request Submitted
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-500">
          Thank you. Our engineering team will review your project request and
          contact you shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setData(initialData);
            setSubmitted(false);
          }}
          className="mt-6 text-sm font-medium text-primary hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      {/* Contact Information */}
      <fieldset>
        <legend className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Contact Information
        </legend>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              Name <span className="text-primary">*</span>
            </label>
            <input
              id="name"
              type="text"
              value={data.name}
              onChange={(e) => setField("name", e.target.value)}
              className={inputClass}
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="company" className={labelClass}>
              Company
            </label>
            <input
              id="company"
              type="text"
              value={data.company}
              onChange={(e) => setField("company", e.target.value)}
              className={inputClass}
              placeholder="Company name"
            />
          </div>
          <div>
            <label htmlFor="jobTitle" className={labelClass}>
              Job Title
            </label>
            <input
              id="jobTitle"
              type="text"
              value={data.jobTitle}
              onChange={(e) => setField("jobTitle", e.target.value)}
              className={inputClass}
              placeholder="Your job title"
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              Email <span className="text-primary">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={data.email}
              onChange={(e) => setField("email", e.target.value)}
              className={inputClass}
              placeholder="you@company.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              value={data.phone}
              onChange={(e) => setField("phone", e.target.value)}
              className={inputClass}
              placeholder="+00 000 000 000"
            />
          </div>
          <div>
            <label htmlFor="country" className={labelClass}>
              Country
            </label>
            <input
              id="country"
              type="text"
              value={data.country}
              onChange={(e) => setField("country", e.target.value)}
              className={inputClass}
              placeholder="Country"
            />
          </div>
        </div>
      </fieldset>

      {/* Project Information */}
      <fieldset>
        <legend className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Project Information
        </legend>
        <div className="space-y-4">
          <div>
            <label htmlFor="projectType" className={labelClass}>
              Project Type
            </label>
            <select
              id="projectType"
              value={data.projectType}
              onChange={(e) => setField("projectType", e.target.value)}
              className={inputClass}
            >
              <option value="">Select a project type</option>
              {projectTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="description" className={labelClass}>
              Project Description <span className="text-primary">*</span>
            </label>
            <textarea
              id="description"
              rows={4}
              value={data.description}
              onChange={(e) => setField("description", e.target.value)}
              className={inputClass}
              placeholder="Describe your project, systems involved and objectives."
            />
            {errors.description && (
              <p className="mt-1 text-xs text-red-500">{errors.description}</p>
            )}
          </div>
          <div>
            <label htmlFor="startDate" className={labelClass}>
              Estimated Project Start
            </label>
            <input
              id="startDate"
              type="month"
              value={data.startDate}
              onChange={(e) => setField("startDate", e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="documents" className={labelClass}>
              Upload Technical Documents
            </label>
            <label
              htmlFor="documents"
              className="flex cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-border bg-muted/50 px-4 py-8 text-center transition hover:border-primary"
            >
              <UploadCloud className="h-7 w-7 text-primary" />
              <span className="mt-2 text-sm font-medium text-black">
                Click to upload files
              </span>
              <span className="mt-1 text-xs text-slate-500">
                PDF, Excel, Word or images
              </span>
            </label>
            <input
              id="documents"
              type="file"
              multiple
              accept=".pdf,.xls,.xlsx,.doc,.docx,image/*"
              onChange={(e) => onFilesChange(e.target.files)}
              className="sr-only"
            />
            {data.files.length > 0 && (
              <p className="mt-2 text-xs text-slate-600">
                {data.files.length} file(s) selected.
              </p>
            )}
          </div>
        </div>
      </fieldset>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-primary px-7 text-base font-medium text-black transition-colors hover:opacity-90 disabled:opacity-60"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Project Request"
        )}
      </button>
    </form>
  );
}
