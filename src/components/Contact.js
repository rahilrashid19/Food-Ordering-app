const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-4">
          We're here to help! If you have any questions or feedback, please feel
          free to get in touch with us.
        </p>
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Email</h3>
          <p className="text-gray-600">support@foodapp.com</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Phone</h3>
          <p className="text-gray-600">123-456-7890</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Address</h3>
          <p className="text-gray-600">Baramulla , Kashmir</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
