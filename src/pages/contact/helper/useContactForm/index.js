import { useState } from "react";
const INITIAL = { name: "", email: "", company: "", service: "", message: "" };
const WHATSAPP_NUMBER = "201552731225";
export const useContactForm = () => {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState("idle");
  const setField = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Company: ${form.company}` : null,
      form.service ? `Service: ${form.service}` : null,
      `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    setStatus("sent");
    setForm(INITIAL);
  };
  const reset = () => setStatus("idle");
  const isSubmittable = Boolean(form.name && form.email && form.message);
  return { form, status, setField, handleSubmit, reset, isSubmittable };
}