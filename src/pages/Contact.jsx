import React from "react";

const Contact = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px", textAlign: "center", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h1 style={{ color: "#6200ea" }}>📞 Contact Us</h1>
      <p>
        Need help or have any questions? We're here to assist! Reach out to us using the details below.
      </p>
      <div style={{ marginTop: "20px" }}>
        <p><strong>📧 Email:</strong> support@bookmanagement.com</p>
        <p><strong>📞 Phone:</strong> +91 9876543210</p>
        <p><strong>🌐 Website:</strong> <a href="https://www.bookmanagement.com" target="_blank" rel="noopener noreferrer">www.bookmanagement.com</a></p>
      </div>
      <p>Feel free to connect with us for feedback, support, or inquiries!</p>
    </div>
  );
};

export default Contact;
