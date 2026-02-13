import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle } from "lucide-react";

interface ApplicationFormDialogProps {
  positionTitle: string;
  department: string;
  location: string;
}

const ApplicationFormDialog = ({ positionTitle, department, location }: ApplicationFormDialogProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) setSubmitted(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2 text-primary font-semibold hover:underline">
          Apply Now
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Application Submitted!</h3>
            <p className="text-muted-foreground">
              Thank you for applying for <strong>{positionTitle}</strong>. We'll review your application and get back to you soon.
            </p>
            <Button onClick={() => handleOpenChange(false)} className="mt-6 bg-primary text-primary-foreground">
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-heading text-xl">Apply for {positionTitle}</DialogTitle>
              <p className="text-sm text-muted-foreground">{department} · {location}</p>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" required placeholder="Juan" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" required placeholder="Dela Cruz" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" required placeholder="juan@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" type="tel" required placeholder="+63 9XX XXX XXXX" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="City, Province" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience *</Label>
                <Input id="experience" type="number" required min="0" placeholder="0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="education">Highest Education *</Label>
                <Input id="education" required placeholder="e.g. BS Civil Engineering" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="coverLetter">Why do you want to join Happy Well?</Label>
                <Textarea id="coverLetter" rows={3} placeholder="Tell us about yourself and why you're a great fit..." />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold">
                Submit Application
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationFormDialog;
