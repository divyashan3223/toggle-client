

const SignUp = () => {


  const [data, setData] = useState({
    name: "",
    email:'',
    password: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      <form className="w-full max-w-md p-6 bg-white rounded-lg shadow-md" onSubmit={handelSubmit}>
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
          Sign Up
        </h2>

        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          required
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          required
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}

          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          required
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
