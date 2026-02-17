import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await resetPassword(email);
    setLoading(false);
    if (error) toast.error(error.message);
    else toast.success("Check your email for a reset link!");
  };

  return (
    <div className="container py-20 max-w-md">
      <Card>
        <CardContent className="p-6">
          <h1 className="font-display text-2xl font-bold mb-1 text-center">Reset Password</h1>
          <p className="text-sm text-muted-foreground text-center mb-6">Enter your email to receive a reset link.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div><Label htmlFor="email">Email</Label><Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
            <Button type="submit" className="w-full gradient-bg text-white border-0" disabled={loading}>{loading ? "Sending..." : "Send Reset Link"}</Button>
          </form>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            <Link to="/sign-in" className="text-primary hover:underline">Back to Sign In</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPassword;
