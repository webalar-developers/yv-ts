import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { ScheduleVisitForm } from "@/components/hostel-detail/schedule-visit-form/schedule-visit-form";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router";

export function HeroBannerBlogsAndNews() {
    const images = [
        "/life/png/collage-1.jpg",
        "/life/png/collage-2.jpg",
        "/life/png/collage-3.jpg",
        "/life/png/collage-4.jpg",
        "/life/png/collage-5.jpg",
    ];
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setActiveImageIndex((currentIndex) => (currentIndex + 1) % images.length);
        }, 4000);

        return () => window.clearInterval(intervalId);
    }, [images.length]);

    return (
        <section className="relative m-5 h-[60vh] min-h-125 overflow-hidden rounded-lg">
            <div className="absolute inset-0">
                {images.map((image, index) => (
                    <img
                        key={image}
                        src={image}
                        alt="Youthville life banner"
                        className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-in-out ${index === activeImageIndex ? "opacity-100" : "opacity-0"
                            }`}
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                    />
                ))}
                <div className="absolute inset-0 bg-black/40" />
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(to right, #E8612D, #430F44)",
                        opacity: 0.2,
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative flex h-full max-w-4xl flex-col items-start justify-center px-6 leading-none md:px-12 lg:px-20">
                <h2 className="mb-6 font-gilda text-[56px] text-white lg:text-[83px]">
                    Explore. Learn. <br />
                    <span className='text-[#FECA07]' >
                        Grow @ Youthville
                    </span>
                </h2>
                <p  className="mb-8 max-w-2xl text-lg text-white/80 font-roboto" >
                    Navigating city life doesn't have to be a solo journey. Dive
                    into our curated insights on career, community, and co-
                    living in Pune.
                </p>
                <div>
                  <a href="/blogs-and-news#trending">
                    <Button
                        variant="yv-orange"
                        className="rounded-none px-7 py-7 text-[16px] font-medium font-roboto"
                    >
                       Explore Blogs
                        <ArrowDown className="ml-2 size-4" />
                    </Button>
                  </a>
                </div>
            </div>

            <a href="#build-grid" className="absolute inset-x-0 bottom-6 flex justify-center">
                <div className="absolute right-8 bottom-8 flex size-12 animate-bounce items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-lg">
                    <ArrowDown className="size-5" />
                </div>
            </a>
        </section>
    );
}
