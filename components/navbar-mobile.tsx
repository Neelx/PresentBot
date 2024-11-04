'use client';
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Button, buttonVariants } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { cn } from "@/lib/utils";

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string
}

function MobileLink({
  href, 
  onOpenChange, 
  className, 
  children, 
  ...props}: MobileLinkProps) {
    return(
      <Link href={href} onClick={() => onOpenChange?.(false)} className={cn(className)} {...props}>
        {children}
      </Link>
    )
  }

const Navbarmobile = () => {
  const [open, setOpen] = useState<boolean>(false);
  const user = false;
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className={buttonVariants({variant: "outline"})}>
          <MenuIcon className="h-6 w-6 text-gray-900"/>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink href='/' onOpenChange={setOpen}
        className="text-normal font-semibold flex gap-2 items-center">
          Generate
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
          <div className="flex flex-col space-y-3">
            <MobileLink href='/guidelines' onOpenChange={setOpen}>
              Guidelines
            </MobileLink>
            {user && (
              <div className="text-xs text-gray-500">
                <Link href='/dashboard'>Dashboard</Link>
                <Link href='/logout'>Logout</Link>
              </div>
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

export default Navbarmobile
