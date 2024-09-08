import { useMutation } from "react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../../api";

function Login() {
  const navigate = useNavigate();
  const mutation = useMutation((data: { username: string; password: string }) =>
    apiClient.post("/login", data)
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await mutation.mutate({
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    });
    if (mutation.isSuccess) navigate("/");
  };
  return (
    <div className="h-full w-full flex align-middle justify-center">
      <div className="p-24 h-fit my-auto border-quinary">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-64">
          <div className="flex flex-col gap-2">
            <label htmlFor="username">Username:</label>
            <input id="username" type="username" placeholder="Username" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" placeholder="Password" />
          </div>
          {mutation.isError && <div>Error</div>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
