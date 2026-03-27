// Store login form data
const [form, setForm] = useState({
  email: "",
  password: "",
});

// Handle login submission
const handleSubmit = (e) => {
  e.preventDefault();

  // Call login function from context
  const success = login(form.email, form.password);

  if (success) {
    navigate("/dashboard");
  } else {
    alert("Invalid credentials");
  }
};