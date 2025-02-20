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
        let newErrors = { name: "", email: "", message: "", captcha: "" };
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
        formPayload.append("access_key", "b28a290d-d4a5-44eb-8604-e07fd84e4352");
        formPayload.append("name", formData.name);
        formPayload.append("email", formData.email);
        formPayload.append("message", formData.message);

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
                <div className="px-4 py-6 rounded-lg shadow-lg w-full max-w-lg border">
                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                        {/* Name */}
                        <div>
                            <label className="block mb-1">Full Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 text-foreground rounded-md border border-gray-600 focus:outline-1"
                                placeholder="Eg. John Doe"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-1">Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 text-foreground rounded-md border border-gray-600 focus:outline-1"
                                placeholder="Eg. johndoe@gmail.com"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block mb-1">Message:</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 text-foreground rounded-md border border-gray-600 focus:outline-1 h-28"
                                placeholder="Please provide a brief description of your topic..."
                            />
                            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                        </div>

                        {/* Captcha */}
                        <div>
                            <label className="block mb-1">{captcha.question}</label>
                            <input
                                type="text"
                                value={userAnswer}
                                onChange={(e) => setUserAnswer(e.target.value)}
                                className="w-full p-3 text-foreground rounded-md border border-gray-600 focus:outline-1"
                            />
                            {errors.captcha && <p className="text-red-500 text-sm">{errors.captcha}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-foreground text-background p-3 rounded-lg font-semibold transition-all hover:opacity-80 disabled:opacity-50"
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
