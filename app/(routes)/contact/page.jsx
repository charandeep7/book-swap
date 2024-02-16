export const metadata = {
    title: 'Contact Us',
    description: 'Contact BookSwapHub',
  }
  
  export default function Contact() {
    return (
      <div className="max-w-2xl mx-auto p-6 relative mt-20 rounded-md shadow-md dark:shadow-white">
        <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
  
        <p>
          We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out using the contact information below:
        </p>
  
        <h2 className="text-xl font-semibold mt-4 mb-2">Contact Information</h2>
        <p>
          <strong>Email:</strong> <a href="mailto:kitishkumar2003@gmail.com" className="text-blue-700 underline">kitishkumar2003@gmail.com</a>
        </p>
  
        <p>
          <strong>Phone:</strong> +91 8873286865
        </p>
  
        <h2 className="text-xl font-semibold mt-4 mb-2">Visit Us</h2>
        <p>
          BookSwapHub Headquarters <br />
          123 Book Exchange Street, Literary Lane
        </p>
      </div>
    );
  }