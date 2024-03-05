function ContactUs() {
  return (
    <div className="bg-white dark:bg-dark-2 text-dark dark:text-white py-5 pt-20 px-8 sm:px-12 mt-16">
      <h2 className="text-center text-lg font-semibold text-primary">
        Contact Us
      </h2>
      <p className="mt-4 text-center">
        If you have any inquiries or need assistance, feel free to reach out to
        us. We are here to help!
      </p>

      <form className="mt-8 mx-auto max-w-[525px] rounded-lg">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full bg-white dark:bg-dark-2 px-4 py-3 text-base transition duration-300 ease-in-out border rounded-md cursor-pointer border-primary"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full bg-white dark:bg-dark-2 px-4 py-3 text-base transition duration-300 ease-in-out border rounded-md cursor-pointer border-primary"
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="w-full bg-white dark:bg-dark-2 px-4 py-3 text-base transition duration-300 ease-in-out border rounded-md cursor-pointer border-primary"
        ></textarea>

        <div className="mb-9">
          <input
            type="submit"
            value="Submit"
            className="w-full px-4 py-3 text-base text-white transition duration-300 ease-in-out border rounded-md cursor-pointer border-primary bg-primary hover:bg-blue-dark"
          />
        </div>
      </form>      
    </div>
  );
}

export default ContactUs;
