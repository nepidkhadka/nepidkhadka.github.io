"use client";
import { motion } from 'framer-motion'
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
    const [captcha, setCaptcha] = useState({ question: "", answer: 0 });
    const [userAnswer, setUserAnswer] = useState("");
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
        captcha: "",
    });

    useEffect(() => {
        generateCaptcha();
    }, []);

    // Generate a simple math CAPTCHA
    const generateCaptcha = () => {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        setCaptcha({ question: `${num1} + ${num2} = ?`, answer: num1 + num2 });
        setUserAnswer("");
    };

    // Validate form fields
    const validateForm = () => {
        const newErrors = { name: "", email: "", message: "", captcha: "" };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = "Full Name is required.";
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format.";
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required.";
            isValid = false;
        } else if (formData.message.length < 100) {
            newErrors.message = "Message must be at least 100 characters.";
            isValid = false;
        }

        if (!userAnswer.trim()) {
            newErrors.captcha = "Captcha answer is required.";
            isValid = false;
        } else if (parseInt(userAnswer) !== captcha.answer) {
            newErrors.captcha = "Incorrect captcha answer.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true);
        const formPayload = new FormData();
        formPayload.append(
            "access_key",
            process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "b28a290d-d4a5-44eb-8604-e07fd84e4352"
        );
        formPayload.append("name", formData.name);
        formPayload.append("email", formData.email);
        formPayload.append("message", formData.message);
        formPayload.append("botcheck", "");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formPayload,
            });

            const result = await response.json();

            if (result.success) {
                toast.success("Thank you for reaching out. I've received your message and will get back to you shortly. Looking forward to connecting! 🎉🤝");
                setFormData({ name: "", email: "", message: "" });
                setUserAnswer("");
                generateCaptcha();
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <ToastContainer />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-16 flex justify-center">
                <div className="px-4 py-6 rounded-lg shadow-lg w-full max-w-lg border bg-card">
                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                        {/* Honeypot — hidden from real users, bots will fill it */}
                        <input
                            type="checkbox"
                            name="botcheck"
                            tabIndex={-1}
                            autoComplete="off"
                            className="hidden"
                            aria-hidden="true"
                        />

                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block mb-1 text-sm font-medium">Full Name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 text-foreground bg-background rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ring transition"
                                placeholder="Eg. John Doe"
                                autoComplete="name"
                            />
                            {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 text-foreground bg-background rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ring transition"
                                placeholder="Eg. johndoe@gmail.com"
                                autoComplete="email"
                            />
                            {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block mb-1 text-sm font-medium">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 text-foreground bg-background rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ring transition h-28 resize-none"
                                placeholder="Please provide a brief description of your topic..."
                            />
                            {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                        </div>

                        {/* Captcha */}
                        <div>
                            <label htmlFor="captcha" className="block mb-1 text-sm font-medium">{captcha.question}</label>
                            <input
                                id="captcha"
                                type="text"
                                value={userAnswer}
                                onChange={(e) => setUserAnswer(e.target.value)}
                                className="w-full p-3 text-foreground bg-background rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ring transition"
                                autoComplete="off"
                            />
                            {errors.captcha && <p className="text-destructive text-sm mt-1">{errors.captcha}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary text-primary-foreground p-3 rounded-lg font-semibold transition-all hover:opacity-90 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </motion.div>
        </>
    );
};

export default ContactForm;
