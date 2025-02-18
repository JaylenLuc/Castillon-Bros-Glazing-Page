"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const initialMembers = [
  { k: "1", image: "/stock.webp", name: "Issak Flores", phone: "111-111-1111", email: "person@gmail.com", pos: "Position", desc: "Description about yourself" },
  { k: "2", image: "/stock.webp", name: "Name 1", phone: "111-111-1111", email: "person@gmail.com", pos: "Position", desc: "Description about yourself" },
  { k: "3", image: "/stock.webp", name: "Name 2", phone: "111-111-1111", email: "person@gmail.com", pos: "Position", desc: "Description about yourself" },
];

export default function Team() {
  const [members, setMembers] = useState(initialMembers);

  // Handle swipe gesture
  const handleSwipe = (direction: "left" | "right") => {
    setMembers((prev) => {
      const newMembers = [...prev];
      const firstCard = newMembers.shift(); // Remove first card
      if (firstCard) {
        newMembers.push(firstCard); // Move it to the back
      }
      return newMembers;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="relative w-[350px] h-[500px] flex justify-center">
        {members.map((item, index) => {
          const isTop = index === 0;

          return (
            <motion.div
              key={item.k}
              className="absolute w-[350px]"
              drag={isTop ? "x" : false} // Only top card is draggable
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.3}
              onDragEnd={(_, info) => {
                if (info.offset.x > 100) handleSwipe("right"); // Swipe right
                if (info.offset.x < -100) handleSwipe("left"); // Swipe left
              }}
              initial={{ y: index * 10, scale: 1 - index * 0.05, rotate: Math.random() * 4 - 2 }}
              animate={{ y: index * 10, scale: 1 - index * 0.05, rotate: Math.random() * 4 - 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ zIndex: members.length - index }}
            >
              <Card className="w-[350px] shadow-lg">
                <CardHeader className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={item.image} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 flex flex-col text-left">
                    <CardTitle className="text-primary">{item.name}</CardTitle>
                    <CardDescription>{item.pos}</CardDescription>
                    <CardDescription>{item.desc}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-2 text-left">
                    <div>
                      <CardTitle className="text-primary">Phone Number:</CardTitle>
                      <CardDescription>{item.phone}</CardDescription>
                    </div>
                    <div>
                      <CardTitle className="text-primary">E-Mail:</CardTitle>
                      <CardDescription>{item.email}</CardDescription>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
