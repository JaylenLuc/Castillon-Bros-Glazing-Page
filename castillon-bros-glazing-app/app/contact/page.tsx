"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


export default function Team() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h2 className="text-primary text-4xl font-bold text-center">
            Contact Us !
        </h2>
      <div className="relative w-[350px] h-[500px] flex justify-center">
      <Card className="w-[350px] shadow-lg">
        <CardHeader className="flex items-center gap-4">

            <div className="flex-1 flex flex-col text-left">
            <CardTitle className="text-primary">Location</CardTitle>
            <CardDescription>Address</CardDescription>
            </div>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 gap-2 text-left">
            <div>
                <CardTitle className="text-primary">Business Hours</CardTitle>
                <CardDescription>Monday - Friday from 6am-2:30pm</CardDescription>
            </div>
            <div>
                <CardTitle className="text-primary">Phone Number:</CardTitle>
                <CardDescription>Company number</CardDescription>
            </div>
            <div>
                <CardTitle className="text-primary">E-Mail:</CardTitle>
                <CardDescription>comapany email</CardDescription>
            </div>
            </div>
        </CardContent>
        </Card>
      </div>
    </div>
  );
}