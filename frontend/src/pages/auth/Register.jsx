import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/register", { name, email, password });
      navigate("/login");
    } catch (err) {
      setError("Registration failed!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <Card title="Register" className="w-full max-w-md">
        <form onSubmit={handleRegister} className="space-y-4">
          <Input 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <Input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <Input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <Button type="submit" className="w-full">Register</Button>
        </form>
      </Card>
    </div>
  );
};

export default Register;
