import { NavbarPlaceholder } from "@/components/layout";
import { Card, CardBody } from "@heroui/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
export function Skills() {
  return (
    <div className="min-h-screen bg-cyan-100">
      <NavbarPlaceholder />
      <div className="h-[calc(100vh-4rem)] w-full">
        <Carousel
          opts={{
            align: "center",
          }}
          className="m-auto w-4/5"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardBody className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardBody>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
