import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ChevronRight, User2Icon } from "lucide-react";

const obj = {
  title: "Let us C++",
  img: "/explore/cpp.webp",
};

export default function TrendingBooks({ className, ...props }) {
  const books = Array.from({ length: 100 }, () => ({ ...obj }));
  return (
    <div className="relative top-16  p-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {books.map(({ title, img }, index) => (
          <Card className={cn("w-[380px] shadow-md", className)} {...props} key={index}>
            <CardContent className="flex flex-col justify-center items-center p-2 overflow-hidden">
                <Image src={img} alt={index} height={250} width={150} className="object-contain" />
                <p className="text-2xl p-2">{title}</p>
            </CardContent>
            <CardFooter className="mt-2 flex flex-col sm:flex-row gap-4">
              <Button className="w-full p-2" variant="outline">Expand &nbsp;<ChevronRight size={18} /></Button>
              <Button className="w-full p-2" >Kitish &nbsp; <User2Icon size={18} /></Button>
            </CardFooter>
          </Card>
      ))}
        </div>
    </div>
  );
}
