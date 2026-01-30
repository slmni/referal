"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Copy,
  Crown,
  Facebook,
  Gift,
  Globe,
  Instagram,
  Link2,
  Mail,
  MessageCircle,
  Shield,
  Sparkles,
  Trophy,
  Ticket,
  Users
} from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import cardImage from "./card.png";

const perkList = [
  {
    title: "0% interest, always",
    description: "Carry balance without interest or teaser timelines.",
    icon: Shield
  },
  {
    title: "$0 late fees",
    description: "No penalties. Ever. Your card stays calm.",
    icon: BadgeCheck
  },
  {
    title: "No FX fees",
    description: "Global purchases without exchange surprises.",
    icon: Globe
  }
];

const waitlistPerks = [
  {
    title: "Founding member status",
    description: "Early access, higher limits, priority onboarding.",
    icon: Sparkles
  },
  {
    title: "Raffle entry",
    description: "Invite friends to enter the Mexico trip raffle.",
    icon: Ticket
  },
  {
    title: "Split $2,500",
    description: "Everyone else in the raffle shares the cash pot.",
    icon: Gift
  }
];

const referralStats = [
  { label: "Referrals", value: "04" },
  { label: "Your rank", value: "#128" },
  { label: "Entries", value: "08" }
];

const shareChannels = [
  { label: "Copy link", icon: Link2 },
  { label: "Facebook", icon: Facebook },
  { label: "WhatsApp", icon: MessageCircle },
  { label: "Messages", icon: MessageCircle },
  { label: "Instagram", icon: Instagram },
  { label: "Email", icon: Mail }
];

const leaderboard = [
  { name: "j***@gmail.com", referrals: 48 },
  { name: "a***@hotmail.com", referrals: 41 },
  { name: "m***@outlook.com", referrals: 36 },
  { name: "s***@icloud.com", referrals: 29 },
  { name: "k***@proton.me", referrals: 24 }
];
const leaderboardMax = Math.max(...leaderboard.map((entry) => entry.referrals));

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const stagger = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.12 }
  }
};

