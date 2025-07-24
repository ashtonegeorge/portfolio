import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

export async function GET() {
    const notion = new Client({
        auth: process.env.NOTION_TOKEN,
    });

    const info = await notion.databases.query({ 
        database_id: process.env.NOTION_PAGE_ID,
        filter: { // Filter for work experience and awards with an importants of medium or high
            and: [
                {
                    or: [
                        {
                            property: "Category",
                            select: {
                                equals: "Experience",
                            },
                        },
                        {
                            property: "Category",
                            select: {
                                equals: "Award",
                            }
                        }
                    ]
                },
                {
                    or: [
                        {
                            property: "Importance",
                            select: {
                                equals: "High",
                            },
                        },
                            {
                            property: "Importance",
                            select: {
                                equals: "Medium",
                            },
                        },
                    ],
                },
            ],
        }
    });

    return NextResponse.json({ data: info })
}