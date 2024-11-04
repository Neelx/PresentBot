'use client'
import { useState } from "react"
import { Sheet, SheetTrigger } from "./ui/sheet"
import { Button, buttonVariants } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Navbarmobile = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className={buttonVariants({variant: "outline"})}>
          <MenuIcon className="h-6 w-6 text-gray-900"/>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
    </Sheet>
  )
}

export default Navbarmobile