const buildCode = (value: string) => {
  if (!value) return "mx-417";
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash + value.charCodeAt(i) * (i + 3)) % 10000;
  }
  return `mx-${String(hash).padStart(4, "0")}`;
};

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const referralCode = useMemo(() => buildCode(email.trim().toLowerCase()), [email]);
  const referralLink = `https://refinecard.app/r/${referralCode}`;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  const handleCopy = async () => {
    if (typeof navigator === "undefined") return;
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-halo opacity-70" />
      <div className="absolute inset-0 bg-haze opacity-60" />
      <motion.div
        className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-amber-200/10 blur-[120px]"
        animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-amber-300/10 blur-[140px]"
        animate={{ y: [0, -20, 0], x: [0, 14, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-16 pt-10">
        <header className="flex items-center justify-between text-sm text-zinc-300">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-200/70 via-amber-400/40 to-amber-800/60" />
            <div className="leading-tight">
              <div className="text-base font-semibold text-zinc-100">Refine Card</div>
              <div className="text-xs uppercase tracking-[0.28em] text-amber-200/70">Waitlist</div>
            </div>
          </div>
          <button className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-200 transition hover:border-amber-200/60 hover:text-amber-200 lg:inline-flex">
            Early Access
          </button>
        </header>

        <main className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.section variants={stagger} initial="initial" animate="animate" className="space-y-10">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-amber-200/10 px-4 py-1 text-xs uppercase tracking-[0.4em] text-amber-200">
              Metal card waitlist
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-5">
              <h1 className="text-balance font-display text-4xl text-glow sm:text-5xl lg:text-6xl">
                The penalty-free card.
              </h1>
              <p className="max-w-xl text-lg text-zinc-300">
                A premium credit card built for calm money. No interest. No late fees. No FX fees. Reserve the metal
                card and secure founding member status.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-3">
              {perkList.map((perk) => (
                <div
                  key={perk.title}
                  className="glass group rounded-2xl px-4 py-5 ring-fade transition duration-300 hover:-translate-y-1 hover:border-amber-200/50 hover:bg-white/10"
                >
                  <perk.icon className="h-5 w-5 text-amber-200" />
                  <div className="mt-3 text-sm font-semibold text-zinc-100">{perk.title}</div>
                  <p className="mt-2 text-xs text-zinc-400 transition duration-300 group-hover:text-zinc-200">
                    {perk.description}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-3">
              {waitlistPerks.map((perk) => (
                <div
                  key={perk.title}
                  className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent px-4 py-5 transition duration-300 hover:-translate-y-1 hover:border-amber-200/60 hover:from-white/15"
                >
                  <perk.icon className="h-5 w-5 text-amber-200" />
                  <div className="mt-3 text-sm font-semibold text-zinc-100">{perk.title}</div>
                  <p className="mt-2 text-xs text-zinc-400 transition duration-300 group-hover:text-zinc-200">
                    {perk.description}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-4 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-amber-200" />
                14,520 people waiting
              </div>
              <div className="h-1 w-1 rounded-full bg-amber-200/60" />
              <div>Projected ship: Spring 2026</div>
            </motion.div>
          </motion.section>

          <motion.aside variants={fadeUp} initial="initial" animate="animate" className="space-y-6">
            <CardVisual />

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5 }}
                  className="glass rounded-3xl p-6 ring-fade"
                >
                  <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <Mail className="h-4 w-4 text-amber-200" />
                    Join the waitlist
                  </div>
                  <motion.div
                    className="mt-4"
                  >
                    <div className="relative">
                      <div className="relative overflow-hidden rounded-2xl border border-amber-200/30 bg-[linear-gradient(180deg,#1b2b2b_0%,#0f1b1c_45%,#0a1415_100%)] p-5">
                        <motion.div
                          className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 opacity-80 blur-[1px]"
                          animate={{ y: [0, -6, 0], scale: [1, 1.04, 1] }}
                          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                          className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-200/20 blur-2xl"
                          animate={{ opacity: [0.2, 0.5, 0.2] }}
                          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a1415] via-[#0e2223] to-transparent" />
                        <motion.div
                          className="absolute inset-x-0 bottom-10 h-8 bg-[linear-gradient(90deg,transparent,#2d6b6b,transparent)] opacity-70"
                          animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
                          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                          style={{ backgroundSize: "200% 100%" }}
                        />
                        <svg
                          className="absolute bottom-2 left-0 w-full opacity-60"
                          viewBox="0 0 300 60"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 20 C40 10, 80 30, 120 20 C160 10, 200 30, 240 20 C260 15, 280 10, 300 12" stroke="#b07a2a" strokeWidth="2" />
                          <path d="M0 40 C40 30, 80 50, 120 40 C160 30, 200 50, 240 40 C260 35, 280 30, 300 32" stroke="#6b4a1b" strokeWidth="2" />
                        </svg>
                        <div className="relative z-10">
                          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/40 bg-amber-200/10 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-amber-200">
                            <Sparkles className="h-3.5 w-3.5" />
                            Vacation raffle
                          </div>
                          <div className="mt-4 text-2xl font-semibold text-zinc-100">Win the Mexico trip</div>
                          <p className="mt-2 text-sm text-amber-100/80">All-expenses paid. Everyone else splits $2,500.</p>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2 text-xs text-zinc-300">
                        <div className="flex items-center gap-2">
                          <Ticket className="h-3.5 w-3.5 text-amber-200" />
                          Join the waitlist = 1 raffle entry
                        </div>
                        <div className="flex items-center gap-2">
                          <Gift className="h-3.5 w-3.5 text-amber-200" />
                          Every referral = +1 entry
                        </div>
                        <div className="flex items-center gap-2 text-zinc-400">
                          <Users className="h-3.5 w-3.5 text-amber-200" />
                          More invites = higher odds.
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <h2 className="mt-4 font-display text-2xl text-zinc-100">Get the metal card first.</h2>
                  <p className="mt-2 text-sm text-zinc-400">
                    Enter your email to lock in your place. We will send launch access and your referral link.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="you@email.com"
                        className="w-full bg-transparent px-3 py-3 text-sm text-zinc-100 outline-none placeholder:text-zinc-500"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />
                      <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-200 px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-amber-300"
                      >
                        Join waitlist
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <Sparkles className="h-4 w-4 text-amber-200" />
                      You will receive your referral link instantly.
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="referral"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5 }}
                  className="glass rounded-3xl p-6 ring-fade"
                >
                  <div className="flex items-center gap-3 text-sm text-amber-200">
                    <BadgeCheck className="h-4 w-4" />
                    You are on the list
                  </div>
                  <h2 className="mt-3 font-display text-2xl text-zinc-100">Share your link to earn entries.</h2>
                  <p className="mt-2 text-sm text-zinc-400">
                    Each referral adds another raffle entry for the all-expenses Mexico trip. If you do not win, the
                    remaining finalists split $2,500.
                  </p>

                    <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:border-amber-200/50 hover:bg-white/10">
                      <div className="flex items-center justify-between text-xs text-zinc-400">
                        Your referral link
                      <button
                        type="button"
                        onClick={handleCopy}
                        className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-zinc-200 transition hover:border-amber-200/50 hover:text-amber-200"
                      >
                        <Copy className="h-3 w-3" />
                        {copied ? "Copied" : "Copy"}
                      </button>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-amber-200">
                      <Link2 className="h-4 w-4" />
                      {referralLink}
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {referralStats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 text-center transition duration-300 hover:-translate-y-1 hover:border-amber-200/50 hover:bg-white/10"
                      >
                        <div className="text-lg font-semibold text-zinc-100">{stat.value}</div>
                        <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-zinc-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <div className="text-xs uppercase tracking-[0.3em] text-zinc-500">Share</div>
                    <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                      {shareChannels.map((channel) => (
                        <button
                          key={channel.label}
                          type="button"
                          className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-200 transition duration-300 hover:-translate-y-0.5 hover:border-amber-200/60 hover:text-amber-200 hover:bg-white/10"
                        >
                          <span className="inline-flex items-center justify-center gap-2">
                            <channel.icon className="h-3.5 w-3.5" />
                            {channel.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs uppercase tracking-[0.3em] text-zinc-500 transition hover:text-amber-200"
                  >
                    Edit email
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.aside>
        </main>

        <section className="mt-16 grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-white/5 px-6 py-10 transition duration-500 hover:border-amber-200/40 hover:from-white/15">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-amber-200">Referral system</div>
              <h3 className="mt-3 font-display text-2xl">Every invite moves you up the list.</h3>
              <p className="mt-2 max-w-xl text-sm text-zinc-400">
                Share your link to unlock more raffle entries. The top referrers get concierge onboarding and the
                highest limits at launch.
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm text-zinc-400">
              <div className="flex items-center gap-2">
                <Ticket className="h-4 w-4 text-amber-200" />
                1 entry per referral
              </div>
              <div className="h-1 w-1 rounded-full bg-amber-200/60" />
              <div className="flex items-center gap-2">
                <Gift className="h-4 w-4 text-amber-200" />
                Trip + $2,500 split
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Invite",
                description: "Send your link to friends or coworkers.",
                icon: Mail
              },
              {
                title: "Track",
                description: "Watch your referrals and entries update live.",
                icon: Users
              },
              {
                title: "Win",
                description: "Earn entries and move closer to the Mexico trip.",
                icon: Gift
              }
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-amber-200/50 hover:bg-white/10"
              >
                <item.icon className="h-5 w-5 text-amber-200" />
                <div className="mt-3 text-sm font-semibold text-zinc-100">{item.title}</div>
                <p className="mt-2 text-xs text-zinc-400 transition duration-300 group-hover:text-zinc-200">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mt-10 overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(140deg,rgba(255,255,255,0.08),transparent_45%),radial-gradient(circle_at_top,rgba(215,179,123,0.12),transparent_55%)] px-6 py-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.12),transparent_45%)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />

          <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-amber-200/10 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-amber-200">
                <Trophy className="h-3.5 w-3.5" />
                Leaderboard
              </div>
              <h3 className="mt-4 font-display text-2xl text-zinc-100">Top referrers this week</h3>
              <p className="mt-2 max-w-xl text-sm text-zinc-400">
                Emails are anonymized. Invite more friends to climb the list and earn extra entries.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-zinc-500">
              Weekly reset every Monday
            </div>
          </div>

          <div className="relative mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="grid items-end gap-4 sm:grid-cols-3">
              {[leaderboard[1], leaderboard[0], leaderboard[2]].map((entry, index) => {
                const rank = index === 1 ? 1 : index === 0 ? 2 : 3;
                const accent =
                  rank === 1
                    ? "from-amber-200/25 via-transparent to-transparent"
                    : rank === 2
                    ? "from-zinc-200/15 via-transparent to-transparent"
                    : "from-amber-600/15 via-transparent to-transparent";
                return (
                  <div
                    key={entry.name}
                    className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b ${accent} p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-amber-200/60 ${
                      rank === 1 ? "sm:scale-105" : ""
                    }`}
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber-200/70 to-transparent opacity-70" />
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-amber-200/40 bg-amber-200/10 text-sm font-semibold text-amber-200">
                      #{rank}
                    </div>
                    <div className="mt-3 text-sm font-semibold text-zinc-100">{entry.name}</div>
                    <div className="mt-2 text-3xl font-semibold text-amber-200">{entry.referrals}</div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">Referrals</div>
                  </div>
                );
              })}
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-5">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-zinc-500">
                Rising contenders
                <span className="text-amber-200">Live</span>
              </div>
              <div className="mt-5 space-y-4">
                {leaderboard.slice(3).map((entry, index) => (
                  <div key={entry.name} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    <div className="flex items-center justify-between text-sm text-zinc-200">
                      <span>
                        #{index + 4} {entry.name}
                      </span>
                      <span className="text-amber-200">{entry.referrals}</span>
                    </div>
                    <div className="mt-3 h-1.5 w-full rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-amber-200/90 to-amber-400/60"
                        style={{ width: `${Math.round((entry.referrals / leaderboardMax) * 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function CardVisual() {
  return (
    <motion.div
      initial={{ y: 12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative h-[22rem] w-full"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.03, rotate: -1 }}
        className="group relative h-[18.5rem] w-full"
      >
        <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-gradient-to-br from-amber-200/10 via-transparent to-transparent opacity-0 blur-xl transition duration-300 group-hover:opacity-100" />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            WebkitMaskImage: `url(${cardImage.src})`,
            maskImage: `url(${cardImage.src})`,
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center"
          }}
        >
          <motion.div
            className="absolute -left-1/2 top-0 h-full w-1/2 rotate-6 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-70 mix-blend-screen"
            animate={{ x: ["-20%", "160%"] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.2 }}
          />
        </motion.div>
        <Image
          src={cardImage}
          alt="Bits Edition One credit card"
          fill
          priority
          sizes="(min-width: 1024px) 44vw, 90vw"
          className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
        />
      </motion.div>
    </motion.div>
  );
}
