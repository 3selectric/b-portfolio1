import { useState, useEffect, useRef, useCallback } from "react";  // ← Added useCallback
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Send } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha-v3/dist/index.umd.js";  // ← FIXED import

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbylMlRmSjHCJ5V0a4uHd7z_5CqX00Lu3NMyy6VZCRObHtoZJ7hc_28nEYydc_jtdCxW/exec";
const RECAPTCHA_SITE_KEY = "6LekLC8sAAAAAC7NA_N-s101qAVATO4LLws6wdHT";  // ← Your key

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const recaptchaRef = useRef<any>(null);  // ← FIXED TypeScript

  const handleReCaptchaVerify = useCallback(async () => {
    if (!recaptchaRef.current) throw new Error("ReCaptcha not found");
    const token = await recaptchaRef.current.executeRecaptcha("contact_form");
    return token;
  }, []);

  // ... rest of your code stays exactly the same ...

  return (
    // ... your JSX stays exactly the same ...
    <ReCAPTCHA ref={recaptchaRef} sitekey={RECAPTCHA_SITE_KEY} />
  );
};

export default ContactSection;
