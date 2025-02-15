import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-primary">
          404 - Page Not Found
        </h1>
        <p className="mb-4">
          {
            "Oops! It looks like you've stumbled upon a page that doesn't exist."
          }
        </p>
        <p className="mb-4">{"Let's get you back on track"}</p>
        <Link href="/" className="underline">
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
