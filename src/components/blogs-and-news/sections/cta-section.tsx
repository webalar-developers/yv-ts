import { useState } from "react";

export default function CtaSectionBlogsAndNews() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setEmail("");
    };

    return (
        <section className="w-full bg-white px-6 py-8 md:px-10 lg:px-14">
            <div
                className="relative overflow-hidden rounded-2xl px-6 py-10 sm:px-10 sm:py-12 md:px-14 bg-linear-to-r from-[#340F33] to-[#6D396C]"
            >
                <span
                    className="pointer-events-none absolute right-[-80px] -top-4 -translate-y-1/2 size-[220px] rounded-full"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                />

                <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                    <div className="max-w-[360px]">
                        <h2 className="mb-3 font-gilda text-[32px] leading-[1.25] text-white md:text-[36px]">
                            Stay Ahead with
                            <br />
                            Youthville Insights
                        </h2>
                        <p className="text-[13.5px] leading-[1.7] text-white/80 font-roboto">
                            Get weekly tips, city hacks, student guides, and exclusive offers
                            straight to your inbox.
                        </p>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="flex w-full flex-col items-stretch gap-3 font-roboto sm:w-auto sm:flex-row sm:items-center sm:shrink-0"
                    >
                        <input
                            type="email"
                            required
                            placeholder="Your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="h-[50px] w-full rounded-full border border-white/10 bg-white/10 px-6 text-[13.5px] text-white placeholder:text-white/45 outline-none transition-colors focus:border-white/30 focus:bg-white/15 sm:w-70"
                        />
                        <button
                            type="submit"
                            className="h-[50px] rounded-full bg-white px-8 text-[14px] font-semibold text-[#E8612D] transition-opacity hover:opacity-90 active:opacity-80 whitespace-nowrap"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
