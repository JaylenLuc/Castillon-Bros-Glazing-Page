"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const initialMembers = [
  {
    k: "1",
    image: "/stock.webp",
    name: "Issak Flores",
    phone: "111-111-1111",
    email: "person@gmail.com",
    pos: "Position",
    desc: "Description about yourself"
  },
  {
    k: "2",
    image: "/stock.webp",
    name: "Name 1",
    phone: "111-111-1111",
    email: "person@gmail.com",
    pos: "Position",
    desc: "Description about yourself"
  },
  {
    k: "3",
    image: "/stock.webp",
    name: "Name 2",
    phone: "111-111-1111",
    email: "person@gmail.com",
    pos: "Position",
    desc: "Description about yourself"
  },
];

// Predefined rotation angles for consistent server/client rendering
const rotationAngles = [-1, 1, -0.5, -0.75];

export default function Team() {
  const [members, setMembers] = useState(initialMembers);

  const handleSwipe = () => {
    setMembers((prev) => {
      const newMembers = [...prev];
      const firstCard = newMembers.shift();
      if (firstCard) {
        newMembers.push(firstCard);
      }
      return newMembers;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h2 className="text-primary text-4xl font-bold text-center">
            Swipe left or right to meet us!
        </h2>
      <div className="relative w-[350px] h-[500px] flex justify-center">
        {members.map((item, index) => {
          const isTop = index === 0;
          
          return (
            <motion.div
              key={item.k}
              className="absolute w-[350px]"
              drag={isTop ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.3}
              onDragEnd={(_, info) => {
                if (info.offset.x > 100) handleSwipe();
                if (info.offset.x < -100) handleSwipe();
              }}
              initial={{ 
                y: index * 10, 
                scale: 1 - index * 0.05, 
                rotate: rotationAngles[index % rotationAngles.length] 
              }}
              animate={{ 
                y: index * 10, 
                scale: 1 - index * 0.05, 
                rotate: rotationAngles[index % rotationAngles.length]
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }}
              style={{ 
                zIndex: members.length - index,
                touchAction: "pan-y",
                userSelect: "none",
                WebkitTouchCallout: "none",
                WebkitUserSelect: "none"
              }}
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