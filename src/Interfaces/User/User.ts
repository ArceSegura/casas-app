import Optional from "@type/Optional";

interface User {
  id: number;
  email: string;
  name: string;
  password: Optional<string>;
  createdAt: Date;
  updatedAt: Date;
};

export default User;
