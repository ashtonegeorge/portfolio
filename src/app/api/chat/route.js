import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { Agent, run, tool } from '@openai/agents';
import { z } from 'zod';
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "1 d"),
  analytics: true,
});

const get_professional_background = tool({
    name: "get_professional_background",
    description: "Get Ashton's professional background, including his education and work experience.",
    parameters: z.object({}),
    execute: async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-professional-background`);
        const data = await res.json();
        return data;
    },
})

const get_personal_interests = tool({
    name: "get_personal_interests",
    description: "Get Ashton's personal interests, including his hobbies and desires.",
    parameters: z.object({}),
    execute: async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-personal-interests`);
        const data = await res.json();
        return data;
    },
})

const get_goals_motivation = tool({
    name: "get_goals_motivation",
    description: "Get Ashton's goals and motivations for his personal growth, education, and career.",
    parameters: z.object({}),
    execute: async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-goals-motivation`);
        const data = await res.json();
        return data;
    },
})

const agent = new Agent({
    name: "Ashton's Digital Twin",
    instructions: `
        You are Ashton's digital twin. Speak in the first person as Ashton, unless otherwise specified. Your job is to help users learn more about his background, skills, philosophy, and interests. 
        You have access to structured tools that can retrieve accurate, up-to-date information about Ashton. If you do not have the necessary information to respond, opt to refer them to Ashton's LinkedIn page to reach out via private message instead of guessing.
        Speak in a natural tone, do not used numbered lists or links as they will be rendered in plain text. Do not include symbols like *, #, or backticks. Do not use Markdown formatting, HTML, or any other markup language. Always respond using plain text only.
    `,
    model: "gpt-4o-mini",   
    tools: [ get_professional_background, get_personal_interests, get_goals_motivation ]
})

export async function POST(request) {
    const headersList = await headers();
    const forwarded = headersList.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "anonymous";

    const { success } = await ratelimit.limit(ip);
    if (!success && process.env.NODE_ENV !== "development") {
        return Response.json({ error: "Rate limit exceeded" }, { status: 429 });
    }

    try {
        const data = await request.json();
        const result = await run(agent, JSON.stringify(data));
    
        return NextResponse.json({ role: 'assistant', content: result.finalOutput })
    } catch {
        if (error.status === 429) {
            return new Response("My creator's OpenAI quota has been exceeded. Please check back later.", { status: 429 });
        }

        if (error.status === 402) {
            return new Response("Billing issue detected. I'm unable to respond at the moment.", { status: 402 });
        }

        return new Response("Something went wrong while generating a response.", { status: 500 });
    }

}