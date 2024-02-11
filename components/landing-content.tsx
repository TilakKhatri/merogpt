"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Ram B. ",
    avatar: "Ram",
    title: "Digital marketer",
    description: "This is the best application I've ever used!",
  },
  {
    name: "Kumal yadav",
    avatar: "Kumal",
    title: "Content creator",
    description:
      "I use this daily for generating new photos! for my youtube thumbnails",
  },
  {
    name: "Mohan kumar sah",
    avatar: "Mohan",
    title: "CEO",
    description:
      "This app has changed my life, cannot imagine working without it!",
  },
  {
    name: "Abhishek",
    avatar: "Abhi",
    title: "CMO",
    description:
      "The best in class, definitely worth the premium subscription! It helps our content creation experts.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <div className="flex gap-2 items-center ">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <p className="text-lg">{item.name}</p>
                    <p className="text-zinc-400 text-sm">{item.title}</p>
                  </div>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-2 px-4">{item.description}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
